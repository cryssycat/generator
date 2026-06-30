const outfitGenerator = {

    name: "Outfit Generator",

    groups: {

        "Head":"👒",

        "Clothing":"👕",

        "Accessories":"👢",

        "Style":"🎨"

    },

    fields: [

        {
            id:"headwear",
            label:"Headwear",
            icon:"🎩",
            group:"Head",
            options:OUTFIT_DATA.headwear
        },

        {
            id:"hair",
            label:"Hairstyle",
            icon:"💇",
            group:"Head",
            options:OUTFIT_DATA.hairstyles
        },

        {
            id:"top",
            label:"Top",
            icon:"👕",
            group:"Clothing",
            options:OUTFIT_DATA.tops
        },

        {
            id:"bottom",
            label:"Bottom",
            icon:"👖",
            group:"Clothing",
            options:OUTFIT_DATA.bottoms
        },

        {
            id:"dress",
            label:"Dress",
            icon:"👗",
            group:"Clothing",
            options:OUTFIT_DATA.dresses
        },

        {
            id:"shoes",
            label:"Footwear",
            icon:"👢",
            group:"Clothing",
            options:OUTFIT_DATA.footwear
        },

        {
            id:"accessory",
            label:"Accessory",
            icon:"💍",
            group:"Accessories",
            options:OUTFIT_DATA.accessories
        },

        {
            id:"palette",
            label:"Color Palette",
            icon:"🎨",
            group:"Style",
            options:OUTFIT_DATA.colorPalettes
        },

        {
            id:"aesthetic",
            label:"Aesthetic",
            icon:"✨",
            group:"Style",
            options:OUTFIT_DATA.aesthetics
        }

    ]

};
