/* Fonts */
@font-face {
    font-family: 'Inter';
    src: url('fonts/Inter-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Inter';
    src: url('fonts/Inter-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Inter';
    src: url('fonts/Inter-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Inter';
    src: url('fonts/Inter-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}


:root {
	--colorppal: #FDB325;
	--colortrans: #FDB32552;
    --GrisAnaya: #898989
}

b,
strong {
	font-weight: bold;
}

/*-------------------------------------------------*/
/*------ PARTE QUE NO AFECTA AL DISEÑO FINAL ------*/
/*-------------------------------------------------*/

    /* TOC */
    #indice .units ul li {
        background: #FFF;
        opacity: 1;
        -moz-transition: opacity 0.3s ease-in-out;
        -webkit-transition: opacity 0.3s ease-in-out;
        transition: opacity 0.3s ease-in-out;
        -webkit-border-radius: 0px;
        -moz-border-radius: 0px;
        border-radius: 0px;
        -moz-box-shadow: 3px 5px 5px #00000036;
        -webkit-box-shadow: 3px 5px 5px #00000036;
        box-shadow: 3px 5px 5px #00000036;
        margin-bottom: 11px;
    }

    #indice .units ul li.active:not(.disabled) {
        background: var(--colorppal);
    }

    body:not(.isTablet) #indice .units ul li:hover:not(.disabled),
    #indice .units ul li:focus:not(.disabled) {
        background: var(--colortrans);
    }
    body #indice .units ul li.active:hover:not(.disabled) {
        background: var(--colorppal);
        color: #FFF;
    }

    #indice .units ul li a:not(.delete) {
        padding: 0;
        -moz-border-radius: 0;
        -webkit-border-radius: 0;
        border-radius: 0;
    }
    #indice .units ul li a .title {
        padding: 14px 16px;
        color: #000;
        -moz-transition: margin-left 0.2s ease-in-out;
        -webkit-transition: margin-left 0.2s ease-in-out;
        transition: margin-left 0.2s ease-in-out;
    }
    body:not(.isTablet) #indice .units ul li:not(.disabled) a:hover .title {
        color:#000;
        margin-left: 30px;
    }
    body:not(.isTablet) #indice .units ul li.active:not(.disabled) a:hover .title {
        margin-left: 30px;
    }

    body:not(.isTablet) #indice .units ul li.active:not(.disabled) a .title {
        margin-left: 30px;
        color: #000;
    }

    #indice .unit-content .header.default {
        background: var(--colorppal) !important;
    }
    #indice a:hover,
    #indice a:active,
    #indice a:focus {
        color: var(--colorppal);
    }
    #indice .btn-primary {
        color: #000;
        padding-top: 5px;
    }
    #indice .actividades a:hover {
        color: var(--colorppal);
    }
    /*--*/

    /* MENÚ DESPLEGABLE */
    #book-index #indice .units ul li a .title {
        margin: 0;
        font-size: 16px;
        font-weight: bold;
    }
    #book-index #indice .units ul li a:not(.delete) {
        padding: 5px 20px 5px 20px;
        border-bottom: 2px solid var(--colorppal);
        background-color: #e3e3e3;
    }
    body:not(.isTablet) #book-index #indice .units ul li:not(.disabled) a:hover, #book-index #indice .units ul li.active a {
        background: var(--colorppal);
        color: #000;
    }
    #book-index #indice .units ul li a:hover .title {
        margin: 0;
        font-size: 16px;
        color: #000;
    }
    #book-index .col-main {
        background: var(--colorppal);
    }
    #book-index #indice .unit-content .content .title-buttons {
        text-align: left;
    }
    #book-index .units ul li a .title {
        padding: 12px 0px;
    }
    #book-index #indice .unit-content .content .title-buttons .btn {
        background: #fff;
        color: #000;
        padding: 5px 15px;
        border-radius: 5px;
    }
    #book-index #indice .unit-content .actividades .item {
        padding: 12px 15px;
        background: none;
        color: white;
    }
    #book-index #indice .unit-content .actividades .item .title {
        color: #FFF;
        font-weight: bold;
    }
    body:not(.isTablet) #book-index #indice .unit-content .actividades .item:hover,
    #book-index #indice .unit-content .actividades .item.active,
    #book-index #indice .unit-content .actividades .item.current {
        color: #fff;
        background: #0000002e;
    }
    body:not(.isTablet) #book-index #indice .unit-content .actividades .item:active,
    #book-index #indice .unit-content .actividades .item.active,
    #book-index #indice .unit-content .actividades .item.current {
        background: #0000002e;
    }
    #book-index #indice .unit-content a {
        color: #fff;
    }
    #book-index #indice .unit-content a:hover,
    #book-index #indice .unit-content a:active,
        #book-index #indice .unit-content a:focus {
        color: #fff;
        font-weight: bold;
    }
    /*---*/
    /*logo*/
    .content_type_curso_Anaya_Secundaria_2022_Dev.content_type_clase_Anaya_Secundaria_2022_Dev .libro-left ul li .title:before { 
    opacity: 0;
    }

    /* NAVBAR */
    .Anaya_Secundaria_2022_Dev-navbar h3 {
        width: 75%;
        margin: auto;
        margin-bottom: 15px;
        font-size: 18px;
        font-weight: bold;
    }
    .Anaya_Secundaria_2022_Dev-navbar {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 50px;
        background: var(--colorppal);
        border-bottom: 0;
        border-top: 4px solid #555;
        display: none;
    }
    .logo-publisher {
        display: none;
        background: none;
    }
    body.is_app .Anaya_Secundaria_2022_Dev-navbar {
        -webkit-transition: top 0.5s linear;
        -o-transition: top 0.5s linear;
        -moz-transition: top 0.5s linear;
        transition: top 0.5s linear;
    }
    body.is_app .Anaya_Secundaria_2022_Dev-navbar.ocultar {
        top: -136px;
    }
    .Anaya_Secundaria_2022_Dev-navbar .navbar-content {
        width: 100%;
        height: 100%;
        padding: 0 20px;
        text-align: center;
    }
    .Anaya_Secundaria_2022_Dev-navbar .copyright {
        color: #fff;
        line-height: 5.0rem;
    }
    .slider-navigator:hover,
    .slider-navigator.disabled {
        opacity: .5;
        filter: alpha(opacity=50);
    }
    /*---*/
/*---------*/

/*-------------------------------------------------*/
/*------ PARTE QUE SÍ AFECTA AL DISEÑO FINAL ------*/
/*-------------------------------------------------*/
/*General */
body {
	font-weight: normal;
	text-align: left;
	font-family: 'Inter', sans-serif;
}
#swipeview-slider > div {
	background-color: #eee;
}
#actividad .class_slide {
    padding: 40px 60px 0px;
}

.texto_curso p:last-of-type {
    margin-bottom: 15px;
}
#actividad .texto_curso {
	font-size: 18px;
	line-height: 25px !important;
}
.texto_curso p {
	line-height: 25px !important;
	margin: 15px 0;
}
#actividad .pregunta .texto_curso {
    font-size: 18px;
}
.slide-wrapper {
	text-align: left;
}
.body_clase .content-wrapper,
 .body_clase.view-mode .content-wrapper {
    padding-bottom: 0;
}
#actividad .carousel-inner .item-container {
    background-image: none;
    max-width: 95%;
    -webkit-box-shadow:  #00000029 6px 3px 8px;
    -moz-box-shadow:  #00000029 6px 3px 8px;
    box-shadow: #00000029 6px 3px 8px;
    margin: 20px auto 30px;
    padding: 0px;
    padding-bottom: 90px;
    position: relative;
}


/*Input Blanco*/
.input_blanco .slide_main .html-book input {
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	border: 1px solid #ccc;
	background: #fff;
}



/*video*/
.vjs-poster {
	background-color: #fff;
}


/*tamaño enunciado listas*/
#actividad textarea {
    font-size: 18px;
}

/*ENLACE WEB*/
#actividad a,
body:not(.edit) #actividad a:not(.cke_button):not(.zoom_flag_img) {
	color: var(--colorppal);
	background-color: transparent;
}
/*--*/


/* Titulo de la slide */
#actividad .content .header .title {
    margin-bottom: 0px;
}
#actividad .content .header .title h3 {
    margin-top: 0;
    background: none;
    color: var(--GrisAnaya);
    padding: 0;
    font-size: 35px;
    border: 0;
    font-weight: normal;
}
#actividad .content .header .title h3::before{
	content: '';
	display: none;
}

.slide_main input:focus,
.slide_main .form-control:focus {
	border-color: #aaa;
}

.slide_main .html-book input {
    background: #fff;
}



#actividad .workspace.chooseblanks .inline-answer a {
	margin: -7px 2px 2px 2px;
}

.bck-i-fullscreen figcaption {
	margin-top: -20px;
	border-bottom: 0;
	-webkit-border-radius: 0px;
	-moz-border-radius: 0px;
	border-radius: 0px;
	background: transparent;
}

/*Icono audio*/
#actividad .player.audio {
	background-image: url(images/Anaya_2022_audio.png);
	color: #fff;
    background-color: var(--colorppal) !important;
}


#actividad .content img.player,
#actividad .player.audio,
#actividad .player.video,
#help-panel-content .player,
#remote-alert-modal-rich .player {
	height: 25px !important;
	width: 27px;
	display: inline-block;
	background-repeat: no-repeat;
	border-radius: 100%;
	margin: 0 5px;
	vertical-align: sub;
}

body #actividad a.bck-file-attach,
 body:not(.edit) #actividad a.bck-file-attach:not(.cke_button):not(.zoom_flag_img) {
    color: #000;
}

.bck-sub-label,
.bck-file-label {
	background: transparent;
	-webkit-border-radius: 5px 5px;
	-moz-border-radius: 5px 5px;
	border-radius: 5px 5px;
	max-width: 200px;
	margin: 0px;
	padding: 0px;
	display: inline-block;
	text-align: center;
	overflow-wrap: break-word;
}

.bck-file-attach:before {
    content: "\f15b";
    background-image: none;
    background-repeat: no-repeat;
    padding: 1px 0px;
    background-size: contain;
    margin-top: 4px;
    position: absolute;
    font-family: 'FontAwesome';
}

.bck-file-attach img {
	display: none;
}

.bck-file-attach span {
    display: inline-block;
    max-width: 75%;
    text-overflow: ellipsis;
    overflow: hidden;
    background-color: var(--colortrans);
    padding: 5px 10px 5px 20px;
}

/* TÍTULOS */

/*-- Título 1 --*/
.bck-title-1:before {
	display: none;
}
.bck-title-1, 
    .bck-title1 {
    color: var(--colorppal);
    font-size: 24px;
    font-weight: normal;
    line-height: 3.0rem;
    margin: 10px 0 15px 0px;
}
.bck-title-2,
.bck-title2 {
    color: #000;
    font-size: 18px;
    font-weight: bold;
    margin: 5px 0;
}
.bck-title-3,
.bck-title3 {
    background: none;
    color: #fdb325;
    font-size: 18px;
    padding: 2px 5px;
    border-bottom: 2px solid;
    font-weight: bold;
}
.bck-title-4,
.bck-title4 {
    font-size: 18px;
    color: #6F727B;
    border-top: 3px solid #E3CE9D;
    width: fit-content;
    width: -moz-fit-content;
    padding-top: 5px;
    font-weight: 600;
}
.bck-title-5 {
    font-size: 48px;
    color: #898989;
    margin-bottom: 20px;
}


/*Énfasis */
.bck-enfasis-1 {
    color: var(--colorppal);
    font-weight: bold;
}
.bck-enfasis-2 {
    border-bottom: 3px solid var(--colorppal);
}
.bck-enfasis-3 {
    background-color: var(--colortrans);
    padding: 2px 7px;
    border-radius: 3px;
}

/* ---- CAJAS ---*/
.bck-box {
    position: relative;
    max-width: 100%;
    text-align: left;
	background: inherit;
	padding: 20px;
	margin: 15px 0;
    border: 1px solid var(--colorppal);
}
.bck-title {
    font-weight: bold;
    color: inherit;
    border: 0;
    font-size: 18px;
    padding: 0   
}
.bck-box .bck-content {
    padding: 0;
}
.bck-box.center {
    text-align: inherit;
}
.texto_curso .bck-box p {
    margin: 0;
}

/*Caja 1 */
.bck-box.bck-box-1:after {
    display: none;
}
.bck-box.bck-box-1:before {
    display: none;
}
.bck-box.bck-box-1, 
    .bck-box.box-1 {
    background-color: var(--colortrans);
    margin: 20px 0;
    border-radius: 5px;
    border: 0;
}
.bck-box.bck-box-1>.bck-title, 
    .bck-box.box-1>.bck-title {
    color: black;
    font-weight: bold;
    font-size: inherit;
}
.bck-box.bck-box-1>.bck-content, 
    .bck-box.box-1>.bck-content {
    padding: 0;
}

/* CAJA 2 */
.bck-box.bck-box-2>.bck-title:before, 
    .bck-box.bck-box2>.bck-title:before {
	display: none;
}
.bck-box.bck-box-2, 
    .bck-box.bck-box2 {
    background-color: white;
    color: #231F20;
    border: 2px dashed var(--colorppal);
    margin: 35px 0px 20px;
    padding: 0;
    border-radius: 0;
}
 .bck-box.bck-box-2>.bck-title, 
    .bck-box.bck-box2>.bck-title {
    background: var(--colorppal);
    padding: 8px 30px;
    width: fit-content;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    border-radius: 5px;
    margin-left: 20px;
    margin-top: -20px;
    text-align: center;
    font-weight: bold;
    color: white;
}
.bck-box.bck-box-2>.bck-content, 
    .bck-box.bck-box2>.bck-content {
    padding: 15px 20px 20px 20px;
}

/*CAJA 3 */
.bck-box.bck-box-3 {
    margin: 25px 0px 20px;
    padding: 0;
    border: 0;
}
.bck-box.bck-box-3>.bck-title {
    font-weight: normal;
    color: var(--colorppal);
    border: 0;
    font-size: inherit;
    margin-bottom: 12px;
    font-size: 30px;
}
.bck-box.bck-box-3>.bck-content {
    padding: 20px;
    border: 2px dashed var(--colorppal);
}

/*Desplegable*/

/*---*/
/* Content: Dropdown box */
.body_clase #actividad .bck-dropdown {
    margin: 15px 0;
  }
  
  .body_clase #actividad .bck-dropdown .bck-dropdown-titulo {
    color: #000;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    padding-right: 40px;
  }
  
  .body_clase #actividad .bck-dropdown .bck-dropdown-button {
    padding: 10px;
    border: 0;
    position: relative;
    cursor: pointer;
    width: fit-content;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    display: inline-block;
    background-color: var(--colorppal);
    border-radius: 0 12px 12px 0;
}
  
  .body_clase #actividad .bck-dropdown .bck-dropdown-icon {
    position: absolute;
    right: 1.1rem;
    color:#000;
  }
  
  .body_clase #actividad .bck-dropdown .bck-dropdown-icon>.fa {
    color: #000;
    border: none;
    padding: 0;
    font-size: 18px;
  }
  
  .body_clase #actividad .bck-dropdown .bck-dropdown-content {
    width: 100%;
    padding: 15px 20px 20px 20px;
    background-color: #E5E5E5;
    margin-top: -15px;
    max-height: 600px;
    font-size: 15px;
    border-radius: 0 12px 12px 0;
}
  .body_clase #actividad .bck-dropdown .bck-dropdown-content p {
    line-height: 22px !important;
  }
/*---*/
/*Flipbox*/
body:not(.edit) .bck-flipbox {
		margin: 15px 0;
		font-size: 18px;
}

body:not(.edit) .bck-flipbox-face.front {
    border: 0;
    -moz-box-shadow: 0px 5px 9px var(--colortrans);
    -webkit-box-shadow: 0px 5px 9px var(--colortrans);
    box-shadow: 0px 5px 9px var(--colortrans);
    color: white;
    background-color: var(--colorppal);
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
}
body:not(.edit) .bck-flipbox-face.back {
    color: #595959;
    border: 2px solid #000000;
    background: #FFF;
}
body:not(.edit) .front .bck-flipbox-title,
 body:not(.edit) .front .bck-flipbox-section {
    color: #fff;
    border: 1px solid #333333;
    width: 100%;
    padding: 20px;
    font-weight: bold;
}
body:not(.edit) .back .bck-flipbox-title,
 body:not(.edit) .back .bck-flipbox-section {
    color: #000;
    padding: 20px;
    font-size: 16px;
}
body:not(.edit)  .bck-flipbox-title,
 body:not(.edit) .bck-flipbox-section p {
    margin:0;
}
body:not(.edit) .bck-flipbox-face.back .bck-flipbox-content {
    border: 0;
}
/*----*/

/*Ajuste general listas */
.cke_contents .bck-ol,
 .cke_contents ol,
  .content .bck-ol,
   .content ol {
    counter-reset: bck-li-counter;
}

#actividad .texto_curso li,
 #actividad .workspace ul li li {
    position: relative;
    margin-bottom: 10px;
    margin-left: 0;
    line-height: inherit;
    font-size: 15px;
    line-height: 25px !important;
}
#actividad .content .texto_curso .bck-ul,
#actividad .content .cke_contents .bck-ul,
 #actividad .content .texto_curso .bck-ol,
 #actividad .content .cke_contents .bck-ol {
    padding: 0;
}
.texto_curso ul,
 .texto_curso ol,
  .workspace:not(.multiple-choice,.matching,.ordenar,.clasificar,.test) ul li ul, 
  .workspace:not(.multiple-choice,.matching,.ordenar,.clasificar,.test) ul li ol, 
  .cke_contents ul, .cke_contents ol, .popover-content ul, .popover-content ol {
    margin: 15px 0;
}

/*LISTAS DESORDENADAS*/
.texto_curso ul li {
	padding-left: 20px;
}
#actividad .content ul.bck-ul li {
    font-size: 15px;
}

.texto_curso ul li:before,
.workspace ul li ul li:before,
.cke_contents ul li:before,
.preview ul li:before,
.classify-item ul li:before,
#actividad .workspace.multiple-choice .js-item ul li:before,
#actividad .workspace.matching .box ul li:before,
#actividad .workspace.ordenar .js-rank-item ul li:before {
	height: 6px;
	width: 6px;
	background-color: #333;
	color: #333;
	border-radius: 50%;
}

/*lista desordenada por defecto, sin seleccionar estilo para la ul*/

#actividad .content .texto_curso .bck-ul li::before,
#actividad .content .texto_curso ul li::before,
#actividad .content .workspace ul li ul li::before,
#actividad .content .workspace ul li .bck-ul li::before,
#actividad .content .cke_contents ul li .bck-ul li::before,
#actividad .popover-background.shown .popover-content>ul>li::before {
	content: "";
	height: 6px;
	width: 6px;
	background-color: var(--GrisAnaya);
	color: var(--GrisAnaya);
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	border-radius: 50%;
	position: absolute;
	margin-top: 10px;
	margin-left: -10px;
}

/*Lista desordenada 1*/
#actividad .content .texto_curso .bck-ul-1 li::before,
#actividad .content .cke_contents .bck-ul-1 li::before,
 #actividad .content .workspace ul li .bck-ul-1 li::before {
	background-color: var(--colorppal);
	color: var(--colorppal);
}
/*Lista desordenada 2*/
#actividad .content .texto_curso .bck-ul-2 li::before,
#actividad .content .cke_contents .bck-ul-2 li::before,
 #actividad .content .workspace ul li .bck-ul-2 li::before {
content: "";
    height: 2px;
    width: 7px;
    margin-top: 10px;
}

/*General ordenadas*/
 .texto_curso ol,
   .workspace:not(.multiple-choice,.matching,.ordenar,.clasificar,.test) ul li ol,
     .cke_contents ol,
       .popover-content ol {
        padding-left: 20px; 
}

#actividad .content .texto_curso .bck-ol li,
 #actividad .popover-content .bck-ol li,
  #actividad .content .workspace ul li .bck-ol li {
    list-style-type: none;
    counter-increment: bck-li-counter 1;
    position: relative;
    font-size: 15px;
}
#actividad .content .texto_curso .bck-ol li:before,
 #actividad .popover-content .bck-ol li:before,
 #actividad .content .workspace ul li .bck-ol li:before {
	content: counter(bck-li-counter);
    position: relative;
    text-align: left;
    font-size: 15px;
    font-family: 'Inter', sans-serif;
	margin-left: -10px; 
	left: 0;
	width: auto;
 }
/*LISTA ORDENADA 1*/
#actividad .content .cke_contents .bck-ol-1 li,
 #actividad .content .cke_contents .bck-ol-1 li,
  #actividad .content .texto_curso .bck-ol-1 li,
   #actividad .popover-content .bck-ol-1 li,
    #actividad .content .workspace ul li .bck-ol-1 li,

    #actividad .content .cke_contents .bck-ol1 li,
 #actividad .content .cke_contents .bck-ol1 li,
  #actividad .content .texto_curso .bck-ol1 li,
   #actividad .popover-content .bck-ol1 li,
    #actividad .content .workspace ul li .bck-ol1 li {
    counter-increment: bck-li-counter;
    position: relative;
    z-index: 0;
    font-weight: normal;
    color: #000;
}
#actividad .content .cke_contents .bck-ol-1 li:before,
 #actividad .content .texto_curso .bck-ol-1 li:before,
  #actividad .popover-content .bck-ol-1 li:before,
   #actividad .content .workspace ul li .bck-ol-1 li:before,

   #actividad .content .cke_contents .bck-ol1 li:before,
 #actividad .content .texto_curso .bck-ol1 li:before,
  #actividad .popover-content .bck-ol1 li:before,
   #actividad .content .workspace ul li .bck-ol1 li:before {
    content: counter(bck-li-counter) ".";
    font-family: 'Inter', sans-serif;
    font-weight: normal;
    position: relative;
    color: inherit;
    font-size: 15px;
    width: auto;
    margin-top: 0px;
    left: 0;
    top: 0px;
    margin-right: 5px;
    margin-left: 0px;
}

/*Lista ordenada 2*/
#actividad .content .cke_contents .bck-ol-2 li,
#actividad .content .texto_curso .bck-ol-2 li,
 #actividad .popover-content .bck-ol-2 li,
  #actividad .content .workspace ul li .bck-ol-2 li {
    counter-increment: bck-li-counter;
    padding-left: 10px;
    position: relative;
}
#actividad .content .cke_contents ol.bck-ol-2 li:before,
#actividad .content .texto_curso ol.bck-ol-2 li:before,
 #actividad .popover-content ol.bck-ol-2 li:before,
  #actividad .content .workspace ul li ol.bck-ol-2 li:before {
    content: counter(bck-li-counter, lower-alpha) ")";
    padding-right: 0px;
    text-align: center;
    color: inherit;
    font-weight: normal;
    margin-right: 5px;
    top: 0;
}


/*CAJA POP-UP*/
.info-popover .popover-title:before,
.popover-template .popover-title:before {
	display:none;
}

.info-popover .popover-title,
.popover-template .popover-title {
    position: relative;
    background: none;
    color: #fff;
    font-size: 18px;
    color: #000;
    border-bottom: 0;
    font-weight: bold;
    background-color: var(--colorppal);
    padding: 15px 20px 15px 15px;
}
.info-popover .popover-content, .popover-template .popover-content {
    display: block;
    background: #fff;
    padding: 10px 15px;
    font-size: 16px;
}
.close-popover {
    color: #000;
    top: 8px;
}
.info-template .info-title {
	color: #333;
}
.info-template .info-title.shown:before {
	display: none;
}


/*icono info*/
.fa-info:before {
    content: "i";
    font-weight: bold;
    font-family: monospace;
    font-size: 1.5rem;
    line-height: 5px;
    color: #000;
    border: 1px solid;
    border-radius: 50%;
    padding: 1px 6px;
    background-color: white
}

#actividad .info-button {
    display: block;
    width: 40px;
    height: 40px;
    margin: 0px;
    -webkit-box-shadow:  0 0 6px #5555553d;
    -moz-box-shadow: 0 0 6px #5555553d;
    box-shadow: 0 0 6px #5555553d;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background: var(--colorppal);
    color: #1a171b;
    line-height: 38px;
	text-align: center;
	cursor: pointer;
}

/*Pop-up flotante*/
.info-template {
	position: fixed;
	top: 100px;
	right: 0;
	-webkit-transform: translateX(105%);
	-moz-transform: translateX(105%);
	-ms-transform: translateX(105%);
	-o-transform: translateX(105%);
	transform: translateX(105%);
	z-index: 1000;
	width: 135px;
	height: auto;
	-webkit-box-shadow: 0 0 2px #555;
	-moz-box-shadow: 0 0 2px #555;
	box-shadow: 0 0 2px #555;
	-webkit-border-radius: 5px 0 0 5px;
	-moz-border-radius: 5px 0 0 5px;
	border-radius: 5px 0 0 5px;
	background: #fff;
	padding: 15px 5px 0;
	-webkit-transition: all ease-in-out .5s;
	-o-transition: all ease-in-out .5s;
	-moz-transition: all ease-in-out .5s;
	transition: all ease-in-out .5s;
}
.info-template.shown {
    background: var(--colorppal);
    -moz-box-shadow: -3px 2px 7px #00000038;
    -webkit-box-shadow: -3px 2px 7px #00000038;
    box-shadow: -3px 2px 7px #00000038;
    width: auto;
    max-width: 180px;

}
.info-template .info-title.shown {
    margin: 5px 10px;
    color: #000;
    font-weight: bold;
    font-size: 14px;
    padding: 0 0 6px 0;
}
.info-template .fa-info:before {
    color: #000;
}


/*Palabras emergentes*/
.popover.top {
    margin-top: -10px;
    background-color: var(--colorppal);
    font-size: 14px;
    line-height: 19px;
    border: 0;
}
.popover-title {
    margin: 0;
    padding: 8px 14px;
    font-size: 14px;
    font-weight: bold;
    line-height: 18px;
    background-color: var(--colorppal);
    border-bottom: 0;
    border-radius: 5px 5px 0 0;
}
.popover-content {
    padding: 0px 14px 10px 14px;
}
.popover.top>.arrow:after {
    border-top-color: var(--colorppal);
}

/*TABS*/
body:not(.edit) .bck-tabs-box {
    background-color: #FFF;
	border: 0;
	-moz-box-shadow: 0 3px 7px #00000026;
	-webkit-box-shadow: 0 3px 7px #00000026;
	box-shadow: 0 3px 7px #00000026;
	margin: 15px;
}
.bck-tabtitles {
	background-color: #fff;
	-moz-transition: none;
	-webkit-transition: none;
	transition: none;
}
.bck-tabtitles:active,
 .bck-tabtitles:focus,
  .bck-tabtitles:hover,
   .bck-tabtitles:visited {
    color: var(--colorppal);
    background: white;
    border-bottom: 2px solid var(--colorppal);
}
body:not(.edit) .bck-tabcontents .div-contents {
    background-color: #F8F8F8;
}
body:not(.edit) .bck-tabs-box.vertical-tabs .div-contents {
	background-color: #F8F8F8;
}

/*-- ICONOS --*/
.item-container .icon:before {
    content: "";
    background-repeat: no-repeat;
    -webkit-background-size: auto 100%;
    -moz-background-size: auto 100%;
    -o-background-size: auto 100%;
    background-size: auto 100%;
    background-position: 50%;
    display: inline-block;
    vertical-align: middle;
    height: 40px;
    width: 54px;
    margin-top: 0;
}

.item-container .icon-tic:before {
    background-image: url(images/icono_tic.png);
    width: 30px;
    height: 35px;
    vertical-align: middle;
}
.item-container .icon-cooperativo:before {
    background-image: url(images/icono_cooperativo.png);
    width: 30px;
    height: 35px;
    vertical-align: middle;
}
.item-container .icon-emprendimiento:before {
    background-image: url(images/icono_emprendimiento.png);
    width: 30px;
    height: 35px;
    vertical-align: middle;
}
.item-container .icon-ods:before {
    background-image: url(images/icono_ods.png);
    width: 30px;
    height: 35px;
    vertical-align: middle;
}
.item-container .icon-pensamiento:before {
    background-image: url(images/icono_pensamiento.png);
    width: 30px;
    height: 35px;
    vertical-align: middle;
}
.item-container .icon-plc:before {
    background-image: url(images/icono_plc.png);
    width: 30px;
    height: 35px;
    vertical-align: middle;
}

/*Lupa para imágenes*/
body:not(.edit) #actividad a.zoom_flag_img {
    background-color: var(--colortrans);
    border-radius: 0px 5px 0px 5px;
    top: 0;
    right: 0;
}

/*Eliminar el fondo en el vídeo*/
.video-js {
	background-color: transparent;
}
/*Ajuste en imágenes*/
.bck-i-fullscreen-wrapper {
    padding: 0;
}
#actividad .content img {
    margin-top: 0;
}

/*

/*Barra de separación (HR)*/
hr {
    margin: 20px 0;
    border-top-color: var(--colorppal);
}

/*--*/
/*AJUSTES ACTIVIDADES*/
/*inputs respuestas*/
.texto_curso input {
     margin: 5px 0px;
}
.slide_main input {
    color: #000;
    border-radius: 3px;
    height: inherit;
    min-height: 29px;
    border: 1px solid var(--colorppal);
    box-shadow: none;
    background-color: white;
}
    /*Ajuste de los inputs dentro de GRIDS para alinear las columnas*/
    .slide_main .js--row input:last-of-type {
        margin: 0;
        height: inherit;
    }

/*Generales Acierto / Fallo*/
.slide_main input[disabled].respuesta_ok,
 .slide_main input[readonly].respuesta_ok,
 fieldset[disabled] .slide_main input.respuesta_ok,
.slide_main input.respuesta_ok {
    border-color: #57e900;
    background: #D1F3BD;
}

.slide_main input[disabled].respuesta_ko,
 .slide_main input[readonly].respuesta_ko,
 fieldset[disabled] .slide_main input.respuesta_ko,
.slide_main input.respuesta_ko {
    border-color: #FF3626;
    background: #ffddda;
}

/*Respuesta múltiple*/
#actividad .workspace.multiple-choice .opcion {
    border-radius: 5px;
    -moz-box-shadow: 0px 4px 5px #00000021;
    -webkit-box-shadow: 0px 4px 5px #00000021;
    box-shadow: 0px 4px 5px #00000021;
    border: 1px solid var(--colorppal);
}
#actividad .workspace.multiple-choice .opcion figure {
    margin: 0 55px;
}
#actividad .workspace.multiple-choice .opcion.respuesta_over {
    background-color: var(--colortrans);
    -moz-box-shadow: 0 4px 7px var(--colortrans);
    -webkit-box-shadow: 0 4px 7px var(--colortrans);
    box-shadow: 0 4px 7px var(--colortrans);
}
#actividad .workspace.multiple-choice .opcion.respuesta_checked {
    background-color: var(--colorppal);
    border-color: var(--colorppal);
    font-weight: bold;
}
/*Rellenar espacios*/

.fillblanks-draggable-wrapper .response {
    min-width: 80px;
    -moz-box-shadow: 0px 5px 4px var(--colortrans);
    -webkit-box-shadow: 0px 5px 4px var(--colortrans);
    box-shadow: 0px 5px 4px var(--colortrans);
    border: 1px solid var(--colorppal);
    color: #000;
    border-radius: 0;
}
.fillblanks-draggable-wrapper .response p {
    padding: 9px 10px;
    font-size: inherit;
}
.slide_main input[disabled], 
.slide_main input[readonly],
 fieldset[disabled] .slide_main input {
    background-color: var(--colortrans);
    border-radius: 5px;
    border: 0;
    color: #000;
}
.slide_main input:focus,
 .slide_main .form-control:focus {
    -webkit-box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);
    -moz-box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);
    box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);
    border-color: var(--colorppal);
}
.fillblanks-draggable .drag-over {
    border-top-color: var(--colortrans);
    border-right-color: var(--colortrans);
    border-bottom-color: var(--colortrans);
    border-left-color: var(--colortrans);
    -webkit-box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);
    -moz-box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);
    box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);	  
}
/*Arrastrar imagen a espacios*/
.fillblankimages-draggable .drag-over {
    -webkit-box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);
    -moz-box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);
    box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);	
}
/*Relacionar*/
#actividad .workspace.matching .opcion {
    -moz-box-shadow: 1px 3px 5px #0000001a;
    -webkit-box-shadow: 1px 3px 5px #0000001a;
    box-shadow: 1px 3px 5px #0000001a;
    border: 1px solid var(--colorppal);
    padding: 0;
}
/*Test*/

/*Calculo*/
#actividad .workspace.calculo table {
    border: 0;
}

/*Ordenar*/
#actividad .workspace.ordenar .js-rank-item {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    -moz-box-shadow: 1px 3px 4px var(--colortrans);
    -webkit-box-shadow: 1px 3px 4px var(--colortrans);
    box-shadow: 2px -2px 7px 0px #00000029;
    border: 0;
    margin-bottom: 15px;
}
#actividad .workspace.ordenar li>p:hover {
    -moz-box-shadow: 2px 3px 6px var(--colortrans);
    -webkit-box-shadow: 2px 3px 6px var(--colortrans);
    box-shadow: 2px 3px 6px var(--colortrans);
    border: 1px solid var(--colorppal);	
}
/*Verdadero y falso*/

/*Fill in the blanks*/
.fillblanks-draggable-wrapper {
	text-align: center;
	margin-bottom: 20px;
	margin-left: 0;
}
/*Arrastrar imagen a imagen*/
.slide_main .fillblankimages-draggable .img-input-container {
    border: 2px dotted;
    border-color: #E5E5E5;
}
.fillblankimages-draggable-wrapper .response {
    border: 2px dotted #E5E5E5;
}
.fillblankimages-draggable-wrapper .response.respuesta_over {
    -moz-box-shadow: 0 4px 7px var(--colortrans);
    -webkit-box-shadow: 0 4px 7px var(--colortrans);
    box-shadow: 0 4px 7px var(--colortrans);
    border-color: var(--colorppal);
}
/*clasificar*/

#actividad .workspace.clasificar .clasificar_lista .classify-item {
    background: #fff;
    color: #000;
    padding: 8px;
    margin: 0 5px;
    -moz-box-shadow: 1px 3px 4px var(--colortrans);
    -webkit-box-shadow: 1px 3px 4px var(--colortrans);
    box-shadow: 1px 3px 4px var(--colortrans);
    border: 1px solid var(--colorppal);
    margin-bottom: 10px;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
}
#actividad .workspace.clasificar .clasificar_lista .classify-item:hover {
    -moz-box-shadow: 0 4px 7px var(--colortrans);
    -webkit-box-shadow: 0 4px 7px var(--colortrans);
    box-shadow: 0 4px 7px var(--colortrans);
    border-color: var(--colorppal);
}
#actividad .workspace.clasificar .clasificar_conjuntos .classify-item {
    background-color: #FFF;
    width: 100%;
    margin: 0 auto;
    padding: 5px 20px;
    color: #000;
    box-shadow: none;
    border: 0;
}
#actividad .workspace.clasificar .clasificar_conjuntos .conjunto .group-box {
    background: #fff;
    border: 2px dotted #E5E5E5;
    padding: 8px;
}
#actividad .workspace.clasificar .clasificar_conjuntos .group-name-top {
	border-bottom: 0;
}
/* Marcar palabras */
#actividad .markwords-word {
    -webkit-transition: padding 0.2s ease-in-out;
    -moz-transition: padding 0.2s ease-in-out;
    transition: padding 0.2s ease-in-out;
}

#actividad .markwords-word:hover {
    -moz-box-shadow: 0 4px 7px var(--colortrans);
    -webkit-box-shadow: 0 4px 7px var(--colortrans);
    box-shadow: 0 4px 7px var(--colortrans);
    border: 1px solid var(--colortrans);
    padding: 0 5px;
}

#actividad .markword-active {
    border-radius: 0px !important;
    padding: 0 5px !important;
    border: 2px solid var(--colorppal) !important;
}

/*Señalar palabras*/
body #actividad .workspace.chooseblanks .inline-answer a {
    color: #000;
}
#actividad .inline-answer a,
 body:not(.edit) #actividad .inline-answer a:not(.cke_button):not(.zoom_flag_img) {
    color: #000;
}
#actividad .inline-answer a.selected,
 body:not(.edit) #actividad .inline-answer a.selected:not(.cke_button):not(.zoom_flag_img) {
    color: var(--colorppal);
}

#actividad .workspace.chooseblanks select {
    border-bottom: 1px solid #CCC;
    -moz-box-shadow: 1px 3px 5px #00000040;
    -webkit-box-shadow: 1px 3px 5px #00000040;
    box-shadow: 1px 3px 5px #00000040;
    border: 1px solid var(--colorppal);
    color: #000;
    padding: 3px 7px;
    margin: 3px 0px;
}
#actividad .workspace.chooseblanks select:hover {
    -moz-box-shadow: 0 4px 7px var(--colortrans);
    -webkit-box-shadow: 0 4px 7px var(--colortrans);
    box-shadow: 0 4px 7px var(--colortrans);
    border-color: var(--colorppal);
}
#actividad .workspace.chooseblanks .inline-answer a {
    margin: -7px 2px 2px 2px;
    background-color: #FFF;
    -moz-box-shadow: 1px 3px 4px #00000021;
    -webkit-box-shadow: 1px 3px 4px #00000021;
    box-shadow: 1px 3px 4px #00000021;
	border: 1px solid #00000021;
	font-weight: normal !important;
}
#actividad .workspace.chooseblanks .inline-answer a:hover {
    background-color: #FFF;
    color: var(--colorppal);
    -moz-box-shadow: 0 4px 7px var(--colortrans);
    -webkit-box-shadow: 0 4px 7px var(--colortrans);
    box-shadow: 0 4px 7px var(--colortrans);
    border-color: var(--colorppal);
}
#actividad .workspace.chooseblanks .inline-answer a.selected:not(.respuesta_ok):not(.respuesta_ko):not(.solucion) {
    background-color: #FFF;
    border-bottom: 2px solid;
}
#actividad a,
 body:not(.edit) #actividad a:not(.cke_button):not(.zoom_flag_img) {
    color: var(--colorppal);
    background-color: transparent;
}
/*tipo test*/




#actividad .workspace.test .respuesta_ko {
    background-color: #ffe1e4;
    border-bottom: 2px solid #ef0c24;
}
#actividad .workspace.test .respuesta_ok {
    background-color: #e7ffd1;
    border-bottom: 2px solid #74d320;
}
/*parejas cartas*/
#actividad .workspace.memory .flip-container p {
	font-size: 1.5rem;
}


/*botonera general*/
#actividad .class_slide .review {
	margin-top: 20px;
	text-align: center;
	margin-left: 0px;
}

.btn-danger,
.btn-danger[disabled] {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    color: #000;
    background: #E0E0E0;
    font-weight: 700;
    padding: 10px 15px;
    font-size: 16px;
}

.btn-primary,
 .btn-primary.disabled,
 .btn-primary.disabled:focus,
.btn-primary.disabled:hover {
    background-color: #E0E0E0;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    border: 0;
    color: #000;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: bold;
}

.btn-danger,.btn-danger[disabled] {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    color: #000;
    background: #E0E0E0;
	font-weight: 700;
}
.btn-danger:hover,
 .btn-danger:focus,
  .btn-danger:active,
   .btn-danger.active,
    .open .dropdown-toggle.btn-danger {
        color: #000;
        background-color: var(--colorppal);
}

.btn-primary.active,
.btn-primary:not([disabled]):active,
.btn-primary:not([disabled]):focus,
.btn-primary:not([disabled]):hover,
.open .dropdown-toggle.btn-primary {
    background-color: var(--colorppal);
    color: #000;
}
#actividad .content .review .attemps span {
    background-color: #E0E0E0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    color: #000;
    font-weight: normal;
    font-size: 16px;
}
.btn-primary[disabled],
.btn-primary[disabled]:focus {
    color: #000;
    background-color: #E5E5E5;
    border-color: #E5E5E5;
}
.btn-next,.btn-next.disabled,
.btn-next[disabled],
.btn-solution,
.btn-solution.disabled,
.btn-solution[disabled] {
    color: #005472;
    background-color: #fff;
    border: 2px solid #00bdff;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    font-weight: 700;
}
.btn-next:active,
.btn-next:focus,
.btn-next:hover,
.btn-solution:active,
.btn-solution:focus,
.btn-solution:hover,
.open .dropdown-toggle.btn-solution {
    color: #fff;
    background-color: #00bdff;
    border-color: transparent;
}

/* modo correcion/revision */
.info-alumno .nombre-alumno {
	max-width: 189px;
}

/**TABLA**/
table,
.bck-table {
	border: 1px solid #000;
}

table td,
.bck-table td {
	border-color: #000;
    font-size: 15px;
}

.bck-table-1 {
	border-color: var(--colorppal);
}
.bck-table-1 td {
	border-color: var(--colorppal);
    font-size: 15px;
}

.bck-table-2 {
	border-color: var(--GrisAnaya);
}
.bck-table-2 td {
	border-color: var(--GrisAnaya);
    font-size: 15px;
}

td,
th {
	padding-left: 10px;
}

/*Celda*/
table td.bck-td-1 {
    color: #000;
    background-color: var(--colorppal);
    font-weight: bold;
    text-align: center;
    font-size: 18px;
}
table td.bck-td-2 {
    background-color: #EAEAEA;
}
table td.bck-td-3 {
    background-color: var(--colortrans);
}



/*MEDIA QUERIES */
@media screen and (max-width: 768px) {
#actividad .carousel-inner .class_slide {
    padding: 40px 40px 0px;
}
.bck-box.bck-box-3 {
    width: calc(100% + 80px);
    margin-left: -40px;
    padding: 15px 40px;
}
}

@media only screen 
and (max-width : 480px) {
.texto_curso p {
    line-height: 2.8rem !important;
}
#actividad .texto_curso {
    font-size: 18px;
    line-height: 2.8rem !important;
}
#actividad .pregunta .texto_curso {
    font-size: 18px;
}
#actividad textarea {
    font-size: 18px;
}
#actividad .class_slide .review {
    text-align: center;
}
#actividad .content .header .title h3,
.bck-title-1 {
    font-size: 2.5rem;    
}
.bck-title-2 {
    font-size: 2.2rem;
}
.bck-title-3 {
    font-size: 18px;
}
.puzzle-wrapper {
    width: 100%;
    margin-bottom: 35px;
}
#actividad .workspace.matching .opcion {
    height: auto;
}	
#actividad .workspace.test .respuestas li {
    width: 70%;
}	
}
