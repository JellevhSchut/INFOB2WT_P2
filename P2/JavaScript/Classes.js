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
  constructor(name, yearOfBirth, booksWritten) { 
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

   addToBody() {
    // main element
    var mainpart = document.createElement("main");
    document.getElementsByTagName("body")[0].append(mainpart);

    // article met de titel als heading
    var article = document.createElement("article");
    var title = document.createElement("h1");
    title.innerText = this.title;
    article.append(title);

    // section, h2 en p voor Plot, Director en Stars.
    var sectionPlot = document.createElement("section");
    var h2Plot = document.createElement("h2");
    h2Plot.innerText = "Plot";
    sectionPlot.append(h2Plot);
    var pPlot = document.createElement("p");
    pPlot.innerText = this.plot;
    h2Plot.append(pPlot);

    var sectionDirector = document.createElement("section");
    var h2Director = document.createElement("h2");
    h2Director.innerText = "Director";
    sectionDirector.append(h2Director);
    // tooltip voor de director
    var pDirector = document.createElement("p");
    var a = document.createElement("a");
    a.innerText = this.director.name;
    a.title = this.director.name + " has also directed: " + this.director.moviesDirected.join(", ");
    pDirector.append(a);
    h2Director.append(pDirector);

    var sectionWriters = document.createElement("section");
    var h2Writers = document.createElement("h2");
    h2Writers.innerText = "Writers";
    sectionWriters.append(h2Writers);
    // tooltips voor de writers
    var pWriters = document.createElement("p");
    this.writers.forEach((writer) => {
      var a = document.createElement("a");
      a.innerText = writer.name;
      a.title = writer.name + " has also written: " + writer.booksWritten.join(", ");
      a.href = writer.photoLink;
      pWriters.append(a);
      pWriters.append(", ");
    });
    pWriters.removeChild(pWriters.lastChild); // laatste komma weghalen
    h2Writers.append(pWriters);



    var sectionStars = document.createElement("section");
    var h2Stars = document.createElement("h2");
    h2Stars.innerText = "Stars";
    sectionStars.append(h2Stars);
    // tooltips voor de actors
    var pStars = document.createElement("p");
    this.stars.forEach((star) => {
        var a = document.createElement("a");
        a.innerText = star.name;
        a.title = star.name + " has previously starred in: " + star.moviesStarred.join(", ");
        a.href = star.photoLink;
        pStars.append(a);
        pStars.append(", ");
    });
    pStars.removeChild(pStars.lastChild); // laatste komma weghalen
    h2Stars.append(pStars);

  


    // section voor poster en trailer
    var sectionPosterTrailer = document.createElement("section");
    var imgPoster = document.createElement("img");
    imgPoster.src = this.poster;
    var iframeTrailer = document.createElement("iframe");
    iframeTrailer.src = this.trailer;
    iframeTrailer.width = "560";
    iframeTrailer.height = "315";
    sectionPosterTrailer.append(imgPoster);
    sectionPosterTrailer.append(iframeTrailer);
    article.append(sectionPosterTrailer);


    // sections appenden aan article
    article.append(sectionPlot);
    article.append(sectionDirector);
    article.append(sectionWriters);
    article.append(sectionStars);

  

    // article appenden aan main
    mainpart.append(article);
  }
}

//test
const test2 = new Movie("data","data","data","data","data","data","data","data")
//test2.addToBody();


//nieuwe Actors, Directors, Writers and movies aanmaken. 
let aamir_Khan = new Actor("Aamir Khan", 1965, ["Koi Jaane Na", "Thugs of Hindostan", "Secret Superstar", "Dil Dhadakne Do", "Talaash", "Dhobi Ghat"], "https://www.imdb.com/name/nm0451148/");
let mona_Singh = new Actor("Mona Singh", 1981, ["Ek Chup", "Pushpa Impossible", "Laal Singh Chaddha", "Glitch", "Lutf"], "https://www.imdb.com/name/nm1587175/");
let kareena_Kapoor = new Actor("Kareena Kapoor", 1980, ["Jab we Met", "Omkara", "Ra.One", "Laal Singh Chaddha", "Angrezi Medium"], "https://www.imdb.com/name/nm0004626/");
let madhaven = new Actor("Madhaven", 1970, ["Vikdram Vedha", "Breathe", "Irudhi Suttru", "Laththi", "Meri Awas Suno", "Zero"], "https://www.imdb.com/name/nm0534856/");
let sharman_Joshi = new Actor("Sharman Joshi", 1979, ["Rang De Basanti", "Life in a Metro", "Fuddu", "3 Storeys", "Mission Mangal", "Baarish"], "https://www.imdb.com/name/nm0430817/");
let omi_Vaidya = new Actor("Omi Vaidya", 1982, ["Astro", "Tie the Knot", "Blackmail", "Oak Tree Road", "Brown Nation"], "https://www.imdb.com/name/nm1437925/");

let rajkumar_Hirani = new Director("Rajkumar Hirani", 1962, ["Sanju", "PK", "Lage Raho Munna Bhai", "Munna Bhai M.B.B.S."]);

let abhijat_Joshi = new Writer("Abhijat Joshi", 1969, ["Shikara", "Sanju", "Wazir", "Broken Horses",]);
let vidhu_Vinoc_Chopra = new Writer("Vidhu Vinoc Chopra", 1952, ["Taalismaan", "Shikara", "Wazir", "Broken Horses"]);

let three_Idiots = new Movie("3 Idiots", "Comedy", 2009, rajkumar_Hirani, 
[abhijat_Joshi, vidhu_Vinoc_Chopra], [aamir_Khan, mona_Singh, kareena_Kapoor, madhaven, sharman_Joshi, omi_Vaidya], 
"../Images/img.jpg", "https://www.youtube.com/embed/K0eDlFX9GMc", 
"Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them idots.");

three_Idiots.addToBody();
