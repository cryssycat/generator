const relationshipGenerator = {

    name:"Relationship Generator",

    groups:{

        "Character A":"👤",
        "Character B":"👤",
        "Relationship":"❤️"

    },

    fields:[

        {
            id:"speciesA",
            label:"Species",
            icon:"🦊",
            group:"Character A",
            options:RELATIONSHIP_DATA.characterTypes
        },

        {
            id:"personalityA",
            label:"Personality",
            icon:"😊",
            group:"Character A",
            options:RELATIONSHIP_DATA.personalities
        },

        {
            id:"speciesB",
            label:"Species",
            icon:"🦊",
            group:"Character B",
            options:RELATIONSHIP_DATA.characterTypes
        },

        {
            id:"personalityB",
            label:"Personality",
            icon:"😊",
            group:"Character B",
            options:RELATIONSHIP_DATA.personalities
        },

        {
            id:"relationship",
            label:"Relationship",
            icon:"❤️",
            group:"Relationship",
            options:RELATIONSHIP_DATA.relationships
        },

        {
            id:"conflict",
            label:"Conflict",
            icon:"⚡",
            group:"Relationship",
            options:RELATIONSHIP_DATA.conflicts
        },

        {
            id:"interest",
            label:"Shared Interest",
            icon:"⭐",
            group:"Relationship",
            options:RELATIONSHIP_DATA.sharedInterests
        },

        {
            id:"story",
            label:"Story Hook",
            icon:"📖",
            group:"Relationship",
            options:RELATIONSHIP_DATA.storyHooks
        }

    ]

};
