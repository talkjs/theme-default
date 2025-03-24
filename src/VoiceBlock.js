import { AudioPlayer, html, getFilename } from "@talkjs/components/theming";
/** @import { VoiceBlockProps } from "@talkjs/components/theming"; */

/** @param {VoiceBlockProps} props */
export function VoiceBlock({ block }) {
  return html`<${AudioPlayer} className="t-theme-voice-block" src=${block.url} filename=${getFilename(block)} />`;
}
