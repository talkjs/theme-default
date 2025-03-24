import { html, makeTimer } from "@talkjs/components/theming";
/** @import * as types from "@talkjs/components/theming"; */
import { useEffect, useState } from "react";

/**
 * @typedef {{
 *   className?: string;
 *   t: types.Translation;
 *   locale: string;
 *   timestamp: number;
 * }} Props
 */

/** @param {Props} props */
export function TimeAgo({ timestamp, locale, t }) {
  // Turns `timestamp` into a long, informative, locale specific datetime string
  const absoluteDateTimeString = new Date(timestamp).toLocaleString(locale, {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const [time, setTime] = useState({ long: "", short: "" });

  useEffect(() => {
    const timer = makeTimer(timestamp, { t, locale });
    setTime(timer.currentValue());
    timer.subscribe((time) => setTime(time));

    return () => {
      timer.cleanup();
    };
  }, []);

  return html`
    <span className="t-theme-time-ago">
      <span role="time" title=${absoluteDateTimeString} aria-label=${time.long}>
        <span aria-hidden="true">${time.short}</span>
      </span>
    </span>
  `;
}
