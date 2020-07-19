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
        url: 'https://ourcodeworld.com',
        description: 'Blog sdkcarlos'
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
            let linkMatch = links.find(function(element){
                
                if(element.id == args.id ){
                    return element
                }
            })

            if(linkMatch){
                link.url = args.url
                link.description = args.description
            }
            else {
                linkMatch.id = ''
                linkMatch.description = ''
                linkMatch.url = ''
            }

            return linkMatch
           
        },
        deleteLink: (parent,args) => {
            let linkMatch = links.filter(function(element){
                
                if(element.id != args.id ){
                    return element
                }
                else {
                    responseLink = {...element}
                }
            })

            links = linkMatch

            return responseLink
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