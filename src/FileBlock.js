import { html, formatFilesize } from "@talkjs/react-components/theming";
/** @import { FileBlockProps } from "@talkjs/react-components/theming"; */
import { Icon } from "./Icon.js";

/** @param {FileBlockProps} props */
export function FileBlock({ block, downloadUrl }) {
  return html`
    <div className="t-theme-file-block">
      <a className="t-body-text" href=${downloadUrl}>
        <${Icon} type="attachment" className="t-attachment-icon" />
        <span className="t-filename">${block.filename}</span>
        <span className="t-filesize"> (${formatFilesize(block.size)})</span>
      </a>
    </div>
  `;
}
