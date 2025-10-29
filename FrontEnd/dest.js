const cities = [
            {
                name: "Barcelona",
                description: "Barcelona, la capital de Cataluña, es famosa por su arquitectura única de Gaudí, incluyendo la icónica Sagrada Familia. La ciudad combina playas mediterráneas con un rico patrimonio cultural, mercados vibrantes como La Boqueria, y una vida nocturna incomparable. Pasea por Las Ramblas y descubre el encanto del Barrio Gótico.",
                overlayImage: "BARCELONA_OVERLAY_IMAGE_URL"
            },
            {
                name: "Madrid",
                description: "Madrid, la capital de España, es el corazón político y cultural del país. Hogar de museos de clase mundial como el Prado y el Reina Sofía, la ciudad ofrece una mezcla perfecta de historia y modernidad. Disfruta de sus parques majestuosos, tapas deliciosas y una vida nocturna que nunca duerme.",
                overlayImage: "MADRID_OVERLAY_IMAGE_URL"
            },
            {
                name: "Sevilla",
                description: "Sevilla es la esencia de Andalucía, donde el flamenco cobra vida en cada esquina. La ciudad presume de la impresionante Catedral y la Giralda, el romántico barrio de Santa Cruz, y el majestuoso Real Alcázar. Sus patios floridos y el río Guadalquivir crean un ambiente mágico e inolvidable.",
                overlayImage: "SEVILLA_OVERLAY_IMAGE_URL"
            },
            {
                name: "Valencia",
                description: "Valencia es una ciudad que mira al futuro sin olvidar su pasado. La Ciudad de las Artes y las Ciencias representa la arquitectura moderna, mientras que el Barrio del Carmen conserva el encanto histórico. Cuna de la paella, Valencia ofrece playas urbanas, las Fallas en marzo, y un clima mediterráneo perfecto.",
                overlayImage: "VALENCIA_OVERLAY_IMAGE_URL"
            },
            {
                name: "Granada",
                description: "Granada alberga la joya de la arquitectura islámica en Europa: la Alhambra. Esta ciudad a los pies de Sierra Nevada combina la herencia morisca con el encanto gitano del Sacromonte. Sus jardines del Generalife, el mirador de San Nicolás y las cuevas flamencas crean una experiencia única e inolvidable.",
                overlayImage: "GRANADA_OVERLAY_IMAGE_URL"
            },
            {
                name: "Bilbao",
                description: "Bilbao es la capital del País Vasco, una ciudad que se reinventó a través del arte y la arquitectura. El Museo Guggenheim es su símbolo de transformación moderna. Disfruta de pintxos en el Casco Viejo, explora el mercado de la Ribera, y descubre una ciudad que fusiona tradición e innovación perfectamente.",
                overlayImage: "BILBAO_OVERLAY_IMAGE_URL"
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