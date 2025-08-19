import { html, EmojiPicker } from "@talkjs/react-components/theming";
/** @import { MessageFieldProps } from "@talkjs/react-components/theming"; */
import { ReplyBar } from "./ReplyBar.js";
import { TextForm } from "./TextForm.js";

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
  } = props;

  return html`
    <div className="t-theme-message-field">
      ${editor.showEmojiPicker && html`<${EmojiPicker} colorScheme="light" />`}
      ${referencedMessage &&
      html`<${ReplyBar}
        chatbox=${chatbox}
        referencedMessage=${referencedMessage}
        t=${t}
      />`}

      <div className="t-wrapper">
        <${TextForm}
          t=${t}
          conversation=${conversation}
          editor=${editor}
          permissions=${permissions}
          device=${device}
        />
      </div>
    </div>
  `;
}
