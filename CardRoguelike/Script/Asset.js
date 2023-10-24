let img = {
    icon : {
        life : new Image(),
        energy : new Image(),
        attack : new Image(),
        sorcery : new Image(),
        hardness : new Image(),
    },

    button : {
        back : new Image(),
        battle : new Image(),
        shop : new Image(),
        event : new Image(),
        none : new Image(),
        boss : new Image(),
    },

    barEmpty : new Image(),
    barFullLife : new Image(),
    barFullEnergy : new Image(),
}

function imageLoad() {
    img.icon.life.src = 'Image/Icon/IconLife.png'
    img.icon.energy.src = 'Image/Icon/IconEnergy.png'
    img.icon.attack.src = 'Image/Icon/IconAttack.png'
    img.icon.sorcery.src = 'Image/Icon/IconSorcery.png'
    img.icon.hardness.src = 'Image/Icon/IconHardness.png'

    img.button.back.src = 'Image/Button/ButtonBack.png'
    img.button.battle.src = 'Image/Button/ButtonBattle.png'
    img.button.event.src = 'Image/Button/ButtonEvent.png'
    img.button.shop.src = 'Image/Button/ButtonShop.png'
    img.button.none.src = 'Image/Button/ButtonNone.png'
    img.button.boss.src = 'Image/Button/ButtonBoss.png'

    img.barEmpty.src = 'Image/BarEmpty.png'
    img.barFullLife.src = 'Image/BarFullLife.png'
    img.barFullEnergy.src = 'Image/BarFullEnergy.png'
}