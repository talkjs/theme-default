import {
  html,
  MenuButton,
  getRandomColor,
  MessageContent,
  getPhotoUrlWithFallback,
} from "@talkjs/react-components/theming";
/** @import { MessageProps } from "@talkjs/react-components/theming"; */

/** @param {MessageProps} props */
export function Message(props) {
  const { message, messageStatus, permissions, common } = props;
  const { currentUser, theme, participants } = common;
  const { Avatar, Icon, ReferencedMessage, TimeAgo, MessageActionMenu } = theme;

  const isGroupChat = participants.length >= 3;
  const sender = message.sender;

  const isMe = sender?.id === currentUser.id;
  const showAuthor = !isMe && isGroupChat;
  const referencedMessage = message.referencedMessage;
  const showActionMenu =
    messageStatus !== "sending" &&
    (permissions.canReplyToMessage || permissions.canDeleteMessage);

  let senderType;
  if (!sender) {
    senderType = "system";
  } else if (sender.id === currentUser.id) {
    senderType = "currentUser";
  } else {
    senderType = "other";
  }

  return html`
    <div
      className="t-theme-message"
      t-sender=${senderType}
      t-message-id=${message.id}
    >
      <div className="t-message-row">
        ${sender &&
        html`<${Avatar}
          photoUrl=${getPhotoUrlWithFallback(sender)}
          common=${common}
        />`}

        <div className="t-message-body">
          <!-- in group chats, show the message sender name in a random color -->
          ${sender &&
          showAuthor &&
          html`<div
            className="t-message-sender-name"
            style=${{ color: getRandomColor(sender.id) }}
          >
            ${sender.name}
          </div>`}
          ${showActionMenu &&
          html`
            <${MenuButton}
              menuComponent=${MessageActionMenu}
              menuProps=${{ message, permissions, common }}
              className="t-message-action-menu-button"
              aria-label="Message actions"
            >
              <${Icon} className="t-action-menu-icon" type="horizontalDots" common=${common} />
            </${MenuButton}>
          `}
          ${referencedMessage &&
          html`<${ReferencedMessage}
            referencedMessage=${referencedMessage}
            common=${common}
          />`}

          <${MessageContent}
            common=${common}
            message=${message}
            messageStatus=${messageStatus}
          />

          <div className="t-message-status">
            <${TimeAgo} timestamp=${message.createdAt} common=${common} />
            <${StatusTick} ...${props} />
          </div>
        </div>
      </div>
    </div>
  `;
}

/** @param {MessageProps} props */
function StatusTick({ messageStatus, common }) {
  const { Icon } = common.theme;

  if (messageStatus === "sending") {
    return html`
      <span className="t-status-icon">
        <${Icon}
          type="spinner"
          className="t-message-loading-spinner"
          common=${common}
        />
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
