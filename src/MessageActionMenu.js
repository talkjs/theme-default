import { html } from "@talkjs/components/theming";
/** @import { MessageActionMenuProps } from "@talkjs/components/theming"; */

/** @param {MessageActionMenuProps} props */
export function MessageActionMenu(props) {
  const { message, permissions, chatbox, t } = props;

  /** @param {string} messageId */
  function setReferencedMessage(messageId) {
    chatbox.setReferencedMessage(messageId);
    chatbox.closeMessageActionMenu();
  }

  return html`
    <div className="t-theme-message-action-menu">
      ${permissions.canReply &&
      html`<button t-action="reply" onClick=${() => setReferencedMessage(message.id)}>${t.REPLY_TO_MESSAGE}</button>`}
      ${permissions.canDelete &&
      html`<button t-action="delete" onClick=${() => chatbox.deleteMessage(message.id)}>${t.DELETE_MESSAGE}</button>`}
    </div>
  `;
}
