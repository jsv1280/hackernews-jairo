const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const Query = require('./resolvers/query')
const Mutation = require('./resolvers/mutation')
const User = require('./resolvers/user')
const Link = require('./resolvers/link')

// Schema Implementation

const resolvers = {
    Query,
    Mutation,
    User,
    Link
}

// Instantiate Server
const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers,
    context: request => {
      return {
        ...request,
        prisma
      }
    }
})

server.start(()=> console.log('Server http://localhost:4000'))