/* =========================================================
   Character Generator
   Script
=========================================================*/

/* ---------------------------------------------------------
   Generator Registry
---------------------------------------------------------*/

const generators = {

    character: characterGenerator,

    fantasy: fantasyGenerator

};


/* ---------------------------------------------------------
   App State
---------------------------------------------------------*/

let currentGenerator =
    generators.character;

const state = {};


/* ---------------------------------------------------------
   Utilities
---------------------------------------------------------*/

function random(list){

    if(!Array.isArray(list))
        return "";

    if(list.length===0)
        return "";

    return list[
        Math.floor(
            Math.random()*list.length
        )
    ];

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

}


/* ---------------------------------------------------------
   Startup
---------------------------------------------------------*/

window.addEventListener(

    "DOMContentLoaded",

    ()=>{

        setupTabs();

        setupButtons();

        buildState();

        generateCharacter();

    }

);


/* ---------------------------------------------------------
   Generator Tabs
---------------------------------------------------------*/

function setupTabs(){

    document

    .querySelectorAll(

        ".generator-tab"

    )

    .forEach(tab=>{

        tab.onclick=()=>{

            document

            .querySelectorAll(

                ".generator-tab"

            )

            .forEach(button=>{

                button.classList.remove(

                    "active"

                );

            });

            tab.classList.add(

                "active"

            );

            const id=

                tab.dataset.generator;

            currentGenerator=

                generators[id];

            document

            .getElementById(

                "generatorName"

            )

            .textContent=

                currentGenerator.name;

            buildState();

            generateCharacter();

        };

    });

}


/* ---------------------------------------------------------
   Toolbar Buttons
---------------------------------------------------------*/

function setupButtons(){

    document

    .getElementById(

        "generateBtn"

    )

    .onclick=

        generateCharacter;


    document

    .getElementById(

        "copyBtn"

    )

    .onclick=

        copyCharacter;


    document

    .getElementById(

        "unlockAllBtn"

    )

    .onclick=()=>{

        Object.values(state)

        .forEach(field=>{

            field.locked=false;

        });

        render();

    };

}

/* ---------------------------------------------------------
   Generate
---------------------------------------------------------*/

function generateCharacter(){

    Object.values(state).forEach(field=>{

        if(field.locked)
            return;

        field.value =
            random(field.options);

    });

    render();

}


/* ---------------------------------------------------------
   Individual Reroll
---------------------------------------------------------*/

function rerollField(id){

    const field = state[id];

    if(!field) return;

    field.value =
        random(field.options);

    render();

}


/* ---------------------------------------------------------
   Toggle Lock
---------------------------------------------------------*/

function toggleLock(id){

    if(!state[id]) return;

    state[id].locked =
        !state[id].locked;

    render();

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

    // Find all groups used by this generator
    const groups = {};

    Object.values(state).forEach(field=>{

        if(!groups[field.group]){

            groups[field.group] = [];

        }

        groups[field.group].push(field);

    });

    // Build one section per group
    Object.entries(groups).forEach(([groupName,fields])=>{

        const section =
            document.createElement("section");

        section.className =
            "group glass";

        section.innerHTML = `

            <h3>${groupName}</h3>

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

    Object.values(groups).forEach(group=>{

        group.innerHTML="";

    });

    Object.values(state).forEach(field=>{

        const card =
            createCard(field);

        if(groups[field.group]){

            groups[field.group]
                .appendChild(card);

        }

    });

}


/* ---------------------------------------------------------
   Card Builder
---------------------------------------------------------*/

function createCard(field){

    const card =
        document.createElement("div");

    card.className =
        "field";

    if(field.locked){

        card.classList.add(
            "locked"
        );

    }

    card.innerHTML = `

        <div class="field-header">

            <div class="field-title">

                <span>${field.icon}</span>

                <span>${field.label}</span>

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

        </div>

        <div class="field-value">

            ${field.value}

        </div>

    `;

    card
        .querySelector(".lock")
        .onclick = ()=>{

            toggleLock(field.id);

        };

    card
        .querySelector(".reroll")
        .onclick = ()=>{

            rerollField(field.id);

        };

    return card;

}


/* ---------------------------------------------------------
   Copy Character
---------------------------------------------------------*/

function copyCharacter(){

    let text =
`${currentGenerator.name}

`;

    Object.values(state).forEach(field=>{

        text +=
`${field.label}: ${field.value}
`;

    });

    navigator.clipboard
        .writeText(text);

}


/* ---------------------------------------------------------
   Helpers
---------------------------------------------------------*/

function getCharacter(){

    const character={};

    Object.values(state).forEach(field=>{

        character[field.id]=
            field.value;

    });

    return character;

}
