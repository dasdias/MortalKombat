const firstPerson = {
    name: 'Scorpion',
    ht: 80,
    img: '/assets/scorpion.gif',
    weapon: ['Сюрикен', 'Тессен', 'Амигаса', 'Томагавк', 'Гарпун', 'Меч-бабочка', 'Катана', 'Меч ниндзя-то'],
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    }
}
const secondPerson = {
    name: 'Sonya',
    ht: 100,
    img: '/assets/sonya.gif',
    weapon: ['Сюрикен', 'Тессен', 'Амигаса', 'Томагавк', 'Гарпун', 'Меч-бабочка', 'Катана', 'Меч ниндзя-то'],
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    }
}
console.log(firstPerson.attack(firstPerson.name));

function createPlayer(classPlayer, Person) {
    let areaGame = document.querySelector('.arenas');
    const player = document.createElement('div');
    const progressbar  = document.createElement('div'); 
    const character  = document.createElement('div'); 
    const life = document.createElement('div'); 
    const name = document.createElement('div'); 
    const img = document.createElement('img'); 
    player.classList.add(classPlayer);
    progressbar.classList.add('progressbar');
    character.classList.add('character');
    life.classList.add('life');
    name.classList.add('name');

    life.style.width = Person.ht + '%';

    name.innerText = Person.name;
    img.src = Person.img;

    player.appendChild(progressbar);
    player.appendChild(character);

    progressbar.appendChild(life);
    progressbar.appendChild(name);

    character.appendChild(img);

    areaGame.appendChild(player);
}
createPlayer('player1', firstPerson);
createPlayer('player2', secondPerson);