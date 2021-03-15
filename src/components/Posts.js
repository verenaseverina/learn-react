import React from "react";

export const Posts = ({ blogs, onEdit }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div key={blog.date} className="blog-post">
          <div className="title">
            <div>
              <h3>
                {blog.author} - {blog.category}
              </h3>
            </div>
            <div>
              <button onClick={() => onEdit(blog.date)}>Edit</button>
            </div>
          </div>
          <p>
            {blog.description}
            <small> - {blog.date}</small>
          </p>
        </div>
      ))}
    </>
  );
};

export default Posts;
