import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Collapse, IconButton } from "@mui/material";
import clsx from "clsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Title from "../static/article/Title";
import Subtitle from "../static/article/Subtitle";
import ParagraphGenerator from "./ParagraphGenerator";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  icon: {
    color: theme.palette.error.main,
  },
}));

export default function DefinitionGenerator(props) {
  const { definition } = props;

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {definition ? (
        <Box m={3}>
          <Grid direction="row" alignItems="center" container>
            <Grid item>
              <Title title={definition.title} />
            </Grid>
            <Grid item>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="voir plus"
              >
                <ExpandMoreIcon className={classes.icon} />
              </IconButton>
            </Grid>
          </Grid>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ParagraphGenerator
              subtitle={definition.subtitle}
              paragraphs={definition.paragraph}
            />
          </Collapse>
        </Box>
      ) : null}
    </>
  );
}
