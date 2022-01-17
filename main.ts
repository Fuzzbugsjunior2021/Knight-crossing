namespace SpriteKind {
    export const UncollectedHOTTS = SpriteKind.create()
    export const CollectedHOTTS = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Knight.y -= 16
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    tiles.placeOnTile(Knight, tiles.getTileLocation(18, 29))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Knight.x -= 16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Knight.x += 16
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.UncollectedHOTTS, function (player2, hotss) {
    if (holdinghotss == null) {
        hotss.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        hotss.setKind(SpriteKind.CollectedHOTTS)
        console.log("picked up berry")
        holdinghotss = hotss
        Knight.setImage(assets.image`knight with hots`)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Knight.y += 16
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    if (holdinghotss != null) {
        tiles.placeOnTile(holdinghotss, location)
        holdinghotss.setImage(assets.image`Chest with HOTTS`)
        holdinghotss = null
Knight.setImage(assets.image`knight`)
        hotssLeft += 0 - 1
        console.log(hotssLeft)
        console.log("dropped berry")
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    tiles.placeOnTile(Knight, tiles.getTileLocation(0, 2))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-100)
    tiles.placeOnTile(Knight, tiles.getTileLocation(10, 29))
})
function spawnh_o_t_s (numhots: number, startColumn: number, startrow: number, gap: number) {
    for (let index = 0; index < numhots; index++) {
        hotss = sprites.create(img`
            . . . . . b b b b b b . . . . . 
            . . . b b 9 9 9 9 9 9 b b . . . 
            . . b b 9 9 9 9 9 9 9 9 b b . . 
            . b b f f f f 9 9 f f f f b b . 
            . b f 3 3 3 f f f f 3 3 3 f b . 
            b f f 3 3 3 f f f f 3 3 3 3 f b 
            b f 3 3 3 3 3 3 3 3 3 1 3 3 f b 
            b f 3 3 3 3 3 3 3 3 3 1 3 3 f b 
            b f 3 3 3 3 3 3 3 3 3 3 1 3 f b 
            b f 3 3 3 3 3 3 3 3 3 3 3 3 f b 
            b f 3 3 3 3 3 3 3 3 3 3 3 3 f b 
            . b f 3 3 3 3 3 3 3 3 3 3 f b . 
            . b d f 3 3 3 3 3 3 3 3 f b b . 
            . . b d f 3 3 3 3 3 f f b b . . 
            . . . b b f f f f f f b b . . . 
            . . . . . b b b b b b . . . . . 
            `, SpriteKind.UncollectedHOTTS)
        hotss.z = -1
        tiles.placeOnTile(hotss, tiles.getTileLocation(startColumn, startrow))
        startColumn += 1 + gap
    }
}
let Right_CAR: Sprite = null
let leftplane: Sprite = null
let startColumn = 0
let hotss: Sprite = null
let hotssLeft = 0
let Knight: Sprite = null
let holdinghotss: Sprite = null
info.setLife(1000)
let notholding = assets.image`knight`
hotssLeft = 5
scene.setBackgroundColor(10)
tiles.setTilemap(tilemap`level1`)
Knight = sprites.create(notholding, SpriteKind.Player)
tiles.placeOnTile(Knight, tiles.getTileLocation(8, 29))
scene.cameraFollowSprite(Knight)
Knight.setFlag(SpriteFlag.StayInScreen, true)
spawnh_o_t_s(hotssLeft, 2, 1, 1)
game.onUpdateInterval(500, function () {
    leftplane = sprites.create(img`
        ...fffffff.........ccc..
        ...ff22ccff.......cc4f..
        ....fffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(leftplane, sprites.vehicle.roadHorizontal)
    leftplane.x = 300
    leftplane.vx = -50
    leftplane.setFlag(SpriteFlag.DestroyOnWall, true)
})
game.onUpdateInterval(500, function () {
    Right_CAR = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 4 2 2 2 2 2 2 c 2 . . . 
        . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
        . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
        . 2 c 2 e e e e e e e b c 4 2 2 
        . 2 2 e b b e b b b e e b 4 2 2 
        . 2 e b b b e b b b b e 2 2 2 2 
        . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
        . e e e e e e f e e e f e 2 d d 
        . e e e e e e f e e f e e e 2 d 
        . e e e e e e f f f e e e e e e 
        . e f f f f e e e e f f f e e e 
        . . f f f f f e e f f f f f e . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Right_CAR, assets.tile`reverse road`)
    Right_CAR.x = -20
    Right_CAR.vx = 50
    Right_CAR.setFlag(SpriteFlag.DestroyOnWall, true)
})
