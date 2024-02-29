// data
const playlist = {
    playListId: '1',
    playListInfo: {
        title: 'Hip-Hop hits',
        coverImgUrl: 'assets/img/hip-hop-cover.webp',
        totalInfo: {
            totalTrackCount: 4,
            totalTrackDurationInSec: 733,
        }
    },
    tracks: [
        {
            trackTitle: 'Rap God',
            artistName: 'Eminem',
            trackCoverImageUrl: 'assets/img/rap_god.jpg',
            trackFileUrl: 'assets/audio/rap_god.mp3',
            trackDurationInSec: 333,
            trackId: '10',
        },
        {
            trackTitle: 'In da club',
            artistName: '50cent',
            trackCoverImageUrl: 'assets/img/in_da_club.jpg',
            trackFileUrl: 'assets/audio/in_da_club.mp3',
            trackDurationInSec: 333,
            trackId: '11',
        },
        {
            trackTitle: 'Crew',
            artistName: 'GoldLink',
            trackCoverImageUrl: 'assets/img/crew.jpeg',
            trackFileUrl: 'assets/audio/in_da_club.mp3',
            trackDurationInSec: 333,
            trackId: '11',
        },
        {
            trackTitle: 'All eyes on me ',
            artistName: '2pac',
            trackCoverImageUrl: 'assets/img/all_eyes.png',
            trackFileUrl: 'assets/audio/rap_god.mp3',
            trackDurationInSec: 333,
            trackId: '11',
        },
    ],
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
