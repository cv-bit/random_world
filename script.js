console.log(
    'hello world'
)

const map = document.getElementById('map')
const world = document.getElementById('world')
const game = document.getElementById('game') 
const dungeon = document.getElementById('dungeon')

const worldX = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const worldY = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const color_1 = '#00FF00'
const color_2 = '#0000FF'
const color_3 = '#CD853F'

const color_4 = '#484848'
const color_5 = '#888888'
const color_6 = ''

map.style.backgroundColor = color_3
game.style.backgroundColor = color_2

const world_tiles = [color_1, color_2]

const dungeon_tiles = [color_4, color_5]

for (let i = 0; i < worldX.length; i++) {
    const row = document.createElement('div')

    const index = i
    game.appendChild(row)
    for (let j = 0; j < worldY.length; j++) {
        const block = document.createElement('div')
        block.id = (index * 10) + (j + 1)

        block.style = "width: 50px; height: 50px; background-color: #333; border: 2px solid #333;"

        row.appendChild(block)
    }
}

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
    console.log(arr)
    return arr;
}

const randomWorld = () => {
    let allBlocks = []
    for (let i = 1; i < (worldX.length * worldY.length) + 1; i++) {
        allBlocks.push(i)
    }
    const randomBlocks = shuffle(allBlocks)

    for (let i = 0; i < randomBlocks.length; i++) {
        let currBlock = document.getElementById(randomBlocks[i])
        currBlock.style.backgroundColor = shuffle(world_tiles)[0]

    }
}

const randomDungeon = () => {
    let allBlocks = []
    for (let i = 101; i < ((worldX.length) * worldY.length) + 101; i++) {
        allBlocks.push(i)
    }
    const randomBlocks = shuffle(allBlocks)

    for (let i = 0; i < randomBlocks.length; i++) {
        let currBlock = document.getElementById(randomBlocks[i])
        currBlock.style.backgroundColor = shuffle(dungeon_tiles)[0]

    }
}

randomWorld()
randomDungeon()