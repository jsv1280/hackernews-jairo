const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Mock data
let links = [
    {
        id: 'link-1',
        url: 'https://ourcodeworld.com',
        description: 'Blog sdkcarlos'
    },
    {
        id: 'link-2',
        url: 'https://theunemployedprogrammer.com',
        description: 'Blog jsv1280'
    }
]


// Schema Implementation
let contador = links.length
const resolvers = {
    Query: {
        info: () => 'Hackernews Jairo',
        feed: async (parent, args, context) => {
                return context.prisma.link.findMany()
        },
    },
    Mutation: {
        post: (parent,args,context,info) => {
            const newLink = context.prisma.link.create({
                data: {
                  url: args.url,
                  description: args.description,
                },
            })

            return newLink
        },
        updateLink: async (parent,args,context,info) => {

            const linkUpdated = await context.prisma.link.update({
                where: { id: parseInt(args.id) },
                data: { url: args.url, description: args.description },
            })

            return linkUpdated
           
        },
        deleteLink: async (parent,args,context,info) => {

            const deleteLink = await context.prisma.link.delete({
                where: { id: parseInt(args.id) },
            })

            return deleteLink
        }
        
    },
    // Link: {
    //     id: (parent) => parent.id,
    //     description : (parent) => parent.description,
    //     url: (parent) => parent.url
    // }
}



// Instantiate Server
const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers,
    context: {
      prisma,
    }
})

server.start(()=> console.log('Server http://localhost:4000'))