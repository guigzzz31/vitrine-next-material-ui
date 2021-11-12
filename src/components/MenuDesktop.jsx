import React from "react";

import { makeStyles } from "@mui/styles";
import { Button, Menu, MenuItem, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Link from "../helpers/Link";
import data from "../data/data";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   color: theme.palette.secondary.main,
  // },
  button: {
    color: theme.palette.secondary.main,
    fontSize: 20,
  },
  buttonSelected: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
}));

export default function MenuDesktop() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log("handleClick", event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log("state", anchorEl);

  return (
    <Box>
      {data.map((item) => {
        console.log("item", item.pageName);
        return (
          <Button
            key={item.page_id}
            component={Link}
            onClick={handleClose}
            href={item.path}
            className={classes.button}
          >
            {item.pageName}
          </Button>
        );
      })}
    </Box>
  );
}
