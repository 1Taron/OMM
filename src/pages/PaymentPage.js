import Header from "../component/Header";
import "../css/Payment.css";

export default function PaymentPage() {
  return (
    <>
      <Header />

      <div className="payMain_container font_01">
        <div className="pay_order_container">
          <div className="pay_order_box01">
            <div className="pay_order_img">
              <img alt="salad" src="img/salad01.jpg" />
            </div>
            <div className="pay_order_price">가격</div>
          </div>
          <div className="pay_order_box02">
            <div className="pay_order_ingredient">
              <p>재료1</p>
              <p>재료2</p>
              <p>재료3</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
