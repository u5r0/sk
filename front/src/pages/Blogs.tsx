import { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    (async () => {
      const response = await fetch("https://dummyjson.com/posts?limit=10", {
        headers: { "Content-Type": "application/json" },
      });

      const posts = await response.json();
      return posts
    })();
  });
  
  return (
    <div>
      {/* {posts} */}
    </div>
  );
};

export default Blogs;
