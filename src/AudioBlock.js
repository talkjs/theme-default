import { AudioPlayer, formatFilesize, html } from "@talkjs/react-components/theming";
/** @import { AudioBlockProps } from "@talkjs/react-components/theming"; */
import { Icon } from "./Icon.js";

/** @param {AudioBlockProps} props */
export function AudioBlock({ block, downloadUrl }) {
  return html`
    <div className="t-theme-audio-block">
      <${AudioPlayer} src=${block.url} filename=${block.filename} />

      <a className="t-body-text" href=${downloadUrl}>
        <${Icon} type="attachment" className="t-attachment-icon" />
        <span className="t-filename">${block.filename}</span>
        <span className="t-filesize"> (${formatFilesize(block.size)})</span>
      </a>
    </div>
  `;
}
