const { products } = require("./db/db.json");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} = require("graphql");
const { ProductSchema } = require("./gpql_schema");

let Queries = new GraphQLObjectType({
  name: "Queries",
  fields: {
    getProducts: {
      type: new GraphQLList(ProductSchema),
      args: { count: { type: GraphQLInt } },
      resolve: (parent, args) => {
        console.log(args);
        let list = products.slice(0, args.count);
        // SELECT * FROM products --> SQL
        // products.find({}) --> MongoDB
        return list;
      },
    },
  },
});
const schema = new GraphQLSchema({
  query: Queries,
});

module.exports = schema;
