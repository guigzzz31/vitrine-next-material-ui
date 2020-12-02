import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function Troubles(props) {
  return (
    <Box>
      <Typography variant="h5">Pourquoi consulter ?</Typography>
      <List>
        {props.items.map((item) => {
          return (
            <ListItem>
              <ListItemText
                color="textSecondary"
                primary={item.primary}
                secondary={item.secondary}
                primaryTypographyProps={{ color: "primary" }}
                secondaryTypographyProps={{ color: "textPrimary" }}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
