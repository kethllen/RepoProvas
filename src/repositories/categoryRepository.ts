import { prisma } from "../database.js";

export async function findAllCategories() {

  const data = await prisma.category.findMany(
    {
      select: {
        id: true,
        name: true,
        tests: {
          include: {
            teacherDiscipline:{
              include:{
                teacher:true
              }
            },
          }
        }

      },

    }
  )

  return data
}
