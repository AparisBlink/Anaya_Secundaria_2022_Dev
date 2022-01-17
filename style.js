
(function (blink) {
	'use strict';

	var Anaya_Secundaria_2022_DevStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	Anaya_Secundaria_2022_DevStyle.prototype = {
		//BK-15873 añadimos el estilo basic como parent para la herencia de los estilos del CKEditor
		parent: blink.theme.styles.basic.prototype,
		bodyClassName: 'content_type_clase_Anaya_Secundaria_2022_Dev',
		ckEditorStyles: {
			name: 'Anaya_Secundaria_2022_Dev',
			styles: [
				{ name: ' T.01 Resaltado', element: 'h3', attributes: { 'class': 'bck-title-1'} },
				{ name: ' T.02 Negrita', element: 'h3', attributes: { 'class': 'bck-title-2'} },
				{ name: ' T.03 Subrayado', element: 'h3', attributes: { 'class': 'bck-title-3'} },
				{ name: ' T.04 Gris', element: 'h3', attributes: { 'class': 'bck-title-4'} },
				{ name: ' T.05 Ppal', element: 'h3', attributes: { 'class': 'bck-title-5'} },
                { name: ' T.06 Actividades', element: 'h3', attributes: { 'class': 'bck-title-6'} },
				{ name: ' T.07 Act 2', element: 'h3', attributes: { 'class': 'bck-title-7'} },
				{ name: ' T.08 Act 3', element: 'h3', attributes: { 'class': 'bck-title-8'} },
				{ name: ' T.09 Act 4', element: 'h3', attributes: { 'class': 'bck-title-9'} },
				{ name: ' T.10 Act 5', element: 'h3', attributes: { 'class': 'bck-title-10'} },
				{ name: ' T.11', element: 'h3', attributes: { 'class': 'bck-title-11'} },
				{ name: ' T.12', element: 'h3', attributes: { 'class': 'bck-title-12'} },
				{ name: ' T.13', element: 'h3', attributes: { 'class': 'bck-title-13'} },
				{ name: ' T.14', element: 'h3', attributes: { 'class': 'bck-title-14'} },
				{ name: ' T.15 Huella', element: 'h3', attributes: { 'class': 'bck-title-15'} },
				{ name: ' T.16 Huella Act', element: 'h3', attributes: { 'class': 'bck-title-16'} },
				{ name: ' T.17', element: 'h3', attributes: { 'class': 'bck-title-17'} },
				{ name: ' T.18', element: 'h3', attributes: { 'class': 'bck-title-18'} },
				{ name: ' T.19', element: 'h3', attributes: { 'class': 'bck-title-19'} },
				{ name: ' T.20', element: 'h3', attributes: { 'class': 'bck-title-20'} },
				{ name: ' T.21', element: 'h3', attributes: { 'class': 'bck-title-21'} },
				{ name: ' T.22', element: 'h3', attributes: { 'class': 'bck-title-22'} },
				{ name: ' T.23', element: 'h3', attributes: { 'class': 'bck-title-23'} },
				{ name: ' T.24', element: 'h3', attributes: { 'class': 'bck-title-24'} },
				{ name: ' T.25', element: 'h3', attributes: { 'class': 'bck-title-25'} },

                { name: 'Pa.01 Texto 16px', element: 'p', attributes: { 'class': 'bck-p-1'} },
				{ name: 'Pa.02 Texto Citado', element: 'p', attributes: { 'class': 'bck-p-2'} },
				{ name: 'Pa.03 Texto Pie', element: 'p', attributes: { 'class': 'bck-p-3'} },
				{ name: 'Pa.04 Barra Lateral', element: 'p', attributes: { 'class': 'bck-p-4'} },
				{ name: 'Pa.05 Centrado', element: 'p', attributes: { 'class': 'bck-p-5'} },
				{ name: 'Pa.06', element: 'p', attributes: { 'class': 'bck-p-6'} },
				{ name: 'Pa.07', element: 'p', attributes: { 'class': 'bck-p-7'} },
				{ name: 'Pa.08', element: 'p', attributes: { 'class': 'bck-p-8'} },
				{ name: 'Pa.09', element: 'p', attributes: { 'class': 'bck-p-9'} },
				{ name: 'Pa.10', element: 'p', attributes: { 'class': 'bck-p-10'} },

				{ name: 'E.01 Color auto', element: 'span', attributes: { 'class': 'bck-enfasis-1'} },
				{ name: 'E.02 Subrayado', element: 'span', attributes: { 'class': 'bck-enfasis-2'} },
				{ name: 'E.03 Sombreado', element: 'span', attributes: { 'class': 'bck-enfasis-3'} },
				{ name: 'E.04 Serif', element: 'span', attributes: { 'class': 'bck-enfasis-4'} },
				{ name: 'E.05 Color Gris', element: 'span', attributes: { 'class': 'bck-enfasis-5'} },
                { name: 'E.06 Color Negro', element: 'span', attributes: { 'class': 'bck-enfasis-6'} },
				{ name: 'E.07 Color Naranja', element: 'span', attributes: { 'class': 'bck-enfasis-7'} },
				{ name: 'E.08 Color Azul', element: 'span', attributes: { 'class': 'bck-enfasis-8'} },
				{ name: 'E.09 Color Verde', element: 'span', attributes: { 'class': 'bck-enfasis-9'} },
				{ name: 'E.10 Color Marrón', element: 'span', attributes: { 'class': 'bck-enfasis-10'} },
				{ name: 'E.11 Color Amarillo', element: 'span', attributes: { 'class': 'bck-enfasis-11'} },
				{ name: 'E.12 Color Rojo', element: 'span', attributes: { 'class': 'bck-enfasis-12'} },
				{ name: 'E.13 Color Violeta', element: 'span', attributes: { 'class': 'bck-enfasis-13'} },
				{ name: 'E.14', element: 'span', attributes: { 'class': 'bck-enfasis-14'} },
				{ name: 'E.15', element: 'span', attributes: { 'class': 'bck-enfasis-15'} },
				{ name: 'E.16', element: 'span', attributes: { 'class': 'bck-enfasis-16'} },
				{ name: 'E.17', element: 'span', attributes: { 'class': 'bck-enfasis-17'} },
				{ name: 'E.18', element: 'span', attributes: { 'class': 'bck-enfasis-18'} },
				{ name: 'E.19', element: 'span', attributes: { 'class': 'bck-enfasis-19'} },
				{ name: 'E.20', element: 'span', attributes: { 'class': 'bck-enfasis-20'} },
				{ name: 'E.21', element: 'span', attributes: { 'class': 'bck-enfasis-21'} },
				{ name: 'E.22', element: 'span', attributes: { 'class': 'bck-enfasis-22'} },
                
                { name: 'L.Des.01 Color', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-1' } },
				{ name: 'L.Des.02 Guion Color', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-2' } },
				{ name: 'L.Des.03 Negro', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-3' } },
				{ name: 'L.Des.04 Guion Negro', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-4' } },
				{ name: 'L.Des.05', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-5' } },
				{ name: 'L.Des.06', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-6' } },
				{ name: 'L.Des.07', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-7' } },
				{ name: 'L.Des.08', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-8' } },
				{ name: 'L.Des.09', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-9' } },
				{ name: 'L.Des.10', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-10' } },
				{ name: 'L.Des.11', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-11' } },
				{ name: 'L.Des.12', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-12' } },
				{ name: 'L.Des.13', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-13' } },
				{ name: 'L.Des.14', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-14' } },
				{ name: 'L.Des.15', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-15' } },

                { name: 'L.01.123 Punto', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-1' } },
				{ name: 'L.02.123 Punto Bold', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-2' } },
				{ name: 'L.03.123 Punto Color', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-3' } },
				{ name: 'L.04.123 Primero', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-4' } },
				{ name: 'L.05.abc Punto', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-5' } },
				{ name: 'L.06.abc Bold', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-6' } },
				{ name: 'L.07.abc Color', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-7' } },
				{ name: 'L.08.abc Parentesis', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-8' } },
				{ name: 'L.09.abc Par.Bold', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-9' } },
				{ name: 'L.10.abc Par.Color', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-10' } },
				{ name: 'L.11', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-11' } },
				{ name: 'L.12', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-12' } },
				{ name: 'L.13', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-13' } },
				{ name: 'L.14', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-14' } },
				{ name: 'L.15', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-15' } },

				{ name: 'Caja 01 Fondo Color', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-1' } },
				{ name: 'Caja 02 Titulo Caja', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-2' } },
				{ name: 'Caja 03 Punt.Tit.NoFondo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-3' } },
				{ name: 'Caja 04 Punt.Tit.Fondo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-4' } },
				{ name: 'Caja 05 Blanca sombreada', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-5' } },
				{ name: 'Caja 06 Punteado Color', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-6' } },
                { name: 'Caja 07 Punteado Gris', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-7' } },
				{ name: 'Caja 08 Box 2 Secundario', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-8' } },
				{ name: 'Caja 09 Box 3 Secundario', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-9' } },
				{ name: 'Caja 10 Box 4 Secundario', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-10' } },
				{ name: 'Caja 11 Box 5 Secundario', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-11' } },
				{ name: 'Caja 12 Basica', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-11' } },
				{ name: 'Caja 12', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-12' } },
				{ name: 'Caja 13', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-13' } },
				{ name: 'Caja 14', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-14' } },
				{ name: 'Caja 15', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-15' } },
				{ name: 'Caja 16', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-16' } },
				{ name: 'Caja 17', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-17' } },
				{ name: 'Caja 18', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-18' } },
				{ name: 'Caja 19', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-19' } },
				{ name: 'Caja 20', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-20' } },
				{ name: 'Caja 21', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-21' } },
				{ name: 'Caja 22', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-22' } },
				{ name: 'Caja 23', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-23' } },
				{ name: 'Caja 24', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-24' } },
				{ name: 'Caja 25', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-25' } },

				{ name: 'Tabla 01 Amarilla', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table bck-table-1'} },
				{ name: 'Table 02 Gris', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table bck-table-2'} },
				{ name: 'Table 03 Negra', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table bck-table-3'} },
                { name: 'Table 04', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table bck-table-4'} },
				{ name: 'Table 05', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table bck-table-5'} },
				{ name: 'Table 06', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table bck-table-6'} },
				{ name: 'Table 07', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table bck-table-7'} },
				{ name: 'Table 08', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table bck-table-8'} },
				{ name: 'Table 09', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table bck-table-9'} },
				{ name: 'Table 10', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table bck-table-10'} },


				{ name: 'Celda 01', element: 'td', attributes: { 'class': 'bck-td bck-td-1'} },
				{ name: 'Celda 02', element: 'td', attributes: { 'class': 'bck-td bck-td-2'} },
				{ name: 'Celda 03', element: 'td', attributes: { 'class': 'bck-td bck-td-3'} },
                { name: 'Celda 04 Gris', element: 'td', attributes: { 'class': 'bck-td bck-td-4'} },
				{ name: 'Celda 05 Normal', element: 'td', attributes: { 'class': 'bck-td bck-td-5'} },
				{ name: 'Celda 06', element: 'td', attributes: { 'class': 'bck-td bck-td-6'} },
				{ name: 'Celda 07', element: 'td', attributes: { 'class': 'bck-td bck-td-7'} },
				{ name: 'Celda 08', element: 'td', attributes: { 'class': 'bck-td bck-td-8'} },
				{ name: 'Celda 09', element: 'td', attributes: { 'class': 'bck-td bck-td-9'} },
				{ name: 'Celda 10', element: 'td', attributes: { 'class': 'bck-td bck-td-10'} },
				{ name: 'Celda 11', element: 'td', attributes: { 'class': 'bck-td bck-td-11'} },
				{ name: 'Celda 12', element: 'td', attributes: { 'class': 'bck-td bck-td-12'} },
				{ name: 'Celda 13', element: 'td', attributes: { 'class': 'bck-td bck-td-13'} },
				{ name: 'Celda 14', element: 'td', attributes: { 'class': 'bck-td bck-td-14'} },
				{ name: 'Celda 15', element: 'td', attributes: { 'class': 'bck-td bck-td-15'} },
				{ name: 'Celda 16', element: 'td', attributes: { 'class': 'bck-td bck-td-16'} },
				{ name: 'Celda 17', element: 'td', attributes: { 'class': 'bck-td bck-td-17'} },
				{ name: 'Celda 18', element: 'td', attributes: { 'class': 'bck-td bck-td-18'} },
				{ name: 'Celda 19', element: 'td', attributes: { 'class': 'bck-td bck-td-19'} },
				{ name: 'Celda 20', element: 'td', attributes: { 'class': 'bck-td bck-td-20'} },

				{ name: 'Desplegable 01', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-1' } },
				{ name: 'Desplegable 02', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-2' } },
                { name: 'Desplegable 03', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-3' } },
				{ name: 'Desplegable 04', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-4' } },
				{ name: 'Desplegable 05', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-5' } },
				{ name: 'Desplegable 06', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-6' } },
				{ name: 'Desplegable 07', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-7' } },
				{ name: 'Desplegable 08', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-8' } },
				{ name: 'Desplegable 09', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-9' } },
				{ name: 'Desplegable 10', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-10' } },

				{name: 'Flipbox 01', type: 'widget', widget: 'blink_flipbox', attributes: {'class': 'bck-flipbox bck-flipbox-1'}},
      			{name: 'Flipbox 02', type: 'widget', widget: 'blink_flipbox', attributes: {'class': 'bck-flipbox bck-flipbox-2'}},

				{ name: 'Icono Cooperativo', element: 'span', attributes: { 'class': 'icon icon-cooperativo' } },
				{ name: 'Icono Emocional', element: 'span', attributes: { 'class': 'icon icon-emocional' } },
				{ name: 'Icono Emprendimiento', element: 'span', attributes: { 'class': 'icon icon-emprendimiento' } },
				{ name: 'Icono Evaluacion', element: 'span', attributes: { 'class': 'icon icon-evaluacion' } },
				{ name: 'Icono Listening', element: 'span', attributes: { 'class': 'icon icon-listening' } },
				{ name: 'Icono ODS', element: 'span', attributes: { 'class': 'icon icon-ods' } },
				{ name: 'Icono Orientacion Profesional', element: 'span', attributes: { 'class': 'icon icon-orientacion_profesional' } },
				{ name: 'Icono Pensamiento', element: 'span', attributes: { 'class': 'icon icon-pensamiento' } },
				{ name: 'Icono PLC', element: 'span', attributes: { 'class': 'icon icon-plc' } },
				{ name: 'Icono Reading', element: 'span', attributes: { 'class': 'icon icon-reading' } },
				{ name: 'Icono Speaking', element: 'span', attributes: { 'class': 'icon icon-speaking' } },
				{ name: 'Icono TIC', element: 'span', attributes: { 'class': 'icon icon-tic' } },
				{ name: 'Icono Writing', element: 'span', attributes: { 'class': 'icon icon-writing' } },
				{ name: 'Ico.00 Audiovisuales', element: 'span', attributes: { 'class': 'icon icon-audiovisuales' } },
				{ name: 'Ico.01 Interactivas', element: 'span', attributes: { 'class': 'icon icon-interactivas' } },
				{ name: 'Ico.02 Pensamiento Visual', element: 'span', attributes: { 'class': 'icon icon-pensamientovisual' } },
				{ name: 'Ico.03 Programas y Simulaciones', element: 'span', attributes: { 'class': 'icon icon-programasysimulaciones' } },
				{ name: 'Ico.04 Info y Doc', element: 'span', attributes: { 'class': 'icon icon-infoydoc' } }
			]
		},
		slidesTitle: {},
		subunits: [],
		totalSlides: 0,

		init: function (scope) {
			var that = scope || this;
			this.parent.init.call(that);
			that.addActivityTitle();
			if(window.esWeb) return;
			that.fillSlidesTitle();
			that.getActualUnitActivities();
			blink.events.on("course_loaded", function(){
				that.formatCarouselindicators();
				that.enableSliders();
			});
			that.animateNavbarOnScroll();
			that.initDropdown();
			that.addSlideNavigators();
		},
		removeFinalSlide: function () {
			if (blink.isIosApp && blink.activity.level != 6) {
				var parent = blink.theme.styles.basic.prototype;
				parent.removeFinalSlide.call(this, true);
			}
		},

		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return blink.courseInfo.unit + ' > ' + $(this).html();
			})
		},

		fillSlidesTitle: function () {
			var self = this.slidesTitle;
			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = window['t'+index+'_slide'];
				var slideTitle = slide.title;
				slideTitle = slideTitle.replace(/<span class="index">\s*([\d]+)\s*<\/span>/i, '$1. ');
				slideTitle = slideTitle.replace(/\s+/, ' ');
				slideTitle = stripHTML(slideTitle);

				self['t'+index+'_slide'] = slideTitle;
			}
		},

		/**
		 * @summary Gets the activity type subunits of the actual unit.
		 * @return {Object} Object of the actual unit filtering the not activity type subunits
		 */
		getActualUnitActivities: function () {
			var curso = blink.getCourse(idcurso),
				that = this,
				units,
				unitSubunits,
				actualActivity,
				tmpActualActivity = '',
				tmpActivity = '',
				nextActivity = '',
				previousActivity = '',
				unitActivities = [];

			curso.done(function () {
				units = curso.responseJSON.units;

				$.each(units, function () {
					if (this.id && this.id == blink.courseInfo.IDUnit) {
						unitSubunits = this.subunits.concat(this.resources);
					}

					$.each(this.subunits, function () {
						if(nextActivity === '' && tmpActualActivity !== '' && this.level != 6) {
							nextActivity = this;
						}
						if (idclase == this.id) {
							tmpActualActivity = this.title;
							if(tmpActivity && tmpActivity.level != 6) {
								previousActivity = tmpActivity;
							}
						}
						tmpActivity = this;
					});
				});

				actualActivity = _.find(unitSubunits, function(subunit) {
					return subunit.id == idclase;
				});

				if (typeof actualActivity !== "undefined" && actualActivity.level == '6') {
					unitActivities.push(actualActivity);
				} else {
					unitActivities = _.filter(unitSubunits, function(subunit) {
						return subunit.type == 'actividad' && subunit.level !== '6';
					});
				}

				that.subunits = unitActivities;

				if(nextActivity !== '' || previousActivity !== '') {
					that.createListenerForSwipeBetweenActivities(nextActivity, previousActivity);
				}
			}).done(function(){
				blink.events.trigger('course_loaded');
			});
		},

		createListenerForSwipeBetweenActivities: function(nextActivity, previousActivity) {
			var that = this;

			if(nextActivity !== '' && typeof nextActivity.url !== 'undefined') {
				document.addEventListener('swipe:last:nextActivity', function(e) {
					redireccionar(nextActivity.url);
				}, false);
			}

			if(previousActivity !== '' && typeof previousActivity.url !== 'undefined') {
				document.addEventListener('swipe:first:previousActivity', function(e) {
					redireccionar(previousActivity.url);
				}, false);
			}
		},

		/**
		 * @summary Getting active slide position in relation with the total of the
		 *          unit slides.
		 * @param {Array} $subunits Array of activity type objects
		 * @return {int} Slide position
		 */
		getActualSlideNumber: function (subunits) {
			var actualSlideIndex = $('.swipeview-active').attr('data-page-index'),
				actualSlide = 1;

			for (var i in subunits) {
				if (subunits[i].id && parseInt(subunits[i].id) != idclase) {
					actualSlide += parseInt(subunits[i].pags);
				} else {
					actualSlide += parseInt(actualSlideIndex);
					break;
				}
			}

			return actualSlide;
		},

		formatCarouselindicators: function (scope, classNavbar) {
			var that = scope || this,
				navbar = ((typeof classNavbar !== "undefined" && classNavbar)?classNavbar:'Anaya_Secundaria_2022_Dev-navbar'),
				$navbarBottom = $('.navbar-bottom'),
				firstSlide = eval('t0_slide');
			if(blink.courseInfo && blink.courseInfo.courseDateCreated) var courseYearCreated = new Date(blink.courseInfo.courseDateCreated).getFullYear();
			var yearCopy = courseYearCreated !== undefined ? courseYearCreated : 2016;
			$navbarBottom
				.attr('class', navbar)
				.wrapInner('<div class="navbar-content"></div>')
				.find('ol')
					.before('<span class="copyright">&copy;' +  yearCopy + '</span>')
					.wrap('<div id="top-navigator"/>')
					.remove()
					.end();

			$('#volverAlIndice').click(function() {
				return showCursoCommit();
			});

			var subunits = that.subunits,
				totalSlides = 0,
				subunit_index,
				subunit_pags;

			// Different behaviour depending on whether the slides are accessed from
			// a book or from a homework link or similar
			if (subunits.length !== 0) {
				for (var i in subunits) {
					if (subunits[i].pags) {
						var subunitSlides = parseInt(subunits[i].pags);
						totalSlides += subunitSlides;
					}
					if (subunits[i].id && subunits[i].id == idclase) {
						subunit_index = i;
						subunit_pags = parseInt(subunits[i].pags);
					}
				}

				that.totalSlides = totalSlides;

				$('#top-navigator').append('<span class="left slider-navigator">' +
						'<span class="fa fa-chevron-left"></span>' +
					'</span>' +
					'<span class="slide-counter" data-subunit-index="' + subunit_index +
						'" data-subunit-pags="' + subunit_pags + '">' +
						that.getActualSlideNumber(subunits) + ' / ' + totalSlides +
					'</span>' +
					'<span class="right slider-navigator">' +
						'<span class="fa fa-chevron-right"></span>' +
					'</span>');

				blink.events.on('section:shown', function() {
					$('.slide-counter').html(that.getActualSlideNumber(subunits) +
						' / ' + totalSlides);
				});
			} else {
				$('#top-navigator').append('<span class="left slider-navigator">' +
						'<span class="fa fa-chevron-left"></span>' +
					'</span>' +
					'<span class="slide-counter">' + (window.activeSlide + 1) +
						' / ' + window.secuencia.length +
					'</span>' +
					'<span class="right slider-navigator">' +
						'<span class="fa fa-chevron-right"></span>' +
					'</span>');

				blink.events.on('section:shown', function() {
					$('.slide-counter').html((window.activeSlide + 1) +
						' / ' + window.secuencia.length);
					$('.bck-dropdown-2').hideBlink();
				});
			}

			blink.events.on('section:shown', function() {
				var sectionTitle = eval('t' + blink.activity.getFirstSlideIndex(window.activeSlide) +
					'_slide').title;
				$navbarBottom.find('.sectionTitle').text(sectionTitle);
			});

			if (firstSlide.seccion) {
				$navbarBottom.addClass('first-is-section');
			}

			blink.events.trigger(true, 'style:endFormatCarousel');
		},

		addSlideNavigators: function () {
			var that = this;

			blink.events.on("course_loaded", function(){
				var that = blink.activity.currentStyle,
					subunit_index = parseInt($('.slide-counter').attr('data-subunit-index')),
					level_six = that.subunits.length == 1 && that.subunits[0].level == 6;

				$('.slider-control').off('click');
				// Navigation change depending on whether the slides are accessed from
				// a book or from a homework link or similar
				if (that.subunits.length !== 0 && !level_six) {
					// Slider controls must allow navigation among all the activity subunits
					// in the current unit.
					var idgrupo = window.idgrupo,
						idalumno = window.idalumno,
						slideNavParams = '';

					if (idgrupo) slideNavParams += '&idgrupo=' + idgrupo;
					if (idalumno) slideNavParams += '&idalumno=' + idalumno;

					$('.left.slider-control, .left.slider-navigator').click(function () {

						if (!$(this).hasClass('disabled')) {
							if(activeSlide == 0) {
								// BK-19843 audio stop when slider changes.
								if (blink.isApp) {
									blink.rest.closeAudio();
								}
								redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
									idcurso + '&idclase=' + that.subunits[subunit_index - 1].id + '&modo='+ modoVisualizacion + '&numSec=' +
									that.subunits[subunit_index - 1].numSlides + slideNavParams, false, undefined);
							} else {
								blink.activity.showPrevSection();
							}
						}
					});

					$('.right.slider-control, .right.slider-navigator').click(function () {
						if (!$(this).hasClass('disabled')) {
							if(activeSlide == parseInt(that.subunits[subunit_index].pags) - 1) {
								// BK-19843 audio stop when slider changes.
								if (blink.isApp) {
									blink.rest.closeAudio();
								}
								redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
									idcurso + '&idclase=' + that.subunits[subunit_index + 1].id + '&modo='+ modoVisualizacion +
									((typeof window.esPopup !== "undefined" && window.esPopup)?"&popup=1":"")  + slideNavParams,
									false, undefined);
							} else {
								blink.activity.showNextSection();
							}
						}
					});

					document.addEventListener('swipe:first:previousActivity', function(e) {
						blink.activity.previousSlide(that.subunits, subunit_index);
					}, false);
					document.addEventListener('swipe:last:nextActivity', function(e) {
						blink.activity.nextSlide(that.subunits, subunit_index);
					}, false);
				} else {
					$('.left.slider-control, .left.slider-navigator').click(function () {
						blink.activity.showPrevSection();
					});
					$('.right.slider-control, .right.slider-navigator').click(function () {
						blink.activity.showNextSection();
					});
				}

				$(document).ready(function() {
					blink.events.on('showSlide:after', function() {
						that.enableSliders();
					});
				});
			});
		},
			/**
			 * @summary Enables all slider controls and disables when appropiate
			 */
			enableSliders: function () {
					// Removes disabled class to all navigation buttons and applies
				// just if its first or last slide of all activities
				$('.slider-control, .slider-navigator').removeClass('disabled');
				var that = blink.activity.currentStyle,
					subunit_index = parseInt($('.slide-counter').attr('data-subunit-index')),
					level_six = this.subunits.length == 1 && this.subunits[0].level == 6;
				// Navigation change depending on whether the slides are accessed from
				// a book or from a homework link or similar
				if (this.subunits.length !== 0 && modoVisualizacionLabel != "standalone") {
						if (this.getActualSlideNumber(this.subunits) == 1) {
							$('.slider-control.left, .slider-navigator.left').addClass('disabled');
				}
					if (this.getActualSlideNumber(this.subunits) == this.totalSlides && !level_six) {
							$('.slider-control.right, .slider-navigator.right').addClass('disabled');
				}
			} else {
						if (window.activeSlide == 0) {
							$('.slider-control.left, .slider-navigator.left').addClass('disabled');
				}
					if(window.activeSlide == parseInt(that.subunits[subunit_index].pags) - 1 && !level_six){
							$('.slider-control.right, .slider-navigator.right').addClass('disabled');
				}
			}
		},
		//BK-15873 Quitamos la funcion getEditorStyles para que herede de parent

		showBookIndexInClass: function () {
			return modoVisualizacionLabel != "standalone";

		},

		animateNavbarOnScroll: function (scope, classNavbar) {
			var that = scope || this,
				navbar = ((typeof classNavbar !== "undefined" && classNavbar)?classNavbar:'Anaya_Secundaria_2022_Dev-navbar');
			if (!blink.isApp) return;
			var $navbar = $('.'+navbar);
			var lastScrollTop = 0;
			$('.js-slider-item').scroll(function () {
				var scrollTop = $(this).scrollTop();
				(scrollTop > lastScrollTop && scrollTop) ? $navbar.addClass('ocultar') : $navbar.removeClass('ocultar');
				lastScrollTop = scrollTop;
			});
		},

		initDropdown : function () {
			$(".bck-dropdown-button")
				.find('.fa').text('').end() //Eliminar el &nbsp;
				.toggle(
					function(){
						$(this).parent('.bck-dropdown')
							.addClass('open')
							.find('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-up').end()
							.find(".bck-dropdown-content").slideDown(300, function() {
								if($(this).parent('.bck-dropdown').hasClass('activities-dropdown')
									&& blink.activity.currentStyle.getActivePane()) {
									var actividad = $('.tab-pane.active').attr('id');
									var index = actividad.split('-').pop();
									var slide = window['t' + index + '_slide'];
									slide.onAfterShowSlide();
								}
							});

					},
					function(){
						$(this).parent('.bck-dropdown')
							.removeClass('open')
							.find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down').end()
							.find(".bck-dropdown-content").slideUp(300);
					}
				);
		},

		// Busca la id de la última slide de un dropdown con la que se ha interactuado y
		// guarda en el suspend data.
		// @param {string} activePane 	Id del panel en el que se encuentra la slide
		setActivePane : function (activePane) {
			if (!!activePane && !!scormAPI) {
				var slideId = $(activePane).find('.class_slide').attr('data-id'),
					parentSlide = window['t' + window.activeSlide + '_slide'];
				parentSlide.sublocation = slideId;
			}
		},

		// Mira a ver si se ha guardado alguna slide del dropdown en el suspend data y,
		// en caso de ser así, la pone como activa.
		getActivePane : function () {
			var currentSlide = window['t' + window.activeSlide + '_slide'];
			if (currentSlide.sublocation) {
				var activePane = $('.class_slide[data-id="' + currentSlide.sublocation + '"]')
								.closest('.tab-pane'),
					activeDropdown = $(activePane).closest('.bck-dropdown');
				$(activeDropdown)
					.find('a[href="#' + $(activePane).attr('id') + '"]')
					.first()
					.tab('show');
				return true;
			} else {
				return true;
			}
		},

		/**
		 * Devuelve el offsetTop del elemento que agrupa a las transparencia concatenada
		 *
		 * @param {object} myElement Div de la transparencia para buscar su contenedor
		 * @returns {Boolean}
		 */
		calculateTopOffsetSlide: function(myElement){
		    if(typeof myElement === "object"){
			    var dropdown = $(myElement).parents('.bck-dropdown');
			    if(dropdown.length>0 && typeof dropdown.offset === "function"){
				    dropdown.find('.bck-dropdown-button').click();
				    return dropdown.offset().top;
			    }
		    }
		    return false;
 		}
	};

	Anaya_Secundaria_2022_DevStyle.prototype = _.extend({}, new blink.theme.styles.basic(), Anaya_Secundaria_2022_DevStyle.prototype);

	blink.theme.styles['Anaya_Secundaria_2022_Dev'] = Anaya_Secundaria_2022_DevStyle;

})( blink );

$(document).ready(function() {

	if (!$('body').hasClass('edit')) {
		$(document).on('click', '.nav-tabs a', function() {
			var actividad = $(this).attr('href');
			var index = actividad.split('-').pop();
			var slide = window['t' + index + '_slide'];
			slide && slide.onAfterShowSlide();
		});
	}

	$(document).on('click', '.bck-dropdown .class_slide, .nav-tabs a', function(e){
		var activePane;
		if (!!$(e.target).closest('.nav-tabs').length) {
			activePane = $(e.target).attr('href');
		} else {
			activePane = '#' + $(e.target).closest('.tab-pane').attr('id');
		}
		blink.activity.currentStyle.setActivePane && blink.activity.currentStyle.setActivePane(activePane);
	});

});
