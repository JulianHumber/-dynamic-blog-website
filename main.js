function getPosts() {
    const posts = localStorage.getItem(" all the posts");
    return posts ? JSON.parse(posts) : [];
}
function addPosts() {
    const postList = document.getElementId("post-list");
    const posts = getPosts();
    if (posts.length === 0) {
        postList.innerHTML = "<p>Nothing here yet. Create a brand new post!</p>";
    } else {
        posts.forEach((post, index) => {
            const postItem = document.createElement("div");
            postItem.className = "post-item";
            postItem.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content.slice(0, 100)}...</p>
                `;
            postList.appendChild(postItem);
        });
    }
}

