import { Button } from "@mui/material";
import React from "react";
import images from "../../public/assets/images/index";
import Image from "next/image";

const Bottomcard = () => {
  return (
    <>
      <div className="bottomCard">
        <div className="bottom-child">
          <Image src={images.Roblox} />
        </div>

        <div>
          <div className="border-container">
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

          <div className="bottom-card-content">
            <Button className="btn">Игры</Button>
            <h2>Roblox получила обновление графики</h2>
            <p className="prgaph">
              Разработчики Roblox, одной из самых популярных песочниц в мире,
              выпустили обновление с различными графическими улучшениями. Патч
              подтянул текстуры всех материалов игры: Этим релизом мы улучшили
              визуальное...
            </p>
          </div>

          <div className="border-container-last">
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
    </>
  );
};

export default Bottomcard;
