import { html, Text } from "@talkjs/components/theming";
/** @import { TextBlockProps } from "@talkjs/components/theming"; */

/** @param {TextBlockProps} props */
export function TextBlock({ block }) {
  return html`
    <div className="t-theme-text-block">
      <${Text} block=${block} />
    </div>
  `;
}
