// data
const playlist = {
    title: 'Rammstein',
    coverImage: './assets/img/',
    audioSrc:  './assets/audio/',
}

// render

const wrapperPage = document.createElement('div');
wrapperPage.classList.add('wrapper_page');
document.body.appendChild(wrapperPage);

const wrapperPlayer = document.createElement('div');
wrapperPlayer.classList.add('wrapper_player');
wrapperPage.appendChild(wrapperPlayer);


renderPlaylist(playlist);
function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering);
    renderTrack(playlistForRendering.tracks[0]);
    renderTrack(playlistForRendering.tracks[1]);
}


function renderPlaylistHeader(inputPlaylistForRendering){
    // здесь логика отрисовки шапки "входного" плейлиста
}
function renderTrack(inputTrackForRendering){
    // здесь логика отрисовки "входного" трека
}
