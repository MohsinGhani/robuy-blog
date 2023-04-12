import React from "react";
import { Button, ButtonGroup, Typography } from "@mui/material";

const Tags = () => {
  return (
    <div className="tags-container">
      <div className="tags-icon">
        <Typography>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 1C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H10H12H13C14.6569 15 16 13.6569 16 12V4C16 3.44772 15.5523 3 15 3H14V12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12V3C12 1.89543 11.1046 1 10 1H3ZM4 3C3.44772 3 3 3.44772 3 4V6C3 6.55228 3.44772 7 4 7H6C6.55228 7 7 6.55228 7 6V4C7 3.44772 6.55228 3 6 3H4ZM3 10C3 10.5523 3.44772 11 4 11H9C9.55229 11 10 10.5523 10 10C10 9.44771 9.55228 9 9 9H4C3.44772 9 3 9.44771 3 10Z"
              fill="#1D2123"
            />
          </svg>
        </Typography>
        <Typography className="icon-prg"> Посты блога</Typography>
      </div>

      <div className="tags-btn">
        <ButtonGroup className="btn-continer">
          <Button className="tags-btn1"> Bce </Button>
          <Button className="tags-btn1"> Новости </Button>
          <Button className="tags-btn1"> Игры </Button>
          <Button className="tags-btn1"> Обновления </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Tags;
