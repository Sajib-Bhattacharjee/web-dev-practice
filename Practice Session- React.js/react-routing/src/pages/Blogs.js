import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogsData } from "../data";

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <h2>Blogs Page</h2>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article>
              <h3> {title}</h3>
              <p> {truncateString(body, 200)}</p>

              <Link to={title} state={{ id, title, body }}>
                {" "}
                Learn More...{" "}
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
