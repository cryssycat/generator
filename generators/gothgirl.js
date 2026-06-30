const gothGenerator = {

    name: "Goth Girl Generator",

    groups: {

        "Style":"🖤",

        "Personality":"🦇",

        "Details":"🌙"

    },

    fields: [

        {
            id:"species",
            label:"Species",
            icon:"🦊",
            group:"Style",
            options:GOTH_DATA.species
        },

        {
            id:"aesthetic",
            label:"Aesthetic",
            icon:"🕸️",
            group:"Style",
            options:GOTH_DATA.aesthetics
        },

        {
            id:"hair",
            label:"Hair",
            icon:"🖤",
            group:"Style",
            options:GOTH_DATA.hair
        },

        {
            id:"eyes",
            label:"Eyes",
            icon:"👁️",
            group:"Style",
            options:GOTH_DATA.eyes
        },

        {
            id:"outfit",
            label:"Outfit",
            icon:"👗",
            group:"Style",
            options:GOTH_DATA.outfits
        },

        {
            id:"accessory",
            label:"Accessory",
            icon:"💍",
            group:"Style",
            options:GOTH_DATA.accessories
        },

        {
            id:"personality",
            label:"Personality",
            icon:"😊",
            group:"Personality",
            options:GOTH_DATA.personalities
        },

        {
            id:"hobby",
            label:"Hobby",
            icon:"📚",
            group:"Personality",
            options:GOTH_DATA.hobbies
        },

        {
            id:"weather",
            label:"Favorite Weather",
            icon:"🌧️",
            group:"Personality",
            options:GOTH_DATA.favoriteWeather
        },

        {
            id:"occupation",
            label:"Occupation",
            icon:"💼",
            group:"Details",
            options:GOTH_DATA.occupations
        },

        {
            id:"story",
            label:"Story Hook",
            icon:"📖",
            group:"Details",
            options:GOTH_DATA.storyHooks
        }

    ]

};
