import { Request, Response } from 'express';
import * as disciplineServices from "../services/disciplineServices.js"


export async function getAllDisciplines(req: Request, res: Response) {

  const data = await disciplineServices.getAllDisciplines()

  res.send(data);

};