//import.meta.vitest;
import { it } from "vitest";
const db = {
    users: [
        {
            id: "1",
            name: "Miles",
        },
    ],
    posts: [
        {
            id: "1",
            title: "Hello world",
            content: "This is my first post",
        },
    ],
};
const getUserById = (id) => {
    return db.users.find((user) => user.id === id);
};
const getPostById = (id) => {
    return db.posts.find((post) => post.id === id);
};
it("Should only let you get a user by id with a user id", () => {
    const postId = "1";
    // should have eror here @ts-expect-error
    getUserById(postId);
});
it("Should only let you get a post by id with a PostId", () => {
    const userId = "2";
    //should have error here  @ts-expect-error
    getPostById(userId);
});
const userid1 = "3";
const postid2 = "4";
const userid2 = "1";
console.log("getUserById:3", getUserById(userid1));
console.log("getPostId:4", getPostById(postid2));
console.log("getUserById:1", getUserById(userid2)); //{ id: '1', name: 'Miles' }
// below code: Type '"PostId"' is not assignable to type '"UserId"'.
//getUserById(postid2);
