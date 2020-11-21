import React from "react";

const BlogContext = React.createContext();

const blogPosts = [
    { title: 'Blog Post #1' },
    { title: 'Blog Post #2' }
];

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>;
};

export default BlogContext;
