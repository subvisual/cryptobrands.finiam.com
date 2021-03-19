const { PrismaClient } = require("@prisma/client");

function importAll(r) {
  return r.keys().map(r);
}

const projects = importAll(require.context("./projects", true, /\.json$/));

module.exports = async () => {
  const prisma = new PrismaClient();
  const projectsWithVotes = await Promise.all(
    projects.map(async (project) => ({
      ...project,

      votes:
        (
          await prisma.project.findUnique({
            where: { name: project.name },
          })
        )?.votes || 0,
    })),
  );
  await prisma.$disconnect();

  return projectsWithVotes.sort((a, b) => b.votes - a.votes);
};
