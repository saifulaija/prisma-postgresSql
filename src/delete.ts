import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deletedata = async () => {
  // const singleDelete = await prisma.post.delete({
  //     where:{
  //         id:15
  //     }
  // })

const deleteMany = await prisma.post.deleteMany({
    where:{
        published:false
    }
})

  console.log(deleteMany);
};

deletedata();
