import { makeStyles } from "@mui/styles";
import { Grid, Box, Typography } from "@mui/material";
import Subtitle from "../static/article/Subtitle";

const useStyles = makeStyles((theme) => ({
  box_01: {
    display: "flex",
    alignItems: "center",
    //carole
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.main,
    minWidth: 52,
    minHeight: 52,
    borderRadius: 8,
  },
  box_02: {
    display: "flex",
    alignItems: "center",
    //carine
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.error.main,
    minWidth: 52,
    minHeight: 52,
    borderRadius: 8,
  },
}));

export default function ScheduleGenerator(props) {
  const classes = useStyles();

  const { schedule } = props;
  return (
    <Grid direction="row" container m={2}>
      <Box mt={-0.5}>
        <Box my={4}>
          <Typography variant="subtitle2">9h</Typography>
        </Box>
        <Box my={4}>
          <Typography variant="subtitle2">14h</Typography>
        </Box>
        <Box my={4}>
          <Typography variant="subtitle2">19h</Typography>
        </Box>
      </Box>
      {schedule
        ? schedule.map((item) => {
            let conditionMorning =
              item.morning === "Carole" ? classes.box_01 : classes.box_02;

            let conditionAfternoon =
              item.afternoon === "Carole" ? classes.box_01 : classes.box_02;

            return (
              <Box key={item.column_id} m={0.2}>
                <Subtitle subtitle={item.day} />
                <Grid direction="column" container>
                  <Grid xs item>
                    <Box
                      className={conditionMorning}
                      border={1}
                      borderColor={conditionMorning.color}
                      m={0.4}
                    >
                      <Typography
                        align="center"
                        variant="body1"
                        color={conditionMorning.color}
                      >
                        {item.morning}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xs item>
                    <Box
                      className={conditionAfternoon}
                      borderColor={conditionAfternoon.color}
                      border={1}
                      m={0.4}
                    >
                      <Typography
                        align="center"
                        variant="body1"
                        color={conditionAfternoon.color}
                      >
                        {item.afternoon}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            );
          })
        : null}
    </Grid>
  );
}
