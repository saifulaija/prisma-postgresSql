import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const paginationSorting=async()=>{

    //offset pagination--

    const offsetPagination= await prisma.post.findMany({
        skip:4,
        take:3
    })
    // console.log('pagination', offsetPagination)
    const cursorPagination= await prisma.post.findMany({
        skip:4,
        take:3,
        cursor:{
            id:44
        }
    })
    // console.log('pagination cursor', cursorPagination)

    const sorteddata=await prisma.post.findMany({
        orderBy:{
            id:"desc"
        },
        skip:2,
        take:2,
        where:{
            published:true
        }
    })

    console.log({sorteddata})
}

paginationSorting();