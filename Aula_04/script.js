var listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/thumb/6/69/The_Avengers_Cartaz.jpg/250px-The_Avengers_Cartaz.jpg",
    "https://br.web.img2.acsta.net/pictures/15/02/24/18/27/528824.jpg", "https://upload.wikimedia.org/wikipedia/pt/5/53/Captain_America_Civil_War_poster.jpg",
    "https://www.embarquenaviagem.com/wp-content/uploads/2018/04/poster-Guerra-Infinita.jpg", "https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg"
]

for (let i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
}
