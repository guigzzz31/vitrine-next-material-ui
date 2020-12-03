import Box from "@material-ui/core/Box";
import Title from "../static/Title";
import Subtitle from "../static/Subtitle";
import ParagraphGenerator from "./ParagraphGenerator";

export default function ContentGenerator(props) {
  const { content } = props;
  return (
    <>
      {content
        ? content.map((item) => {
            return (
              <Box m={3}>
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
