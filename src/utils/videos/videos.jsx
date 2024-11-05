import video from '../../assets/video/ford_commercial.mp4';

function VideoHome() {
  return (
    <video
      src={video}
      className="video__commercial"
      autoPlay
      muted
      loop
    ></video>
  )
}

export { VideoHome }