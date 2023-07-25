// parnt class
class Media {
    constructor(info) {
      this.publishDate = info.publishDate;
      this.name = info.name;
    }
  }
  
  // chid class
  
  class Song extends Media {
    constructor(songData) {
      super(songData);
      this.artist = songData.artist;
    }
  }
  
  const mySong = new Song({
    artist: "Queen",
    name: "Bohenian Rhapsody",
    publishDate: 1975,
  });
  
  console.log(mySong);
  