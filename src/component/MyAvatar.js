import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function MyAvatar() {
  return (
    <>
      <Wrap>
        <WrapItem>
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          />{" "}
        </WrapItem>{" "}
      </Wrap>
    </>
  );
}
