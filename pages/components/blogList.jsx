import React from "react";
import PostCard from "./postCard";
import Bottomcard from "./bottomcard";

const BlogList = () => {
  return (
    <>
      <div className="cardParent">
        <div className="blogList_container">
          <PostCard />
          <Bottomcard />
        </div>
      </div>
    </>
  );
};

export default BlogList;
