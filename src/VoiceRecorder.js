import { html, formatDuration, Waveform } from "@talkjs/react-components";
/** @import { VoiceRecorderProps } from "@talkjs/react-components" */

/**
 * VoiceRecorder renders during active voice recording.
 * Shows the waveform visualization and recording duration.
 *
 * @param {VoiceRecorderProps} props
 */
export function VoiceRecorder(props) {
  const { common, voiceRecorder } = props;
  const { t, theme } = common;
  const { Icon } = theme;

  return html`
    <div className="t-theme-voice-recorder">
      <button
        className="t-close-button"
        t-kind="icon-button"
        aria-label=${t.ARIA_CANCEL_RECORDING}
        title=${t.ARIA_CANCEL_RECORDING}
        onClick=${() => voiceRecorder.cancel()}
      >
        <${Icon} type="close" common=${common} />
      </button>

      <div className="t-textbox-column t-waveform-wrapper">
        <${Waveform} className="t-waveform" voiceRecorder=${voiceRecorder} />
        <span className="t-duration"
          >${formatDuration(voiceRecorder.duration)}</span
        >
      </div>

      <div className="t-send-column">
        <button
          className="t-stop-button"
          t-kind="icon-button"
          aria-label=${t.ARIA_STOP_RECORDING}
          title=${t.ARIA_STOP_RECORDING}
          onClick=${() => voiceRecorder.stop()}
        >
          <${Icon} type="stop" common=${common} className="t-stop-icon" />
        </button>
      </div>
    </div>
  `;
}
