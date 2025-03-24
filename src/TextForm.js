import { Editor, html } from "@talkjs/components/theming";
/** @import * as types from "@talkjs/components/theming"; */
import { Icon } from "./Icon.js";

/**
 * @typedef {{
 *   conversation: types.ConversationSnapshot;
 *   editor: types.EditorController;
 *   t: types.Translation;
 * }} Props
 */

/** @param {Props} props */
export function TextForm({ t, conversation, editor }) {
  if (conversation.access === "Read") {
    return html`
      <div className="t-theme-text-form">
        <div className="t-readonly">${t.ENTRYBOX_PLACEHOLDER_CHAT_READONLY}</div>
      </div>
    `;
  } else if (conversation.access === "None") {
    return html`
      <div className="t-theme-text-form">
        <div className="t-readonly">${t.ENTRYBOX_PLACEHOLDER_CHAT_CLOSED}</div>
      </div>
    `;
  }

  return html`
    <div className="t-theme-text-form">
      <div className="t-textbox-column">
        <${Editor} placeholder=${t.ENTRYBOX_PLACEHOLDER} />
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
