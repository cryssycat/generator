const pokemonGenerator = {

    name: "Pokémon Generator",

    groups: {

        "Pokémon":"⚡",

        "Appearance":"🌿",

        "Battle":"💥",

        "Lore":"🌎"

    },

    fields: [

        {
            id:"species",
            label:"Species",
            icon:"⚡",
            group:"Pokémon",
            options:POKEMON_DATA.species
        },

        {
            id:"primaryType",
            label:"Primary Type",
            icon:"🔥",
            group:"Pokémon",
            options:POKEMON_DATA.primaryTypes
        },

        {
            id:"secondaryType",
            label:"Secondary Type",
            icon:"❄️",
            group:"Pokémon",
            options:POKEMON_DATA.secondaryTypes
        },

        {
            id:"nature",
            label:"Nature",
            icon:"😊",
            group:"Pokémon",
            options:POKEMON_DATA.natures
        },

        {
            id:"personality",
            label:"Personality",
            icon:"💛",
            group:"Pokémon",
            options:POKEMON_DATA.personalities
        },

        {
            id:"color",
            label:"Main Color",
            icon:"🎨",
            group:"Appearance",
            options:POKEMON_DATA.colors
        },

        {
            id:"markings",
            label:"Special Markings",
            icon:"✨",
            group:"Appearance",
            options:POKEMON_DATA.markings
        },

        {
            id:"ability",
            label:"Ability",
            icon:"⭐",
            group:"Battle",
            options:POKEMON_DATA.abilities
        },

        {
            id:"move",
            label:"Signature Move",
            icon:"💥",
            group:"Battle",
            options:POKEMON_DATA.moves
        },

        {
            id:"heldItem",
            label:"Held Item",
            icon:"🎒",
            group:"Battle",
            options:POKEMON_DATA.heldItems
        },

        {
            id:"habitat",
            label:"Habitat",
            icon:"🌲",
            group:"Lore",
            options:POKEMON_DATA.habitats
        },

        {
            id:"story",
            label:"Story Hook",
            icon:"📖",
            group:"Lore",
            options:POKEMON_DATA.storyHooks
        }

    ]

};
