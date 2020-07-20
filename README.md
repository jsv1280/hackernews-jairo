# GraphQL Hackernews

GraphQL API able to perfoms querys and mutations to posts a specific links

## :hammer: Installation
1. Clone Project `git clone git@github.com:jsv1280/hackernews-jairo.git`
2. Install dependencies in the root project `npm install`
3. In your terminal _(root project)_ execute `npm run start`
4. For development enviroment execute `npm run dev`

## :wrench: Tools

* GraphQL(graphl-yoga)
* Node
* Prisma
* SQLite
* Nodemon _(Development)_
 
## :file_folder: Database ##
- The structure of the model,DBMS(SQLite) and prisma client its include in `prisma/schema.prisma`
- Make first migration(create database and name migration) with `npx prisma migrate save --experimental`
- Run migration(create link table) with `npx prisma migrate up --experimental`
- Create your prisma client model with `npx prisma generate`

## :black_nib: Author
-  [Jairo Salazar][github_url] Backend Developer (Platzi Master Student)

## :telescope: References
- [How to GraphQL][graphl_url]
- [Prisma Documentation][prisma_url]

[graphl_url]:https://www.howtographql.com/
[github_url]: https://github.com/jsv1280
[prisma_url]: https://www.prisma.io/docs/