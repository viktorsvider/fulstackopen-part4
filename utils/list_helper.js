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

module.exports = {
    dummy,
    totalLikes
}