const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');
const data = require('./db.js');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Customer {
    id: ID!
    name: String!
    email: String!
  }

  type Account {
    id: ID!
    customerId: ID!
    accountNumber: String!
    balance: Float!
    currency: String!
  }

  type Transaction {
    id: ID!
    accountId: ID!
    type: String!
    amount: Float!
    description: String!
    date: String!
  }

  type Query {
    customers: [Customer]
    accounts: [Account]
    transactions: [Transaction]
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  customers: () => data.customers,
  accounts: () => data.accounts,
  transactions: () => data.transactions,
};

const app = express();
const PORT = 4000;

app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable GraphiQL interface
}));

app.listen(PORT, () => {
  console.log(`GraphQL Server running at http://localhost:${PORT}/graphql`);
});
