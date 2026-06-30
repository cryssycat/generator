/* ======================================================
   Character Generator v1
====================================================== */

const state = {};

/* ======================================================
   Initialization
====================================================== */

window.addEventListener("DOMContentLoaded", () => {

    // Build state from CHARACTER definition
    CHARACTER.forEach(field => {

        state[field.id] = {
            ...field,
            value: "",
            locked: false
        };

    });

    generateCharacter();

    document
        .getElementById("generateBtn")
        .addEventListener("click", generateCharacter);

    document
        .getElementById("copyBtn")
        .addEventListener("click", copyCharacter);

    document
        .getElementById("exportBtn")
        .addEventListener("click", exportCharacter);

    document
        .getElementById("importBtn")
        .addEventListener("click", () => {

            document
                .getElementById("importFile")
                .click();

        });

    document
        .getElementById("importFile")
        .addEventListener("change", importCharacter);

});


/* ======================================================
   Utilities
====================================================== */

function random(list){

    return list[
        Math.floor(Math.random()*list.length)
    ];

}


/* ======================================================
   Generate
====================================================== */

function generateCharacter(){

    Object.values(state).forEach(field => {

        if(field.locked)
            return;

        field.value = random(
            DATA[field.id]
        );

    });

    render();

}


/* ======================================================
   Single Field Reroll
====================================================== */

function rerollField(id){

    state[id].value =
        random(DATA[id]);

    render();

}


/* ======================================================
   Lock Toggle
====================================================== */

function toggleLock(id){

    state[id].locked =
        !state[id].locked;

    render();

}


/* ======================================================
   Render
====================================================== */

function render(){

    const appearance =
        document.getElementById(
            "appearanceGroup"
        );

    const personality =
        document.getElementById(
            "personalityGroup"
        );

    const lore =
        document.getElementById(
            "loreGroup"
        );

    appearance.innerHTML = "";
    personality.innerHTML = "";
    lore.innerHTML = "";

    Object.values(state).forEach(field => {

        const card =
            createCard(field);

        switch(field.group){

            case "Appearance":

                appearance.appendChild(card);

                break;

            case "Personality":

                personality.appendChild(card);

                break;

            case "Lore":

                lore.appendChild(card);

                break;

        }

    });

}


/* ======================================================
   Card Builder
====================================================== */

function createCard(field){

    const card =
        document.createElement("div");

    card.className =
        "field" +
        (field.locked
            ? " locked"
            : "");

    card.innerHTML = `

        <div class="field-header">

            <div class="field-title">

                <span>${field.icon}</span>

                <span>${field.label}</span>

            </div>

        </div>

        <div class="field-value">

            ${field.value}

        </div>

        <div class="field-actions">

            <button
                class="icon-btn lock">

                ${field.locked ? "🔒" : "🔓"}

            </button>

            <button
                class="icon-btn reroll">

                🎲

            </button>

        </div>

    `;

    card
        .querySelector(".lock")
        .onclick = () =>
            toggleLock(field.id);

    card
        .querySelector(".reroll")
        .onclick = () =>
            rerollField(field.id);

    return card;

}


/* ======================================================
   Copy
====================================================== */

function copyCharacter(){

    let text =
        "Character Generator\n\n";

    Object.values(state).forEach(field => {

        text +=
`${field.label}: ${field.value}\n`;

    });

    navigator.clipboard
        .writeText(text);

    alert("Character copied!");

}


/* ======================================================
   Export
====================================================== */

function exportCharacter(){

    const blob = new Blob(

        [
            JSON.stringify(
                state,
                null,
                2
            )
        ],

        {
            type:"application/json"
        }

    );

    const a =
        document.createElement("a");

    a.href =
        URL.createObjectURL(blob);

    a.download =
        "character.json";

    a.click();

}


/* ======================================================
   Import
====================================================== */

function importCharacter(e){

    const file =
        e.target.files[0];

    if(!file)
        return;

    const reader =
        new FileReader();

    reader.onload = () => {

        const imported =
            JSON.parse(
                reader.result
            );

        Object.keys(state).forEach(id => {

            if(imported[id]){

                state[id].value =
                    imported[id].value;

                state[id].locked =
                    imported[id].locked;

            }

        });

        render();

    };

    reader.readAsText(file);

}