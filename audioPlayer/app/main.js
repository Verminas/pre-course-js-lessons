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
    renderPlaylistHeader(playlistForRendering.playListInfo, wrapperPlayer);
    playlistForRendering.tracks.forEach(track => renderTrack(track, wrapperPlayer));
}

function renderPlaylistHeader(playlistForRendering, wrapperPlaylist){
    const playListTitleElement = document.createElement('h1');
    playListTitleElement.append(playlistForRendering.title);

    const playListImageElement = document.createElement('img');
    playListImageElement.src = playlistForRendering.coverImgUrl;
    playListImageElement.classList.add('playListImage');

    const tracksListElement = document.createElement('ul');

    wrapperPlaylist.append(playListTitleElement, playListImageElement, tracksListElement);
}
function renderTrack(track, wrapper){
    const trackElement = document.createElement('li');
    trackElement.classList.add('track');
    const trackImage = document.createElement('img');
    trackImage.src = track.trackCoverImageUrl;
    trackImage.classList.add('trackImage');
    const wrapperInfoTrack = document.createElement('div');
    wrapperInfoTrack.classList.add('wrapper_info_track');
    const trackTitle = document.createElement('h2');
    const artistName = document.createElement('h3');
    const trackAudio = document.createElement('audio');
    trackAudio.src = track.trackFileUrl;
    trackAudio.classList.add('trackAudio');
    trackAudio.controls = true;

    trackTitle.append(track.trackTitle);
    artistName.append(track.artistName);
    wrapperInfoTrack.append(trackTitle, artistName);
    trackElement.append(trackImage, wrapperInfoTrack, trackAudio);
    wrapper.append(trackElement);
}


