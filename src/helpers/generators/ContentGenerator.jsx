import React from "react";
import { makeStyles } from "@mui/styles";

import { Box } from "@mui/material";
import Title from "../static/article/Title";
import Subtitle from "../static/article/Subtitle";
import ParagraphGenerator from "./ParagraphGenerator";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

export default function ContentGenerator(props) {
  const { content } = props;
  const classes = useStyles();

  return (
    <>
      {content
        ? content.map((item) => {
            return (
              <Box
                key={item.content_id}
                mx={2}
                mt={2}
                //mb={item.title === "Carole Richou" ? 0 : 3}
              >
                <Title title={item.title} />
                {/* <Subtitle subtitle={item.subtitle} /> */}
                <ParagraphGenerator
                  subtitle={item.subtitle}
                  paragraphs={item.paragraph}
                />
              </Box>
            );
          })
        : null}
    </>
  );
}
