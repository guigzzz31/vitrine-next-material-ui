import Typography from "@material-ui/core/Typography";

export default function Subtitle(props) {
  return (
    <Typography align="center" color="initial" variant="h6" gutterBottom>
      {props.subtitle}
    </Typography>
  );
}
