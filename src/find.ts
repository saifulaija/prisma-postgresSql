import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  //find all

  const getAllFromDB = await prisma.post.findMany({
    select:{
      title:true,
      authorName:true
    }
  });

  //find first or findFirstThrow Error
  const findFirst= await prisma.post.findFirstOrThrow({
    where:{
        published:false
    }
  });

//find unique and findUniqueOrThrow

  const findUnique = await prisma.post.findUniqueOrThrow({
    where:{
    id:40
    },
    select:{
      title:true,
      content:true,
      authorName:true
    }
  })




  console.log({getAllFromDB});
};

main();
