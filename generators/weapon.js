const weaponGenerator = {

    name: "Weapon Generator",

    groups: {

        "Weapon":"⚔️",

        "Magic":"✨",

        "Craftsmanship":"🛠️",

        "Legend":"📖"

    },

    fields: [

        {
            id:"category",
            label:"Weapon Type",
            icon:"⚔️",
            group:"Weapon",
            options:WEAPON_DATA.categories
        },

        {
            id:"material",
            label:"Material",
            icon:"⛓️",
            group:"Weapon",
            options:WEAPON_DATA.materials
        },

        {
            id:"design",
            label:"Design",
            icon:"🎨",
            group:"Weapon",
            options:WEAPON_DATA.designs
        },

        {
            id:"element",
            label:"Element",
            icon:"🔥",
            group:"Magic",
            options:WEAPON_DATA.elements
        },

        {
            id:"ability",
            label:"Enchantment",
            icon:"✨",
            group:"Magic",
            options:WEAPON_DATA.abilities
        },

        {
            id:"rarity",
            label:"Rarity",
            icon:"💎",
            group:"Craftsmanship",
            options:WEAPON_DATA.rarities
        },

        {
            id:"owner",
            label:"Original Owner",
            icon:"👤",
            group:"Craftsmanship",
            options:WEAPON_DATA.owners
        },

        {
            id:"origin",
            label:"Origin",
            icon:"🌍",
            group:"Legend",
            options:WEAPON_DATA.origins
        },

        {
            id:"drawback",
            label:"Curse / Drawback",
            icon:"☠️",
            group:"Legend",
            options:WEAPON_DATA.drawbacks
        }

    ]

};
