import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "../helpers/Link";
import MenuIcon from "@material-ui/icons/Menu";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
        <MenuItem
          component={Link}
          onClick={handleClose}
          href="/"
          color="secondary"
          naked
        >
          Accueil
        </MenuItem>
        <MenuItem
          component={Link}
          onClick={handleClose}
          href="/horaire"
          color="secondary"
          naked
        >
          Horaires
        </MenuItem>
        <MenuItem
          component={Link}
          onClick={handleClose}
          href="/contact"
          color="secondary"
          naked
        >
          Contact
        </MenuItem>
        <MenuItem
          component={Link}
          onClick={handleClose}
          href="/podologie"
          color="secondary"
          naked
        >
          Podologie
        </MenuItem>
        <MenuItem
          component={Link}
          onClick={handleClose}
          href="/posturologie"
          color="secondary"
          naked
        >
          Posturologie
        </MenuItem>
        <MenuItem
          component={Link}
          onClick={handleClose}
          href="/pedicurie"
          color="secondary"
          naked
        >
          Pédicurie
        </MenuItem>
        <MenuItem
          component={Link}
          onClick={handleClose}
          href="/diabetologie"
          color="secondary"
          naked
        >
          Diabetologie
        </MenuItem>
        <MenuItem
          component={Link}
          onClick={handleClose}
          href="/reflexologie"
          color="secondary"
          naked
        >
          Réflexologie
        </MenuItem>
      </Menu>
    </div>
  );
}
