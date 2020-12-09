import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  toTop: {
    zIndex: 2,
    position: "fixed",
    bottom: 10,
    right: -8,
    color: theme.palette.primary.main,
    padding: theme.spacing(1),
  },
}));

const Scroll = (showBelow) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    console.log("window.pageYOffset", window.pageYOffset);
    console.log("showBelow", showBelow);
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      console.log("useffect", showBelow);
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
        <ExpandLessIcon />
      </IconButton>
      {/* )} */}
    </div>
  );
};

export default Scroll;
