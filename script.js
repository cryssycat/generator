/* =========================================================
   StarBrew Generator Engine
=========================================================*/

/* ---------------------------------------------------------
   Generator Registry
---------------------------------------------------------*/

const generators = {
    character: characterGenerator,
    fantasy: fantasyGenerator,
    goth: gothGenerator,
    relationship: relationshipGenerator,
    magicalGirl: magicalGirlGenerator,
   mlp: mlpGenerator,
   warrior: warriorGenerator,
   dragon: dragonGenerator,
   pokemon: pokemonGenerator,
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

/* ---------------------------------------------------------
   Load Generator
---------------------------------------------------------*/

function loadGenerator(name){

    if(!generators[name]){

        console.error(
            "Generator not found:",
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

            ...field,

            value:"",
            locked:false

        };

    });

    document.getElementById(
        "generatorName"
    ).textContent=
        currentGenerator.name;

}

/* ---------------------------------------------------------
   Tabs
---------------------------------------------------------*/

function setupTabs(){

    document
        .querySelectorAll(".generator-tab")
        .forEach(tab=>{

            tab.onclick=()=>{

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

            };

        });

}

/* ---------------------------------------------------------
   Toolbar
---------------------------------------------------------*/

function setupToolbar(){

    document
        .getElementById("generateBtn")
        .onclick=generate;

    document
        .getElementById("copyBtn")
        .onclick=copyCharacter;

    document
        .getElementById("unlockAllBtn")
        .onclick=()=>{

            Object.values(state).forEach(field=>{

                field.locked=false;

            });

            render();

        };

}

/* ---------------------------------------------------------
   Generate
---------------------------------------------------------*/

function generate(){

    Object.values(state).forEach(field=>{

        if(field.locked)
            return;

        field.value=
            random(field.options);

    });

    render();

}

/* ---------------------------------------------------------
   Render
---------------------------------------------------------*/

function render(){

    const container=
        document.getElementById(
            "generatorSections"
        );

    container.innerHTML="";

    const groups={};

    Object.values(state).forEach(field=>{

        if(!groups[field.group]){

            groups[field.group]=[];

        }

        groups[field.group].push(
            field
        );

    });

    Object.entries(groups).forEach(
        ([groupName,fields])=>{

        const section=
            document.createElement(
                "section"
            );

        section.className=
            "group glass";

        section.innerHTML=`

            <h3>${groupName}</h3>

            <div class="field-list"></div>

        `;

        const list=
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

}/* ---------------------------------------------------------
   Create Card
---------------------------------------------------------*/

function createCard(field){

    const card=document.createElement("div");

    card.className="field";

    let valueHTML = field.value;

    const isColor = /^#[0-9A-F]{6}$/i.test(field.value);

    if(isColor){

        valueHTML = `
            <div class="color-preview">
                <div class="color-swatch" style="background:${valueHTML}"></div>
                <span>${valueHTML}</span>
            </div>
        `;

    }

    
    if(field.locked){

        card.classList.add("locked");

    }

    card.innerHTML=`

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

    card.querySelector(".lock")
        .onclick=()=>{

            toggleLock(field.id);

        };

    card.querySelector(".reroll")
        .onclick=()=>{

            reroll(field.id);

        };

    return card;

}


/* ---------------------------------------------------------
   Lock
---------------------------------------------------------*/

function toggleLock(id){

    if(!state[id]) return;

    state[id].locked=
        !state[id].locked;

    render();

}


/* ---------------------------------------------------------
   Individual Reroll
---------------------------------------------------------*/

function reroll(id){

    if(!state[id]) return;

    state[id].value=
        random(state[id].options);

    render();

}


/* ---------------------------------------------------------
   Copy Character
---------------------------------------------------------*/

function copyCharacter(){

    let text=`${currentGenerator.name}

`;

    const groups={};

    Object.values(state).forEach(field=>{

        if(!groups[field.group]){

            groups[field.group]=[];

        }

        groups[field.group].push(field);

    });

    Object.entries(groups).forEach(

        ([group,fields])=>{

        text+=`${group}
`;

        text+="--------------------\n";

        fields.forEach(field=>{

            text+=`${field.label}: ${valueHTML}\n`;

        });

        text+="\n";

    });

    navigator.clipboard.writeText(text);

}


/* ---------------------------------------------------------
   Helpers
---------------------------------------------------------*/

function getState(){

    return structuredClone(state);

}


function setState(newState){

    Object.keys(state).forEach(key=>{

        if(newState[key]){

            state[key]=newState[key];

        }

    });

    render();

}


/* Palettes */

const palette =
    random(PALETTE_DATA.presets);

state.paletteName.value =
    palette.name;

state.color1.value =
    palette.colors[0];

state.color2.value =
    palette.colors[1];

state.color3.value =
    palette.colors[2];

state.color4.value =
    palette.colors[3];

state.color5.value =
    palette.colors[4];

function randomHex(){

    return "#" +
        Math.floor(
            Math.random()*16777215
        )
        .toString(16)
        .padStart(6,"0")
        .toUpperCase();

}

state.paletteName.value =
    "Chaos";

state.color1.value =
    randomHex();

state.color2.value =
    randomHex();

state.color3.value =
    randomHex();

state.color4.value =
    randomHex();

state.color5.value =
    randomHex();
