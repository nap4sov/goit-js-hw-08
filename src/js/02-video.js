
const vimeoPlayerRef = document.querySelector('#vimeo-player');
const iframePlayer = new Vimeo.Player(vimeoPlayerRef);


iframePlayer.on('timeupdate', onVideoPlaying)

function onVideoPlaying(data) {
    videoPlayerData['videoplayer-current-time'] = data.seconds;
}

