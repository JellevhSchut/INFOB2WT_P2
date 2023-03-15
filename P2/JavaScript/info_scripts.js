       
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
[abhijat_Joshi, vidhu_Vinoc_Chopra], [aamir_Khan, mona_Singh, mona_Singh, kareena_Kapoor, madhaven, sharman_Joshi, omi_Vaidya], 
"https://www.imdb.com/title/tt1187043/mediaviewer/rm1847834624?ref_=ttmi_mi_all_pos_21", "https://www.youtube.com/watch?v=K0eDlFX9GMc", 
"Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them idots.");
