const magicalGirlGenerator = {

    name: "Magical Girl Generator",

    groups: {

        "Identity":"✨",

        "Transformation":"💖",

        "Powers":"🌙"

    },

    fields: [

        {
            id:"name",
            label:"Hero Name",
            icon:"⭐",
            group:"Identity",
            options:MAGICAL_GIRL_DATA.names
        },

        {
            id:"animal",
            label:"Mascot Animal",
            icon:"🦊",
            group:"Identity",
            options:MAGICAL_GIRL_DATA.animals
        },

        {
            id:"personality",
            label:"Personality",
            icon:"😊",
            group:"Identity",
            options:MAGICAL_GIRL_DATA.personalities
        },

        {
            id:"theme",
            label:"Theme",
            icon:"🌸",
            group:"Transformation",
            options:MAGICAL_GIRL_DATA.themes
        },

        {
            id:"color",
            label:"Main Color",
            icon:"🎨",
            group:"Transformation",
            options:MAGICAL_GIRL_DATA.colors
        },

        {
            id:"outfit",
            label:"Outfit",
            icon:"👗",
            group:"Transformation",
            options:MAGICAL_GIRL_DATA.outfits
        },

        {
            id:"weapon",
            label:"Weapon",
            icon:"✨",
            group:"Transformation",
            options:MAGICAL_GIRL_DATA.weapons
        },

        {
            id:"power",
            label:"Magic",
            icon:"🔮",
            group:"Powers",
            options:MAGICAL_GIRL_DATA.powers
        },

        {
            id:"companion",
            label:"Mascot Companion",
            icon:"🐾",
            group:"Powers",
            options:MAGICAL_GIRL_DATA.companions
        },

        {
            id:"finisher",
            label:"Finisher",
            icon:"💥",
            group:"Powers",
            options:MAGICAL_GIRL_DATA.finishers
        },

        {
            id:"story",
            label:"Story Hook",
            icon:"📖",
            group:"Powers",
            options:MAGICAL_GIRL_DATA.storyHooks
        }

    ]

};
