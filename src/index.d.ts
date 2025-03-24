import type React from "react";
import type * as types from "@talkjs/components/theming";

export declare const AudioBlock = (props: types.AudioBlockProps) => React.ReactElement;
export declare const FileBlock = (props: types.FileBlockProps) => React.ReactElement;
export declare const LocationBlock = (props: types.LocationBlockProps) => React.ReactElement;
export declare const Icon = (props: types.IconProps) => React.ReactElement;
export declare const MessageActionMenu = (props: types.MessageActionMenuProps) => React.ReactElement;
export declare const TextBlock = (props: types.TextBlockProps) => React.ReactElement;
export declare const VoiceBlock = (props: types.VoiceBlockProps) => React.ReactElement;
export declare const Message = (props: types.MessageProps) => React.ReactElement;
export declare const VideoBlock = (props: types.VideoBlockProps) => React.ReactElement;
export declare const ChatHeader = (props: types.ChatHeaderProps) => React.ReactElement;
export declare const ImageBlock = (props: types.ImageBlockProps) => React.ReactElement;
export declare const MessageField = (props: types.MessageFieldProps) => React.ReactElement;

export declare function ReferencedMessage(props: {
  referencedMessage: types.ReferencedMessageSnapshot;
  t: types.Translation;
}): React.ReactElement;

export declare function TimeAgo(props: { t: types.Translation; locale: string; timestamp: number }): React.ReactElement;

export declare function Avatar(props: { photoUrl: string; float: "left" | "right" }): React.ReactElement;

export declare function GroupChatImage(props: { participants: types.UserSnapshot[] }): React.ReactElement;

export declare function ReplyBar(props: {
  chatbox: types.Chatbox;
  referencedMessage: types.MessageSnapshot;
  t: types.Translation;
}): React.ReactElement;

export declare function ConversationImage(props: {
  conversation: types.ConversationSnapshot;
  participants: types.UserSnapshot[];
  currentUser: types.UserSnapshot;
}): React.ReactElement;

export declare function TextForm(props: {
  conversation: types.ConversationSnapshot;
  referencedMessage?: types.MessageSnapshot;
  chatbox: types.Chatbox;
  t: types.Translation;
}): React.ReactElement;
