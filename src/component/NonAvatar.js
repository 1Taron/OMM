import { Avatar, Button, Wrap, WrapItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MyAvatar() {
  return (
    <>
      <div className="sd_pf_atr_non">
        <Wrap>
          <WrapItem>
            <Avatar size="2xl" name="" src="https://bit.ly/broken-link" />{" "}
          </WrapItem>{" "}
        </Wrap>
        <Link to={"/user/login"}>
          <Button
            className="sd_pf_mybtn"
            width="100px"
            height="25px"
            colorScheme="blue"
          >
            login
          </Button>
        </Link>
      </div>
    </>
  );
}
