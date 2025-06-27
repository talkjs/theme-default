import { AudioPlayer, html } from "@talkjs/react_components/theming";
/** @import { VoiceBlockProps } from "@talkjs/react_components/theming"; */

/** @param {VoiceBlockProps} props */
export function VoiceBlock({ block }) {
  return html`<${AudioPlayer}
    className="t-theme-voice-block"
    src=${block.url}
    filename=${block.filename}
  />`;
}
