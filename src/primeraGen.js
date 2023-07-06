const container = document.getElementById("cards-container");
const titleHome = document.getElementById('titleHome');

titleHome.addEventListener('click', () => {
  window.location.href = '../pages/home.html'
})

const fetchData = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
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
        type: types
      };

      pokeArr.push(pokeObj);

      pokeArr.sort((a, b) => a.id - b.id)
      localStorage.setItem("pokemon", JSON.stringify(pokeArr));

    };

    everyPokemon();

  });
};

getPokemons();

function pintarPoke() {
  const pokeStorage = JSON.parse(localStorage.getItem("pokemon"));


  pokeStorage.forEach(pokemon => {
    const card = document.createElement("div");
    card.classList.add('card');
    const cardPadding = document.createElement('div');
    cardPadding.classList.add('cardPadding')
    const img = document.createElement('img');
    img.src = pokemon.img;
    const id = document.createElement('span');
    id.classList.add('span-info')
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

    cardPadding.append(img);


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

        if(card.classList.contains('fire') && card.classList.contains('fly')) {
          card.setAttribute("id", "fire-fly");
        }

        if(card.classList.contains('grass') && card.classList.contains('poison')) {
          card.setAttribute('id', 'grass-poison');
        }

        if(card.classList.contains('grass') && card.classList.contains('psychic')) {
          card.setAttribute('id', 'grass-psychic');
        }

        if(card.classList.contains('fly') && card.classList.contains('normal')) {
          card.setAttribute('id', 'normal-fly');
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

        if(card.classList.contains('water') && card.classList.contains('fly')) {
          card.setAttribute('id', 'water-fly');
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

        if(card.classList.contains('ice') && card.classList.contains('psychic')) {
          card.setAttribute('id', 'ice-psychic');
        }

        if(card.classList.contains('ice') && card.classList.contains('fly')) {
          card.setAttribute('id', 'ice-fly');
        }

        if(card.classList.contains('dragon') && card.classList.contains('fly')) {
          card.setAttribute('id', 'dragon-fly');
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