import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TopCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 658 }} className="top-card-container2">
      <div className="border-arrow">
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
      <Card className="cardChild">
        <div className="header">
          <div className="headerChild">
            <Typography variant="h6" className="first-heading">
              Блог Robuy
            </Typography>
            <Typography variant="h6" className="sec-heading">
              Новости и обновления
            </Typography>
          </div>
          <Button className="card-btn">Купить робуксы</Button>
        </div>
        <img className="image-post" src={"/assets/images/image.svg"} alt="#" />
        <CardContent className="blog-card">
          <div className="buttonParent">
            <Button className="btn-contained2">Последняя новость</Button>
            <Button className="btn-contained1">Обновления</Button>
          </div>
          <div className="text">
            <Typography className="card-prg1">
              В 2022 году в Roblox ежедневно заходили 56 миллионов игроков
            </Typography>
            <Typography className="card-prg2">
              Roblox опубликовала свои финансовые результаты за четвертый
              квартал 2022. У компании скачок выручки и заказов, но убытки
              значительно увеличились.
            </Typography>
          </div>
        </CardContent>
      </Card>
      <div className="border-arrow2">
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
    </Card>
  );
};

export default TopCard;
