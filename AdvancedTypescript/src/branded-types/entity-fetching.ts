//import.meta.vitest;
import { it } from "vitest";
/*
declare const brand: unique symbol;
export type Brand<T, TBrand> = T & { [brand]: TBrand };
*/
import { Brand } from "../helpers/Brand";

type UserId = Brand<string, "UserId">;
type PostId = Brand<string, "PostId">;

interface User 
{
    id: UserId;
    name: string;
}

interface Post
{
    id: PostId;
    title: string;
    content: string;
}

const db: { users: User[]; posts: Post[] } =
{
    users: [
      {
        id: "1" as UserId,
        name: "Miles",
      },
    ],
    posts: [
      {
        id: "1" as PostId,
        title: "Hello world",
        content: "This is my first post",
      },
    ],
};

const getUserById = (id: UserId) => {
    return db.users.find((user) => user.id === id);
};

const getPostById = (id: PostId) => {
    return db.posts.find((post) => post.id === id);
};


it("Should only let you get a user by id with a user id", () => {
    const postId = "1" as PostId;
  
    // should have eror here @ts-expect-error
    getUserById(postId);
});
  
it("Should only let you get a post by id with a PostId", () => {
    const userId = "2" as UserId;
  
    //should have error here  @ts-expect-error
    getPostById(userId);
});

const userid1 = "3" as UserId;
const postid2 = "4" as PostId;
const userid2 = "1" as UserId;
console.log("getUserById:3", getUserById(userid1));
console.log("getPostId:4", getPostById(postid2));
console.log("getUserById:1", getUserById(userid2));//{ id: '1', name: 'Miles' }
// below code: Type '"PostId"' is not assignable to type '"UserId"'.
//getUserById(postid2);
