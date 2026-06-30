const magicGenerator = {

    name: "Magic Generator",

    groups: {

        "Magic":"✨",

        "Spell":"🔮",

        "Casting":"📜",

        "Lore":"🌙"

    },

    fields: [

        {
            id:"school",
            label:"School",
            icon:"📚",
            group:"Magic",
            options:MAGIC_DATA.schools
        },

        {
            id:"element",
            label:"Element",
            icon:"🔥",
            group:"Magic",
            options:MAGIC_DATA.elements
        },

        {
            id:"spellName",
            label:"Spell Name",
            icon:"✨",
            group:"Spell",
            options:MAGIC_DATA.names
        },

        {
            id:"spellType",
            label:"Spell Type",
            icon:"💥",
            group:"Spell",
            options:MAGIC_DATA.spellTypes
        },

        {
            id:"power",
            label:"Power Level",
            icon:"⭐",
            group:"Spell",
            options:MAGIC_DATA.powerLevels
        },

        {
            id:"range",
            label:"Range",
            icon:"📏",
            group:"Casting",
            options:MAGIC_DATA.ranges
        },

        {
            id:"casting",
            label:"Casting Method",
            icon:"🪄",
            group:"Casting",
            options:MAGIC_DATA.castingMethods
        },

        {
            id:"cost",
            label:"Casting Cost",
            icon:"💎",
            group:"Casting",
            options:MAGIC_DATA.costs
        },

        {
            id:"effect",
            label:"Side Effect",
            icon:"🌸",
            group:"Lore",
            options:MAGIC_DATA.sideEffects
        },

        {
            id:"story",
            label:"Story Hook",
            icon:"📖",
            group:"Lore",
            options:MAGIC_DATA.storyHooks
        }

    ]

};
