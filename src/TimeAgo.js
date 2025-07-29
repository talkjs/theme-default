import { html, useTimeAgo } from "@talkjs/react-components/theming";
/** @import * as types from "@talkjs/react-components/theming"; */

/**
 * @typedef {{
 *   className?: string;
 *   t: types.Translation;
 *   timestamp: number;
 * }} Props
 */

/** @param {Props} props */
export function TimeAgo({ timestamp, t }) {
  // Turns `timestamp` into a long, informative, locale specific datetime string
  const absoluteDateTimeString = new Date(timestamp).toLocaleString(t.locale, {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const time = useTimeAgo(timestamp, t);

  return html`
    <span className="t-theme-time-ago">
      <span role="time" title=${absoluteDateTimeString} aria-label=${time.long}>
        <span aria-hidden="true">${time.short}</span>
      </span>
    </span>
  `;
}
