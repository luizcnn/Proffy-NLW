import { Request, Response } from 'express'
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string,
}

export default class ClassesController {
    async index(request: Request, response: Response) {
        const filters = request.query;
        
        if(!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                error: "Missing filters to search classes"
            })
        }

        const subject = filters.subject as string
        const week_day = filters.week_day as string
        const time = filters.time as string

        const timeInMinutes = convertHourToMinutes(time)
        
        const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]);
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

        return response.json(classes);
    }

    async create (request: Request, response: Response) {    
        const {
            name,
            avatar, 
            whatsapp, 
            bio, 
            subject, 
            cost,
            schedule
        } = request.body;
    
        // Fazemos um transaction, para que todos os inserts ocorram ao mesmo tempo!
        // Isso permite que, se por ventura um cadastro posterior contiver um erro, o anterior não será realizado
        // Exemplo, cadastramos o usuário ok, suas classes ok, e erramos o schedule
        // Neste caso, todos os passsos devems ser cancelados para nao acumularmos lixo no db 
        const trx = await db.transaction();
    
        try {
            const UsersId = await trx('users').insert({
              name,
              avatar,
              whatsapp,
              bio,
            });
      
            const user_id = UsersId[0];
      
            const classesId = await trx('classes').insert({
              subject,
              cost,
              user_id,
            });
      
            const class_id = classesId[0];
      
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
              const from = convertHourToMinutes(scheduleItem.from);
      
              const to = convertHourToMinutes(scheduleItem.to);
      
              return { class_id, week_day: scheduleItem.week_day, from, to };
            });
      
            await trx('class_schedule').insert(classSchedule);
      
            await trx.commit();
      
            return response.status(201).send();
          } catch (error) {
            // desfazer transações feitas antes do erro.
            await trx.rollback();
            return response
              .status(400)
              .json({ error: 'Erro inesperado ao criar uma nova classe.' });
          }
        }
      }