import React from "react";
import Paragraph from "../static/Paragraph";

export default function ParagraphGenerator(props) {
  const { paragraphs } = props;
  return (
    <>
      {paragraphs
        ? paragraphs.map((item) => {
            return (
              <Paragraph
                key={item.id}
                primary={item.primary}
                secondary={item.secondary}
              />
            );
          })
        : null}
    </>
  );
}
