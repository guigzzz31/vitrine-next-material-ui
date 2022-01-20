import { Box } from "@mui/material";
import React from "react";
import Paragraph from "../static/article/Paragraph";

export default function PodologyGenerator(props) {
  const { paragraphs } = props;
  return (
    <Box pt={1}>
      {paragraphs
        ? paragraphs.map((item) => {
            return (
              <Paragraph
                key={item.paragraph_id}
                bold={item.bold}
                primary={item.primary}
                secondary={item.secondary}
              />
            );
          })
        : null}
    </Box>
  );
}
