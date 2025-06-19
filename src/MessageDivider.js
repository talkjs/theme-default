import { html, userFriendlyDate } from "@talkjs/components/theming";
/** @import { MessageDividerProps } from "@talkjs/components/theming"; */

/** @param {MessageDividerProps} */
export function MessageDivider({ timestamp, isReadMarker, isDayMarker, t }) {
  return html`
    <div className="t-message-divider">
      <div className="t-line" t-side="left">
        <hr />
      </div>
      ${isDayMarker ? html`<span className="t-day-marker">${userFriendlyDate(timestamp, t)}</span>` : ""}
      <div className="t-line" t-side="right">
        <hr />
        ${isReadMarker ? html`<span className="t-unread-marker"> ${t.MESSAGELIST_NEW_MARKER} </span>` : ""}
      </div>
    </div>
  `;
}
