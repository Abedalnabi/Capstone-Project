exports.Comment = `
type Comment {
    comment_id:Int,
    comment:String,
    commenter:User
}
`;

exports.CommentInput = `
input CommentInput {
    comment:String,
    post_id:Int,
    commenter_id:Int!
}
`;

exports.CommentQueries = `
    getAllCommentsByUserId(userID:ID!):[Comment!]!
`;

exports.CommentMutation = `
    addNewCommentToPost(commentInput:CommentInput):Comment
    updateComment(commentID:ID!,comment:String):String!
    deleteComment(commentID:ID!):String!
`;
