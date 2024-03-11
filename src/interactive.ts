import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

const interactiveTransaction=async()=>{
const result = await prisma.$transaction(async(tx)=>{

    //query --01
    const getAllPost = await tx.post.findMany({
        where:{
            published:true
        }
    });

    //query--02

    const countUser = await tx.user.count();
    //query--03

    const updateUser = await tx.user.update({
        where:{
            id:3
        },
        data:{
            username:'aija & falak'
        }
    })

    return{
       getAllPost,
       countUser,
       updateUser 
    }
});

console.log(result)
}

interactiveTransaction()