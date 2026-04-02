import { html, SearchInput } from "@talkjs/react-components";
/** @import { ChatSearchBoxProps } from "@talkjs/react-components" */

/** @param { ChatSearchBoxProps } props */
export function ChatSearchBox(props) {
  const { t, chatbox, theme, chatSearchState } = props.common;
  const { Icon } = theme;

  let labelText;
  if (chatSearchState === "searching") {
    labelText = t.SEARCH_SEARCHING;
  } else if (chatSearchState === "noResults") {
    labelText = t.SEARCH_NO_RESULTS;
  } else if (chatSearchState === "noMoreResults") {
    labelText = t.SEARCH_NO_MORE_RESULTS;
  }

  const onChange = (event) => {
    const value = event.target.value.trim();

    const strings = value
      .split(/\s+/)
      .map((word) => word.trim())
      .filter((word) => word);
    chatbox.setHighlightedStrings(strings);
  };

  return html`
    <div className="t-theme-chat-search-box">
      <button
        className="t-button t-back-button"
        aria-label=${t.ARIA_LEAVE_SEARCH_MODE}
        onClick=${() => chatbox.toggleSearchBox()}
      >
        <${Icon} type="back" />
      </button>

      <div className="t-search-field">
        <label
          htmlFor="t-search-input"
          t-label-text=${labelText ? "on" : "off"}
        >
          ${labelText}
        </label>
        <${SearchInput}
          id="t-search-input"
          autoFocus
          onChange=${onChange}
          className="t-search-input"
          placeholder=${t.SEARCH_PLACEHOLDER_TEXT}
        />
      </div>

      <button
        className="t-button t-previous-button"
        aria-label=${t.ARIA_SEARCH_UP}
        disabled=${chatSearchState === "searching"}
        onClick=${() => chatbox.jumpToPreviousHighlight()}
      >
        <${Icon} type="chevronUp" />
      </button>
      <button
        className="t-button t-next-button"
        aria-label=${t.ARIA_SEARCH_DOWN}
        disabled=${chatSearchState === "searching"}
        onClick=${() => chatbox.jumpToNextHighlight()}
      >
        <${Icon} type="chevronDown" />
      </button>
    </div>
  `;
}
