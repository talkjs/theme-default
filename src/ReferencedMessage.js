import { html, Text, formatDuration } from "@talkjs/react-components/theming";
/** @import { ReferencedMessageProps } from "@talkjs/react-components/theming"; */

/** @param {ReferencedMessageProps} props */
export function ReferencedMessage(props) {
  const { referencedMessage } = props;

  return html`
    <div className="t-theme-referenced-message">
      <div className="t-sender-name">${referencedMessage.sender.name}</div>
      <div className="t-content">
        <${Content} ...${props} />
      </div>
    </div>
  `;
}

/** @param {ReferencedMessageProps} props */
function Content({ referencedMessage, common }) {
  const firstContentBlock = referencedMessage.content[0];

  if (firstContentBlock.type === "text") {
    return html`<${Text} block=${firstContentBlock} />`;
  } else if (firstContentBlock.type === "location") {
    return html`<span>${common.t.LOCATION}</span>`;
  } else if (firstContentBlock.type === "file") {
    if (firstContentBlock.subtype === "voice") {
      return html`<span
        >${common.t.VOICE_MESSAGE}
        (${formatDuration(firstContentBlock.duration)})</span
      >`;
    } else {
      return html`<span>${firstContentBlock.filename}</span>`;
    }
  }
}
