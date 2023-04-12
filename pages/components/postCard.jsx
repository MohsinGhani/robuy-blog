import { Button, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import productCards from "../shared/json/productCards.json";

const PostCard = () => {
  const router = useRouter();
  return (
    <div className="post-card-container">
      {productCards.products.map((blog) => {
        return (
          <div className="main-post">
            <div className="post-card-img" onClick={() => router.push("/blog")}>
              <img src={blog?.image} alt="" />
              <Button className="post-img-btn">{blog?.btitle}</Button>
            </div>
            <div className="post-card-content-container">
              <div className="arrow-img">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 16V9C1 4.58172 4.58172 1 9 1H16"
                    stroke="#F2F4F5"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>

                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 16V9C16 4.58172 12.4183 1 8 1H1"
                    stroke="#F2F4F5"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="post-card-content">
                <h2 className="post-card-heading">{blog.title}</h2>
                <Typography className="post-card-prg">
                  {blog.decription}
                </Typography>
              </div>
              <div className="arrow-img">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1V8C1 12.4183 4.58172 16 9 16H16"
                    stroke="#F2F4F5"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>

                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 1V8C16 12.4183 12.4183 16 8 16H1"
                    stroke="#F2F4F5"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostCard;
