import { html } from "@talkjs/components/theming";

/**
 * @typedef {{
 *   photoUrl: string;
 *   float: "left" | "right";
 * }} Props
 */

/** @param {Props} props */
export function Avatar({ photoUrl, float }) {
  return html`
    <div
      className="t-theme-avatar"
      style=${{
      float,
      backgroundImage: `url(${photoUrl})`,
    }}
    />
  `;
}
