const warriorGenerator = {

    name: "Warrior Cats Generator",

    groups: {

        "Cat":"🐱",

        "Clan Life":"🌿",

        "Skills":"⚔️",

        "Story":"🌙"

    },

    fields: [

        {
            id:"prefix",
            label:"Name Prefix",
            icon:"🐾",
            group:"Cat",
            options:WARRIOR_DATA.prefixes
        },

        {
            id:"suffix",
            label:"Name Suffix",
            icon:"✨",
            group:"Cat",
            options:WARRIOR_DATA.suffixes
        },

        {
            id:"pelt",
            label:"Pelt",
            icon:"🎨",
            group:"Cat",
            options:WARRIOR_DATA.pelts
        },

        {
            id:"eyes",
            label:"Eye Color",
            icon:"👁️",
            group:"Cat",
            options:WARRIOR_DATA.eyes
        },

        {
            id:"build",
            label:"Build",
            icon:"🐈",
            group:"Cat",
            options:WARRIOR_DATA.builds
        },

        {
            id:"clan",
            label:"Clan",
            icon:"🌲",
            group:"Clan Life",
            options:WARRIOR_DATA.clans
        },

        {
            id:"rank",
            label:"Rank",
            icon:"⭐",
            group:"Clan Life",
            options:WARRIOR_DATA.ranks
        },

        {
            id:"favoritePrey",
            label:"Favorite Prey",
            icon:"🐭",
            group:"Clan Life",
            options:WARRIOR_DATA.prey
        },

        {
            id:"personality",
            label:"Personality",
            icon:"😊",
            group:"Skills",
            options:WARRIOR_DATA.personalities
        },

        {
            id:"strength",
            label:"Greatest Strength",
            icon:"💪",
            group:"Skills",
            options:WARRIOR_DATA.strengths
        },

        {
            id:"weakness",
            label:"Greatest Weakness",
            icon:"⚠️",
            group:"Skills",
            options:WARRIOR_DATA.weaknesses
        },

        {
            id:"dream",
            label:"Dream",
            icon:"🌟",
            group:"Story",
            options:WARRIOR_DATA.dreams
        },

        {
            id:"story",
            label:"Story Hook",
            icon:"📖",
            group:"Story",
            options:WARRIOR_DATA.storyHooks
        }

    ]

};
