import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function Paragraph(props) {
  const { primary, secondary } = props;
  return (
    <Box pl={1}>
      {primary ? (
        <Typography color="textPrimary" variant="body1" gutterBottom>
          {props.primary}
        </Typography>
      ) : null}
      {secondary ? (
        <Typography color="error" variant="body2" paragraph>
          {props.secondary}
        </Typography>
      ) : null}
    </Box>
  );
}
