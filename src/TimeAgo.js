import { html, TimeAgoTimer } from "@talkjs/components/theming";
/** @import * as types from "@talkjs/components/theming"; */
import { useLayoutEffect, useState } from "react";

/**
 * @typedef {{
 *   className?: string;
 *   t: types.Translation;
 *   locale: string;
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

  const [time, setTime] = useState({ long: "", short: "" });

  useLayoutEffect(() => {
    const timer = new TimeAgoTimer(timestamp, t);
    setTime(timer.currentValue());

    const cleanup = timer.onTick((timeAgo) => setTime(timeAgo));
    return cleanup;
  }, []);

  return html`
    <span className="t-theme-time-ago">
      <span role="time" title=${absoluteDateTimeString} aria-label=${time.long}>
        <span aria-hidden="true">${time.short}</span>
      </span>
    </span>
  `;
}
