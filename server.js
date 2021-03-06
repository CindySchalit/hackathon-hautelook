const express = require('express')
const graphqlHTTP = require('express-graphql')

const schema = require('./schema')
const myRoot = require('./root')

const app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: myRoot,
  graphiql: true,
}))
app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')
