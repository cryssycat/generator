const mlpGenerator = {

    name: "MLP Pony Generator",

    groups: {

        "Pony":"🐴",

        "Appearance":"🎨",

        "Talent":"✨",

        "Story":"🌈"

    },

    fields: [

        {
            id:"tribe",
            label:"Tribe",
            icon:"🦄",
            group:"Pony",
            options:MLP_DATA.tribes
        },

        {
            id:"personality",
            label:"Personality",
            icon:"😊",
            group:"Pony",
            options:MLP_DATA.personalities
        },

        {
            id:"body",
            label:"Body Color",
            icon:"🎨",
            group:"Appearance",
            options:MLP_DATA.bodyColors
        },

        {
            id:"mane",
            label:"Mane Color",
            icon:"🌈",
            group:"Appearance",
            options:MLP_DATA.maneColors
        },

        {
            id:"maneStyle",
            label:"Mane Style",
            icon:"💇",
            group:"Appearance",
            options:MLP_DATA.maneStyles
        },

        {
            id:"eyes",
            label:"Eye Color",
            icon:"👁️",
            group:"Appearance",
            options:MLP_DATA.eyeColors
        },

        {
            id:"cutieMark",
            label:"Cutie Mark",
            icon:"⭐",
            group:"Talent",
            options:MLP_DATA.cutieMarks
        },

        {
            id:"talent",
            label:"Special Talent",
            icon:"✨",
            group:"Talent",
            options:MLP_DATA.talents
        },

        {
            id:"occupation",
            label:"Occupation",
            icon:"💼",
            group:"Talent",
            options:MLP_DATA.occupations
        },

        {
            id:"home",
            label:"Home",
            icon:"🏡",
            group:"Story",
            options:MLP_DATA.homes
        },

        {
            id:"dream",
            label:"Big Dream",
            icon:"🌟",
            group:"Story",
            options:MLP_DATA.dreams
        }

    ]

};
