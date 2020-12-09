import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Title from "../static/article/Title";
import Subtitle from "../static/article/Subtitle";
import ParagraphGenerator from "./ParagraphGenerator";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

export default function ArticleGenerator(props) {
  const { article } = props;
  const classes = useStyles();

  return (
    <>
      {article
        ? article.map((item) => {
            return (
              <Box key={item.article_id} m={3}>
                <Title title={item.title} />
                <Subtitle subtitle={item.subtitle} />
                <ParagraphGenerator paragraphs={item.paragraph} />
              </Box>
            );
          })
        : null}
    </>
  );
}
