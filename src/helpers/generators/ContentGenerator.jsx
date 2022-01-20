import React from "react";
import { makeStyles } from "@mui/styles";

import { Box } from "@mui/material";
import Title from "../static/article/Title";
import Subtitle from "../static/article/Subtitle";
import ParagraphGenerator from "./ParagraphGenerator";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexDirection: "row",
    // //alignItems: "center",
    // flexWrap: "wrap",
  },
}));

export default function ContentGenerator(props) {
  const { content } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root} my={2}>
      {content
        ? content.map((item) => {
            return (
              <Box key={item.content_id} mx={1} mt={2}>
                <Title title={item.title} />
                {item.subtitle !== "" ? (
                  <Subtitle subtitle={item.subtitle} />
                ) : null}
                <ParagraphGenerator
                  subtitle={item.subtitle}
                  paragraphs={item.paragraph}
                />
              </Box>
            );
          })
        : null}
    </Box>
  );
}
