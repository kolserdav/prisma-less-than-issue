 // @ts-check
 const { PrismaClient } = require('@prisma/client');
 
 const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });

 (async () => {
    const maxId = parseInt(process.argv[2], 10);
    console.log('maxId', maxId)
    let result =  await prisma.test.findFirst({
      where: {
        id: {
          lt: maxId
        }
      }
    });
  console.log(result)
 })()

 
 