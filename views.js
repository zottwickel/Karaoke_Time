function setUp() {
    return `
        <main>
            <section>
                <h1>Karaoke Time</h1>
                <form id="search">
                    <label for="song">Song name:</label><br>
                    <input id="song" type="text"><br>
                    <label for="artist">Artist name:</label><br>
                    <input id="artist" type="text"><br>
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
    `
}

function lyrics(lyricObject) {
    return `
        <div class="heading">
            <h2>${lyricObject.song}</h2>
            <h3>${lyricObject.artist}</h2>
        </div>
        <div class="text">
            <p>${lyricObject.lyrics}</p>
        </div>
    `
}

function video(videoId) {
    return `
        <iframe width="320" height="180" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
}