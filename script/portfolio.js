var path = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);

var portfolio = [];

portfolio.push({
	id:			1,
	title:		'VIVIENDA RESIDENCIAL',
	text:		'Diseño de interiores para vivienda residencial. Vivienda unifamiliar en Residencial MB.<br>Espacio de salón, comedor y cocina',
	properties:	{
					'Cliente':'Zaira Peinado',
					'Categoría':'En construcción'
				},
	images:		3
});

portfolio.push({
	id:			2,
	title:		'OFICINAS',
	text:		'Diseño de oficinas con muro vegetal.',
	properties:	{
					'Cliente':'Office Group',
					'Categoría':'Construido'
				},
	images:		4
});

portfolio.push({
	id:			3,
	title:		'JOYERÍA',
	text:		'Modelado 3D de joyería para el Ciclo de Grado Superior de Joyería Artística.',
	properties:	{
					'Cliente':'Escuela de Arte',
					'Categoría':'Formación'
				},
	images:		3
});

portfolio.push({
	id:			4,
	title:		'BAR DE COPAS “LOUNGE”',
	text:		'Bar de copas diseñado en un local de 210m2. La principal característica es la forma circular de la sala, con la barra central enmarcada por las dos columnas y botellero suspendido. Además, está pensado para que la atmósfera cambie de tonalidad según el tipo de ambiente. Dispone de escenario para conciertos, camerinos y guardarropa.',
	properties:	{
					'Cliente':'Escuela de Arte',
					'Categoría':'Proyecto'
				},
	images:		9
});

portfolio.push({
	id:			5,
	title:		'TIENDA GOURMET “GOURMET EXPERIENCE”',
	text:		'La idea principal surge de la diferenciación de los dos espacios principales, el de zona de exposición del de la zona de degustación. El objeto primordial del proyecto y más característico de la tienda Gourmet, son los elementos de venta: vinos y quesos. La temática tratada para el diseño del local, ha sido la estación de otoño, para ello, se han ambientado las paredes y techo con hojas junto con tonos ocres, para dar el ambiente otoñal cuando la hoja se desprende del árbol. De esta forma, la temática se ha evidenciado en el falso techo, creándose un juego de hojas orgánicas que marcan el paso a la zona de ventas y a la zona de degustación, creando todavía un ambiente más acogedor.',
	properties:	{
					'Cliente':'Escuela de Arte',
					'Categoría':'Proyecto'
				},
	images:		7
});

portfolio.push({
	id:			6,
	title:		'BAR DE COCKTAIL “SPRITZ”',
	text:		'Spritz surge de crear un local para cocktail donde lo más característico fueran los paramentos, blancos y ondulantes. A ello le acompaña el suelo de teselas hexagonales colocado de forma especial, los tonos azul y la celosía de cierre. Prima en su funcionalidad y organización del espacio.',
	properties:	{
					'Cliente':'Escuela de Arte',
					'Categoría':'Proyecto'
				},
	images:		7
});


portfolio.push({
	id:			7,
	title:		'CENTRO NEUROPSIQUIÁTRICO “NUESTRA SEÑORA DEL CARMEN”',
	text:		'“Módulo de Jóvenes con Discapacidades Conductuales” surge de la necesidad de ampliar la prestación de servicios de asistencia y de carácter no lucrativo del Centro Neuropsiquiátrico Nuestra Señora del Carmen existente dirigido por las Hermanas Hospitalarias del Sagrado Corazón.<br><br>El edificio es exento, de forma rectangular y dimensiones 15,5 x 64,85 m. La cubierta es en su mayor parte en forma de diente de sierra, con pendientes variables –en algunos puntos muy acusadas- y algunas zonas cubierta plana. Estas pendientes variables diferencian desde el exterior las zonas destinadas a personal y las zonas destinadas a los internos y reflejan el grado de actividad mental en las diferentes estancias del interior del edificio. Pero lo más característico del proyecto, es el color rojo del zinc de toda la envolvente.<br><br>La circulación es lineal, a ambos lados de un pasillo central muy amplio, para facilitar la orientación de las personas que vivirán en el centro. Se ha prestado especial atención al objetivo prioritario del programa; distribuir y dimensionar de forma adecuada los dormitorios, con módulos dobles que se repiten (dos dormitorios individuales con un baño compartido y dos dormitorios dobles con aseo).',
	properties:	{
					'Redacción Proyecto':'Daniel Borruey y José Javier Gallardo',
					'Dirección de Obra':'Zaira Peinado y José Javier Gallardo',
					'Cliente':'Hermanas Hospitalarias del Sagrado Corazón de Jesús',
					'Situación':'Garrapinillos (Zaragoza)',
					'Fotografías':'Jesús Granada',
					'Categoría':'Construido',
				},
	images:		4
});

portfolio.push({
	id:			8,
	title:		'REHABILITACIÓN DE VIVIENDA EN SAMPER DE CALANDA',
	text:		'La reforma llevada a cabo en la vivienda unifamiliar fue la rehabilitación de la fachada con mortero de cal manteniendo los huecos existentes y creando los de la última planta. Donde además se realizó un nuevo forjado y una nueva cubierta de estructura metálica a un agua con cubrición de teja árabe.',
	properties:	{
					'Cliente':'Alejandro Abadía',
					'Categoría':'Construido',
					'Redacción Proyecto':'Daniel Borruey',
					'Dirección de Obra':'Zaira Peinado',
					'Situación':'Samper de Calanda (Teruel)'
				},
	images:		4
});
portfolio.push({
	id:			9,
	title:		'Recorrido virtual con Unreal Engine 4',
	text:		'Realidad virtual con Unreal Engine 4'
					+'<br>&nbsp;&nbsp;Son una serie de 3 videos donde se realizan recorridos virtuales del interior de vivienda residencial como de recorrido de exterior.',
	properties:	{
					'Cliente':'Zaira Peinado',
					'Categoría':'Realidad Virtual'
				},
	images:		0,
	videos:		['188004889', '181301285', '180014121']
});
