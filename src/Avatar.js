import { html } from "@talkjs/react-components/theming";

/**
 * @typedef {{
 *   photoUrl: string;
 * }} Props
 */

/** @param {Props} props */
export function Avatar({ photoUrl }) {
  return html`
    <div
      className="t-theme-avatar"
      style=${{ backgroundImage: `url(${photoUrl})` }}
    />
  `;
}
