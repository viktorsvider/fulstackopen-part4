const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (likes, blog) => {
        return blog.likes + likes
    }
    const likes = blogs.reduce(reducer, 0)
    return likes
}

const favouriteBlog = (blogs) => {
    let favourite = { likes: 0 }
    blogs.forEach(blog => {
        if (blog.likes > favourite.likes) {
            favourite = blog;
        }
    });

    return {
        title: favourite.title,
        author: favourite.author,
        likes: favourite.likes
    }
}

module.exports = {
    dummy,
    totalLikes,
    favouriteBlog
}