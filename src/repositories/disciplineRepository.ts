import { prisma } from "../database.js";

export async function findAllDisciplines() {

  const data = await prisma.discipline.findMany(
    {
      include: {
        teacherDisciplines : true
      }

    }

  )

  return data
}
