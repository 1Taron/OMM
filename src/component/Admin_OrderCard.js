import { useContext, useState } from "react";
import { format } from "date-fns";
import "../css/Admin_OrderCard.css";
import { MenuContext } from "../contexts/Admin_MenuContext";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function Admin_OrderCard({
  _id,
  pd_kind,
  pd_quantity,
  pd_price,
  pd_adress,
  pd_context,
  createdAt,
}) {
  const nowState = ["미 접수", "주문 접수", "배달 중", "배달 완료"];
  const nowStatep = ["미 접수", "주문 접수", "포장 완료", "픽업 완료"];
  const [stateIndex, setStateIndex] = useState(0);
  const btnState = ["수락", "배달 시작", "배달 완료", ""];
  const btnStatep = ["수락", "포장 완료", "픽업 완료", ""];
  const [cancelcheck, setCancelCheck] = useState(false);

  const changeNowState = () => {
    if (stateIndex < 3) {
      setStateIndex((prevIndex) => prevIndex + 1);
    } else {
      return setStateIndex(3);
    }
  };

  const changeCancelState = () => {
    setCancelCheck(true);
  };

  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const [n_etavalue, setN_etavalue] = useState("");
  const [n_contextvalue, setN_contextvalue] = useState("");

  async function sendNotify(e) {
    e.preventDefault();

    //notifyETAToSave push
    const notifyETAToSave = [];
    const notifySTATEToSave = [];
    if (stateIndex == 0 && pd_kind == "배달") {
      notifyETAToSave.push(pd_kind);
      notifyETAToSave.push(" 예정 시간은 ");
      notifyETAToSave.push(n_etavalue);
      notifyETAToSave.push(" 입니다.");
      notifySTATEToSave.push(nowState[stateIndex + 1]);
    }
    if (stateIndex == 0 && pd_kind == "포장") {
      notifyETAToSave.push(pd_kind);
      notifyETAToSave.push(" 예정 시간은 ");
      notifyETAToSave.push(n_etavalue);
      notifyETAToSave.push(" 입니다.");
      notifySTATEToSave.push(nowStatep[stateIndex + 1]);
    }
    if (stateIndex == 1 && pd_kind == "배달") {
      notifyETAToSave.push(" 배달이 시작되었습니다. ");
      notifySTATEToSave.push(nowState[stateIndex + 1]);
    }
    if (stateIndex == 2 && pd_kind == "배달") {
      notifyETAToSave.push(" 배달이 도착하였습니다. ");
      notifySTATEToSave.push(nowState[stateIndex + 1]);
    }
    if (stateIndex == 1 && pd_kind == "포장") {
      notifyETAToSave.push(" 포장이 완료되었습니다. ");
      notifySTATEToSave.push(nowStatep[stateIndex + 1]);
    }
    if (stateIndex == 2 && pd_kind == "포장") {
      notifyETAToSave.push(" 맛있게 드십시오. ");
      notifySTATEToSave.push(nowStatep[stateIndex + 1]);
    }
    const n_eta = notifyETAToSave.join("");

    const n_state = notifySTATEToSave.join("");
    const response = await fetch("http://localhost:4000/admin/ordernotify", {
      method: "POST",
      body: JSON.stringify({
        n_state,
        n_eta,
      }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.status === 200) {
      changeNowState();
      onClose();
    } else {
      alert("실패");
    }
  }

  async function sendNotifyCancel(e) {
    e.preventDefault();

    //notifyETAToSave push
    const notifyETAToSave = [];
    if (n_etavalue) {
      notifyETAToSave.push(n_etavalue);
      notifyETAToSave.push(" (으)로 인하여 주문이 취소되었습니다. ");
    }
    const n_eta = notifyETAToSave.join("");
    const n_state = "주문 취소";
    const response = await fetch("http://localhost:4000/admin/ordernotify", {
      method: "POST",
      body: JSON.stringify({
        n_state,
        n_eta,
      }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.status === 200) {
      changeCancelState();
      onClose2();
    } else {
      alert("실패");
    }
  }

  const [deletedDoc, setDeletedDoc] = useState(null);
  const DeletePayDeliveryDoc = async () => {
    try {
      console.log("_id12123123 ====>" + _id);
      const response = await fetch(
        "http://localhost:4000/admin/deletePayDeliveryDocument",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            documentId: _id,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setDeletedDoc(data);
      } else {
        console.log("_id ====>" + _id);
        console.error("문서 삭제 실패:", response.statusText);
      }
    } catch (error) {
      console.log("_id ====>" + _id);
      console.error("문서 삭제 오류:", error);
    }
  };

  return (
    <>
      {pd_kind === "배달" ? (
        <article className="orderc_container">
          <div className="order_state_container">
            {cancelcheck ? (
              <p className="order_state">주문 취소</p>
            ) : (
              <p className="order_state">{nowState[stateIndex]}</p>
            )}
          </div>
          <div className="order_context_container">
            {/* <div className="__order_img">이미지</div> */}
            <p className="__order_deliorpick">{pd_kind}</p>
            <p className="__order_adress">{pd_adress}</p>
            <div className="__order_context">재료</div>
            <div className="__order_remain">
              <p>
                <time>{format(new Date(createdAt), "yyyy MM d,  hh:mm")}</time>
              </p>
              <p>{pd_quantity} 개</p>
              <p>{pd_price} 원</p>
            </div>
            <p className="__order_request">{pd_context}</p>
          </div>
          {cancelcheck ? (
            <div className="order_btn_container">
              <button
                className="__order_nobtn font_01"
                onClick={DeletePayDeliveryDoc}
                type="button"
              >
                삭제
              </button>
            </div>
          ) : (
            <div className="order_btn_container">
              {stateIndex === 3 ? (
                <div className="order_btn_container">
                  <button
                    className="__order_nobtn font_01"
                    onClick={DeletePayDeliveryDoc}
                    type="button"
                  >
                    삭제
                  </button>
                </div>
              ) : (
                <>
                  {stateIndex === 0 ? (
                    <button className="__order_okbtn font_01" onClick={onOpen}>
                      {btnState[stateIndex]}
                    </button>
                  ) : (
                    <button
                      className="__order_okbtn font_01"
                      onClick={sendNotify}
                    >
                      {btnState[stateIndex]}
                    </button>
                  )}

                  <button className="__order_nobtn font_01" onClick={onOpen2}>
                    취소
                  </button>
                </>
              )}
            </div>
          )}
        </article>
      ) : (
        <article className="orderc_container">
          <div className="order_state_container">
            {cancelcheck ? (
              <p className="order_state">주문 취소</p>
            ) : (
              <p className="order_state">{nowStatep[stateIndex]}</p>
            )}
          </div>
          <div className="order_context_container">
            {/* <div className="__order_img">이미지</div> */}
            <p className="__order_deliorpick">{pd_kind}</p>
            <p className="__order_adress">{pd_adress}</p>
            <div className="__order_context">재료</div>
            <div className="__order_remain">
              <p>
                <time>{format(new Date(createdAt), "yyyy MM d,  hh:mm")}</time>
              </p>
              <p>{pd_quantity} 개</p>
              <p>{pd_price} 원</p>
            </div>
            <p className="__order_request">{pd_context}</p>
          </div>
          {cancelcheck ? (
            <div className="order_btn_container">
              <button
                className="__order_nobtn font_01"
                onClick={DeletePayDeliveryDoc}
                type="button"
              >
                삭제
              </button>
            </div>
          ) : (
            <div className="order_btn_container">
              {stateIndex === 3 ? (
                <div className="order_btn_container">
                  <button
                    className="__order_nobtn font_01"
                    onClick={DeletePayDeliveryDoc}
                    type="button"
                  >
                    삭제
                  </button>
                </div>
              ) : (
                <>
                  {stateIndex === 0 ? (
                    <button className="__order_okbtn font_01" onClick={onOpen}>
                      {btnState[stateIndex]}
                    </button>
                  ) : (
                    <button
                      className="__order_okbtn font_01"
                      onClick={sendNotify}
                    >
                      {btnState[stateIndex]}
                    </button>
                  )}

                  <button className="__order_nobtn font_01" onClick={onOpen2}>
                    취소
                  </button>
                </>
              )}
            </div>
          )}
        </article>
      )}

      {/* 모달 */}
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"sm"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <p className="font_01 modal_title">주문 접수</p>
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={sendNotify}>
            <div className="notifym_container">
              <div className="notifym_eta_container">
                <p className="font_01">{pd_kind} 예정 시간</p>
                <select
                  placeholder="예정 시간"
                  bg={"initial"}
                  fontSize={"1.3rem"}
                  color={"gray"}
                  mt={"15px"}
                  className="__notify_select"
                  value={n_etavalue}
                  onChange={(e) => setN_etavalue(e.target.value)}
                >
                  <option value="10 분">10 분</option>
                  <option value="20 분">20 분</option>
                  <option value="30 분">30 분</option>
                  <option value="40 분">40 분</option>
                  <option value="50 분">50 분</option>
                </select>
              </div>
            </div>
            <div className="notifym_btn_container font_01">
              <button onClick={sendNotify} type="submit">
                확인
              </button>
              <button onClick={onClose} type="button">
                취소
              </button>
            </div>
          </form>
        </ModalContent>
      </Modal>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen2}
        onClose={onClose2}
        size={"sm"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <p className="font_01 modal_title">주문 취소</p>
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={sendNotifyCancel}>
            <div className="notifym_container">
              <div className="notifym_eta_container">
                <p className="font_01">취소 사유</p>
                <select
                  placeholder="취소 사유"
                  bg={"initial"}
                  fontSize={"1.3rem"}
                  color={"gray"}
                  mt={"15px"}
                  className="__notify_select"
                  value={n_etavalue}
                  onChange={(e) => setN_etavalue(e.target.value)}
                >
                  <option value="재료 소진">재료 소진</option>
                  <option value="주문 밀림">주문 밀림</option>
                </select>
              </div>
            </div>
            <div className="notifym_btn_container font_01">
              <button type="submit">확인</button>
              <button onClick={onClose2} type="button">
                취소
              </button>
            </div>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

/* <Button onClick={changeNowState}>{btnState[stateIndex]}</Button> */
