import { Count, Person } from 'protocols/persons-protocol'
import db from '../database/connection-database'

async function sortPerson(totalPersons: number) {
   const people = await db.query<Person>(
      `SELECT * FROM people WHERE id = (SELECT floor(random() * $1) + 1)`,
      [totalPersons]
   )

   return people
}

async function checkTotalNumberOfPeople() {
   const result = await db.query<Count>(`SELECT COUNT(*) FROM people`)

   return result
}

export const personRepository = {
   checkTotalNumberOfPeople,
   sortPerson
}
