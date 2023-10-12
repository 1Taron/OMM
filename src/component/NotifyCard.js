export default function NotifyCard() {
  return (
    <>
      <div className="card_container">
        <div className="card_infobox">
          <span className="notify_kind font_01">주문 접수</span>
          <span className="notify_time font_01">2023-10-11 / 12:20</span>
        </div>
        <div className="card_contentbox">
          <p className="font_02 notify_content">
            주문하신 음식이 접수 완료되었습니다.
          </p>
        </div>
      </div>
    </>
  );
}
