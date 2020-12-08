import Image from "next/image";

export default function AvatarGenerator(props) {
  const { avatarPath } = props;
  return <Image src={avatarPath} alt="me" width="110" height="110" />;
}
