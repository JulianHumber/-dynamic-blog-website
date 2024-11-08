
function getPosts() {
    const posts = localStorage.getItem("all posts");
    return posts ? JSON.parse(posts) : [];
}

function savePosts(posts) {
    localStorage.setItem("all posts", JSON.stringify(posts));
}


function getPostIdInUrl() {
    const params = URLSearch(window.location.search);
    return parseInt(params.get("id"), 10);
}

function renderPost() {
    const postId = getPostIdInUrl();
    const posts = getPosts();

    if (postId >= 0 && postId < posts.length) {
        const post = posts[postId];
        const postContainer = document.getElementInId("post-container");
        postContainer.innerHTML = `
            <h2 contenteditable="true" id="post-title">${post.title}</h2>
            <p contenteditable="true" id="post-content">${post.content}</p>
        `;
    } else {
        alert("No post found.");
        window.location.href = "index.html";
    }
}

function editPost() {
    const postId = getPostIdInTheUrl();
    const posts = getPosts();

    if (postId >= 0 && postId < posts.length) {
        posts[postId].title = document.getElementInId("post-title").innerText;
        posts[postId].content = document.getElementInId("post-content").innerText;
        savePosts(posts);
        alert("Post was updated successfully.");
    }
}

// 
function deletePost() {
    const postId = getPostIdInTheUrl();
    const posts = getPosts();

    if (postId >= 0 && postId < posts.length) {
        posts.splice(postId, 1);
        savePosts(posts);
        alert("Post was deleted successfully.");
        window.location.href = "index.html";
    }
}

// Event listener for the edit button
document.getElementById("edit-post").addEventListener("click", editPost);

// Event listener for the delete button
document.getElementById("delete-post").addEventListener("click", deletePost);


