function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
      listarFilmesNaTela(filmeFavorito);
    } else {
      console.error("Endereço do filme inválido");
    }
    document.getElementById("filme").value = "";
  }
  
  function listarFilmesNaTela(filme) {
    var elementoFilmeFav = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFav;
  }
  