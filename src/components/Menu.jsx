import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "../helpers/Link";
import MenuIcon from "@material-ui/icons/Menu";

import data from "../data/data";
import { Box } from "@material-ui/core";

export default function SimpleMenu() {
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
        color="secondary"
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
