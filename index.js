const lyricUrl = 'https://api.lyrics.ovh/v1';
const youTubeUrl = 'https://www.googleapis.com/youtube/v3/search?videoLicense=creativeCommon&videoEmbeddable=true&type=video&part=snippet&key=AIzaSyDrPwzjDJYTsSCCCWaxOJP7i-FIU6pKszU&q=';

function titlize(str) {
    return str.replace(/\b\w+/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

function clearSpace() {
    $('.video').empty();
    $('.lyrics').empty();
}

function searchForLyrics(song, artist) {
    fetch(`${lyricUrl}/${artist}/${song}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => {
            let lyricObject = responseJson;
            lyricObject.song = titlize(song);
            lyricObject.artist = titlize(artist);
            lyricObject.lyrics = lyricObject.lyrics.replace(/\n/g, '<br>');
            if (lyricObject.error == true) {
                throw new Error(lyricObject.error);
            }
            $('.lyrics').append(lyrics(lyricObject));
            $('#response').addClass('response');
            fetch(`${youTubeUrl}${song} ${artist}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error(response.statusText);
                })
                .then(responseJson => {
                    let videoId = responseJson.items[0].id.videoId;
                    $('.video').append(video(videoId));
                })
                .catch(error => alert(`Something went wrong with the video: ${error.message}`));
        })
        .catch(error => alert(`Something went wrong with the lyrics: ${error.message}`));
}

function watchForm () {
    $('#search').on('submit', function(e) {
        e.preventDefault();
        let artist = $('#artist').val();
        let song = $('#song').val();
        clearSpace();
        searchForLyrics(song, artist);
    });
}

function readySearch() {
    $('body').append(setUp());
    watchForm();
}

function init() {
    readySearch();
}

$(init);