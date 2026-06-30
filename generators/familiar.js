const familiarGenerator = {

    name: "Familiar Generator",

    groups: {

        "Familiar":"🐾",

        "Magic":"✨",

        "Bond":"💖",

        "Story":"🌙"

    },

    fields: [

        {
            id:"species",
            label:"Species",
            icon:"🦊",
            group:"Familiar",
            options:FAMILIAR_DATA.species
        },

        {
            id:"element",
            label:"Element",
            icon:"✨",
            group:"Familiar",
            options:FAMILIAR_DATA.elements
        },

        {
            id:"color",
            label:"Color",
            icon:"🎨",
            group:"Familiar",
            options:FAMILIAR_DATA.colors
        },

        {
            id:"markings",
            label:"Markings",
            icon:"⭐",
            group:"Familiar",
            options:FAMILIAR_DATA.markings
        },

        {
            id:"personality",
            label:"Personality",
            icon:"😊",
            group:"Magic",
            options:FAMILIAR_DATA.personalities
        },

        {
            id:"ability",
            label:"Magic Ability",
            icon:"🔮",
            group:"Magic",
            options:FAMILIAR_DATA.abilities
        },

        {
            id:"bond",
            label:"Bond Type",
            icon:"❤️",
            group:"Bond",
            options:FAMILIAR_DATA.bondTypes
        },

        {
            id:"food",
            label:"Favorite Food",
            icon:"🍎",
            group:"Bond",
            options:FAMILIAR_DATA.favoriteFoods
        },

        {
            id:"habitat",
            label:"Habitat",
            icon:"🏡",
            group:"Story",
            options:FAMILIAR_DATA.habitats
        },

        {
            id:"story",
            label:"Story Hook",
            icon:"📖",
            group:"Story",
            options:FAMILIAR_DATA.storyHooks
        }

    ]

};
