/* ==========================================
   Character Generator
   StarHub Style
========================================== */

:root{

    --bg1:#122447;
    --bg2:#09111f;

    --glass:rgba(18,30,56,.60);
    --glass-light:rgba(255,255,255,.05);

    --border:rgba(255,255,255,.10);

    --text:#eef5ff;
    --soft:#c9d7ea;

    --accent:#9ecbff;
    --accent-dark:#7db6ff;

    --shadow:0 12px 32px rgba(0,0,0,.35);

}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{

    font-family:Inter,Segoe UI,Arial,sans-serif;

    color:var(--text);

    min-height:100vh;

    background:

        linear-gradient(
            180deg,
            var(--bg1),
            var(--bg2)
        );

}


/* ==========================================
   Background
========================================== */

.background{

    position:fixed;

    inset:0;

    pointer-events:none;

    background:

        radial-gradient(circle at top,
        rgba(170,210,255,.15),
        transparent 55%),

        radial-gradient(circle at bottom right,
        rgba(120,170,255,.10),
        transparent 45%);

    z-index:-1;

}


/* ==========================================
   Layout
========================================== */

.container{

    width:min(1300px,95%);

    margin:auto;

    padding:32px 0 60px;

}


/* ==========================================
   Glass
========================================== */

.glass{

    background:var(--glass);

    border:1px solid var(--border);

    backdrop-filter:blur(20px);

    border-radius:22px;

    box-shadow:var(--shadow);

}


/* ==========================================
   Hero
========================================== */

.hero{

    padding:42px;

    text-align:center;

    margin-bottom:20px;

}

.hero h1{

    font-size:2.4rem;

    margin-bottom:10px;

}

.hero p{

    color:var(--soft);

    max-width:700px;

    margin:auto;

    line-height:1.6;

}


/* ==========================================
   Generator Tabs
========================================== */

.generator-tabs{

    display:flex;

    gap:12px;

    flex-wrap:wrap;

    padding:18px;

    margin-bottom:20px;

}

.generator-tab{

    background:rgba(255,255,255,.05);

    color:white;

    border:none;

    border-radius:999px;

    padding:10px 18px;

    cursor:pointer;

    transition:.2s;

    font-weight:600;

}

.generator-tab:hover{

    background:rgba(255,255,255,.12);

}

.generator-tab.active{

    background:linear-gradient(
        180deg,
        var(--accent),
        var(--accent-dark)
    );

    color:#06111d;

}


/* ==========================================
   Toolbar
========================================== */

.toolbar{

    display:flex;

    gap:15px;

    flex-wrap:wrap;

    justify-content:center;

    padding:20px;

    margin-bottom:24px;

}

.toolbar button{

    border:none;

    cursor:pointer;

    border-radius:999px;

    padding:14px 22px;

    font-weight:700;

    background:

        linear-gradient(
            180deg,
            var(--accent),
            var(--accent-dark)
        );

    color:#06111d;

    transition:.2s;

}

.toolbar button:hover{

    transform:translateY(-3px);

}


/* ==========================================
   Generator Title
========================================== */

.generator-title{

    margin-bottom:20px;

}

.generator-title h2{

    font-size:2rem;

    text-align:center;

}


/* ==========================================
   Sections
========================================== */

.group{

    padding:22px;

    margin-bottom:24px;

}

.group h3{

    margin-bottom:18px;

    color:var(--accent);

}


/* ==========================================
   Field Grid
========================================== */

.field-list{

    display:grid;

    grid-template-columns:

        repeat(auto-fit,minmax(320px,1fr));

    gap:14px;

}


/* ==========================================
   Field Card
========================================== */

.field{

    background:var(--glass-light);

    border:1px solid rgba(255,255,255,.08);

    border-radius:16px;

    padding:14px 16px;

    transition:.2s;

}

.field:hover{

    transform:translateY(-2px);

    border-color:rgba(255,255,255,.16);

}


/* ==========================================
   Header
========================================== */

.field-header{

    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-bottom:8px;

}

.field-title{

    display:flex;

    align-items:center;

    gap:8px;

    font-weight:700;

    font-size:.95rem;

}


/* ==========================================
   Value
========================================== */

.field-value{

    color:var(--soft);

    line-height:1.4;

    font-size:1rem;

}


/* ==========================================
   Actions
========================================== */

.field-actions{

    display:flex;

    gap:6px;

}

.icon-btn{

    width:34px;

    height:34px;

    border:none;

    cursor:pointer;

    border-radius:10px;

    background:rgba(255,255,255,.06);

    color:white;

    font-size:.9rem;

    transition:.2s;

}

.icon-btn:hover{

    background:rgba(255,255,255,.14);

}


/* ==========================================
   Locked
========================================== */

.field.locked{

    border-color:rgba(155,205,255,.55);

    box-shadow:

        0 0 18px rgba(120,180,255,.18);

}

.field.locked .field-title{

    color:var(--accent);

}


/* ==========================================
   Footer
========================================== */

footer{

    margin-top:40px;

    text-align:center;

    color:var(--soft);

    opacity:.7;

}


/* ==========================================
   Scrollbar
========================================== */

::-webkit-scrollbar{

    width:10px;

}

::-webkit-scrollbar-thumb{

    background:rgba(255,255,255,.15);

    border-radius:999px;

}


/* ==========================================
   Responsive
========================================== */

@media(max-width:900px){

    .field-list{

        grid-template-columns:1fr;

    }

}

@media(max-width:700px){

    .generator-tabs{

        justify-content:center;

    }

    .toolbar{

        flex-direction:column;

    }

    .toolbar button{

        width:100%;

    }

    .hero{

        padding:28px;

    }

    .hero h1{

        font-size:2rem;

    }

}


.color-preview{

    display:flex;

    align-items:center;

    gap:12px;

}

.color-swatch{

    width:72px;

    height:28px;

    border-radius:999px;

}
