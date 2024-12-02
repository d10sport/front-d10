/* eslint-disable react/prop-types */
import video from '@assets/video/ford_commercial.mp4';

function VideoHome({url}) {
  return (
    <video
      src={url != "" ? url : video}
      className="video__commercial"
      autoPlay
      muted
      loop
    ></video>
  )
}

export { VideoHome }