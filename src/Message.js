import { html, getRandomColor, MessageContent, getPhotoUrlWithFallback } from "@talkjs/components/theming";
/** @import { MessageProps } from "@talkjs/components/theming"; */
import { Avatar } from "./Avatar.js";
import { Icon } from "./Icon.js";
import { ReferencedMessage } from "./ReferencedMessage.js";
import { TimeAgo } from "./TimeAgo.js";

/** @param {MessageProps} props */
export function Message(props) {
  const { message, participants, permissions, currentUser, chatbox, t, messageActionMenuAnchorRef, messageStatus } =
    props;

  const isGroupChat = participants.length >= 3;
  const sender = message.sender;

  const isMe = sender?.id === currentUser.id;
  const showAuthor = !isMe && isGroupChat;
  const referencedMessage = message.referencedMessage;
  const showActionMenu = messageStatus !== "sending" && (permissions.canReplyToMessage || permissions.canDeleteMessage);

  let senderType;
  if (!sender) {
    senderType = "system";
  } else if (sender.id === currentUser.id) {
    senderType = "currentUser";
  } else {
    senderType = "other";
  }

  return html`
    <div className="t-theme-message" t-sender=${senderType} t-message-id=${message.id}>
      <div className="t-message-row">
        ${sender && html`<${Avatar} photoUrl=${getPhotoUrlWithFallback(sender)} />`}

        <div className="t-message-body">
          <!-- in group chats, show the message sender name in a random color -->
          ${sender &&
          showAuthor &&
          html`<div className="t-message-sender-name" style=${{ color: getRandomColor(sender.id) }}>
            ${sender.name}
          </div>`}
          ${showActionMenu &&
          html`
            <button
              className="t-message-action-menu-trigger"
              onClick=${() => chatbox.openMessageActionMenu(message.id)}
              ref=${messageActionMenuAnchorRef}
            >
              <${Icon} className="t-action-menu-icon" type="horizontalDots" />
            </button>
          `}
          ${referencedMessage && html`<${ReferencedMessage} referencedMessage=${referencedMessage} t=${t} />`}

          <${MessageContent} message=${message} currentUser=${currentUser} t=${t} messageStatus=${messageStatus} />

          <div className="t-message-status">
            <${TimeAgo} timestamp=${message.createdAt} t=${t} />
            <${StatusTick} ...${props} />
          </div>
        </div>
      </div>
    </div>
  `;
}

/** @param {MessageProps} props */
function StatusTick({ messageStatus }) {
  if (messageStatus === "sending") {
    return html`
      <span className="t-status-icon">
        <${Icon} type="spinner" className="t-message-loading-spinner" />
      </span>
    `;
  }

  if (messageStatus === "sent") {
    return html`<span className="t-status-icon">✓</span>`;
  }

  if (messageStatus === "everyoneRead") {
    return html`<span className="t-status-icon">✓✓</span>`;
  }

  return null;
}
