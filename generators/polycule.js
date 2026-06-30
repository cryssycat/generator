const polyculeGenerator = {

    name: "Polycule Generator",

    groups: {

        "Character A":"👤",

        "Character B":"👤",

        "Character C":"👤",

        "Polycule":"❤️"

    },

    fields: [

        // Character A

        {
            id:"speciesA",
            label:"Species",
            icon:"🦊",
            group:"Character A",
            options:POLYCULE_DATA.species
        },

        {
            id:"personalityA",
            label:"Personality",
            icon:"😊",
            group:"Character A",
            options:POLYCULE_DATA.personalities
        },

        {
            id:"occupationA",
            label:"Occupation",
            icon:"💼",
            group:"Character A",
            options:POLYCULE_DATA.occupations
        },

        {
            id:"hobbyA",
            label:"Hobby",
            icon:"🎨",
            group:"Character A",
            options:POLYCULE_DATA.hobbies
        },

        // Character B

        {
            id:"speciesB",
            label:"Species",
            icon:"🦊",
            group:"Character B",
            options:POLYCULE_DATA.species
        },

        {
            id:"personalityB",
            label:"Personality",
            icon:"😊",
            group:"Character B",
            options:POLYCULE_DATA.personalities
        },

        {
            id:"occupationB",
            label:"Occupation",
            icon:"💼",
            group:"Character B",
            options:POLYCULE_DATA.occupations
        },

        {
            id:"hobbyB",
            label:"Hobby",
            icon:"🎨",
            group:"Character B",
            options:POLYCULE_DATA.hobbies
        },

        // Character C

        {
            id:"speciesC",
            label:"Species",
            icon:"🦊",
            group:"Character C",
            options:POLYCULE_DATA.species
        },

        {
            id:"personalityC",
            label:"Personality",
            icon:"😊",
            group:"Character C",
            options:POLYCULE_DATA.personalities
        },

        {
            id:"occupationC",
            label:"Occupation",
            icon:"💼",
            group:"Character C",
            options:POLYCULE_DATA.occupations
        },

        {
            id:"hobbyC",
            label:"Hobby",
            icon:"🎨",
            group:"Character C",
            options:POLYCULE_DATA.hobbies
        },

        // Relationship

        {
            id:"dynamic",
            label:"Group Dynamic",
            icon:"❤️",
            group:"Polycule",
            options:POLYCULE_DATA.dynamics
        },

        {
            id:"strength",
            label:"Greatest Strength",
            icon:"⭐",
            group:"Polycule",
            options:POLYCULE_DATA.strengths
        },

        {
            id:"challenge",
            label:"Current Challenge",
            icon:"⚠️",
            group:"Polycule",
            options:POLYCULE_DATA.challenges
        },

        {
            id:"story",
            label:"Story Hook",
            icon:"📖",
            group:"Polycule",
            options:POLYCULE_DATA.storyHooks
        }

    ]

};
