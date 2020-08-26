import Knex from 'knex';

export async function up(knex: Knex){
    // alterações no banco de dados
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        // Criando relacionamentos entre databases usando o knex:
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE') // Esta opção atualiza em cascata as alterações que por ventura surjam no usuário
            .onDelete('CASCADE'); // Esta opção deleta todas as aulas de um professor deletado da plataforma automaticamnete
    });
}

export async function down(knex: Knex){
    // retorna as alterações para o estado anterior (caso de erro)
    return knex.schema.dropTable('classes')
}