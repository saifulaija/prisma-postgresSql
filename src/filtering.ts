import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering=async()=>{
const andFiltering=await prisma.post.findMany({
    where:{
        AND:[
            {
                title: {
                    contains:"title"
                },
               
            },
            {
                published:true
            }
        ]
    }
})
const orFiltering=await prisma.post.findMany({
    where:{
        OR:[
            {
                title: {
                    contains:"title"
                },
               
            },
            {
                published:true
            }
        ]
    }
})

const notFiltering = await prisma.post.findMany({
    where:{
        NOT:[
            {
                title:{
                    contains:"this"
                }
            }
        ]
    }
})

const startWith = await prisma.user.findMany({
    where:{
        email:{
            startsWith:'user1'
        }
    }
})
const endtWith = await prisma.user.findMany({
    where:{
        email:{
            endsWith:'com'
        }
    }
})
const equals = await prisma.user.findMany({
    where:{
        username:{
            equals:'user1'
        }
    }
})

const usernameArray= ['user1','user2','user3']
const userNameByArray=await prisma.user.findMany({
    where:{
        username:{
            in:usernameArray
        }
    }
})

const inDepthData=await prisma.user.findUnique({
    where:{
        id:1
    },
    include:{
        post:{
            include:{
                postCategory:{
                    include:{
                        category:true
                    }
                }
            }
        }
    }
})

console.dir(inDepthData, {depth:Infinity})
}

filtering();

