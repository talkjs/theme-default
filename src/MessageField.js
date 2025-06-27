import { html } from "@talkjs/react_components/theming";
/** @import { MessageFieldProps } from "@talkjs/react_components/theming"; */
import { ReplyBar } from "./ReplyBar.js";
import { TextForm } from "./TextForm.js";

/** @param {MessageFieldProps} props */
export function MessageField(props) {
  const { conversation, chatbox, referencedMessage, t, editor, permissions } =
    props;

  return html`
    <div className="t-theme-message-field">
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
        />
      </div>
    </div>
  `;
}
