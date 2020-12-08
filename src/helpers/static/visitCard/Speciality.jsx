import Typography from "@material-ui/core/Typography";

export default function Speciality(props) {
  const { speciality } = props;
  return (
    <>
      {speciality ? (
        <Typography color="primary" variant="body1">
          Spécialisée en {speciality}
        </Typography>
      ) : null}
    </>
  );
}
