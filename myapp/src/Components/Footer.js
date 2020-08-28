import React from "react";
import "../Style/Footer.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
const Footer = () => {
  return (
    <div className="Footer">
      <IconButton className="Footer_Replay">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="Footer_Close">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="Footer_Star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="Footer_Fev">
        {" "}
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="Footer_Flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Footer;
