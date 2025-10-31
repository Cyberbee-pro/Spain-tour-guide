const Image1Path = 'destination/ANDALUCIA.jpg'
const cities = [
            {
                name: "Andalucía",
                description: "Andalucía alberga algunas de las ciudades más cautivadoras de España —Sevilla, Granada y Córdoba—, cada una con un encanto e historia únicos. La región es reconocida como la cuna del flamenco, famosa por su vibrante vida callejera, su arquitectura morisca y la tradición de las corridas de toros. Su calendario cultural está lleno de festividades, como la Feria de Abril en Sevilla, una colorida celebración con baile, caballos y alegría; la Semana Santa, con solemnes procesiones y gran fervor religioso; y el Festival de las Cruces en Córdoba, donde las calles se llenan de flores y música. La gastronomía andaluza es igualmente destacada, con platos típicos como el gazpacho, el salmorejo, el jamón ibérico, las tapas y el vino de Jerez. Entre los lugares imprescindibles se encuentran la Plaza de España en Sevilla, la majestuosa Alhambra de Granada, la Mezquita-Catedral de Córdoba, el Real Alcázar y el pintoresco barrio del Albayzín.",
                overlayImage: "Destination/a.jpg"
            },
            {
                name: "Cataluña",
                description: "Cataluña, con ciudades emblemáticas como Barcelona y Girona, combina tradición, arte y modernidad frente al mar Mediterráneo. Su cultura se distingue por la arquitectura surrealista de Gaudí, el orgullo de la identidad catalana y una vibrante escena artística que impregna cada rincón. La región celebra festivales únicos como La Mercè en Barcelona, una gran fiesta cultural llena de música y color; Sant Jordi, el Día del Libro y la Rosa, que une el amor y la lectura; y los Castellers, una emocionante tradición en la que se levantan torres humanas. La gastronomía catalana ofrece delicias como el Pa amb Tomàquet, la Escudella, la Crema Catalana y el Cava, su famoso vino espumoso. Entre los lugares imprescindibles destacan la Sagrada Família, el Park Güell, el Barrio Gótico y la Catedral de Girona, símbolos del encanto y la creatividad de Cataluña.",
                overlayImage: "Destination/b.jpg"
            },
            {
                name: "Madrid y España Central",
                description: "Madrid, Toledo y Segovia destacan por su herencia real, arte clásico y vida de café. Celebran San Isidro y la Virgen del Pilar, con platos típicos como Cocido Madrileño y Churros con Chocolate. Imperdibles: Museo del Prado, Palacio Real y Alcázar de Segovia.Valencia y Alicante reflejan energía mediterránea e innovación. Famosas por Las Fallas y La Tomatina, ofrecen Paella, Horchata y Fideuà. Lugares clave: Ciudad de las Artes, Oceanogràfic y Castillo de Santa Bárbara.",
                overlayImage: "Destination/c.jpg"
            },
            {
                name: "País Vasco",
                description: "El País Vasco, con ciudades como San Sebastián y Bilbao, combina tradición y modernidad entre colinas verdes y el mar Cantábrico. Su cultura se distingue por el idioma euskera y un fuerte espíritu artístico e innovador. Destacan festivales como la Semana Grande de San Sebastián, con fuegos artificiales y conciertos, y la Tamborrada de Donostia, una vibrante celebración de tambores. La gastronomía vasca es famosa por los pintxos, el bacalao al pil-pil y el vino Txakoli. Entre sus lugares imprescindibles se encuentran el Museo Guggenheim, la Playa de la Concha y el Casco Viejo de Bilbao.",
                overlayImage: "Destination/d.jpg"
            },
            {
                name: "Galicia",
                description: "Galicia, con ciudades como Santiago de Compostela y A Coruña, ofrece una mezcla única de herencia celta, espiritualidad y paisajes costeros envueltos en niebla. Su cultura está profundamente ligada al Camino de Santiago, celebrado en la Festa do Apóstolo, y a festividades como la Semana Grande de A Coruña, llena de música, desfiles y fuegos artificiales. Su gastronomía destaca por el Pulpo a la Gallega, la Empanada Gallega, el vino Albariño y los mariscos frescos. Entre sus lugares imprescindibles se encuentran la Catedral de Santiago, la Torre de Hércules y la Plaza del Obradoiro.",
                overlayImage: "Destination/e.jpg"
            },
            {
                name: "Islas Canarias",
                description: "Las Islas Canarias, con Tenerife y Gran Canaria como principales destinos, combinan paisajes volcánicos, clima tropical y una cultura alegre y festiva. Destacan celebraciones como el Carnaval de Santa Cruz de Tenerife, uno de los más grandes del mundo, y la Fiesta de San Juan, con hogueras y fiestas en la playa. Su gastronomía ofrece sabores únicos como las Papas Arrugadas con Mojo, el Gofio, las frutas tropicales y el ron local. Entre sus lugares imprescindibles se encuentran el Monte Teide, las Dunas de Maspalomas, el Loro Parque y el Casco Antiguo de Vegueta.",
                overlayImage: "Destination/f.jpg"
            }
        ];

        function openOverlay(index) {
            const overlay = document.getElementById('overlay');
            const overlayImage = document.getElementById('overlayImage');
            document.getElementById('overlayTitle').textContent = cities[index].name;
            document.getElementById('overlayDescription').textContent = cities[index].description;
            overlayImage.style.backgroundImage = `url('${cities[index].overlayImage}')`;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeOverlay(event) {
            if (event) event.stopPropagation();
            const overlay = document.getElementById('overlay');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeOverlay();
            }
        });