import { Editor, html } from "@talkjs/react-components/theming";
/** @import * as types from "@talkjs/react-components/theming"; */
import { Icon } from "./Icon.js";

/**
 * @typedef {{
 *   t: types.Translation;
 *   conversation: types.ConversationSnapshot;
 *   editor: types.EditorController;
 *   permissions: types.UserPermissions;
 * }} Props
 */

/** @param {Props} props */
export function TextForm({ t, conversation, editor, permissions, device }) {
  if (conversation.access === "Read") {
    return html`
      <div className="t-theme-text-form">
        <div className="t-readonly">
          ${t.ENTRYBOX_PLACEHOLDER_CHAT_READONLY}
        </div>
      </div>
    `;
  }

  return html`
    <div className="t-theme-text-form">
      <div className="t-textbox-column">
        <${Editor} placeholder=${t.ENTRYBOX_PLACEHOLDER} />

        <div className="t-button-overlay">
          ${editor.isEmpty &&
          permissions.canShareLocation &&
          html`<button
            className="t-location-button"
            t-kind="icon-button"
            aria-label=${t.UPLOAD_SHARE_LOCATION}
            title=${t.UPLOAD_SHARE_LOCATION}
            onClick=${() => editor.shareLocation()}
          >
            <${Icon} type="locationPin" />
          </button>`}
          ${editor.isEmpty &&
          permissions.canShareFile &&
          html`<button
            className="t-attachment-button"
            t-kind="icon-button"
            aria-label=${t.UPLOAD_SEND_FILE}
            title=${t.UPLOAD_SEND_FILE}
            onClick=${() => editor.attachFile()}
          >
            <${Icon} type="attach" />
          </button>`}
          ${device.supportsEmojiPicker &&
          !device.isMobile &&
          html`<button
            className="t-emoji-button"
            t-kind="icon-button"
            aria-label="Insert an emoji"
            title="Insert an emoji"
            onClick=${() => editor.toggleEmojiPicker()}
          >
            <${Icon} type=${editor.showEmojiPicker ? "close" : "emoji"} />
          </button>`}
        </div>
      </div>

      <div className="t-send-column">
        <button
          className="t-send-button"
          aria-label=${t.SEND_BUTTON_TEXT}
          title=${t.SEND_BUTTON_TEXT}
          onClick=${() => editor.send()}
        >
          <${Icon} type="send" />
        </button>
      </div>
    </div>
  `;
}
