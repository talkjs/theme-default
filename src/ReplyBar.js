import { html, formatDuration, Text } from "@talkjs/react-components/theming";
/** @import { ReplyBarProps } from "@talkjs/react-components/theming"; */

/** @param {ReplyBarProps} props */
export function ReplyBar(props) {
  const { common, referencedMessage } = props;
  const { chatbox, t, theme } = common;
  const { Icon } = theme;

  return html`
    <div className="t-theme-reply-bar">
      <${Icon} className="t-reply-icon" type="reply" common=${common} />

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
        <${Icon} className="t-close-icon" type="close" common=${common} />
      </button>
    </div>
  `;
}

/** @param {ReplyBarProps} props */
function Content({ referencedMessage, common }) {
  const { t } = common;
  const firstContentBlock = referencedMessage.content[0];

  if (firstContentBlock.type === "text") {
    return html`<${Text} block=${firstContentBlock} />`;
  } else if (firstContentBlock.type === "location") {
    return html`<span>${t.LOCATION}</span>`;
  } else if (firstContentBlock.type === "file") {
    if (firstContentBlock.subtype === "voice") {
      return html`<span
        >${t.VOICE_MESSAGE}
        (${formatDuration(firstContentBlock.duration)})</span
      >`;
    } else {
      return html`<span>${firstContentBlock.filename}</span>`;
    }
  }
}
