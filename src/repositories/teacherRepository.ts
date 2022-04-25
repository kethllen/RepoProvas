import { prisma } from "../database.js";

export async function findAllTeachers() {

  const data = await prisma.teacher.findMany(
    {
      select: {
        id: true,
        name: true,
        teacherDisciplines: true
      }
    }
  )

  return data
}
