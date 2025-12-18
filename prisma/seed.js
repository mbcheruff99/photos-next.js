const { PrismaClient } = require ('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const count = await prisma.photo.count();

  if (count === 0) {
    await prisma.photo.createMany({
      data: [
        {name: 'Mountain Lake', url: 'https://picsum.photos/seed/mountain/400/300', width: 400, height: 300},
        { name: 'City Skyline', url: 'https://picsum.photos/seed/city/400/300', width: 400, height: 300 },
      ],
    });
    console.log('Sample Photos Created!!');
  } else {
    console.log('Photos already exist, skippinf seed');
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect();
  });