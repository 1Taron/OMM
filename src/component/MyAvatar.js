import { Avatar, Button, Wrap, WrapItem } from "@chakra-ui/react";

export default function MyAvatar() {
  return (
    <>
      <div className="sd_pf_atr">
        <Wrap>
          <WrapItem>
            <Avatar
              size="2xl"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />{" "}
          </WrapItem>{" "}
        </Wrap>
        <Button
          className="sd_pf_mybtn"
          width="100px"
          height="25px"
          bg="teal.400"
          _hover={{ bg: "teal.300" }}
          border="none"
        >
          내 정보
        </Button>
      </div>
      <div className="sd_pf_info">
        <p className="font_01">이름</p>
        <p className="font_01">등급</p>
      </div>
    </>
  );
}
