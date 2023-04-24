import.meta.vitest;
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
if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest;
    it("Should only let you get a user by id with a user id", () => {
        const postId = "1";
        // @ts-expect-error
        getUserById(postId);
    });
    it("Should only let you get a post by id with a PostId", () => {
        const userId = "1";
        // @ts-expect-error
        getPostById(userId);
    });
}
export {};
