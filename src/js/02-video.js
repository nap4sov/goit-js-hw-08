import throttle from 'lodash.throttle';

const vimeoPlayerRef = document.querySelector('#vimeo-player');
const iframePlayer = new Vimeo.Player(vimeoPlayerRef);
const currentTimeKey = "videoplayer-current-time"

iframePlayer.on('timeupdate', throttle(writeCurrentTime, 1000))
iframePlayer.setCurrentTime(localStorage.getItem(currentTimeKey))
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

function writeCurrentTime(data) {
    localStorage.setItem(currentTimeKey, data.seconds)
}


