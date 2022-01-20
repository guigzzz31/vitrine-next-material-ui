import { Box } from "@mui/material";
import React from "react";
import Paragraph from "../static/article/Paragraph";

export default function ParagraphGenerator(props) {
  const { subtitle, paragraphs, def } = props;
  const pl = subtitle ? [2, 4, 12] : [1, 2, 8];
  return (
    <Box
      pt={1}
      pl={pl}
      width={"100%"}
      sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
    >
      {paragraphs
        ? paragraphs.map((item) => {
            return (
              <Paragraph
                key={item.paragraph_id}
                bold={item.bold}
                primary={item.primary}
                secondary={item.secondary}
                def={def}
              />
            );
          })
        : null}
    </Box>
  );
}
