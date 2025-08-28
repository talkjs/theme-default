import { html, EmojiPicker, Editor } from "@talkjs/react-components/theming";
/** @import { MessageFieldProps } from "@talkjs/react-components/theming"; */
import { ReplyBar } from "./ReplyBar.js";
import { Icon } from "./Icon.js";

/** @param {MessageFieldProps} props */
export function MessageField(props) {
  const {
    conversation,
    chatbox,
    referencedMessage,
    t,
    editor,
    permissions,
    device,
    editMessageId,
  } = props;

  const mode = editMessageId ? "edit" : "send";

  const canEdit = Boolean(
    mode === "edit" && !editor.atTextLimit && editor.characterCount > 0,
  );

  const showLocationButton =
    mode === "send" && editor.isEmpty && permissions.canShareLocation;

  const showAttachmentButton =
    mode === "send" && editor.isEmpty && permissions.canShareFile;

  const showEmojiButton =
    mode === "send" && device.supportsEmojiPicker && !device.isMobile;

  return html`
    <div className="t-theme-message-field" t-mode=${mode}>
      ${editor.showEmojiPicker && html`<${EmojiPicker} colorScheme="light" />`}
      ${referencedMessage &&
      html`<${ReplyBar}
        chatbox=${chatbox}
        referencedMessage=${referencedMessage}
        t=${t}
      />`}

      <div className="t-wrapper">
        <div className="t-text-form">
          ${conversation.access === "Read" &&
          html`
            <div className="t-readonly">
              ${t.ENTRYBOX_PLACEHOLDER_CHAT_READONLY}
            </div>
          `}
          ${conversation.access === "ReadWrite" &&
          html`
            <div className="t-textbox-column">
              <${Editor} placeholder=${t.ENTRYBOX_PLACEHOLDER} />

              <div className="t-button-overlay">
                ${showLocationButton &&
                html`<button
                  className="t-location-button"
                  t-kind="icon-button"
                  aria-label=${t.UPLOAD_SHARE_LOCATION}
                  title=${t.UPLOAD_SHARE_LOCATION}
                  onClick=${() => editor.shareLocation()}
                >
                  <${Icon} type="locationPin" />
                </button>`}
                ${showAttachmentButton &&
                html`<button
                  className="t-attachment-button"
                  t-kind="icon-button"
                  aria-label=${t.UPLOAD_SEND_FILE}
                  title=${t.UPLOAD_SEND_FILE}
                  onClick=${() => editor.attachFile()}
                >
                  <${Icon} type="attach" />
                </button>`}
                ${showEmojiButton &&
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
          `}
          ${mode === "send" &&
          html`
            <div className="t-send-column">
              <button
                className="t-send-button"
                t-kind="icon-button"
                aria-label=${t.SEND_BUTTON_TEXT}
                title=${t.SEND_BUTTON_TEXT}
                onClick=${() => editor.send()}
              >
                <${Icon} type="send" />
              </button>
            </div>
          `}
          ${mode === "edit" &&
          html`
            <div className="t-edit-row">
              <button
                t-action="cancel"
                onClick=${() => chatbox.setEditing(null)}
              >
                ${t.CANCEL}
              </button>
              <button
                t-action="save"
                onClick=${() => editor.send()}
                disabled=${!canEdit}
              >
                ${t.SAVE}
              </button>
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}
