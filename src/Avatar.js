import { html } from "@talkjs/react-components";
/** @import { AvatarProps } from "@talkjs/react-components"; */

/** @param {AvatarProps} props */
export function Avatar({ photoUrl }) {
  return html`
    <div
      className="t-theme-avatar"
      style=${{ backgroundImage: `url(${photoUrl})` }}
    />
  `;
}
