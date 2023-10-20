import { format } from "date-fns";

export default function NotifyCard({ _id, n_state, n_eta, createdAt }) {
  return (
    <>
      <div className="card_container">
        <div className="card_infobox">
          <span className="notify_kind font_01">{n_state}</span>
          <span className="notify_time font_01">
            <time>{format(new Date(createdAt), "yyyy MM d,  hh:mm")}</time>
          </span>
        </div>
        <div className="card_contentbox">
          <p className="font_02 notify_content">{n_eta}</p>
        </div>
      </div>
    </>
  );
}
