import { Request, Response } from 'express';
import * as categoryServices from "../services/categoryServices.js"


export async function getAllCategories(req: Request, res: Response) {

  const data = await categoryServices.getAllCategories()

  res.send(data);

};