import { AudioPlayer, formatFilesize, getFilename, html } from "@talkjs/components/theming";
/** @import { AudioBlockProps } from "@talkjs/components/theming"; */
import { Icon } from "./Icon.js";

/** @param {AudioBlockProps} props */
export function AudioBlock(props) {
  const { block } = props;
  const filename = getFilename(block);

  return html`
    <div className="t-theme-audio-block">
      <${AudioPlayer} src=${block.url} filename=${filename} />

      <a className="t-body-text" href=${block.url}>
        <${Icon} type="attachment" className="t-attachment-icon" />
        <span className="t-filename">${filename}</span>
        <span className="t-filesize"> (${formatFilesize(block.size)})</span>
      </a>
    </div>
  `;
}
