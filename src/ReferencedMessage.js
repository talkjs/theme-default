import { html } from "@talkjs/react-components";
/** @import { ReferencedMessageProps } from "@talkjs/react-components"; */

/** @param {ReferencedMessageProps} props */
export function ReferencedMessage({ referencedMessage, common }) {
  const { theme } = common;
  const { CompactMessageContent } = theme;

  return html`
    <div className="t-theme-referenced-message">
      <div className="t-sender-name">${referencedMessage.sender.name}</div>
      <div className="t-content">
        <${CompactMessageContent}
          message=${referencedMessage}
          common=${common}
        />
      </div>
    </div>
  `;
}
