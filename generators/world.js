const worldGenerator = {

    name: "World Generator",

    groups: {

        "World":"🌍",

        "Civilization":"🏰",

        "Magic":"✨",

        "Lore":"📖"

    },

    fields: [

        {
            id:"name",
            label:"World Name",
            icon:"🌎",
            group:"World",
            options:WORLD_DATA.worldNames
        },

        {
            id:"type",
            label:"World Type",
            icon:"🌌",
            group:"World",
            options:WORLD_DATA.worldTypes
        },

        {
            id:"climate",
            label:"Climate",
            icon:"🌤️",
            group:"World",
            options:WORLD_DATA.climates
        },

        {
            id:"landscape",
            label:"Landscape",
            icon:"🏞️",
            group:"World",
            options:WORLD_DATA.landscapes
        },

        {
            id:"government",
            label:"Government",
            icon:"👑",
            group:"Civilization",
            options:WORLD_DATA.governments
        },

        {
            id:"race",
            label:"Dominant Race",
            icon:"🧝",
            group:"Civilization",
            options:WORLD_DATA.races
        },

        {
            id:"magicLevel",
            label:"Magic Level",
            icon:"✨",
            group:"Magic",
            options:WORLD_DATA.magicLevels
        },

        {
            id:"magicSource",
            label:"Source of Magic",
            icon:"🔮",
            group:"Magic",
            options:WORLD_DATA.magicSources
        },

        {
            id:"threat",
            label:"Greatest Threat",
            icon:"⚔️",
            group:"Lore",
            options:WORLD_DATA.threats
        },

        {
            id:"landmark",
            label:"Famous Landmark",
            icon:"🏛️",
            group:"Lore",
            options:WORLD_DATA.landmarks
        },

        {
            id:"legend",
            label:"Ancient Legend",
            icon:"📜",
            group:"Lore",
            options:WORLD_DATA.legends
        }

    ]

};
