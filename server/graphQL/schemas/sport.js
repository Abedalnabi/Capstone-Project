exports.Sport = `
type Sport {
    sport_id:Int,
    type:String,
    description : String,
}
`;

exports.SportQueries = `
    getAllSports:[Sport!]!
    getUserBySportID(sportID:Int!):[User]

`;
exports.SportInput = `
input SportInput {
    sport_id:Int,
    type:String,
    description : String,
}
`;
