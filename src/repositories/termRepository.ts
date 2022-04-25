import { prisma } from "../database.js";


export async function findAllTerms() {

  const data = await prisma.term.findMany(
    {
      select: {
        id: true,
        number: true,
        disciplines: {
          select: {
            id: true,
            name: true,
            teacherDisciplines:true
          }
        }
      },

    }
  )

  return data
}

