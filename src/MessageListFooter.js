import { html, getPhotoUrlWithFallback } from "@talkjs/components/theming";
/** @import { TypingIndicatorProps } from "@talkjs/components/theming"; */
import { Avatar } from "./Avatar.js";

/** @param {TypingIndicatorProps} props */
export function MessageListFooter(props) {
  const {
    typing,
    t
  } = props;
  // We get many = true, and no users, when there are more than 5 people typing at once.
  const { users, many } = typing;

  // If there's nobody typing, don't render anything.
  if (!many && users.length === 0) {
    return null;
  }

  const avatars = many ?
    html`<div className="t-theme-avatar">5+</div>` :
    users.slice(0, 2).map(user => html`<${Avatar} key=${user.id} photoUrl=${getPhotoUrlWithFallback(user, t)} />`);

  return html`
    <div className="t-theme-message-list-footer" t-many=${String(many)} aria-label="${makeAriaLabel(users, many)}">
      <div className="t-typing-avatars" aria-hidden="true">
        ${avatars}
        ${!many && users.length > 2 && html`<div className="t-theme-avatar">+${users.length - 2}</div>`}
      </div>
      <div className="t-typing-bubble">
        <div className="t-typing-animation">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  `;
}

function makeAriaLabel(users, many) {
  if (many) {
    return "Several people are typing";
  }

  if (users.length === 1) {
    return `${users[0].name} is typing`;
  }

  if (users.length === 2) {
    return `${users[0].name} and ${users[1].name} are typing`;
  }

  return `${users[0].name}, ${users[1].name}, and ${users.length - 2} others are typing`;
}