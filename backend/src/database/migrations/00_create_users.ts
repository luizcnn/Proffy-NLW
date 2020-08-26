import Knex from 'knex';

export async function up(knex: Knex){
    // alterações no banco de dados
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

export async function down(knex: Knex){
    // retorna as alterações para o estado anterior (caso de erro)
    return knex.schema.dropTable('users')
}