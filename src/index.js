const { GraphQLServer } = require('graphql-yoga')

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
        feed: () => links
    },
    Mutation: {
        post: (parent,args) => {
            const link = {
                id: 'link' + contador++,
                description: args.description,
                url: args.url
            }

            links.push(link)

            return link
        },
        updateLink: (parent,args) => {

            let linkMatch = {}
            linkMatch.id = ''
            linkMatch.description = ''
            linkMatch.url = ''

            linkMatch = links.find(function(element){
                
                if(element.id == args.id ){
                    return element
                }
            })

            if(linkMatch){
                linkMatch.url = (args.url) ? args.url : linkMatch.url
                linkMatch.description = (args.description) ? args.description : linkMatch.description
            }
    
            return linkMatch
           
        },
        deleteLink: (parent,args) => {
            let indexMatch = links.findIndex( element => element.id == args.id)

            let deletedElement = {...links[indexMatch]}

            links.splice(indexMatch,1)

            return deletedElement
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
    resolvers
})

server.start(()=> console.log('Server http://localhost:4000'))