import React, { useState } from "react";

import { makeStyles } from "@mui/styles";
import { Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Link from "../helpers/Link";
import data from "../data/data";

import { useTabs } from "../contexts/context";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
  },
}));

export default function MenuMobile() {
  const classes = useStyles();

  const { currentTab, handleClick } = useTabs();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItem = (tab) => {
    handleClick(tab);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
        className={classes.root}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Menu
        id="simple-menu"
        //anchorEl={currentTab}
        keepMounted
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {data.map((item) => (
          <MenuItem
            key={item.page_id}
            onClick={() => handleMenuItem(item.path)}
            color="secondary"
            //naked
          >
            {item.pageName}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
