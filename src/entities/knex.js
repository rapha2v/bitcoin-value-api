import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE
  },
  pool: { min: 0, max: 7 },
  useNullAsDefault: true
})

console.log("Testando conexão com o banco de dados Postgres.")
db.raw("SELECT 1").then(() => {
  console.log("Banco conectado com sucesso.")
}).catch((e) => {
  console.log(e)
  throw new Error("Erro ao se conectar com o banco de dados.")
})

export default db;
