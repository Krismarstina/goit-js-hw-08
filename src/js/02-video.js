import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

const onTimeUpdate = function (data) {
  let time = data.seconds;
  localStorage.setItem('videoplayer-current-time', time);
};

function fromStopTime() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    iframePlayer.setCurrentTime(
      localStorage.getItem('videoplayer-current-time')
    );
  }
}

fromStopTime();
iframePlayer.on('timeupdate', throttle(onTimeUpdate, 1000));
