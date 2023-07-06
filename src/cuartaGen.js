const container = document.getElementById("cards-container");
const titleHome = document.getElementById('titleHome');

const body = document.querySelector('body');

body.style.backgroundImage = "url('../assets/img/backCuartaGen.png')"

titleHome.addEventListener('click', () => {
  window.location.href = '../pages/home.html'
})

const fetchData = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=107&offset=386");
  const data = await response.json();
  return data;
};

const getPokemons = async () => {
  const pokemons = await fetchData();
  const pokemonsList = pokemons.results;

  const pokeArr = [];

  pokemonsList.forEach((pokemon) => {
    const fetchPokemon = async () => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    };

    const everyPokemon = async () => {
      const poke = await fetchPokemon();
      const pokeList = poke;

      const imgPoke = document.createElement("img");
      imgPoke.src = pokeList.sprites.front_default;
      const imgPokeShiny = document.createElement('img');
      imgPokeShiny.src = pokeList.sprites.front_shiny;
      const idPoke = document.createElement("span");
      if(pokeList.id < 10) {
        idPoke.innerText = "00" + pokeList.id
      } else if(pokeList.id > 10 && pokeList.id < 100) {
        idPoke.innerText = "0" + pokeList.id
      } else {
        idPoke.innerText = pokeList.id
      }
      let namePoke = (document.createElement("h4").innerText = pokeList.name);
      const types = pokeList.types;

      const pokeObj = {
        img: imgPoke.src,
        imgShiny: imgPokeShiny.src,
        id: idPoke.innerText,
        h4: namePoke,
        type: types,
      };

      pokeArr.push(pokeObj);

      pokeArr.sort((a, b) => a.id - b.id)

      localStorage.setItem("pokemon4", JSON.stringify(pokeArr));
    };

    everyPokemon();

  });
};

getPokemons();

function pintarPoke() {
  const pokeStorage = JSON.parse(localStorage.getItem("pokemon4"));


  pokeStorage.forEach(pokemon => {
    const card = document.createElement("div");
    card.classList.add('card');
    const cardPadding = document.createElement('div');
    cardPadding.classList.add('cardPadding')
    const img = document.createElement('img');
    img.src = pokemon.img;
    const id = document.createElement('span');
    id.innerText = '#' + pokemon.id;
    id.style.marginTop = '15px'
    const namePoke = document.createElement('h4');
    namePoke.innerText = pokemon.h4;
    namePoke.style.marginTop = '15px'
    const typePoke = pokemon.type;

    if(img.src === pokemon.img) {
      img.addEventListener('click', () => {
        cardPadding.classList.add('rotateImg');
        img.src = pokemon.imgShiny;
      })
    }

    img.addEventListener('dblclick', () => {
      cardPadding.classList.remove('rotateImg')
      img.src = pokemon.img
    })

    cardPadding.append(img)

  card.append(cardPadding, id, namePoke)
  const types = typePoke.forEach(type => {
        let typeId = document.createElement('small');
        typeId.innerText = 'Type: ' + type.type.name
        card.append(typeId)


        if(type.type.name === 'grass') {
          card.classList.add('grass')
        }

        if(type.type.name === 'fire') {
          card.classList.add('fire');
        }

        if(type.type.name === 'water') {
          card.classList.add('water')
        }

        if(type.type.name === 'bug') {
          card.classList.add('bug')
        }

        if(type.type.name === 'normal') {
          card.classList.add('normal')
        }

        if(type.type.name === 'flying') {
          card.classList.add('fly')
        }

        if(type.type.name === 'poison') {
          card.classList.add('poison')
        }

        if(type.type.name === 'electric') {
          card.classList.add('electric')
        }

        if(type.type.name === 'ground') {
          card.classList.add('ground')
        }

        if(type.type.name === 'fairy') {
          card.classList.add('fairy')
        }

        if(type.type.name === 'psychic') {
          card.classList.add('psychic')
        }

        if(type.type.name === 'fighting') {
          card.classList.add('fight');
        }

        if(type.type.name === 'dragon') {
          card.classList.add('dragon')
        }

        if(type.type.name === 'ice') {
          card.classList.add('ice')
        }

        if(type.type.name === 'rock') {
          card.classList.add('rock')
        }

        if(type.type.name === 'ghost') {
          card.classList.add('phantom')
        }

        if(type.type.name === 'steel') {
          card.classList.add('steel');
        }

        if(type.type.name === 'dark') {
            card.classList.add('sinister');
        }

        if(card.classList.contains('fire') && card.classList.contains('fly')) {
          card.setAttribute("id", "fire-fly");
        }

        if(card.classList.contains('grass') && card.classList.contains('poison')) {
          card.setAttribute('id', 'grass-poison');
        }

        if(card.classList.contains('grass') && card.classList.contains('psychic')) {
          card.setAttribute('id', 'grass-psychic');
        }

        if(card.classList.contains('grass') && card.classList.contains('fly')) {
            card.setAttribute('id', 'grass-fly');
          }

        if(card.classList.contains('fly') && card.classList.contains('normal')) {
          card.setAttribute('id', 'normal-fly');
        }

        if(card.classList.contains('fly') && card.classList.contains('steel')) {
            card.setAttribute('id', 'fly-steel');
        }

        if(card.classList.contains('bug') && card.classList.contains('poison')) {
          card.setAttribute('id', 'bug-poison');
        }

        if(card.classList.contains('bug') && card.classList.contains('fly')) {
          card.setAttribute('id', 'bug-fly');
        }

        if(card.classList.contains('water') && card.classList.contains('psychic')) {
          card.setAttribute('id', 'water-psychic');
        }

        if(card.classList.contains('water') && card.classList.contains('poison')) {
          card.setAttribute('id', 'water-poison');
        }

        if(card.classList.contains('poison') && card.classList.contains('ground')) {
          card.setAttribute('id', 'poison-ground');
        }

        if(card.classList.contains('poison') && card.classList.contains('water')) {
            card.setAttribute('id', 'poison-water');
        }

        if(card.classList.contains('poison') && card.classList.contains('dragon')) {
            card.setAttribute('id', 'poison-dragon');
        }

        if(card.classList.contains('electric') && card.classList.contains('steel')) {
          card.setAttribute('id', 'electric-steel');
        }

        if(card.classList.contains('electric') && card.classList.contains('fly')) {
          card.setAttribute('id', 'electric-fly');
        }

        if(card.classList.contains('bug') && card.classList.contains('grass')) {
          card.setAttribute('id', 'bug-grass');
        }

        if(card.classList.contains('poison') && card.classList.contains('fly')) {
          card.setAttribute('id', 'poison-fly');
        }

        if(card.classList.contains('water') && card.classList.contains('fight')) {
          card.setAttribute('id', 'water-fight');
        }

        if(card.classList.contains('water') && card.classList.contains('ice')) {
          card.setAttribute('id', 'water-ice');
        }

        if(card.classList.contains('water') && card.classList.contains('electric')) {
            card.setAttribute('id', 'water-electric');
          }

        if(card.classList.contains('water') && card.classList.contains('fly')) {
          card.setAttribute('id', 'water-fly');
        }

        if(card.classList.contains('water') && card.classList.contains('fairy')) {
            card.setAttribute('id', 'water-fairy');
        }

        if(card.classList.contains('water') && card.classList.contains('ground')) {
            card.setAttribute('id', 'water-ground');
        }

        if(card.classList.contains('water') && card.classList.contains('dragon')) {
            card.setAttribute('id', 'water-dragon');
        }

        if(card.classList.contains('rock') && card.classList.contains('ground')) {
          card.setAttribute('id', 'rock-ground');
        }

        if(card.classList.contains('rock') && card.classList.contains('water')) {
          card.setAttribute('id', 'rock-water');
        }

        if(card.classList.contains('rock') && card.classList.contains('fly')) {
          card.setAttribute('id', 'rock-fly');
        }

        if(card.classList.contains('normal') && card.classList.contains('fairy')) {
          card.setAttribute('id', 'normal-fairy');
        }

        if(card.classList.contains('phantom') && card.classList.contains('poison')) {
          card.setAttribute('id', 'phantom-poison');
        }

        if(card.classList.contains('psychic') && card.classList.contains('fairy')) {
          card.setAttribute('id', 'psychic-fairy');
        }

        if(card.classList.contains('psychic') && card.classList.contains('fly')) {
            card.setAttribute('id', 'psychic-fly');
          }

        if(card.classList.contains('ice') && card.classList.contains('psychic')) {
          card.setAttribute('id', 'ice-psychic');
        }

        if(card.classList.contains('ice') && card.classList.contains('fly')) {
          card.setAttribute('id', 'ice-fly');
        }

        if(card.classList.contains('dragon') && card.classList.contains('fly')) {
          card.setAttribute('id', 'dragon-fly');
        }

        if(card.classList.contains('fairy') && card.classList.contains('fly')) {
            card.setAttribute('id', 'fairy-fly');
        }

        if(card.classList.contains('sinister') && card.classList.contains('fly')) {
            card.setAttribute('id', 'sinister-fly');
        }

        if(card.classList.contains('ground') && card.classList.contains('fly')) {
            card.setAttribute('id', 'ground-fly');
        }

        if(card.classList.contains('steel') && card.classList.contains('fly')) {
            card.setAttribute('id', 'steel-fly');
        }

        if(card.classList.contains('normal') && card.classList.contains('psychic')) {
            card.setAttribute('id', 'normal-psychic');
        }

        if(card.classList.contains('bug') && card.classList.contains('steel')) {
            card.setAttribute('id', 'bug-steel');
        }

        if(card.classList.contains('steel') && card.classList.contains('ground')) {
            card.setAttribute('id', 'steel-ground');
        }

        if(card.classList.contains('bug') && card.classList.contains('rock')) {
            card.setAttribute('id', 'bug-rock');
        }

        if(card.classList.contains('bug') && card.classList.contains('fight')) {
            card.setAttribute('id', 'bug-fight');
        }

        if(card.classList.contains('sinister') && card.classList.contains('ice')) {
            card.setAttribute('id', 'sinister-ice');
        }

        if(card.classList.contains('sinister') && card.classList.contains('fire')) {
            card.setAttribute('id', 'sinister-fire');
        }

        if(card.classList.contains('fire') && card.classList.contains('rock')) {
            card.setAttribute('id', 'fire-rock');
        }

        if(card.classList.contains('ice') && card.classList.contains('ground')) {
            card.setAttribute('id', 'ice-ground');
        }

        if(card.classList.contains('rock') && card.classList.contains('sinister')) {
            card.setAttribute('id', 'rock-sinister');
        }

        if(card.classList.contains('grass') && card.classList.contains('ground')) {
            card.setAttribute('id', 'grass-ground');
        }

        if(card.classList.contains('fire') && card.classList.contains('fight')) {
            card.setAttribute('id', 'fire-fight');
        }

        if(card.classList.contains('water') && card.classList.contains('steel')) {
            card.setAttribute('id', 'water-steel');
        }

        if(card.classList.contains('normal') && card.classList.contains('water')) {
            card.setAttribute('id', 'normal-water');
        }

        if(card.classList.contains('rock') && card.classList.contains('steel')) {
            card.setAttribute('id', 'rock-steel');
        }

        if(card.classList.contains('phantom') && card.classList.contains('fly')) {
            card.setAttribute('id', 'phantom-fly');
        }

        if(card.classList.contains('poison') && card.classList.contains('sinister')) {
            card.setAttribute('id', 'poison-sinister');
        }

        if(card.classList.contains('poison') && card.classList.contains('fight')) {
            card.setAttribute('id', 'poison-fight');
        }

        if(card.classList.contains('steel') && card.classList.contains('psychic')) {
            card.setAttribute('id', 'steel-psychic');
        }

        if(card.classList.contains('phantom') && card.classList.contains('sinister')) {
            card.setAttribute('id', 'phantom-sinister');
        }

        if(card.classList.contains('dragon') && card.classList.contains('ground')) {
            card.setAttribute('id', 'dragon-ground');
        }

        if(card.classList.contains('fight') && card.classList.contains('steel')) {
            card.setAttribute('id', 'fight-steel');
        }

        if(card.classList.contains('grass') && card.classList.contains('ice')) {
            card.setAttribute('id', 'grass-ice');
        }

        if(card.classList.contains('psychic') && card.classList.contains('fight')) {
            card.setAttribute('id', 'psychic-fight');
        }

        if(card.classList.contains('rock') && card.classList.contains('steel')) {
            card.setAttribute('id', 'rock-steel');
        }

        if(card.classList.contains('ice') && card.classList.contains('phantom')) {
            card.setAttribute('id', 'ice-phantom');
        }

        if(card.classList.contains('electric') && card.classList.contains('phantom')) {
            card.setAttribute('id', 'electric-phantom');
        }

        if(card.classList.contains('steel') && card.classList.contains('dragon')) {
            card.setAttribute('id', 'steel-dragon');
        }

        if(card.classList.contains('phantom') && card.classList.contains('dragon')) {
            card.setAttribute('id', 'phantom-dragon');
        }

        if(card.classList.contains('fire') && card.classList.contains('steel')) {
            card.setAttribute('id', 'fire-steel');
        }

        if(card.classList.contains('psychic') && card.classList.contains('fire')) {
            card.setAttribute('id', 'psychic-fire');
        }

        if(card.classList.contains('grass') && card.classList.contains('fairy')) {
            card.setAttribute('id', 'grass-fairy');
        }

        if(card.classList.contains('grass') && card.classList.contains('steel')) {
            card.setAttribute('id', 'grass-steel');
        }

        if(card.classList.contains('grass') && card.classList.contains('fight')) {
            card.setAttribute('id', 'grass-fight');
        }

        if(card.classList.contains('ground') && card.classList.contains('sinister')) {
            card.setAttribute('id', 'ground-sinister');
        }

        if(card.classList.contains('ground') && card.classList.contains('phantom')) {
            card.setAttribute('id', 'ground-phantom');
        }

        if(card.classList.contains('ground') && card.classList.contains('electric')) {
            card.setAttribute('id', 'ground-electric');
        }

        if(card.classList.contains('fight') && card.classList.contains('sinister')) {
            card.setAttribute('id', 'fight-sinister');
        }

        if(card.classList.contains('sinister') && card.classList.contains('steel')) {
            card.setAttribute('id', 'sinister-steel');
        }

        if(card.classList.contains('sinister') && card.classList.contains('dragon')) {
            card.setAttribute('id', 'sinister-dragon');
        }

        if(card.classList.contains('normal') && card.classList.contains('grass')) {
            card.setAttribute('id', 'normal-grass');
        }

        if(card.classList.contains('water') && card.classList.contains('phantom')) {
            card.setAttribute('id', 'water-phantom');
        }

        if(card.classList.contains('bug') && card.classList.contains('electric')) {
            card.setAttribute('id', 'bug-electric');
        }

        if(card.classList.contains('bug') && card.classList.contains('fire')) {
            card.setAttribute('id', 'bug-fire');
        }

        if(card.classList.contains('phantom') && card.classList.contains('fire')) {
            card.setAttribute('id', 'phantom-fire');
        }

        if(card.classList.contains('rock') && card.classList.contains('fight')) {
            card.setAttribute('id', 'rock-fight');
        }

        if(card.classList.contains('dragon') && card.classList.contains('fire')) {
            card.setAttribute('id', 'dragon-fire');
        }

        if(card.classList.contains('dragon') && card.classList.contains('electric')) {
            card.setAttribute('id', 'dragon-electric');
        }

        if(card.classList.contains('dragon') && card.classList.contains('ice')) {
            card.setAttribute('id', 'dragon-ice');
        }

        if(card.classList.contains('water') && card.classList.contains('sinister')) {
            card.setAttribute('id', 'water-sinister');
        }

        if(card.classList.contains('normal') && card.classList.contains('ground')) {
            card.setAttribute('id', 'normal-ground');
        }

        if(card.classList.contains('fire') && card.classList.contains('normal')) {
            card.setAttribute('id', 'fire-normal');
        }

        if(card.classList.contains('fire') && card.classList.contains('water')) {
            card.setAttribute('id', 'fire-water');
        }

        if(card.classList.contains('steel') && card.classList.contains('phantom')) {
            card.setAttribute('id', 'steel-phantom');
        }

        if(card.classList.contains('steel') && card.classList.contains('fairy')) {
            card.setAttribute('id', 'steel-fairy');
        }

        if(card.classList.contains('sinister') && card.classList.contains('psychic')) {
            card.setAttribute('id', 'sinister-psychic');
        }

        if(card.classList.contains('electric') && card.classList.contains('normal')) {
            card.setAttribute('id', 'electric-normal');
        }

        if(card.classList.contains('electric') && card.classList.contains('fairy')) {
            card.setAttribute('id', 'electric-fairy');
        }

        if(card.classList.contains('rock') && card.classList.contains('dragon')) {
            card.setAttribute('id', 'rock-dragon');
        }

        if(card.classList.contains('rock') && card.classList.contains('ice')) {
            card.setAttribute('id', 'rock-ice');
        }

        if(card.classList.contains('rock') && card.classList.contains('fairy')) {
            card.setAttribute('id', 'rock-fairy');
        }

        if(card.classList.contains('fight') && card.classList.contains('fly')) {
            card.setAttribute('id', 'fight-fly');
        }

        if(card.classList.contains('phantom') && card.classList.contains('grass')) {
            card.setAttribute('id', 'phantom-grass');
        }

        if(card.classList.contains('fly') && card.classList.contains('dragon')) {
            card.setAttribute('id', 'fly-dragon');
        }

        if(card.classList.contains('psychic') && card.classList.contains('phantom')) {
            card.setAttribute('id', 'psychic-phantom');
        }

        if(card.classList.contains('fight') && card.classList.contains('ice')) {
            card.setAttribute('id', 'fight-ice');
        }

        if(card.classList.contains('bug') && card.classList.contains('fairy')) {
            card.setAttribute('id', 'bug-fairy');
        }

        if(card.classList.contains('water') && card.classList.contains('bug')) {
            card.setAttribute('id', 'water-bug');
        }

        if(card.classList.contains('poison') && card.classList.contains('fire')) {
            card.setAttribute('id', 'poison-fire');
        }

        if(card.classList.contains('normal') && card.classList.contains('fight')) {
            card.setAttribute('id', 'normal-fight');
        }

        if(card.classList.contains('phantom') && card.classList.contains('fairy')) {
            card.setAttribute('id', 'phantom-fairy');
        }

        if(card.classList.contains('normal') && card.classList.contains('dragon')) {
            card.setAttribute('id', 'normal-dragon');
        }

        if(card.classList.contains('dragon') && card.classList.contains('fight')) {
            card.setAttribute('id', 'dragon-fight');
        }

        if(card.classList.contains('psychic') && card.classList.contains('steel')) {
            card.setAttribute('id', 'psychic-steel');
        }

        if(card.classList.contains('rock') && card.classList.contains('poison')) {
            card.setAttribute('id', 'rock-poison');
        }

        if(card.classList.contains('fight') && card.classList.contains('phantom')) {
            card.setAttribute('id', 'fight-phantom');
        }

        if(card.classList.contains('bug') && card.classList.contains('psychic')) {
            card.setAttribute('id', 'bug-psychic');
        }

        if(card.classList.contains('bug') && card.classList.contains('sinister')) {
            card.setAttribute('id', 'bug-sinister');
        }

        if(card.classList.contains('grass') && card.classList.contains('dragon')) {
            card.setAttribute('id', 'grass-dragon');
        }

        if(card.classList.contains('electric') && card.classList.contains('poison')) {
            card.setAttribute('id', 'electric-poison');
        }

        if(card.classList.contains('electric') && card.classList.contains('fight')) {
            card.setAttribute('id', 'electric-fight');
        }

        if(card.classList.contains('sinister') && card.classList.contains('fairy')) {
            card.setAttribute('id', 'sinister-fairy');
        }

        if(card.classList.contains('sinister') && card.classList.contains('normal')) {
            card.setAttribute('id', 'sinister-normal');
        }

        if(card.classList.contains('sinister') && card.classList.contains('grass')) {
            card.setAttribute('id', 'sinister-grass');
        }

        if(card.classList.contains('ice') && card.classList.contains('bug')) {
            card.setAttribute('id', 'ice-bug');
        }

        if(card.classList.contains('electric') && card.classList.contains('sinister')) {
            card.setAttribute('id', 'electric-sinister');
        }

        if(card.classList.contains('electric') && card.classList.contains('ice')) {
            card.setAttribute('id', 'electric-ice');
        }

        if(card.classList.contains('poison') && card.classList.contains('normal')) {
            card.setAttribute('id', 'poison-normal');
        }

        if(card.classList.contains('grass') && card.classList.contains('fire')) {
            card.setAttribute('id', 'grass-fire');
        }

        if(card.classList.contains('steel') && card.classList.contains('poison')) {
            card.setAttribute('id', 'steel-poison');
        }

        if(card.classList.contains('ground') && card.classList.contains('fight')) {
            card.setAttribute('id', 'ground-fight');
        }

        if(card.classList.contains('rock') && card.classList.contains('electric')) {
            card.setAttribute('id', 'rock-electric');
        }

        if(card.classList.contains('fairy') && card.classList.contains('fight')) {
            card.setAttribute('id', 'fairy-fight');
        }

        if(card.classList.contains('dragon') && card.classList.contains('psychic')) {
          card.setAttribute('id', 'dragon-psychic');
        }

    })

  container.appendChild(card);

  })

}

pintarPoke()




// Control audio

const audio = document.querySelector('audio');
const nonAudio = document.querySelector('#no-audio');
const iconAudio = document.querySelector('.audio')
audio.volume = 0.1;
audio.play();

const controlAudio = document.querySelector('#on-audio');

controlAudio.addEventListener('click', () => {
    audio.pause();
    iconAudio.style.display = 'none'
    nonAudio.style.display = 'block'

})

nonAudio.addEventListener('click', () => {
    audio.play();
    iconAudio.style.display = 'block';
    nonAudio.style.display = 'none';
})

// Creando los banners de información

const idInfo = document.querySelectorAll('span')


idInfo.forEach(span => {
  span.addEventListener('click', () => {
    showInfo(span);
  })
})


function showInfo(element) {
  const container = document.querySelector('.container');

  // Guardando la tarjeta pokemon
  const card = element.parentElement;


  // Creando el banner de información
  const bannerInfo = document.createElement('div');
  bannerInfo.classList.add('bannerInfo');
  bannerInfo.style.display = 'block';

  // Añadiendo estilos al banner info
  if(card.classList.length >= 3) {
    const backColorCard =  card.getAttribute('id');
    bannerInfo.setAttribute('id', backColorCard)
  }

  if(card.classList.length <= 2) {
    bannerInfo.classList.add(card.classList[1]);
  }

  // Añadiendo el banner al DOM
  container.appendChild(bannerInfo);

  // Añadiendo X para cerrar banner
  const iconClose = document.createElement('img');
  iconClose.src = '../assets/img/x-solid.svg'
  iconClose.style.display = 'block'
  const divIcon = document.createElement('div');
  divIcon.setAttribute('id', 'divIcon')

  divIcon.appendChild(iconClose)
  bannerInfo.appendChild(divIcon);

  iconClose.addEventListener('click', () => {
    bannerInfo.remove();
  })

  // Guardando la imagen de la tarjeta pokemon
  const imgPoke = document.createElement('img');
  const imgcontainer = document.createElement('div');
  imgcontainer.setAttribute('id', 'imgContainer')
  const imgCardSrc = card.firstElementChild.firstElementChild.src;

  imgPoke.src = imgCardSrc;

  // Trayendo la imagen al banner
  imgcontainer.appendChild(imgPoke)
  bannerInfo.appendChild(imgcontainer)

  // Creando nombre, id y tipos
  const infoContainer = document.createElement('div');
  infoContainer.setAttribute('id', 'infoContainer');
  const spanInfoId = card.children[1].innerText;
  const h4InfoName = card.children[2].innerText;
  const namePoke = document.createElement('h1');
  namePoke.style.fontSize = '14px'
  const id = document.createElement('span');
  const typePoke = document.createElement('small');
  const typePoke2 = document.createElement('small');
  typePoke.classList.add('spanIdInfo');
  typePoke2.classList.add('spanIdInfo')

  if(card.children.length < 5) {
    const type1 = card.children[3].innerText;
    typePoke.innerText = type1;
    infoContainer.append(id, namePoke, typePoke)
  }

  if(card.children.length === 5) {
    const type1 = card.children[3].innerText;
    const type2 = card.children[4].innerText;
    typePoke.innerText = type1;
    typePoke2.innerText = type2;
    infoContainer.append(id, namePoke, typePoke, typePoke2)
  }

  id.innerText = 'ID: ' + spanInfoId;
  namePoke.innerText = 'Nombre: ' + h4InfoName;


  bannerInfo.appendChild(infoContainer);

}