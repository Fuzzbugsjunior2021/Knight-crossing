controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Knight.y -= 16
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Knight.x -= 16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Knight.x += 16
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Knight.y += 16
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
            `, SpriteKind.Food)
        tiles.placeOnTile(hotss, tiles.getTileLocation(startColumn, startrow))
        startColumn += 1 + gap
    }
    
  

}
let Right_CAR: Sprite = null
let leftplane: Sprite = null
let startColumn = 0
let hotss: Sprite = null
let Knight: Sprite = null
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level1`)
Knight = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . f f e 4 1 f d d f 1 4 e f . . 
    f d f f e 4 d d d d 4 e f e . . 
    f b f e f 2 2 2 2 e d d 4 e . . 
    f b f 4 f 2 2 2 2 e d d e . . . 
    f c f . f 4 4 5 5 f e e . . . . 
    . f f . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Knight, tiles.getTileLocation(8, 29))
scene.cameraFollowSprite(Knight)
Knight.setFlag(SpriteFlag.StayInScreen, true)
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
spawnh_o_t_s(5,2,1,1)