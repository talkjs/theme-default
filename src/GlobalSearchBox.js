import { html, SearchInput } from "@talkjs/react-components";
/** @import { GlobalSearchBoxProps } from "@talkjs/react-components"; */

/** @param {GlobalSearchBoxProps} props */
export function GlobalSearchBox(props) {
  const { common, query, setQuery, cancel } = props;
  const { t } = common;
  const { Icon } = common.theme;

  return html`
    <div className="t-theme-global-search-box">
      <${SearchInput}
        value=${query}
        onChange=${(e) => setQuery(e.target.value)}
        className="t-input"
        placeholder=${t.SEARCH_PLACEHOLDER_TEXT}
      />
      ${query.length > 0 &&
      html`
        <button
          type="button"
          onClick=${cancel}
          aria-label=${t.ARIA_LEAVE_SEARCH_MODE}
          className="t-clear"
        >
          <${Icon} type="close" common=${common} />
        </button>
      `}
      ${query.length === 0 &&
      html` <${Icon} className="t-submit" type="search" common=${common} /> `}
    </div>
  `;
}
