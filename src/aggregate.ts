import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregate=async()=>{
//find average age
    // const aggregateageavg = await prisma.user.aggregate({
    //     _avg:{
    //         age:true
    //     }
    // })
//find sum
    // const sumAge = await prisma.user.aggregate({
    //     _sum:{
    //         age:true
    //     }
    // })
    // const countAge = await prisma.user.aggregate({
    //     _count:{
    //         age:true
    //     }
    // })
//another way for count for whole data of record

// const countRow = await prisma.user.count()
//     console.log(countRow)
// }

//hiegt age user

// const maxAge = await prisma.user.aggregate({
//     _max:{
//         age:true
//     }
// })
//min age user

// const minAge = await prisma.user.aggregate({
//     _min:{
//         age:true
//     }
// })

//_count jakono field ar opor aggregate use kora jay

const countUser=await prisma.post.aggregate({
    _count:{
        title:true
    },
    where:{
        published:true
    }
})

console.log(countUser)
}

aggregate()