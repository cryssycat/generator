const itemGenerator = {

    name: "Item Generator",

    groups: {

        "Item":"📦",

        "Details":"✨",

        "Ownership":"👤",

        "Story":"📖"

    },

    fields: [

        {
            id:"category",
            label:"Item",
            icon:"📦",
            group:"Item",
            options:ITEM_DATA.categories
        },

        {
            id:"material",
            label:"Material",
            icon:"🪵",
            group:"Item",
            options:ITEM_DATA.materials
        },

        {
            id:"color",
            label:"Color",
            icon:"🎨",
            group:"Item",
            options:ITEM_DATA.colors
        },

        {
            id:"condition",
            label:"Condition",
            icon:"🔧",
            group:"Details",
            options:ITEM_DATA.conditions
        },

        {
            id:"quality",
            label:"Quality",
            icon:"💎",
            group:"Details",
            options:ITEM_DATA.qualities
        },

        {
            id:"enchantment",
            label:"Special Property",
            icon:"✨",
            group:"Details",
            options:ITEM_DATA.enchantments
        },

        {
            id:"owner",
            label:"Original Owner",
            icon:"👤",
            group:"Ownership",
            options:ITEM_DATA.owners
        },

        {
            id:"location",
            label:"Found At",
            icon:"📍",
            group:"Ownership",
            options:ITEM_DATA.locations
        },

        {
            id:"story",
            label:"Story Hook",
            icon:"📖",
            group:"Story",
            options:ITEM_DATA.storyHooks
        }

    ]

};
