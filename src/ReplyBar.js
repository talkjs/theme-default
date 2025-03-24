import { html, formatDuration, Text, getFilename } from "@talkjs/components/theming";
/** @import * as types from "@talkjs/components/theming"; */
import { Icon } from "./Icon.js";

/**
 * @typedef {{
 *   chatbox: types.Chatbox;
 *   referencedMessage: types.MessageSnapshot;
 *   t: types.Translation;
 * }} Props
 */

/** @param {Props} props */
export function ReplyBar(props) {
  const { chatbox, referencedMessage, t } = props;

  return html`
    <div className="t-theme-reply-bar">
      <${Icon} className="t-reply-icon" type="reply" />

      <div className="t-body">
        <div className="t-sender-name">${referencedMessage.sender.name}</div>
        <div className="t-content">
          <${Content} ...${props} />
        </div>
      </div>

      <button
        className="t-close-button"
        title=${t.REPLY_MODE_LEAVE_ARIA_LABEL}
        aria-label=${t.REPLY_MODE_LEAVE_ARIA_LABEL}
        onClick=${() => chatbox.setReferencedMessage(null)}
      >
        <${Icon} className="t-close-icon" type="close" />
      </button>
    </div>
  `;
}

/** @param {Props} props */
function Content({ referencedMessage, t }) {
  const firstContentBlock = referencedMessage.content[0];

  if (firstContentBlock.type === "text") {
    return html`<${Text} block=${firstContentBlock} />`;
  } else if (firstContentBlock.type === "location") {
    return html`<span>${t.LOCATION}</span>`;
  } else if (firstContentBlock.type === "file") {
    if (firstContentBlock.subtype === "voice") {
      return html`<span>${t.VOICE_MESSAGE} (${formatDuration(firstContentBlock.duration)})</span>`;
    } else {
      return html`<span>${getFilename(firstContentBlock)}</span>`;
    }
  }
}
