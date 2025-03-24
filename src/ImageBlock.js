import { html, formatFilesize, getFilename } from "@talkjs/components/theming";
/** @import { ImageBlockProps } from "@talkjs/components/theming"; */
import { Icon } from "./Icon.js";

/** @param {ImageBlockProps} props */
export function ImageBlock({ block }) {
  const width = block.width || 1;
  const height = block.height || 1;

  return html`
    <div className="t-theme-image-block">
      <a href=${block.url} className="t-root" target="_blank" rel="noopener noreferrer">
        <img src=${block.url} className="t-image" style=${{ aspectRatio: `${width}/${height}` }} />
      </a>

      <a href=${block.url} className="t-body-text">
        <${Icon} className="download-icon" type="download" />
        <span>${getFilename(block)}</span>
        <span className="t-filesize"> (${formatFilesize(block.size)})</span>
      </a>
    </div>
  `;
}
