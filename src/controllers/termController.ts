import { Request, Response } from 'express';
import * as termServices from "../services/termServices.js"


export async function getAllTerms(req: Request, res: Response) {

  const data = await termServices.getAllTerms()

  res.send(data);

};