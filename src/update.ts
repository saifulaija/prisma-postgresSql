import { PrismaClient } from "@prisma/client";


const prisma=new PrismaClient();

const update=async()=>{

    //single update
//    const singleUpdate = await prisma.post.update({
//     where:{
//         id:15
//     },
//     data:{
//         title:"title update 4",
//         // content:"content update 4",
//         // authorName:"author update 4",
//     }
//    })


//updateMany----

// const updateMany= await prisma.post.updateMany({
//     where:{
//         title:"title 3"
//     },
//     data:{
//         published:true
//     }
// })

const upsertData=await prisma.post.upsert({
    where:{
        id:39
    },
    update:{
        title:"updated title fahim r"
    },
    create:{
        title:"upsert title",
        content:"upsert content"
    }
})

   console.log(upsertData)
}

update();