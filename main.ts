namespace SpriteKind {
    export const LeftPaddle = SpriteKind.create()
    export const RightPaddle = SpriteKind.create()
}
function createBall () {
    ball = sprites.create(img`
        . . . . . . . e e e e . . . . . 
        . . . . . e e 4 5 5 5 e e . . . 
        . . . . e 4 5 6 2 2 7 6 6 e . . 
        . . . e 5 6 6 7 2 2 6 4 4 4 e . 
        . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
        . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
        . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
        e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
        e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
        e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
        e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
        e 5 e c 5 4 5 4 5 5 5 e e . . . 
        e 5 e e 5 5 5 5 5 4 e . . . . . 
        4 5 4 e 5 5 5 5 e e . . . . . . 
        . 4 5 4 5 5 4 e . . . . . . . . 
        . . 4 4 e e e . . . . . . . . . 
        `, SpriteKind.Player)
    ball.setVelocity(100, 100)
    ball.setFlag(SpriteFlag.BounceOnWall, true)
    ball.y = randint(0, 120)
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
	
})
function createRightPaddle () {
    right_paddle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.RightPaddle)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.setFlag(SpriteFlag.StayInScreen, true)
    right_paddle.right = 160
    info.player2.setLife(3)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftPaddle, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.RightPaddle, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
})
function createLeftPaddle () {
    left_paddle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.LeftPaddle)
    controller.moveSprite(left_paddle, 0, 150)
    left_paddle.left = 0
    left_paddle.setFlag(SpriteFlag.StayInScreen, true)
    info.setLife(3)
}
let left_paddle: Sprite = null
let right_paddle: Sprite = null
let ball: Sprite = null
createBall()
createLeftPaddle()
createRightPaddle()
forever(function () {
    if (ball.isHittingTile(CollisionDirection.Left)) {
        info.changeLifeBy(-1)
    }
    if (ball.isHittingTile(CollisionDirection.Right)) {
        info.player2.changeLifeBy(-1)
    }
})
