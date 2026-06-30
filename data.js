/* ======================================================
   Character Generator v1
   Data
====================================================== */

const DATA = {

    /* ---------------- Appearance ---------------- */

    species: [
        "Fox",
        "Ghost Fox",
        "Bunny",
        "Wolf",
        "Cat",
        "Bear",
        "Dragon",
        "Goat",
        "Sheep",
        "Bat",
        "Raccoon",
        "Otter",
        "Deer",
        "Cow",
        "Mouse",
        "Red Panda",
        "Ferret",
        "Skunk"
    ],

    theme: [
        "Pastel Kitchen",
        "Forest Witch",
        "Moon Garden",
        "Haunted Library",
        "Celestial",
        "Crystal Cavern",
        "Candy Shop",
        "Tea House",
        "Ocean Breeze",
        "Flower Shop",
        "Cozy Bakery",
        "Ancient Cathedral",
        "Victorian Manor",
        "Enchanted Forest",
        "Winter Village",
        "Autumn Harvest"
    ],

    palette: [
        "Chocolate Brown & Strawberry Pink",
        "Lavender & Silver",
        "Mint & Cream",
        "Black & Gold",
        "Blue & White",
        "Peach & Coral",
        "Sage & Ivory",
        "Rose & Burgundy",
        "Sky Blue & Navy",
        "Emerald & Bronze",
        "Purple & Teal",
        "Pink & White"
    ],

    accessory: [
        "Moonstone Ring",
        "Tiny Witch Hat",
        "Flower Crown",
        "Pocket Watch",
        "Silver Necklace",
        "Ribbon Bow",
        "Crystal Pendant",
        "Leather Satchel",
        "Lantern",
        "Star Earrings",
        "Lace Gloves",
        "Magic Staff"
    ],

    /* ---------------- Personality ---------------- */

    personality: [
        "Gentle Giant",
        "Shy",
        "Outgoing",
        "Curious",
        "Playful",
        "Stoic",
        "Kind",
        "Optimistic",
        "Dreamy",
        "Clumsy",
        "Protective",
        "Mischievous"
    ],

    likes: [
        "Tea",
        "Books",
        "Rain",
        "Baking",
        "Stargazing",
        "Flowers",
        "Music",
        "Snow",
        "Painting",
        "Magic",
        "Cats",
        "Nature"
    ],

    dislikes: [
        "Crowds",
        "Thunder",
        "Messes",
        "Loud Noises",
        "Spicy Food",
        "Cold Weather",
        "Arguments",
        "Dark Caves",
        "Being Late",
        "Dust"
    ],

    hobbies: [
        "Reading",
        "Embroidery",
        "Potion Brewing",
        "Photography",
        "Painting",
        "Gardening",
        "Cooking",
        "Music",
        "Writing",
        "Collecting Trinkets",
        "Tea Blending",
        "Exploring Ruins"
    ],

    fears: [
        "Being Forgotten",
        "Deep Water",
        "Fire",
        "Failure",
        "Lightning",
        "Loneliness",
        "Losing Loved Ones",
        "Darkness",
        "Heights",
        "Storms"
    ],

    /* ---------------- Lore ---------------- */

    occupation: [
        "Tea Witch",
        "Librarian",
        "Florist",
        "Tailor",
        "Baker",
        "Apothecary",
        "Fashion Designer",
        "Innkeeper",
        "Artist",
        "Mage",
        "Potion Seller",
        "Merchant"
    ],

    story: [
        "Can hear memories attached to jewelry.",
        "Always carries an enchanted teacup.",
        "Collects forgotten dreams in glass bottles.",
        "Owns a magical greenhouse.",
        "Can speak with ghosts.",
        "Searches for lost constellations.",
        "Protects an ancient forest spirit.",
        "Writes letters to the moon.",
        "Has never seen the ocean.",
        "Can weave emotions into clothing.",
        "Owns a tiny dragon companion.",
        "Dreams predict the future."
    ],

    themeSong: [
        "Soft Piano",
        "Cozy Jazz",
        "Dream Pop",
        "Fantasy Orchestra",
        "Lo-fi",
        "Music Box",
        "Celtic Folk",
        "Ambient",
        "Acoustic",
        "Vocal Ballad"
    ]

};

/* ======================================================
   Character Field Definitions
====================================================== */

const CHARACTER = [

    {
        id: "species",
        label: "Species",
        icon: "🦊",
        group: "Appearance"
    },

    {
        id: "theme",
        label: "Theme",
        icon: "🎨",
        group: "Appearance"
    },

    {
        id: "palette",
        label: "Palette",
        icon: "🌈",
        group: "Appearance"
    },

    {
        id: "accessory",
        label: "Accessory",
        icon: "💍",
        group: "Appearance"
    },

    {
        id: "personality",
        label: "Personality",
        icon: "😊",
        group: "Personality"
    },

    {
        id: "likes",
        label: "Likes",
        icon: "❤️",
        group: "Personality"
    },

    {
        id: "dislikes",
        label: "Dislikes",
        icon: "💔",
        group: "Personality"
    },

    {
        id: "hobbies",
        label: "Hobbies",
        icon: "🎮",
        group: "Personality"
    },

    {
        id: "fears",
        label: "Fears",
        icon: "😨",
        group: "Personality"
    },

    {
        id: "occupation",
        label: "Occupation",
        icon: "💼",
        group: "Lore"
    },

    {
        id: "story",
        label: "Story Hook",
        icon: "📖",
        group: "Lore"
    },

    {
        id: "themeSong",
        label: "Theme Song",
        icon: "🎵",
        group: "Lore"
    }

];