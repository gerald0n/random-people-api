import { Request, Response } from "express"
import { personService } from "../services/person-service"

export async function sortPerson(req: Request, res: Response) {

  const people = await personService.sortPerson()

  res.status(200).send(people)
}

export const personController = {
  sortPerson
}