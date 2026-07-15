const vibeGenerator = {

    name: "Vibe Generator",

    fields: [

        // Visual

        {
            id: "palette",
            label: "Color Palette",
            icon: "🎨",
            group: "Visual",
            options: VIBE_DATA.palettes
        },

        {
            id: "aesthetic",
            label: "Aesthetic",
            icon: "✨",
            group: "Visual",
            options: VIBE_DATA.aesthetics
        },

        {
            id: "texture",
            label: "Texture",
            icon: "🧵",
            group: "Visual",
            options: VIBE_DATA.textures
        },

        {
            id: "material",
            label: "Material",
            icon: "💎",
            group: "Visual",
            options: VIBE_DATA.materials
        },

        // Design

        {
            id: "accessory",
            label: "Accessory",
            icon: "💍",
            group: "Design",
            options: VIBE_DATA.accessories
        },

        {
            id: "flower",
            label: "Flower",
            icon: "🌸",
            group: "Design",
            options: VIBE_DATA.flowers
        },

        {
            id: "celestial",
            label: "Celestial",
            icon: "🌙",
            group: "Design",
            options: VIBE_DATA.celestial
        },

        // Atmosphere

        {
            id: "theme",
            label: "Theme",
            icon: "🏡",
            group: "Atmosphere",
            options: VIBE_DATA.themes
        },

        {
            id: "lighting",
            label: "Lighting",
            icon: "🕯️",
            group: "Atmosphere",
            options: VIBE_DATA.lighting
        },

        {
            id: "weather",
            label: "Weather",
            icon: "☁️",
            group: "Atmosphere",
            options: VIBE_DATA.weather
        },

        // Mood

        {
            id: "music",
            label: "Music",
            icon: "🎵",
            group: "Mood",
            options: VIBE_DATA.music
        },

        {
            id: "mood",
            label: "Mood",
            icon: "💖",
            group: "Mood",
            options: VIBE_DATA.mood
        },

        {
            id: "keywords",
            label: "Keywords",
            icon: "🏷️",
            group: "Mood",
            options: VIBE_DATA.keywords
        }

    ]

};
