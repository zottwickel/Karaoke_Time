/* These functions return HTML to be added as users interact with the app */

function setUp() {
    return `
        <main>
            <section id="call">
                <h1>Karaoke Time</h1>
                <form id="search">
                    <label for="song">Song name</label><br>
                    <input class="input" id="song" type="text" required><br>
                    <label for="artist">Artist name</label><br>
                    <input class="input" id="artist" type="text" required><br>
                    <input id="submit" type="submit" value="Search">
                </form>
            </section>
            <section id="response">
                <div class="video">
                </div>
                <div class="lyrics">
                </div>
            </section>
        </main>
    `;
}

function lyrics(lyricObject) {
    return `
        <div class="heading">
            <h2>${lyricObject.song}</h2>
            <h3>${lyricObject.artist}</h3>
        </div>
        <div class="text">
            <p>${lyricObject.lyrics}</p>
        </div>
    `;
}

function video(videoId) {
    if (window.screen.width >= 630) {
        return `<iframe id="player" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    return `<iframe id="player" width="250" height="140.625" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}