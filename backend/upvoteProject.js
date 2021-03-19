const { PrismaClient } = require("@prisma/client");

module.exports = async (projectName) => {
  const prisma = new PrismaClient();

  await prisma.$executeRaw(
    `update "Project" set votes = votes + 1 where name = $1;`,
    projectName,
  );

  await prisma.$disconnect();
};
