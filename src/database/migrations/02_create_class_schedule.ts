import Knex from 'knex';

export async function up(knex: Knex){
    // alterações no banco de dados
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable()

        // Criando relacionamentos entre databases usando o knex:
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE') // Esta opção atualiza em cascata as alterações que por ventura surjam no usuário
            .onDelete('CASCADE'); // Esta opção deleta todas as aulas de um professor deletado da plataforma automaticamnete
    });
}

export async function down(knex: Knex){
    // retorna as alterações para o estado anterior (caso de erro)
    return knex.schema.dropTable('class_schedule')
}