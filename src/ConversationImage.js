import { html, getPhotoUrlWithFallback } from "@talkjs/components/theming";
/** @import * as types from "@talkjs/components/theming"; */
import { Avatar } from "./Avatar.js";
import { GroupChatImage } from "./GroupChatImage.js";

/**
 * @typedef {{
 *   conversation: types.ConversationSnapshot;
 *   participants: types.UserSnapshot[];
 *   currentUser: types.UserSnapshot;
 * }} Props
 */

/** @param {Props} props */
export function ConversationImage({ conversation, participants, currentUser }) {
  if (conversation.photoUrl) {
    return html`<${Avatar} photoUrl=${conversation.photoUrl} />`;
  }
  if (participants.length === 0) {
    return null;
  }
  if (participants.length === 1) {
    return html`<${Avatar} photoUrl=${getPhotoUrlWithFallback(currentUser)} />`;
  }
  if (participants.length === 2) {
    const otherUser = participants[0].id === currentUser.id ? participants[1] : participants[0];
    return html`<${Avatar} photoUrl=${getPhotoUrlWithFallback(otherUser)} />`;
  }

  return html`<${GroupChatImage} participants=${participants} />`;
}
