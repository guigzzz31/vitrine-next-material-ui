import React from "react";
import Paragraph from "../static/article/Paragraph";

export default function ParagraphGenerator(props) {
  const { paragraphs } = props;
  return (
    <>
      {paragraphs
        ? paragraphs.map((item) => {
            return (
              <Paragraph
                key={item.paragraph_id}
                primary={item.primary}
                secondary={item.secondary}
              />
            );
          })
        : null}
    </>
  );
}
