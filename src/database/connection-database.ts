import pg from 'pg'

const { Pool } = pg
const configDB: {
   connectionString: string
} = {
   connectionString: 'postgres://postgres:1921@localhost:5432/postgres'
}

const db = new Pool(configDB)
export default db
