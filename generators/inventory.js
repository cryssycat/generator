/* ==========================================
   Inventory Generator
========================================== */

const inventoryGenerator = {

    name: "Inventory Generator",

    fields: [

        // Everyday Carry

        {
            id: "bag",
            label: "Bag",
            icon: "🎒",
            group: "Everyday Carry",
            options: INVENTORY_DATA.bags
        },

        {
            id: "keyItem",
            label: "Key Item",
            icon: "🔑",
            group: "Everyday Carry",
            options: INVENTORY_DATA.keyItems
        },

        {
            id: "luckyCharm",
            label: "Lucky Charm",
            icon: "🍀",
            group: "Everyday Carry",
            options: INVENTORY_DATA.luckyCharms
        },

        {
            id: "notebook",
            label: "Notebook",
            icon: "📖",
            group: "Everyday Carry",
            options: INVENTORY_DATA.notebooks
        },

        {
            id: "writingTool",
            label: "Writing Tool",
            icon: "✏️",
            group: "Everyday Carry",
            options: INVENTORY_DATA.writingTools
        },

        // Supplies

        {
            id: "snack",
            label: "Snack",
            icon: "🍎",
            group: "Supplies",
            options: INVENTORY_DATA.snacks
        },

        {
            id: "drink",
            label: "Drink",
            icon: "🥤",
            group: "Supplies",
            options: INVENTORY_DATA.drinks
        },

        {
            id: "emergencySupply",
            label: "Emergency Supply",
            icon: "🩹",
            group: "Supplies",
            options: INVENTORY_DATA.emergencySupplies
        },

        {
            id: "currency",
            label: "Currency",
            icon: "💰",
            group: "Supplies",
            options: INVENTORY_DATA.currency
        },

        {
            id: "utilityItem",
            label: "Utility Item",
            icon: "🛠️",
            group: "Supplies",
            options: INVENTORY_DATA.utilityItems
        },

        // Adventure Gear

        {
            id: "weapon",
            label: "Weapon",
            icon: "⚔️",
            group: "Adventure Gear",
            options: INVENTORY_DATA.weapons
        },

        {
            id: "tool",
            label: "Tool",
            icon: "🔧",
            group: "Adventure Gear",
            options: INVENTORY_DATA.tools
        },

        {
            id: "navigation",
            label: "Navigation",
            icon: "🧭",
            group: "Adventure Gear",
            options: INVENTORY_DATA.navigation
        },

        {
            id: "potion",
            label: "Potion",
            icon: "🧪",
            group: "Adventure Gear",
            options: INVENTORY_DATA.potions
        },

        {
            id: "survival",
            label: "Survival Item",
            icon: "🏕️",
            group: "Adventure Gear",
            options: INVENTORY_DATA.survival
        },

        // Personal Items

        {
            id: "keepsake",
            label: "Keepsake",
            icon: "❤️",
            group: "Personal Items",
            options: INVENTORY_DATA.keepsakes
        },

        {
            id: "memory",
            label: "Memory",
            icon: "📸",
            group: "Personal Items",
            options: INVENTORY_DATA.memories
        },

        {
            id: "gift",
            label: "Gift",
            icon: "🎁",
            group: "Personal Items",
            options: INVENTORY_DATA.gifts
        },

        {
            id: "comfortItem",
            label: "Comfort Item",
            icon: "🧸",
            group: "Personal Items",
            options: INVENTORY_DATA.comfortItems
        },

        {
            id: "secretItem",
            label: "Secret Item",
            icon: "🤫",
            group: "Personal Items",
            options: INVENTORY_DATA.secretItems
        },

        // Miscellaneous

        {
            id: "trinket",
            label: "Random Trinket",
            icon: "📦",
            group: "Miscellaneous",
            options: INVENTORY_DATA.trinkets
        },

        {
            id: "companionItem",
            label: "Companion Item",
            icon: "🐾",
            group: "Miscellaneous",
            options: INVENTORY_DATA.companionItems
        },

        {
            id: "valuable",
            label: "Valuable",
            icon: "💎",
            group: "Miscellaneous",
            options: INVENTORY_DATA.valuables
        },

        {
            id: "collectible",
            label: "Collectible",
            icon: "📜",
            group: "Miscellaneous",
            options: INVENTORY_DATA.collectibles
        },

        {
            id: "strangeObject",
            label: "Strange Object",
            icon: "❓",
            group: "Miscellaneous",
            options: INVENTORY_DATA.strangeObjects
        }

    ]

};
