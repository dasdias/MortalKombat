const $areaGame = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $control = document.querySelector('.control');


const firstPerson = {
    player: 1,
    name: 'Scorpion',
    ht: 100,
    img: '/assets/scorpion.gif',
    weapon: ['Сюрикен', 'Тессен', 'Амигаса', 'Томагавк', 'Гарпун', 'Меч-бабочка', 'Катана', 'Меч ниндзя-то'],
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    }
}
const secondPerson = {
    player: 2,
    name: 'Sonya',
    ht: 100,
    img: '/assets/sonya.gif',
    weapon: ['Сюрикен', 'Тессен', 'Амигаса', 'Томагавк', 'Гарпун', 'Меч-бабочка', 'Катана', 'Меч ниндзя-то'],
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    }
}

function createElement(tag, className) { // функция создания DOM елементов
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(person) { // функция создания игрока
    const $player = createElement('div', 'player' + person.player );
    const $progressbar  = createElement('div', 'progressbar' ); 
    const $character  = createElement('div', 'character'); 
    const $life = createElement('div', 'life'); 
    const $name = createElement('div', 'name'); 
    const $img = createElement('img'); 

    $life.style.width = person.ht + '%';
    $name.innerText = person.name;
    $img.src = person.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    return $player
}
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeHP (player) {
    const $playerLife = document.querySelector('.player' + player.player +' .life'); 
     player.ht  -= random(1, 20);
     console.log(player);
     if (player.ht <= 0) {
         $playerLife.style.width = 0 + '%';
         $areaGame.appendChild(playerLose(player.name));
         $randomButton.disabled = true;
         $resrtButton = createElement('div', 'button--reset');
         $resrtButton.innerText = 'Начать снова';
         $resrtButton.setAttribute('onclick', 'window.location.reload()');
        $control.appendChild($resrtButton)
    } else {
        $playerLife.style.width = player.ht + '%';
    }
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';
    return $loseTitle;
}

$randomButton.addEventListener('click', function () {
    changeHP(firstPerson);
    changeHP(secondPerson);
});

$areaGame.appendChild(createPlayer(firstPerson));
$areaGame.appendChild(createPlayer(secondPerson));