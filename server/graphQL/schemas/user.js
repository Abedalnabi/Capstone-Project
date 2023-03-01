exports.User = `
type User {
    user_id:Int,
    fullName:String,
    image:String,
    email:String,
    birthDate:String,
    password:String,
    sport:Sport,
    role_id:Int,
    is_active:Boolean,
}
`;

exports.UserInput = `
input UserInput {
    user_id:Int,
    fullName:String,
    image:String,
    email:String,
    birthDate:String,
    password:String,
    sport_id:Int,
    role_id:Int,
}
`;

exports.UserQueries = `
    getUserByID(userID:Int!):User!
    loginUser(email:String!,password:String!):String
`;

exports.UserMutation = `
    addUser(userInput:UserInput):User
    updateUser(userInput:UserInput):User
    deleteUser(userID:ID!):String
    updateUserStatus(userID:ID! , is_active:Int):User
`;
