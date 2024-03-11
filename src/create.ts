import { PrismaClient, userRole } from "@prisma/client";
import { createUnzip } from "zlib";

const prisma = new PrismaClient();

const main=async()=>{

  // const createuser= await prisma.user.create({
  //   data:{
  //     username:"user5",
  //     email:"user5@user5.com",
  //     age: 26,
  //     role: userRole.user
  //   }
  // })


  // const createProfile=await prisma.profile.create({
  //   data:{
  //     bio:"this is bio.....",
  //     userId:4
  //   }
  // })

  // const createCategory=await prisma.category.create({
  //   data:{
  //     name:"programming dev"
  //   }
  // })


const createPost=await prisma.post.create({
  data:{
    title:"this is title 11",
    content:"this is content of the post. 11",
    authorId:3,
    postCategory:{
     create:[
      {
        categoryId:1

      },
      {
        categoryId:3

      },
      {
        categoryId:4

      },
      
     ]
    }
  },
  include:{
    postCategory:true
  }
})

  console.log(createPost)
}


main();