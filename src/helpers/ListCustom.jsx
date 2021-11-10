import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

export default function ListCustom(props) {
  return (
    <List>
      {props.items.map((item) => {
        return (
          <ListItem>
            <ListItemText
              primary={item.primary}
              secondary={item.secondary}
              primaryTypographyProps={{ color: "textPrimary" }}
              secondaryTypographyProps={{ color: "textSecondary" }}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
