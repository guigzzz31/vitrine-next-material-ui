import { Avatar } from "@mui/material";

export default function AvatarGenerator(props) {
  const { avatarPath } = props;
  return (
    <Avatar
      src={avatarPath}
      sx={{
        width: [110, 120, 130, 140, 150],
        height: [110, 120, 130, 140, 150],
      }}
    />
  );
}
