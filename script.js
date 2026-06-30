/* =========================================================
   StarBrew Generator Engine v2
=========================================================*/

/* ---------------------------------------------------------
   Generator Registry
---------------------------------------------------------*/

const generators = {

    character: characterGenerator,
    fantasy: fantasyGenerator,
    relationship: relationshipGenerator,
    goth: gothGenerator,
    magicalGirl: magicalGirlGenerator,
    mlp: mlpGenerator,
    pokemon: pokemonGenerator,
    warrior: warriorGenerator,
    dragon: dragonGenerator,
    familiar: familiarGenerator,
    outfit: outfitGenerator,
    weapon: weaponGenerator,
    item: itemGenerator,
    magic: magicGenerator,
    polycule: polyculeGenerator,
    world: worldGenerator,
    palette: paletteGenerator

};

/* ---------------------------------------------------------
   App State
---------------------------------------------------------*/

let currentGenerator = generators.character;

const state = {};

/* ---------------------------------------------------------
   Startup
---------------------------------------------------------*/

window.addEventListener("DOMContentLoaded", () => {

    setupTabs();
    setupToolbar();

    loadGenerator("character");

});

/* ---------------------------------------------------------
   Utilities
---------------------------------------------------------*/

function random(options){

    if(!Array.isArray(options))
        return "";

    if(options.length===0)
        return "";

    return options[
        Math.floor(
            Math.random()*options.length
        )
    ];

}

function randomHex(){

    return "#"+
        Math.floor(
            Math.random()*16777215
        )
        .toString(16)
        .padStart(6,"0")
        .toUpperCase();

}

function isHex(value){

    return /^#[0-9A-F]{6}$/i.test(value);

}

/* ---------------------------------------------------------
   Generator Loading
---------------------------------------------------------*/

function loadGenerator(name){

    if(!generators[name]){

        console.error(
            "Unknown generator:",
            name
        );

        return;

    }

    currentGenerator =
        generators[name];

    buildState();

    generate();

}

/* ---------------------------------------------------------
   Build State
---------------------------------------------------------*/

function buildState(){

    Object.keys(state).forEach(key=>{

        delete state[key];

    });

    currentGenerator.fields.forEach(field=>{

        state[field.id]={

            id:field.id,
            label:field.label,
            icon:field.icon,
            group:field.group,

            options:field.options,

            value:"",

            locked:false

        };

    });

    document
        .getElementById("generatorName")
        .textContent=
            currentGenerator.name;

}

/* ---------------------------------------------------------
   Tabs
---------------------------------------------------------*/

function setupTabs(){

    document
        .querySelectorAll(".generator-tab")
        .forEach(tab=>{

            tab.addEventListener("click",()=>{

                document
                    .querySelectorAll(".generator-tab")
                    .forEach(button=>{

                        button.classList.remove(
                            "active"
                        );

                    });

                tab.classList.add(
                    "active"
                );

                loadGenerator(
                    tab.dataset.generator
                );

            });

        });

}

/* ---------------------------------------------------------
   Toolbar
---------------------------------------------------------*/

function setupToolbar(){

    document
        .getElementById("generateBtn")
        .addEventListener(
            "click",
            generate
        );

    document
        .getElementById("copyBtn")
        .addEventListener(
            "click",
            copyCharacter
        );

    document
        .getElementById("unlockAllBtn")
        .addEventListener(
            "click",
            ()=>{

                Object.values(state)
                    .forEach(field=>{

                        field.locked=false;

                    });

                render();

            }
        );

}

/* ---------------------------------------------------------
   Generate
---------------------------------------------------------*/

function generate(){

    /* ==========================================
       Palette Generator
    ========================================== */

    if(currentGenerator === paletteGenerator){

        generatePalette();

        render();

        return;

    }

    /* ==========================================
       All Other Generators
    ========================================== */

    Object.values(state).forEach(field=>{

        if(field.locked)
            return;

        field.value =
            random(field.options);

    });

    render();

}

/* ---------------------------------------------------------
   Palette Generator
---------------------------------------------------------*/

function generatePalette(){

    /* --------------------------
       Determine Mode
    -------------------------- */

    if(
        !state.mode.locked ||
        !state.mode.value
    ){

        state.mode.value =
            random(state.mode.options);

    }

    const mode =
        state.mode.value;

    /* --------------------------
       Preset
    -------------------------- */

    if(mode === "Preset"){

        const palette =
            random(
                PALETTE_DATA.presets
            );

        if(
            !state.paletteName.locked
        ){

            state.paletteName.value =
                palette.name;

        }

        const colors=[

            state.color1,
            state.color2,
            state.color3,
            state.color4,
            state.color5

        ];

        colors.forEach(
            (field,index)=>{

            if(field.locked)
                return;

            field.value =
                palette.colors[index];

        });

        return;

    }

    /* --------------------------
       Chaos
    -------------------------- */

    if(
        !state.paletteName.locked
    ){

        state.paletteName.value =
            "Chaos";

    }

    [

        state.color1,
        state.color2,
        state.color3,
        state.color4,
        state.color5

    ].forEach(field=>{

        if(field.locked)
            return;

        field.value =
            randomHex();

    });

}

/* ---------------------------------------------------------
   Render
---------------------------------------------------------*/

function render(){

    const container =
        document.getElementById(
            "generatorSections"
        );

    container.innerHTML = "";

    const groups = {};

    Object.values(state).forEach(field=>{

        if(!groups[field.group]){

            groups[field.group]=[];

        }

        groups[field.group]
            .push(field);

    });

    Object.entries(groups)
        .forEach(([group,fields])=>{

        const section =
            document.createElement(
                "section"
            );

        section.className =
            "group glass";

        section.innerHTML = `

            <h3>${group}</h3>

            <div class="field-list"></div>

        `;

        const list =
            section.querySelector(
                ".field-list"
            );

        fields.forEach(field=>{

            list.appendChild(

                createCard(field)

            );

        });

        container.appendChild(
            section
        );

    });

}

/* ---------------------------------------------------------
   Create Card
---------------------------------------------------------*/

function createCard(field){

    const card =
        document.createElement("div");

    card.className = "field";

    if(field.locked){

        card.classList.add("locked");

    }

    let valueHTML = "";

    if(isHex(field.value)){

        valueHTML = `

            <div class="color-preview">

                <div
                    class="color-swatch"
                    style="background:${field.value};">
                </div>

                <span>${field.value}</span>

            </div>

        `;

    }else{

        valueHTML = field.value;

    }

    card.innerHTML = `

        <div class="field-header">

            <div class="field-title">

                <span>${field.icon}</span>

                <span>${field.label}</span>

            </div>

            <div class="field-actions">

                <button
                    class="icon-btn lock"
                    title="Lock">

                    ${field.locked ? "🔒" : "🔓"}

                </button>

                <button
                    class="icon-btn reroll"
                    title="Reroll">

                    🎲

                </button>

            </div>

        </div>

        <div class="field-value">

            ${valueHTML}

        </div>

    `;

    card
        .querySelector(".lock")
        .addEventListener(
            "click",
            ()=>{

                toggleLock(field.id);

            }
        );

    card
        .querySelector(".reroll")
        .addEventListener(
            "click",
            ()=>{

                reroll(field.id);

            }
        );

    return card;

}

/* ---------------------------------------------------------
   Lock
---------------------------------------------------------*/

function toggleLock(id){

    if(!state[id])
        return;

    state[id].locked =
        !state[id].locked;

    render();

}

/* ---------------------------------------------------------
   Individual Reroll
---------------------------------------------------------*/

function reroll(id){

    if(!state[id])
        return;

    const field =
        state[id];

    if(field.locked)
        return;

    if(
        currentGenerator === paletteGenerator &&
        id.startsWith("color")
    ){

        if(state.mode.value === "Preset"){

            const palette =
                random(
                    PALETTE_DATA.presets
                );

            const index =
                Number(
                    id.replace("color","")
                ) - 1;

            field.value =
                palette.colors[index];

        }else{

            field.value =
                randomHex();

        }

    }else{

        field.value =
            random(field.options);

    }

    render();

}

/* ---------------------------------------------------------
   Copy Generator
---------------------------------------------------------*/

function copyCharacter(){

    let text =
`${currentGenerator.name}

`;

    const groups = {};

    Object.values(state)
        .forEach(field=>{

            if(!groups[field.group]){

                groups[field.group]=[];

            }

            groups[field.group]
                .push(field);

        });

    Object.entries(groups)
        .forEach(([group,fields])=>{

            text += `${group}\n`;

            text +=
"--------------------\n";

            fields.forEach(field=>{

                text +=
`${field.label}: ${field.value}\n`;

            });

            text += "\n";

        });

    navigator.clipboard.writeText(
        text
    );

}

/* ---------------------------------------------------------
   Helpers
---------------------------------------------------------*/

function getState(){

    return structuredClone(
        state
    );

}

function setState(newState){

    Object.keys(state)
        .forEach(key=>{

            if(newState[key]){

                state[key] =
                    newState[key];

            }

        });

    render();

}
