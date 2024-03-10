const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
} = require("graphql");

module.exports.ProductSchema = new GraphQLObjectType({
  name: "ProductSchema",
  fields: function () {
    return {
      id: { type: GraphQLInt },
      title: { type: GraphQLString },
      price: { type: GraphQLFloat },
      description: { type: GraphQLString },
      category: { type: GraphQLString },
      image: { type: GraphQLString },
    };
  },
});
