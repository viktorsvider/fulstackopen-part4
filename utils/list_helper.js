const _ = require('lodash')

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

const mostBlogs = (blogs) => {
    const mostCommonAuthor = _.maxBy(blogs, (blog) => _.filter(blogs, { author: blog.author }).length)
    const numOccurrences = _.filter(blogs, { author: mostCommonAuthor.author }).length;

    return {
        author: mostCommonAuthor.author,
        blogs: numOccurrences
    }
}

const mostLikes = (blogs) => {
    const groupedAuthors = _.groupBy(blogs, 'author');
    const authorsWithTotalLikes = _.map(groupedAuthors, (authorBlogs, author) => ({
        author,
        likes: _.sumBy(authorBlogs, 'likes'),
    }));

    const mostLikedAuthor = _.maxBy(authorsWithTotalLikes, 'likes');

    return { author: mostLikedAuthor.author, likes: mostLikedAuthor.likes };
}

module.exports = {
    dummy,
    totalLikes,
    favouriteBlog,
    mostBlogs,
    mostLikes
}