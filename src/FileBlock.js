import { html, formatFilesize, getFilename } from "@talkjs/components/theming";
/** @import { FileBlockProps } from "@talkjs/components/theming"; */
import { Icon } from "./Icon.js";

/** @param {FileBlockProps} props */
export function FileBlock({ block }) {
  return html`
    <div className="t-theme-file-block">
      <a className="t-body-text" href=${block.url}>
        <${Icon} type="attachment" className="t-attachment-icon" />
        <span className="t-filename">${getFilename(block)}</span>
        <span className="t-filesize"> (${formatFilesize(block.size)})</span>
      </a>
    </div>
  `;
}
