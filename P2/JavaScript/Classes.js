// Classes

class Artist {
    constructor(name, yearOfBirth) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
    }
  }
  
class Director extends Artist {
  constructor(name, yearOfBirth, moviesDirected) {
    super(name, yearOfBirth);
    this.moviesDirected = moviesDirected;
  }
}

class Writer extends Artist {
  constructor(name, yearOfBirth, booksWritten) { // of scriptsWritten?
    super(name, yearOfBirth);
    this.booksWritten = booksWritten;
  }
}

class Actor extends Artist {
  constructor(name, yearOfBirth, moviesStarred, photoLink) {
    super(name, yearOfBirth);
    this.moviesStarred = moviesStarred;
    this.photoLink = photoLink;
  }

  addMe(domobject){
    var actboi = document.createElement("section")
    domobject.append(actboi);
  }
}

class Movie {

  constructor(title, genre, year, director, writers, stars, poster, trailer, plot)   {
    this.title = title;
    this.genre = genre;
    this.year = year;
    this.director = director;
    this.writers = writers;
    this.stars = stars;
    this.poster = poster;
    this.trailer = trailer;
    this.plot = plot;
  }

  addToBody(){
    var mainpart = document.createElement("main");
    mainpart.innerText = "the start of a project";
    document.getElementsByTagName("body")[0].append(mainpart);
  }
  
  addACtors(){

  }

}

const test2 = new Movie("data","data","data","data","data","data","data","data")
test2.addToBody();
