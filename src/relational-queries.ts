import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries=async()=>{

    //ataka bola hoy fluent api user dia find kora tar post dakha jaba
// const result = await prisma.user.findUnique({
//     where:{
//         id:1
//     }
// }).post()

//ata ka bola hoy include query ar madhoma data gulo ka bar kora
// const result = await prisma.user.findUnique({
//     where:{
//         id:1
//     },
//     include:{
//         post:true
//     }
// })

//akta table ar opor depend kora onno table ar data retrieve kora ka bola hoy fluent api
const result = await prisma.user.findUnique({
    where:{
        id:1
    },
   
}).profile()

//relational filter 

const publishedPostUser=await prisma.user.findMany({
    include:{
        post:{
            where:{
                published:true
            }
        }
    }
})

console.dir(publishedPostUser,{depth:Infinity})
}

relationalQueries()