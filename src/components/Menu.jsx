import React from "react";

import { makeStyles } from "@mui/styles";
import { Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Link from "../helpers/Link";
import data from "../data/data";


const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
  },
}));

export default function SimpleMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.root}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {data.map((item) => (
          <MenuItem
            key={item.page_id}
            component={Link}
            onClick={handleClose}
            href={item.path}
            color="secondary"
            naked
          >
            {item.pageName}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
