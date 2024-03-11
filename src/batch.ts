import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchtransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "sobuj2",
      email: "sobuj@gmail.com",
    },
  });

 

  const updateUser =  prisma.user.update({
    where: {
      id: 8,
    },
    data: {
      age: 50,
    },
  });

  const [userData, updateData]= await prisma.$transaction([
    createUser,
    updateUser
  ])

  console.log(userData,updateData)
 
};

batchtransaction();
