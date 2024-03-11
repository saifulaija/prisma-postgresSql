
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main=async()=>{

    // insert data
// const result = await prisma.post.create({
//     data:{
//         title:"this is title 2",
//         content:"this is content---2",
//         authorName:"Md.Saiful Islam Sobuj"
//     }
// })

// console.log(result)

//get all 

const getAllFromDB= await prisma.post.findMany();
console.log(getAllFromDB)
}



main()
