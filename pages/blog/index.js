import React from "react";
import Blog from "../components/blog";
import BlogList from "../components/blogList";
import Header from "../components/header";
import BlogDetails from "../components/blogDetails";
import PostCard from "../components/postCard";
import Bottomcard from "../components/bottomcard";
import Tags from "../components/tags";

const Index = () => {
  return (
    <>
      <Header />
      <div className="top-card-Container">
        <div className="top-card-child">
          <BlogDetails />
          <Tags />
          <div className="post-card">
            <PostCard />
            <Bottomcard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
