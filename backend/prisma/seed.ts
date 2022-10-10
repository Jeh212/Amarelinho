import { PrismaClient } from "@prisma/client";
import { jobs } from "./jobs";

const prismaClient = new PrismaClient();

async function main() {
  for (let job of jobs) {
    await prismaClient.vacancy.create({
      data: job,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prismaClient.$disconnect();
  });
