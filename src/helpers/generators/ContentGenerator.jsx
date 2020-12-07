import Box from "@material-ui/core/Box";
import Title from "../static/article/Title";
import Subtitle from "../static/article/Subtitle";
import ParagraphGenerator from "./ParagraphGenerator";

export default function ContentGenerator(props) {
  const { content } = props;
  return (
    <>
      {content
        ? content.map((item) => {
            return (
              <Box key={item.content_id} m={3}>
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
