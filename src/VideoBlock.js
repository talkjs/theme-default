import { html, formatFilesize } from "@talkjs/components/theming";
/** @import { VideoBlockProps } from "@talkjs/components/theming"; */
import { Icon } from "./Icon.js";

/** @param {VideoBlockProps} props */
export function VideoBlock({ block, downloadUrl }) {
  const width = block.width || 1;
  const height = block.height || 1;

  return html`
    <div className="t-theme-video-block">
      <div className="t-root">
        <!-- We are using media fragments in the src as a workaround to iOS Safari -->
        <!-- not showing the video preview properly. See: https://muffinman.io/blog/hack-for-ios-safari-to-display-html-video-thumbnail/ -->
        <video
          className="t-video"
          controls
          style=${{ aspectRatio: `${width}/${height}` }}
          preload="metadata"
          src=${`${block.url}#t=0.1`}
          playsInline
        ></video>
      </div>

      <a href=${downloadUrl} className="t-body-text">
        <${Icon} className="download-icon" type="download" />
        <span>${block.filename}</span>
        <span className="t-filesize"> (${formatFilesize(block.size)})</span>
      </a>
    </div>
  `;
}
