import { useContext, useState } from "react";
import { format } from "date-fns";
import "../css/Admin_OrderCard.css";
import { MenuContext } from "../contexts/Admin_MenuContext";

export default function Admin_OrderCard({
  _id,
  pd_kind,
  pd_quantity,
  pd_price,
  pd_adress,
  pd_context,
  createdAt,
}) {
  const nowState = ["미 접수", "조리 중", "배달 중", "배달 완료"];
  const [stateIndex, setStateIndex] = useState(0);
  const btnState = ["수락", "배달 시작", "배달 완료", ""];

  const changeNowState = () => {
    if (stateIndex < 3) {
      setStateIndex((prevIndex) => prevIndex + 1);
    } else {
      return setStateIndex(3);
    }
  };

  // const { setMenuInfo, menuInfo } = useContext(MenuContext);
  // const pd_quantity = menuInfo?.pd_quantity;
  // const pd_price = menuInfo?.pd_price;
  // const pd_context = menuInfo?.pd_context;

  return (
    <article className="orderc_container">
      <div className="order_state_container">
        <p className="order_state">{nowState[stateIndex]}</p>
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
      <div className="order_btn_container">
        <button className="__order_okbtn font_01" onClick={changeNowState}>
          {btnState[stateIndex]}
        </button>
        <button className="__order_nobtn font_01">취소</button>
      </div>
    </article>
  );
}
