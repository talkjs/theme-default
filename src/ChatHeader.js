import { html } from "@talkjs/react-components/theming";
/** @import * as types from "@talkjs/react-components/theming" */
import { ConversationImage } from "./ConversationImage.js";

/** @param {types.ChatHeaderProps} props */
export function ChatHeader(props) {
  const { currentUser, conversation, participants } = props;

  return html`
    <div className="t-theme-chat-header">
      <div className="t-inner">
        <div className="t-content">
          <div className="t-image">
            <${ConversationImage}
              conversation=${conversation}
              currentUser=${currentUser}
              participants=${participants}
            />
          </div>

          <div className="t-info">
            <${Title} ...${props} />
          </div>
        </div>
      </div>
    </div>
  `;
}

/** @param {types.ChatHeaderProps} props */
function Title(props) {
  const { conversation } = props;

  if (conversation.subject) {
    return html`
      <div className="t-title">${conversation.subject}</div>
      <div className="t-subtitle">
        <${Participants} ...${props} />
      </div>
    `;
  } else {
    return html`<div className="t-title">
      <${Participants} ...${props} />
    </div>`;
  }
}

/** @param {types.ChatHeaderProps} props */
function Participants({
  participants,
  currentUser,
  isUserConnected,
  permissions,
}) {
  const otherParticipants = participants.filter(
    ({ user }) => user.id !== currentUser.id,
  );
  const shownParticipants =
    otherParticipants.length === 0 ? participants : otherParticipants;

  if (permissions.showOnlineStatus) {
    return html`
      <span className="t-participants">
        ${shownParticipants.map(
          ({ user }) => html`
            <span className="t-participant" key=${user.id}>
              <span>${user.name}</span>
              <span
                className="t-online-indicator"
                t-status=${isUserConnected[user.id] ? "online" : "offline"}
              ></span>
            </span>
          `,
        )}
      </span>
    `;
  }

  const participantsList = shownParticipants
    .map(({ user }) => user.name)
    .join(", ");

  return html`<span className="t-participants">${participantsList}</span>`;
}
