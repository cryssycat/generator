const fantasyGenerator = {

    name:"Fantasy Generator",

    fields:[

        {
            id:"race",
            label:"Race",
            icon:"🧝",
            group:"Basics",
            options:FANTASY_DATA.races
        },

        {
            id:"class",
            label:"Class",
            icon:"⚔️",
            group:"Basics",
            options:FANTASY_DATA.classes
        },

        {
            id:"weapon",
            label:"Weapon",
            icon:"🗡️",
            group:"Combat",
            options:FANTASY_DATA.weapons
        },

        {
            id:"armor",
            label:"Armor",
            icon:"🛡️",
            group:"Combat",
            options:FANTASY_DATA.armor
        },

        {
            id:"element",
            label:"Element",
            icon:"✨",
            group:"Magic",
            options:FANTASY_DATA.elements
        },

        {
            id:"ability",
            label:"Special Ability",
            icon:"🔮",
            group:"Magic",
            options:FANTASY_DATA.abilities
        },

        {
            id:"goal",
            label:"Goal",
            icon:"🏆",
            group:"Magic",
            options:FANTASY_DATA.goals
        }

    ]

};
