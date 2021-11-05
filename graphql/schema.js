const typeDefs = `
    type totalPosts {
        name:String!
        age:Int!
    }
    type Query {
        totalPosts: totalPosts!
    }
`;

module.exports = typeDefs;
