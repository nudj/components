const React = require('react')
const ReactHtml5Video = require('react-html5video')

const IconAction = require('../icon-action')
const ButtonContainer = require('../button-container')
const { css, mergeStyleSheets } = require('../../css')
const defaultStyleSheet = require('./style.css')

const {
  default: videoConnect,
  apiHelpers: { togglePause }
} = ReactHtml5Video

const Video = (props) => {
  const {
    styleSheet,
    video: {
      paused
    },
    onPlayPauseClick,
    ...rest
  } = props

  const style = mergeStyleSheets(defaultStyleSheet, styleSheet)

  return (
    <div className={css(style.root)}>
      <video
        {...rest}
        className={css(style.video)}
        onClick={onPlayPauseClick}
      >
        {props.children}
      </video>
      <ButtonContainer
        onClick={onPlayPauseClick}
        style={[
          style.controls,
          !paused && style.controlsOnlyOnHover
        ]}
        aria-label={paused ? 'Play video' : 'Pause video'}
      >
        <IconAction
          iconName={paused ? 'play' : 'pause'}
          Component='div'
          volume='cheer'
        />
      </ButtonContainer>
    </div>
  )
}

Video.defaultProps = {
  muted: true
}

module.exports = videoConnect(
  Video,
  ({ readyState, ...rest }) => {
    let loading
    if (typeof navigator !== 'undefined') {
      const minRequiredState = (/iPad|iPhone|iPod/.test(navigator.userAgent) ? 1 : 4)
      loading = readyState < minRequiredState
    } else {
      loading = false
    }

    return {
      video: {
        readyState,
        loading,
        ...rest
      }
    }
  },
  (videoEl, state) => ({
    onPlayPauseClick: () => togglePause(videoEl, state)
  })
)
