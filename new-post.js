function getPosts() {
    const posts = localStorage.getItem("all posts");
    return posts ? JSON.parse(posts) : [];
}
 
function savePosts(posts) {
    localStorage.setItem("posts", JSON.stringify(posts));
}

document.getElementId("new-post-form").addListener("submit", (event) => {
    const title = document.getElementId(" Post title").value;
    const content = document.getElementById("content").value;

    if (title && content) {
        const posts = getPosts();

    window.location.href = "index.html";
    } else {
        alert("Please provide both the title and content.");
    }
});