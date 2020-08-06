// Este arquivo é para configurarmos a conexão com o banco de dados.

import knex from 'knex';
import path from 'path'

// migrations - controla a versão do banco de dados (um git para o banco de dados)

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
})

export default db;