import { html, Text, getFilename, formatDuration } from "@talkjs/components/theming";
/** @import * as types from "@talkjs/components/theming"; */

/**
 * @typedef {{
 *   referencedMessage: types.ReferencedMessageSnapshot
 *   t: types.Translation;
 * }} Props
 */

/** @param {Props} props */
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
