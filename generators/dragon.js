const dragonGenerator = {

    name: "Dragon Generator",

    groups: {

        "Dragon":"🐉",

        "Powers":"🔥",

        "Hoard":"💎",

        "Legend":"🌌"

    },

    fields: [

        {
            id:"species",
            label:"Species",
            icon:"🐲",
            group:"Dragon",
            options:DRAGON_DATA.species
        },

        {
            id:"element",
            label:"Element",
            icon:"🔥",
            group:"Dragon",
            options:DRAGON_DATA.elements
        },

        {
            id:"scales",
            label:"Scale Color",
            icon:"🎨",
            group:"Dragon",
            options:DRAGON_DATA.scales
        },

        {
            id:"horns",
            label:"Horns",
            icon:"🦌",
            group:"Dragon",
            options:DRAGON_DATA.horns
        },

        {
            id:"wings",
            label:"Wings",
            icon:"🪽",
            group:"Dragon",
            options:DRAGON_DATA.wings
        },

        {
            id:"personality",
            label:"Personality",
            icon:"😊",
            group:"Dragon",
            options:DRAGON_DATA.personalities
        },

        {
            id:"breath",
            label:"Breath Weapon",
            icon:"💥",
            group:"Powers",
            options:DRAGON_DATA.breaths
        },

        {
            id:"ability",
            label:"Ancient Ability",
            icon:"✨",
            group:"Powers",
            options:DRAGON_DATA.abilities
        },

        {
            id:"hoard",
            label:"Treasured Hoard",
            icon:"💎",
            group:"Hoard",
            options:DRAGON_DATA.hoards
        },

        {
            id:"home",
            label:"Home",
            icon:"🏔️",
            group:"Hoard",
            options:DRAGON_DATA.homes
        },

        {
            id:"legend",
            label:"Legend",
            icon:"📖",
            group:"Legend",
            options:DRAGON_DATA.legends
        }

    ]

};
