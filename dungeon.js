
const dungeon = document.getElementById('dungeon')
const world = document.getElementById('world')

const worldX = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const worldY = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const locationNum = Math.floor((Math.random() * 5) +1);
const enemyNum = Math.floor((Math.random() * 10) +1);

const color_4 = '#484848'
const color_5 = 'rgb(136, 136, 136)'
const color_6 = '#000'

const dungeon_tiles = [color_4, color_5]

for (let i = 0; i < worldX.length; i++) {
    const row = document.createElement('div')

    const index = i
    dungeon.appendChild(row)
    for (let j = 0; j < worldY.length; j++) {
        const block = document.createElement('div')
        block.id = (index * 10) + (j + 101)

        block.style = "width: 50px; height: 50px; background-color: #333; border: 2px solid #333;"

        row.appendChild(block)
    }
}

const shuffle = (arr) => {
    let curId = arr.length;
    // There remain elements to shuffle
    while (0 !== curId) {
        // Pick a remaining element
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        // Swap it with the current element.
        let tmp = arr[curId];
        arr[curId] = arr[randId];
        arr[randId] = tmp;
    }
    return arr;
}

const randomDungeon = () => {
    let allBlocks = []
    let path = []
    for (let i = 101; i < ((worldX.length) * worldY.length) + 101; i++) {
        allBlocks.push(i)
    }
    const randomBlocks = shuffle(allBlocks)

    for (let i = 0; i < randomBlocks.length; i++) {
        let currBlock = document.getElementById(randomBlocks[i])
        currBlock.style.backgroundColor = shuffle(dungeon_tiles)[0]
        if (currBlock.style.backgroundColor === color_5) {
            path.push(currBlock)
        }

        if (currBlock.style.backgroundColor === color_5) {
            path.push(currBlock)
        }
    }

    for (let i = 0; i < locationNum; i++) {
        let randomLocation = shuffle(path)
        randomLocation[i].style.backgroundImage = 'url(./assets/imgs/icons8-star-64.png)'
        randomLocation[i].style.backgroundSize = 'contain'
    }

    for (let i = 0; i < enemyNum; i++) {
        let randomLocation = shuffle(path)
        randomLocation[i].style.backgroundImage = 'url(./assets/imgs/icons8-swords-64.png)'
        randomLocation[i].style.backgroundSize = 'contain'
    }
}

randomDungeon()