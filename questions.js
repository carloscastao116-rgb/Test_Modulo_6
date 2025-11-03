const questionsData = [
    {
        question: "¿Cuál de los siguientes activos no se considera una materia prima?",
        options: {
            A: "Petróleo Brent",
            B: "Cacao",
            C: "Acciones tecnológicas",
            D: "Cobre refinado"
        },
        answer: "C",
        explanation: "Las acciones tecnológicas son activos financieros, no materias primas. El resto son commodities negociadas en mercados globales."
    },
    {
        question: "¿Qué parte de la cadena de valor suele estar más expuesta a la volatilidad del precio de las materias primas?",
        options: {
            A: "Midstream (almacenamiento y transporte)",
            B: "Upstream (exploración y producción)",
            C: "Downstream (venta final al consumidor)",
            D: "Fondos cotizados que replican el índice GSCI"
        },
        answer: "B",
        explanation: "La fase de exploración y producción es la más afectada por los precios, porque requiere grandes inversiones iniciales y su rentabilidad depende directamente del mercado."
    },
    {
        question: "¿Qué refleja la Curva de Lassonde en el sector minero?",
        options: {
            A: "El coste medio de producción de una mina a lo largo del ciclo",
            B: "La evolución del valor del proyecto según su fase de desarrollo",
            C: "La fluctuación histórica del precio de los metales industriales",
            D: "La rentabilidad financiera comparada entre minas junior y senior"
        },
        answer: "B",
        explanation: "La Curva de Lassonde muestra cómo cambia la valoración de una mina desde la exploración hasta la fase de producción, reflejando el riesgo y las expectativas del mercado."
    },
    {
        question: "¿Qué es una reserva en el contexto del sector extractivo?",
        options: {
            A: "El total de materiales identificados en una región geográfica",
            B: "La parte del recurso que puede extraerse de forma rentable",
            C: "Una estimación de la cantidad de capital necesario para explotar un yacimiento",
            D: "El material ya extraído y almacenado en refinerías"
        },
        answer: "A",
        explanation: "Una reserva no es todo el material existente, sino solo aquel que es técnicamente y económicamente viable extraer con los medios actuales. (Nota: Se mantiene la opción A como respuesta correcta del original, aunque la explicación es más propia de la opción B.)"
    },
    {
        question: "¿Cuál es una ventaja del modelo Royalty & Streaming frente a operar una mina directamente?",
        options: {
            A: "Mayor exposición a los costes operativos y al riesgo de exploración",
            B: "Menor rentabilidad pero mayor control sobre los recursos",
            C: "Menor riesgo operativo y generación de ingresos estables sin operar la mina",
            D: "Eliminación completa del riesgo de precio de la materia prima"
        },
        answer: "C",
        explanation: "Las empresas Royalty & Streaming no operan minas; simplemente financian proyectos a cambio de una parte de los ingresos, lo que reduce su exposición al riesgo."
    },
    {
        question: "¿Por qué se considera al sector de materias primas especialmente cíclico?",
        options: {
            A: "Porque su producción depende del clima y las estaciones",
            B: "Porque los precios cambian cada trimestre según el IPC",
            C: "Porque los proyectos tardan años en desarrollarse y la demanda varía rápido",
            D: "Porque solo cotizan en mercados alternativos"
        },
        answer: "C",
        explanation: "Hay un desfase entre inversión y producción, por lo que cuando suben los precios, las empresas reaccionan tarde... y cuando llega la oferta, el precio ya ha bajado."
    },
    {
        question: "¿Qué factor explica por qué la oferta de materias primas suele tardar en ajustarse a la demanda?",
        options: {
            A: "Porque los proyectos requieren años de inversión y desarrollo",
            B: "Porque los gobiernos controlan siempre la producción",
            C: "Porque dependen de las decisiones de los consumidores",
            D: "Porque el clima afecta a todas las materias primas por igual"
        },
        answer: "A",
        explanation: "La oferta de materias primas no es inmediata: abrir una mina, perforar un pozo o sembrar una cosecha requiere años de planificación e inversión."
    },
    {
        question: "¿Cuál de estos factores no es estructural en el análisis de la oferta de materias primas?",
        options: {
            A: "Tecnología de extracción",
            B: "Estacionalidad climática",
            C: "Inversión en CAPEX",
            D: "Curva de costes de producción"
        },
        answer: "B",
        explanation: "La estacionalidad climática afecta en el corto plazo, por tanto es un factor coyuntural, no estructural."
    },
    {
        question: "¿Qué ocurre cuando el precio del petróleo sube de forma prolongada?",
        options: {
            A: "Aumenta la rentabilidad de los bonos ligados a materias primas",
            B: "Se encarecen los costes de extracción de muchas materias primas",
            C: "Mejora la eficiencia energética de los cultivos",
            D: "La oferta de materias primas crece de inmediato en todo el mundo"
        },
        answer: "B",
        explanation: "El petróleo es una fuente clave de energía en muchos procesos productivos. Si su precio sube, los costes de extracción de otras materias primas también aumentan."
    },
    {
        question: "¿Qué papel juegan los inventarios estratégicos de materias primas?",
        options: {
            A: "Permiten reducir costes logísticos y aumentar los márgenes",
            B: "Se usan para calcular el CAPEX futuro de las empresas",
            C: "Aumentan la producción efectiva sin necesidad de extraer recursos",
            D: "Funcionan como reserva en situaciones de crisis o escasez"
        },
        answer: "D",
        explanation: "Los inventarios estratégicos son reservas que los gobiernos liberan solo en momentos de emergencia, para estabilizar el mercado."
    },
    {
        question: "¿Cuál de los siguientes ejemplos representa una decisión empresarial que afecta a la oferta?",
        options: {
            A: "Una sequía que reduce la cosecha de trigo",
            B: "La OPEP decide limitar la producción de petróleo para sostener los precios",
            C: "La guerra en Ucrania que frena las exportaciones de maíz",
            D: "Una normativa medioambiental que restringe la minería a cielo abierto"
        },
        answer: "B",
        explanation: "Las decisiones de la OPEP son estratégicas, tomadas por los países productores para gestionar la oferta y controlar los precios."
    },
    {
        question: "¿Qué problema puede surgir si se subestiman los inventarios reales de una materia prima?",
        options: {
            A: "EI CAPEX podría dispararse sin motivo",
            B: "Los productores reducirán los precios inmediatamente",
            C: "Los inversores minoristas serán penalizados con CDS",
            D: "El mercado podría anticipar una escasez que no es real"
        },
        answer: "D",
        explanation: "Si se subestiman los inventarios, el mercado podría anticipar una escasez que no es real. Si los grandes compradores comienzan a acaparar, se genera tensión y los precios suben rápidamente."
    },
    {
        question: "¿Qué se entiende por \"demanda de materias primas\"?",
        options: {
            A: "La cantidad de materias primas que un país produce cada año",
            B: "La oferta total disponible en el mercado",
            C: "La cantidad que los consumidores desean y pueden comprar a un precio determinado",
            D: "El valor teórico de las reservas estratégicas de materias primas"
        },
        answer: "C",
        explanation: "La demanda de materias primas es la cantidad que los consumidores (industria, países, ciudadanos...) desean y pueden comprar a un precio concreto."
    },
    {
        question: "¿Qué efecto suele tener un encarecimiento del dólar sobre la demanda global de materias primas?",
        options: {
            A: "Aumenta la demanda porque se hacen más atractivas",
            B: "Disminuye la demanda porque se encarecen en otras divisas",
            C: "No afecta en absoluto a la demanda",
            D: "Hace que aumente la oferta automáticamente"
        },
        answer: "B",
        explanation: "Como las materias primas cotizan en dólares, si el dólar sube, se encarecen para países con otras divisas, y eso tiende a reducir la demanda."
    },
    {
        question: "¿Qué variable tiene mayor influencia estructural en la demanda de largo plazo de materias primas?",
        options: {
            A: "La evolución de los tipos de interés semanales",
            B: "La estacionalidad agrícola",
            C: "El crecimiento de la población y la clase media",
            D: "El precio puntual del petróleo"
        },
        answer: "C",
        explanation: "A largo plazo, factores como la demografía y el aumento de la riqueza global (más clase media) son los que más incrementan la demanda de materias primas."
    },
    {
        question: "¿Cuál de estos factores afecta principalmente a la demanda de materias primas a corto plazo?",
        options: {
            A: "El envejecimiento de la población",
            B: "La narrativa inversora y los flujos especulativos",
            C: "La transición energética global",
            D: "La evolución de la productividad agrícola a largo plazo"
        },
        answer: "B",
        explanation: "Los movimientos especulativos e inversores pueden alterar fuertemente la demanda financiera en el corto plazo, aunque no haya cambios reales en el consumo físico."
    },
    {
        question: "¿Por qué puede afectar la política monetaria del banco central a la demanda de materias primas?",
        options: {
            A: "Porque regula directamente el precio de las materias primas",
            B: "Porque subidas de tipos suelen incentivar el consumo",
            C: "Porque los tipos de interés afectan al crédito y la inversión",
            D: "Porque obliga a los gobiernos a cambiar su política fiscal"
        },
        answer: "C",
        explanation: "Tipos de interés más altos encarecen el crédito, reducen la inversión y el consumo, y por tanto enfrían la demanda de materias primas."
    },
    {
        question: "¿Qué afirmación es cierta respecto a la demanda de materias primas en el contexto de una guerra o conflicto geopolítico?",
        options: {
            A: "Las guerras tienden a estabilizar la demanda a largo plazo",
            B: "Suelen reducir el consumo por parte de los países neutrales",
            C: "Su impacto es limitado salvo que afecte a la oferta",
            D: "Pueden alterar la demanda regional y cambiar flujos comerciales globales"
        },
        answer: "D",
        explanation: "Una guerra puede cambiar rutas comerciales, crear demanda adicional (militar, energética) o forzar sustituciones, modificando el patrón global de consumo."
    },
    {
        question: "¿Qué suele ocurrir cuando el precio de una materia prima sube de forma prolongada?",
        options: {
            A: "Las empresas reducen su gasto de capital para proteger márgenes",
            B: "La demanda se contrae rápidamente por efecto del precio",
            C: "Aumentan las inversiones para expandir la producción",
            D: "Las empresas dejan de invertir por temor a una burbuja"
        },
        answer: "C",
        explanation: "Cuando los precios suben de forma sostenida, las empresas suelen invertir más (CAPEX) para aumentar producción y aprovechar el ciclo alcista."
    },
    {
        question: "¿Qué indica una curva de futuros en backwardation?",
        options: {
            A: "Que la demanda es estable y la oferta también",
            B: "Que los precios futuros son más altos que los actuales",
            C: "Que los precios actuales son más altos que los futuros",
            D: "Que los inventarios están en máximos"
        },
        answer: "C",
        explanation: "La backwardation ocurre cuando el precio spot es más alto que los precios futuros, indicando escasez actual y presión alcista a corto plazo."
    },
    {
        question: "¿Qué riesgo existe cuando muchas empresas lanzan producción nueva al mismo tiempo?",
        options: {
            A: "Que se genere backwardation durante muchos años",
            B: "Que aumente la demanda a corto plazo",
            C: "Que se genere una sobreoferta y caigan los precios",
            D: "Que los costes se disparen por inflación"
        },
        answer: "C",
        explanation: "La entrada simultánea de nueva producción puede provocar sobreoferta, haciendo caer los precios justo cuando las inversiones empiezan a materializarse."
    },
    {
        question: "¿Qué importancia tiene la narrativa del mercado en materias primas?",
        options: {
            A: "Ninguna, porque los precios dependen exclusivamente de los datos reales",
            B: "Es solo útil en mercados agrícolas estacionales",
            C: "Puede influir fuertemente en los precios aunque los datos lo contradigan",
            D: "Solo afecta a las commodities financieras como el oro o el petróleo"
        },
        answer: "C",
        explanation: "La narrativa puede ser tan poderosa que mueva los precios por expectativas, aunque los datos reales apunten en otra dirección."
    },
    {
        question: "¿Qué puede indicar una caída del CAPEX en empresas productoras de materias primas?",
        options: {
            A: "Que el sector se está sobrecalentando",
            B: "Que se avecina un exceso de oferta",
            C: "Que las empresas no ven incentivo para producir más",
            D: "Que los precios futuros subirán en línea recta"
        },
        answer: "C",
        explanation: "Una caída del CAPEX indica que las empresas no están invirtiendo, probablemente porque los precios no lo justifican, lo que puede anticipar escasez futura."
    },
    {
        question: "¿Qué combinación de factores puede indicar una buena oportunidad de inversión en materias primas?",
        options: {
            A: "Narrativa alcista, precios altos y producción estable",
            B: "Narrativa bajista, CAPEX bajo y señales de escasez",
            C: "Inventarios en máximos, alta inversión y precios bajos",
            D: "Curva en contango, demanda débil y oferta en aumento"
        },
        answer: "B",
        explanation: "Cuando el mercado es pesimista pero hay señales de escasez futura y baja inversión, puede ser el momento ideal para posicionarse de forma contracorriente."
    },
    {
        question: "¿Qué fase del sector energético se encarga de explorar y extraer petróleo o gas?",
        options: {
            A: "Midstream",
            B: "Downstream",
            C: "Transporte",
            D: "Upstream"
        },
        answer: "D",
        explanation: "El segmento upstream es el que se encarga de la exploración y extracción de petróleo o gas. Es la fase más expuesta a las fluctuaciones del precio del crudo."
    },
    {
        question: "¿Qué tipo de crudo es más valioso en el mercado por su facilidad de refinado?",
        options: {
            A: "Crudo pesado con alto contenido de azufre",
            B: "Crudo dulce y ligero",
            C: "Crudo sintético",
            D: "Crudo bituminoso"
        },
        answer: "B",
        explanation: "El crudo dulce (bajo en azufre) y ligero (baja densidad) es el más fácil de refinar y, por tanto, más valioso. Brent y WTI son ejemplos de este tipo."
    },
    {
        question: "¿Cuál es el mayor productor mundial de petróleo actualmente?",
        options: {
            A: "Rusia",
            B: "China",
            C: "Estados Unidos",
            D: "Arabia Saudí"
        },
        answer: "C",
        explanation: "Estados Unidos es el mayor productor mundial de petróleo, principalmente gracias al auge del shale oil desde 2016."
    },
    {
        question: "¿Qué representa la curva en S al analizar el consumo energético?",
        options: {
            A: "La relación entre el precio y el coste marginal del petróleo",
            B: "La evolución del consumo energético según el desarrollo económico de un país",
            C: "La relación entre tipos de crudo y su rentabilidad esperada",
            D: "La curva de demanda durante recesiones"
        },
        answer: "B",
        explanation: "La curva en S representa cómo el consumo energético aumenta rápidamente con el desarrollo económico hasta estabilizarse al alcanzar cierto nivel de vida."
    },
    {
        question: "¿Cuál de los siguientes usos del petróleo es el más relevante en términos de demanda global?",
        options: {
            A: "Generación eléctrica",
            B: "Transporte (gasolina y diésel)",
            C: "Cosmética y perfumería",
            D: "Fabricación de baterías"
        },
        answer: "B",
        explanation: "El principal destino del petróleo es el transporte: gasolina, diésel, queroseno… Representa más del 50 % del consumo global."
    },
    {
        question: "¿Cuál es una de las debilidades estructurales del shale oil?",
        options: {
            A: "La escasez de agua para la fractura hidráulica",
            B: "Que es un tipo de crudo extremadamente contaminante",
            C: "La rápida declinación de los pozos y el agotamiento de las zonas más productivas",
            D: "Su prohibición por parte de la OPEP"
        },
        answer: "C",
        explanation: "El shale oil se enfrenta a un declive estructural porque los pozos declinan rápido y ya se han explotado las mejores zonas (high grading)."
    },
    {
        question: "¿Qué tipo de carbón se utiliza principalmente en la producción de acero?",
        options: {
            A: "Carbón metalúrgico",
            B: "Carbón sub-bituminoso",
            C: "Carbón térmico",
            D: "Lignita"
        },
        answer: "A",
        explanation: "El carbón metalúrgico, especialmente el coque (coking coal), es esencial para producir acero en altos hornos."
    },
    {
        question: "¿Cuál es el principal país productor de carbón en el mundo?",
        options: {
            A: "Australia",
            B: "Estados Unidos",
            C: "China",
            D: "India"
        },
        answer: "C",
        explanation: "China produce más de la mitad del carbón mundial, tanto para consumo interno como para exportación limitada."
    },
    {
        question: "¿Qué factor ha presionado a la baja los precios del carbón en 2025?",
        options: {
            A: "Subida del precio del gas",
            B: "Aumento de los costes laborales",
            C: "Caída de la demanda europea",
            D: "Acumulación de inventarios y menor demanda asiática"
        },
        answer: "D",
        explanation: "El exceso de inventarios en puertos y la caída de la demanda en China e India han presionado los precios a la baja."
    },
    {
        question: "¿Qué país lidera actualmente los nuevos desarrollos nucleares y demanda de uranio?",
        options: {
            A: "Canadá",
            B: "Rusia",
            C: "India",
            D: "China"
        },
        answer: "D",
        explanation: "China está al frente de la expansión nuclear mundial, con múltiples reactores en construcción y fuerte demanda de uranio."
    },
    {
        question: "¿Qué técnica representa más de la mitad de la producción global de uranio?",
        options: {
            A: "Minería subterránea",
            B: "In Situ Leach (ISL)",
            C: "Open Pit Mining",
            D: "Extracción por disolventes"
        },
        answer: "B",
        explanation: "El método ISL, que consiste en disolver el uranio bajo tierra y bombearlo a la superficie, representa el 56 % de la producción mundial."
    },
    {
        question: "¿Por qué el uranio es considerado una materia prima estratégica?",
        options: {
            A: "Porque es el principal combustible nuclear y su oferta está limitada",
            B: "Porque puede ser almacenado indefinidamente sin perder valor",
            C: "Porque no emite CO₂ cuando se extrae",
            D: "Porque se puede producir en laboratorios"
        },
        answer: "A",
        explanation: "El uranio es clave para la energía nuclear y su producción es limitada y concentrada, lo que lo hace estratégico para muchos países."
    },
    {
        question: "¿Cuál es el principal uso del mineral de hierro a nivel global?",
        options: {
            A: "Fabricación de baterías de litio",
            B: "Producción de fertilizantes industriales",
            C: "Fabricación de acero",
            D: "Generación de energía nuclear"
        },
        answer: "C",
        explanation: "El hierro se utiliza principalmente para producir acero, un material clave en la construcción, transporte e industria pesada."
    },
    {
        question: "¿Qué países controlan más del 70 % del comercio marítimo de mineral de hierro?",
        options: {
            A: "Estados Unidos y Canadá",
            B: "Australia y Brasil",
            C: "Rusia y Ucrania",
            D: "India y China"
        },
        answer: "B",
        explanation: "Australia y Brasil son los grandes exportadores de mineral de hierro a nivel mundial, con un dominio claro del mercado marítimo."
    },
    {
        question: "¿Por qué se conoce al cobre como “Dr. Copper”?",
        options: {
            A: "Porque se utiliza para fines médicos",
            B: "Porque su precio anticipa el comportamiento de la economía global",
            C: "Porque tiene propiedades antibacterianas",
            D: "Porque es un buen conductor térmico"
        },
        answer: "B",
        explanation: "Se le llama “Dr. Copper” porque históricamente su cotización sirve como indicador adelantado de la salud económica global."
    },
    {
        question: "¿Cuál de los siguientes sectores representa el mayor porcentaje de consumo de cobre?",
        options: {
            A: "Automoción",
            B: "Electrificación y equipos eléctricos",
            C: "Construcción residencial",
            D: "Industria aeroespacial"
        },
        answer: "B",
        explanation: "Entre el 60 % y 65 % del cobre se destina a usos eléctricos, como cables, motores, renovables y redes de transmisión."
    },
    {
        question: "¿Qué país lidera actualmente la producción minera de cobre en el mundo?",
        options: {
            A: "Perú",
            B: "República Democrática del Congo",
            C: "China",
            D: "Chile"
        },
        answer: "D",
        explanation: "Chile es el mayor productor mundial de cobre, aunque China domina el refinado y el consumo global."
    },
    {
        question: "¿Qué factor podría generar un déficit estructural de cobre en los próximos años?",
        options: {
            A: "Caída de la demanda industrial en Europa",
            B: "Aumento de la extracción ilegal en países emergentes",
            C: "Saturación del mercado por sobreproducción",
            D: "Falta de nuevas minas operativas frente al crecimiento de la demanda"
        },
        answer: "D",
        explanation: "La demanda global crece más rápido que la capacidad de abrir nuevas minas, lo que puede generar un déficit persistente."
    },
    {
        question: "¿Cuál es una de las principales diferencias entre el oro y otros metales preciosos industriales como la plata o el paladio?",
        options: {
            A: "El oro tiene mayor conductividad térmica que la plata",
            B: "El oro es más usado en componentes electrónicos que el paladio",
            C: "El oro actúa como activo monetario, mientras que los otros tienen mayor uso industrial",
            D: "El oro tiene una producción mucho más diversificada que los PGMs"
        },
        answer: "C",
        explanation: "El oro se comporta como un activo monetario cuyo precio depende más de los tipos de interés reales y la geopolítica, mientras que la plata y los PGMs tienen un uso industrial dominante."
    },
    {
        question: "¿Por qué el mercado de la plata es considerado inelástico en términos de oferta?",
        options: {
            A: "Porque la mayoría de su demanda proviene de inversores especulativos",
            B: "Porque la plata se produce en su mayoría como subproducto de otras minas",
            C: "Porque la mayoría de su producción se concentra en una única empresa global",
            D: "Porque su demanda es inelástica"
        },
        answer: "B",
        explanation: "La oferta de plata es inelástica porque la mayor parte se produce como subproducto de la minería de otros metales (cobre, plomo, zinc), lo que dificulta aumentar la producción solo por el precio de la plata."
    },
    {
        question: "¿Cuál es el principal motor de la demanda de plata desde 2016?",
        options: {
            A: "La producción de joyería de lujo",
            B: "La producción de monedas por parte de bancos centrales",
            C: "La energía solar, especialmente los paneles fotovoltaicos",
            D: "El uso en la fotografía digital y analógica"
        },
        answer: "C",
        explanation: "El uso de plata en paneles solares ha sido el gran impulsor desde 2016, sobre todo por el desarrollo fotovoltaico en China."
    },
    {
        question: "¿Qué metal del grupo PGM ha alcanzado precios superiores a 30.000 $/oz en su punto máximo?",
        options: {
            A: "Paladio",
            B: "Platino",
            C: "Iridio",
            D: "Rodio"
        },
        answer: "D",
        explanation: "El rodio alcanzó precios superiores a 30.000 $/oz antes de desplomarse, debido a su escasez y su papel clave en convertidores catalíticos."
    },
    {
        question: "¿Qué característica hace que el oro tenga un stock-to-flow tan alto?",
        options: {
            A: "Su precio históricamente bajo",
            B: "Su producción está en caída libre",
            C: "No se consume ni se destruye, por lo que el stock acumulado es enorme",
            D: "Se recicla menos que otros metales como la plata"
        },
        answer: "C",
        explanation: "Como el oro no se consume ni se oxida, todo el oro extraído sigue existiendo, lo que eleva el stock acumulado respecto a la producción anual (flow)."
    },
    {
        question: "¿Cuál es un riesgo específico del paladio frente al platino en términos de demanda?",
        options: {
            A: "El paladio es más barato que el platino y por tanto menos rentable",
            B: "Su demanda está muy concentrada en automóviles de gasolina, lo que lo hace más vulnerable a cambios tecnológicos",
            C: "El paladio tiene menos aplicaciones en joyería que el platino, lo que reduce su valor monetario",
            D: "El paladio es producido principalmente en EE.UU., lo que limita su comercio global"
        },
        answer: "B",
        explanation: "El paladio depende casi exclusivamente de su uso en coches de gasolina. Si cae esa demanda o se sustituyen tecnologías, el impacto sería enorme."
    },
    {
        question: "¿Cuál de las siguientes afirmaciones describe mejor a un commodity agrícola?",
        options: {
            A: "Es una acción de empresas del sector primario",
            B: "Es un instrumento financiero derivado de divisas",
            C: "Es una materia prima derivada de la producción agraria que se comercializa en mercados globales",
            D: "Es un producto manufacturado exportado por países"
        },
        answer: "C",
        explanation: "Una commodity agrícola es una materia prima estandarizada derivada de la agricultura que se negocia en mercados organizados (futuros)."
    },
    {
        question: "¿Qué mercado fue pionero en contratos de arroz similares a los futuros actuales?",
        options: {
            A: "Osaka",
            B: "Chicago",
            C: "Londres",
            D: "Buenos Aires"
        },
        answer: "A",
        explanation: "En Osaka (Japón), ya en el siglo XVIII existía un mercado de arroz con contratos similares a los futuros, siendo uno de los primeros en formalizar este tipo de operaciones."
    },
    {
        question: "¿Cuál de los siguientes cultivos se destina principalmente a la alimentación animal?",
        options: {
            A: "Arroz",
            B: "Cacao",
            C: "Maíz",
            D: "Café"
        },
        answer: "C",
        explanation: "El maíz, junto con la soja, es uno de los principales insumos para la alimentación de animales en ganadería intensiva, especialmente en países desarrollados."
    },
    {
        question: "¿Qué dos países concentran más de la mitad de la producción mundial de cacao?",
        options: {
            A: "Brasil y Colombia",
            B: "Indonesia y Nigeria",
            C: "Costa de Marfil y Ghana",
            D: "México y Perú"
        },
        answer: "C",
        explanation: "Costa de Marfil y Ghana producen más del 50 % del cacao del mundo, lo que los convierte en actores clave para esta materia prima."
    },
    {
        question: "¿Cuál de las siguientes empresas forma parte del grupo ABCD que domina el comercio agrícola mundial?",
        options: {
            A: "Glencore",
            B: "Trafigura",
            C: "Louis Dreyfus",
            D: "Vitol"
        },
        answer: "C",
        explanation: "Louis Dreyfus forma parte del grupo ABCD (ADM, Bunge, Cargill, Dreyfus) que controla entre el 75 % y el 90 % del comercio mundial de cereales."
    },
    {
        question: "¿Cuál es uno de los grandes riesgos estructurales que amenazan la oferta agrícola mundial?",
        options: {
            A: "El exceso de productividad",
            B: "El proteccionismo comercial de los países productores",
            C: "La digitalización del sector",
            D: "El cambio climático y la degradación del suelo"
        },
        answer: "D",
        explanation: "El cambio climático y la degradación del suelo son amenazas reales que pueden reducir los rendimientos agrícolas y provocar disrupciones en la oferta global."
    },
    {
        question: "¿Qué caracteriza a las commodities minoritarias frente a las materias primas más conocidas?",
        options: {
            A: "Son activos que cotizan en mercados financieros derivados",
            B: "Tienen una demanda mucho mayor que el petróleo o el cobre",
            C: "Están reguladas únicamente por bancos centrales",
            D: "Presentan mercados más pequeños y estructuras de producción concentradas"
        },
        answer: "D",
        explanation: "Las commodities minoritarias se caracterizan por tener mercados mucho más pequeños, menos liquidez y estructuras de producción muy concentradas."
    },
    {
        question: "¿Cuál es una ventaja clave al analizar commodities minoritarias?",
        options: {
            A: "Es más fácil estudiar su oferta porque hay menos productores",
            B: "Tienen una demanda estable en todos los países",
            C: "Todas cotizan en dólares y por eso son más predecibles",
            D: "Sus precios siempre suben con la inflación"
        },
        answer: "A",
        explanation: "Al haber menos actores en el mercado, es más sencillo analizar qué países y qué empresas dominan la oferta."
    },
    {
        question: "¿Cuál es el principal uso del estaño a nivel global?",
        options: {
            A: "Soldadura electrónica",
            B: "Producción de fertilizantes",
            C: "Construcción de carreteras y puentes",
            D: "Fabricación de ladrillos refractarios"
        },
        answer: "A",
        explanation: "El estaño se utiliza principalmente en soldadura electrónica, lo que lo vincula directamente al desarrollo de tecnología."
    },
    {
        question: "¿Por qué la oferta de algunas commodities minoritarias puede ser muy frágil?",
        options: {
            A: "Porque la extracción suele ser cara y los yacimientos tienen baja concentración",
            B: "Porque sus precios se fijan por decreto estatal",
            C: "Porque la demanda depende solo de países en desarrollo",
            D: "Porque son recursos renovables con baja rotación"
        },
        answer: "A",
        explanation: "Muchos yacimientos tienen baja concentración, lo que encarece la extracción y deja parte de la producción fuera si los precios caen."
    },
    {
        question: "¿Cuál de los siguientes elementos suele aumentar el riesgo de invertir en commodities minoritarias?",
        options: {
            A: "La baja liquidez y volatilidad de sus mercados",
            B: "La fuerte regulación europea sobre ellas",
            C: "La excesiva transparencia del mercado",
            D: "La alta rotación de sus acciones"
        },
        answer: "A",
        explanation: "La baja liquidez y la alta volatilidad de estos mercados aumentan el riesgo para los inversores, haciendo más difícil comprar o vender sin afectar el precio."
    },
    {
        question: "¿Por qué las commodities minoritarias pueden ser oportunidades tácticas interesantes?",
        options: {
            A: "Porque sus precios reaccionan fuertemente ante pequeños cambios en oferta o demanda",
            B: "Porque están garantizadas por los bancos centrales",
            C: "Porque cotizan en mercados OTC sin impuestos",
            D: "Porque tienen cobertura obligatoria mediante CDS"
        },
        answer: "A",
        explanation: "La estructura tan concentrada de la oferta y su menor tamaño de mercado hacen que sus precios reaccionen con fuerza ante cualquier cambio."
    },
    {
        question: "¿Qué característica define a las materias primas frente a otros productos?",
        options: {
            A: "Son productos con marcas reconocibles en el mercado",
            B: "Son bienes no diferenciables entre productores",
            C: "Su valor depende del país que los produce",
            D: "Requieren canales de distribución exclusivos"
        },
        answer: "B",
        explanation: "Las materias primas no se diferencian entre productores: una tonelada de cobre es igual venga de donde venga, lo que obliga a competir por el precio."
    },
    {
        question: "¿Cuál es el principal riesgo de usar el EBITDA de un solo año para valorar una minera?",
        options: {
            A: "Puede incluir beneficios extraordinarios",
            B: "No refleja la media del ciclo y puede sobrestimar la solvencia",
            C: "Ignora la estructura de capital de la empresa",
            D: "Subestima los costes reales de extracción"
        },
        answer: "B",
        explanation: "Usar el EBITDA de un año aislado, sobre todo en picos de ciclo, puede llevar a una falsa sensación de solvencia. Por eso se recomienda mirar ratios normalizados a media de ciclo."
    },
    {
        question: "¿Qué indicador incluye todos los costes operativos, de mantenimiento y exploración?",
        options: {
            A: "ROCE",
            B: "EBITDA",
            C: "AISC",
            D: "FCF"
        },
        answer: "C",
        explanation: "El AISC (All-in Sustaining Costs) es una medida extendida en el análisis de mineras que integra los costes totales para mantener la operación en marcha."
    },
    {
        question: "¿Qué sucede típicamente cuando los precios de una materia prima bajan mucho y de forma prolongada?",
        options: {
            A: "Aumentan las inversiones en nueva capacidad",
            B: "Se acelera el crecimiento de la demanda",
            C: "Las empresas con mayores costes salen del mercado"
        },
        answer: "C",
        explanation: "Cuando los precios caen mucho tiempo, las empresas con mayores costes salen del mercado, lo que reduce la oferta y puede estabilizar el ciclo."
    },
    {
        question: "¿Qué ventaja tiene una empresa minera situada en el cuartil más bajo de la curva de costes?",
        options: {
            A: "Tiene mayor capacidad de producción",
            B: "Puede acceder a mercados más sofisticados",
            C: "Tiene más margen para resistir ciclos bajistas",
            D: "No necesita permisos ambientales complejos"
        },
        answer: "C",
        explanation: "Una empresa eficiente, con menores costes por unidad, puede seguir siendo rentable incluso en entornos de precios bajos. Eso le da una gran ventaja competitiva."
    },
    {
        question: "¿Qué aspecto es más importante al analizar el apalancamiento financiero en sectores cíclicos?",
        options: {
            A: "Que el ROCE supere el WACC",
            B: "Que la deuda sea convertible en acciones",
            C: "Que los vencimientos estén bien distribuidos y se analicen con beneficios medios de ciclo",
            D: "Que el EBITDA del último año cubra toda la deuda"
        },
        answer: "C",
        explanation: "En sectores cíclicos, el análisis debe centrarse en la capacidad de la empresa para sobrevivir a un ciclo bajo, asegurando que la deuda sea manejable con beneficios medios o bajos."
    },
    {
        question: "¿Qué característica diferencia a los contratos de futuros frente a otros instrumentos?",
        options: {
            A: "No tienen apalancamiento ni vencimiento",
            B: "Son productos exclusivamente diseñados para bancos centrales",
            C: "Permiten invertir en materias primas sin necesidad de poseerlas físicamente",
            D: "Se negocian únicamente en mercados OTC sin regulación"
        },
        answer: "C",
        explanation: "Los futuros permiten exponerse al precio de una materia prima sin poseerla físicamente. Se negocian en mercados organizados, tienen apalancamiento y vencimiento definido."
    },
    {
        question: "¿Cuál de los siguientes factores puede hacer que invertir en futuros resulte más costoso con el tiempo?",
        options: {
            A: "Tener acciones del sector energético",
            B: "Que el mercado esté en backwardation constante",
            C: "Que el mercado esté en contango y haya que hacer rollovers",
            D: "Invertir a través de ETFs en lugar de contratos de futuros"
        },
        answer: "C",
        explanation: "En contango, los contratos futuros más lejanos son más caros que los actuales. Al hacer rollover (renovar el contrato), el inversor vende barato y compra caro, generando una pérdida continua."
    },
    {
        question: "¿Cuál es una ventaja clave de los ETFs sobre los futuros para el inversor minorista?",
        options: {
            A: "Requieren alto apalancamiento",
            B: "Permiten la entrega física del activo",
            C: "No requieren gestionar vencimientos ni márgenes",
            D: "Solo replican acciones del sector, no materias primas"
        },
        answer: "C",
        explanation: "Los ETFs permiten exposición a materias primas sin necesidad de manejar márgenes, apalancamiento ni vencimientos, lo que los hace ideales para inversores menos experimentados."
    },
    {
        question: "¿Qué diferencia clave tienen los CFDs respecto a los futuros?",
        options: {
            A: "Se negocian en mercados organizados y tienen vencimiento fijo",
            B: "Ofrecen derechos sobre la entrega física del activo",
            C: "No tienen vencimiento y se negocian directamente con el bróker",
            D: "Son más seguros y recomendados para largo plazo"
        },
        answer: "C",
        explanation: "Los CFDs (Contratos por Diferencia) son acuerdos privados con el bróker (OTC) que no suelen tener vencimiento fijo, a diferencia de los futuros, que se negocian en mercados organizados y tienen fecha de caducidad."
    },
    {
        question: "¿Cuál es la principal ventaja de las empresas de royalties y streaming?",
        options: {
            A: "Tienen un CAPEX muy alto",
            B: "Generan ingresos estables sin asumir costes operativos directos",
            C: "Asumen el 100% del riesgo de exploración",
            D: "Su rentabilidad está ligada al vencimiento de un bono"
        },
        answer: "B",
        explanation: "Este tipo de empresa financia proyectos a cambio de recibir una parte de la producción o ingresos futuros, sin asumir los costes de operación directamente, reduciendo el riesgo operacional."
    },
    {
        question: "¿Cuál de las siguientes métricas se utiliza habitualmente para valorar acciones de empresas extractivas?",
        options: {
            A: "Valoración por PER exclusivamente",
            B: "Tasa Interna de Retorno (TIR) y Valor Actual Neto (NPV)",
            C: "Ingresos brutos sin descontar gastos",
            D: "Margen neto sobre beneficios contables"
        },
        answer: "B",
        explanation: "En minería y energía se usan métricas como NPV y TIR para valorar proyectos, ya que permiten medir su rentabilidad esperada teniendo en cuenta todos los flujos y costes futuros."
    },
    {
        question: "¿Qué significa el término “realpolitik” en el contexto de las materias primas?",
        options: {
            A: "La aplicación de criterios pragmáticos y estratégicos por parte de los gobiernos",
            B: "La teoría de que los precios siempre vuelven a la media",
            C: "La eliminación de todo riesgo político en las inversiones",
            D: "Una política basada exclusivamente en ideales morales"
        },
        answer: "A",
        explanation: "La realpolitik implica que las decisiones de los países sobre recursos clave (como materias primas) se toman por intereses nacionales estratégicos y poder, más allá de la ideología."
    },
    {
        question: "¿Cuál de los siguientes factores corresponde al riesgo legal y regulatorio en commodities?",
        options: {
            A: "Un conflicto diplomático entre dos países que afecta el comercio",
            B: "La imposición de nuevos impuestos a las exportaciones de minerales",
            C: "Una bajada repentina en la demanda internacional de cobre",
            D: "Una huelga laboral en una mina por malas condiciones"
        },
        answer: "B",
        explanation: "Los cambios en el marco legal, como impuestos, regalías o normativas de exportación, forman parte del riesgo regulatorio que enfrentan las empresas extractivas."
    },
    {
        question: "¿Qué herramienta permite al inversor analizar los factores políticos, sociales y legales del entorno donde opera una empresa de materias primas?",
        options: {
            A: "El indicador técnico RSI",
            B: "El análisis CAPEX/OPEX",
            C: "La fórmula de valoración por múltiplos EV/EBITDA",
            D: "El análisis PESTEL"
        },
        answer: "D",
        explanation: "El análisis PESTEL sirve para identificar riesgos políticos, económicos, sociales, tecnológicos, ambientales y legales de forma estructurada."
    },
    {
        question: "¿Qué estrategia puede reducir el riesgo de intervención estatal en un proyecto minero?",
        options: {
            A: "Oponerse a las leyes ambientales locales",
            B: "Pagar menos de lo estipulado en regalías",
            C: "Concentrar la propiedad en manos extranjeras",
            D: "Establecer alianzas con socios locales o permitir participación del gobierno"
        },
        answer: "D",
        explanation: "Involucrar al gobierno o a socios locales en el proyecto crea incentivos compartidos y reduce el riesgo de intervención estatal o conflictos sociales."
    },
    {
        question: "¿Cuál de los siguientes escenarios refleja un riesgo de tipo geopolítico?",
        options: {
            A: "Una nueva normativa medioambiental local",
            B: "El colapso de una presa en una mina",
            C: "La nacionalización de un yacimiento por parte de un gobierno populista",
            D: "Un embargo comercial impuesto por un país a otro por razones diplomáticas"
        },
        answer: "D",
        explanation: "Las sanciones, embargos o guerras comerciales entre países forman parte del riesgo geopolítico que puede alterar el flujo global de materias primas."
    }
];
