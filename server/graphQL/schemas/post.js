exports.Post = `
type Post {
    post_id:Int,
    post:String,
    poster:User,
    comments:[Comment]
}
`;

exports.PostInput = `
input PostInput {
    post:String,
    poster_id:Int
}
`;

exports.PostQueries = `
    getAllPostsByUserId(userID:Int!):[Post]!
`;

exports.PostMutation = `
    addNewPost(postInput:PostInput):Post
    updatePost(postID:ID!,postInput:PostInput):Post!
    deletePost(postID:ID!):String
    addLikeToPost(likeOrDislike:Int):Int!
`;
