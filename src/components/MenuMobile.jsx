import React, { useState } from "react";

import { makeStyles } from "@mui/styles";
import { Button, Menu, MenuItem, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import data from "../data/data";

import { useTabs } from "../contexts/context";
import { width } from "@mui/material/node_modules/@mui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
  },
}));

export default function MenuMobile() {
  const classes = useStyles();
  const { handleClick } = useTabs();

  const matches400 = useMediaQuery("(max-width:400px)");
  const matches500 = useMediaQuery("(max-width:500px)");
  const matches600 = useMediaQuery("(max-width:600px)");
  const matches700 = useMediaQuery("(max-width:700px)");
  const matches800 = useMediaQuery("(max-width:800px)");
  const matches900 = useMediaQuery("(max-width:900px)");
  const matches1000 = useMediaQuery("(max-width:1060px)");

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItem = (tab) => {
    handleClick(tab);
    setIsOpen(false);
  };

  const positionMenu = () => {
    if (matches400) return 320;
    else if (matches500) return 420;
    else if (matches600) return 520;
    else if (matches700) return 620;
    else if (matches800) return 720;
    else if (matches900) return 820;
    else if (matches1000) return 920;
    else return 220;
  };

  return (
    <>
      <Button
        aria-controls="basic-menu"
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
        className={classes.root}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Menu
        id="basic-menu"
        anchorReference="anchorPosition"
        anchorPosition={{
          left: positionMenu(),
          top: 10,
        }}
        keepMounted
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      >
        {data.map((item) => (
          <MenuItem
            key={item.page_id}
            onClick={() => handleMenuItem(item.path)}
            color="secondary"
          >
            {item.pageName}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
