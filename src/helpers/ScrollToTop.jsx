import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
import { ExpandLess } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  toTop: {
    zIndex: 2,
    // position: "fixed",
    // bottom: 10,
    // right: -8,
    color: theme.palette.error.main,
    //padding: theme.spacing(1),
    padding: 0,
    // /paddingRight: 1,
    //justifySelf: "flex-end",
  },
}));

const ScrollToTop = (showBelow) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  }, []);

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };
  const classes = useStyles();

  return (
    <div>
      {/* {show && ( */}
      <IconButton onClick={handleClick} className={classes.toTop}>
        <ExpandLess />
      </IconButton>
      {/* )} */}
    </div>
  );
};

export default ScrollToTop;
