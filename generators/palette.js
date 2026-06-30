const paletteGenerator = {

    name: "Color Palette Generator",

    groups: {

        "Palette":"🎨",

        "Colors":"🌈"

    },

    fields: [

        {
            id:"mode",
            label:"Mode",
            icon:"⚙️",
            group:"Palette",
            options:[
                "Preset",
                "Chaos"
            ]
        },

        {
            id:"paletteName",
            label:"Palette Name",
            icon:"📚",
            group:"Palette",
            options:[
                ""
            ]
        },

        {
            id:"color1",
            label:"Primary",
            icon:"🟥",
            group:"Colors",
            options:[]
        },

        {
            id:"color2",
            label:"Secondary",
            icon:"🟧",
            group:"Colors",
            options:[]
        },

        {
            id:"color3",
            label:"Accent",
            icon:"🟨",
            group:"Colors",
            options:[]
        },

        {
            id:"color4",
            label:"Highlight",
            icon:"🟩",
            group:"Colors",
            options:[]
        },

        {
            id:"color5",
            label:"Shadow",
            icon:"🟦",
            group:"Colors",
            options:[]
        }

    ]

};
