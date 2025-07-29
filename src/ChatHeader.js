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
  const { conversation, participants, currentUser } = props;

  if (conversation.subject) {
    return html`
      <div className="t-title">${conversation.subject}</div>
      <div className="t-subtitle">
        ${getOtherParticipantNames(participants, currentUser)}
      </div>
    `;
  } else {
    return html`<div className="t-title">
      ${getOtherParticipantNames(participants, currentUser)}
    </div>`;
  }
}

/**
 * @param {types.ParticipantSnapshot[]} participants
 * @param {types.UserSnapshot} currentUser
 */
function getOtherParticipantNames(participants, currentUser) {
  const otherParticipants = participants.filter(
    ({ user }) => user.id !== currentUser.id,
  );
  const shownParticipants =
    otherParticipants.length === 0 ? participants : otherParticipants;
  return shownParticipants.map(({ user }) => user.name).join(", ");
}
