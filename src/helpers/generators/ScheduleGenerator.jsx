import { makeStyles } from "@mui/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Subtitle from "../static/article/Subtitle";

const useStyles = makeStyles((theme) => ({
  hoursContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  box_01: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //carole
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.main,
    // minWidth: 52,
    // minHeight: 52,
    borderRadius: 8,
  },
  box_02: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //carine
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.error.main,
    // minWidth: 52,
    // minHeight: 52,
    borderRadius: 8,
  },
}));

export default function ScheduleGenerator(props) {
  const { schedule } = props;

  const classes = useStyles();
  const matches = useMediaQuery("(max-width:580px)");

  const hours = ["14px", "16px", "22px", "23px", "23px"];
  const square = ["15px", "16px", "22px", "28px", "28px"];
  const size = ["46px", "60px", "72px", "92px", "108px", "124px"];

  return (
    <Box display="flex">
      <Box className={classes.hoursContainer} mt={4}>
        <Box>
          <Typography fontFamily="Lato" fontWeight={500} fontSize={hours}>
            9h
          </Typography>
        </Box>
        <Box>
          <Typography fontFamily="Lato" fontWeight={500} fontSize={hours}>
            14h
          </Typography>
        </Box>
        <Box>
          <Typography fontFamily="Lato" fontWeight={500} fontSize={hours}>
            19h
          </Typography>
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
                <Typography
                  fontFamily="Lato"
                  fontWeight={500}
                  textAlign="center"
                  fontSize={["15px", "16px", "22px", "28px", "28px"]}
                >
                  {item.day}
                </Typography>
                <Box className={classes.columnContainer}>
                  <Box
                    className={conditionMorning}
                    borderColor={conditionMorning.color}
                    width={size}
                    height={size}
                    border={matches ? 1 : 2}
                    m={matches ? 0.4 : 1}
                  >
                    <Typography
                      align="center"
                      fontSize={square}
                      color={conditionMorning.color}
                    >
                      {item.morning}
                    </Typography>
                  </Box>
                  <Box>
                    <Box
                      className={conditionAfternoon}
                      borderColor={conditionAfternoon.color}
                      width={size}
                      height={size}
                      border={matches ? 1 : 2}
                      m={matches ? 0.4 : 1}
                    >
                      <Typography
                        align="center"
                        fontSize={square}
                        color={conditionAfternoon.color}
                      >
                        {item.afternoon}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })
        : null}
    </Box>
  );
}
