import { prisma } from "../database.js";


export async function findAllTests() {

  const data = await prisma.test.findMany()

  return data
}
