const { gql, ApolloServer } = require("apollo-server");
/**
 * scalar types
 * - int
 * - float
 * - string
 * - boolean
 * - id
 */

// aqui é disponibilizado contexto para pessoas de fora
// fazer consultas 
const typeDefs = gql` 
    type Query{
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
    }
`;

const resolvers = {};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(); // inicia o server por default na porta 4000