import { makeStyles } from "@mui/styles";

import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  bottom: {
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
    fontWeight: 500,
  },
}));

export default function InfoTipFooter(props) {
  const { bottom } = props;
  const classes = useStyles();
  return (
    <Box p={1}>
      <Typography
        fontSize={["16px", "17px", "17px", "20px", "20px", "22px"]}
        className={classes.bottom}
      >
        {bottom}
      </Typography>
    </Box>
  );
}
