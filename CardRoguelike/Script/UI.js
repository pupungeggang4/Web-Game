let UI = {
    textTitle : [8, 8],
    buttonBack : [1160, 40, 80, 80],

    title : {
        buttonStart : [160, 160, 960, 80],
        textStart : [168, 184],
    },

    ready : {
        characterSelect : [
            [80, 160, 160, 160], [320, 160, 160, 160], [560, 160, 160, 160],
            [80, 400, 160, 160], [320, 400, 160, 160], [560, 400, 160, 160]
        ],

        description : {
            rect : [920, 160, 320, 400],
            textElement : [928, 364],
            iconLife : [920, 400, 40, 40],
            textLife : [964, 404],
            iconEnergy : [1000, 400, 40, 40],
            textEnergy : [1044, 404],
            iconAttack : [920, 440, 40, 40],
            textAttack : [964, 444],
            iconSorcery : [1000, 440, 40, 40],
            textSorcery : [1044, 444],
            iconHardness : [1080, 440, 40, 40],
            textHardness : [1124, 444],
        },

        buttonStart : [920, 560, 320, 80],
        textStart : [928, 584],
    },

    map : {
        tileStart : [80, 160],
        tileSize : [80, 80],
        tileInterval : [120, 120],
    },

    game : {
        upper : {
            textLevel : [4, 4],
            expBar : [80, 0, 640, 40],
        },

        lower : {
            statRect : [160, 600, 880, 40],

            iconLife : [160, 600, 40, 40],
            textLife : [204, 604],
            barLife : [320, 600, 160, 40],
            iconEnergy : [480, 600, 40, 40],
            textEnergy : [524, 604],
            barEnergy : [640, 600, 160, 40],
            iconAttack : [800, 600, 40, 40],
            textAttack : [844, 604],
            iconSorcery : [880, 600, 40, 40],
            textSorcery : [924, 604],
            iconHardness : [960, 600, 40, 40],
            textHardness : [1004, 604],

            baseAttack : [80, 640, 80, 80],
            hand : [160, 640, 640, 80],
            cardList : [[160, 640, 80, 80], [240, 640, 80, 80], [320, 640, 80, 80], [400, 640, 80, 80], [480, 640, 80, 80], [560, 640, 80, 80], [640, 640, 80, 80], [720, 640, 80, 80]],
            cardBack : [800, 640, 80, 80],
        },
    },

    pause : {
        rect : [320, 320, 640, 240],
        textPause : [328, 344],
        buttonResume: [320, 400, 640, 80],
        textResume : [328, 424],
        buttonExit : [320, 480, 640, 80],
        textExit : [328, 504],
    }
}