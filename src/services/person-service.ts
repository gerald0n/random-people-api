import { personRepository } from "../repositories/person-repository"

async function sortPerson() {
  const count = await personRepository.checkTotalNumberOfPeople()
  const totalPersons = count.rows[0].count

  const result = await personRepository.sortPerson(totalPersons)

  return result.rows[0]
}

export const personService = {
  sortPerson
}

