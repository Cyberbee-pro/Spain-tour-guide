let currentImageIndex = 0;
let autoScrollInterval;

// English translations of region names and descriptions.
// Each region includes an array of image paths used by the overlay carousel.
const cities = [
    {
        name: "Andalusia",
        description: "Andalusia is home to some of Spain's most captivating cities —Seville, Granada and Córdoba— each with its own unique charm and history. The region is widely known as the birthplace of flamenco, with lively street life, Moorish architecture and deep-rooted traditions. Major festivals include Seville's Feria de Abril, solemn Semana Santa processions, and Córdoba's Festival of the Crosses. Andalusian cuisine features gazpacho, salmorejo, Iberian ham, tapas and Sherry wines. Must-see sights: Plaza de España (Seville), the Alhambra (Granada), the Mezquita-Cathedral (Córdoba), the Royal Alcázar, and the Albayzín quarter.",
        overlayImages: ["../Destination/a.jpg", "../Destination/a-1.jpg", "../Destination/a-2.jpg", "../Destination/a-3.jpg", "../Destination/a-4.jpg", "../Destination/a-5.jpg","../Destination/a-7.jpg","../Destination/a-7.webp"]
    },
    {
        name: "Catalonia",
        description: "Catalonia, with iconic cities like Barcelona and Girona, blends tradition, art and seaside modernity. It's famous for Gaudí's surreal architecture, a strong Catalan identity and a thriving arts scene. Festivals include La Mercè in Barcelona and Sant Jordi (Book & Rose Day). Catalan dishes include Pa amb Tomàquet, Escudella, Crema Catalana and Cava. Highlights: Sagrada Família, Park Güell, the Gothic Quarter and Girona Cathedral.",
        overlayImages: ["../Destination/b.jpg", "../Destination/b-1.jpg", "../Destination/b-2.jpg", "../Destination/b-3.jpg", "../Destination/b-4.jpg"]
    },
    {
        name: "Madrid & Central Spain",
        description: "Madrid, Toledo and Segovia stand out for royal heritage, classical art and lively café culture. Celebrations such as San Isidro and local festivals are common; typical foods include Cocido Madrileño and churros with chocolate. Don't miss the Prado Museum, the Royal Palace and the Alcázar of Segovia. Nearby Mediterranean voices like Valencia and Alicante bring their own energy, with Las Fallas, La Tomatina, paella and the City of Arts and Sciences.",
        overlayImages: ["../Destination/c.jpg", "../Destination/c-1.jpg", "../Destination/c-2.jpg", "../Destination/c-3.jpg"]
    },
    {
        name: "País Vasco",
        description: "The Basque Country/País Vasco, including San Sebastián and Bilbao, mixes tradition and modernity along the Cantabrian coast. Known for the Basque language (Euskera), strong cultural identity and a world-class culinary scene. Festivals include Semana Grande in San Sebastián and the Tamborrada drum festival. Famous dishes: pintxos, bacalao al pil-pil and Txakoli wine. Highlights: Guggenheim Museum, La Concha beach and the Old Town of Bilbao.",
        overlayImages: ["../Destination/d.jpg", "../Destination/d-1.jpg", "../Destination/d-2.jpg", "../Destination/d-3.jpg", "../Destination/d-4.jpg", "../Destination/d-5.jpg", "../Destination/d-6.jpg"]
    },
    {
        name: "Galicia",
        description: "Galicia, with cities like Santiago de Compostela and A Coruña, offers a unique blend of Celtic heritage, spirituality, and coastal landscapes shrouded in mist. Its culture is deeply tied to the Camino de Santiago, celebrated during the Festa do Apóstolo, and to festivities like A Coruña's Semana Grande, full of music, parades, and fireworks. Its cuisine is renowned for Pulpo a la Gallega, Galician Empanada, Albariño wine, and fresh seafood. Must-visit places include the Santiago Cathedral, the Tower of Hercules, and the Plaza del Obradoiro.",
        overlayImages: ["../Destination/e.jpg", "../Destination/e-1.jpg", "../Destination/e-2.jpg", "../Destination/e-3.jpg", "../Destination/e-4.jpg", "../Destination/e-5.jpg"]
    },
    {
        name: "Canary Islands",
        description: "The Canary Islands, led by Tenerife and Gran Canaria, combine volcanic landscapes, subtropical climate and a vibrant festival culture. Highlights include the Santa Cruz de Tenerife Carnival and beach bonfire traditions around San Juan. Try local specialties like Papas Arrugadas with Mojo sauce, Gofio and tropical fruits. Must-see spots: Mount Teide, the Maspalomas Dunes, Loro Parque and Vegueta's historic quarter.",
        overlayImages: ["../Destination/f.jpg", "../Destination/f-1.jpg", "../Destination/f-2.jpg", "../Destination/f-3.jpg", "../Destination/f-4.jpg", "../Destination/f-5.jpg"]
    }
];


/**
 * Scroll the image carousel to display the image at the given index.
 * Handles wrapping of the index so the carousel loops smoothly.
 */
function scrollToImage(index, totalImages) {
    const carousel = document.getElementById('imageCarousel');

    // Normalize index to a valid range [0, totalImages-1]
    currentImageIndex = (index % totalImages + totalImages) % totalImages;

    const scrollPosition = currentImageIndex * carousel.clientWidth;

    carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}


/**
 * Start automatic scrolling of the carousel (one image every 4 seconds).
 */
function startAutoScroll(totalImages) {
    clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(() => {
        scrollToImage(currentImageIndex + 1, totalImages);
    }, 4000);
}


/**
 * Initialize the carousel for the given city index: populate images, attach
 * handlers and enable/disable controls depending on how many images exist.
 */
function initCarousel(cityIndex) {
    const imageWrapper = document.getElementById('imageWrapper');
    const cityImages = cities[cityIndex].overlayImages;
    const totalImages = cityImages.length;

    currentImageIndex = 0;
    clearInterval(autoScrollInterval);

    imageWrapper.innerHTML = '';
    cityImages.forEach(imagePath => {
        const imgElement = document.createElement('img');
        imgElement.src = imagePath;
        imgElement.alt = `${cities[cityIndex].name} Image`;
        imageWrapper.appendChild(imgElement);
    });

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const showControls = totalImages > 1 ? 'block' : 'none';
    prevBtn.style.display = showControls;
    nextBtn.style.display = showControls;

    prevBtn.onclick = () => {
        clearInterval(autoScrollInterval);
        scrollToImage(currentImageIndex - 1, totalImages);
        startAutoScroll(totalImages);
    };

    nextBtn.onclick = () => {
        clearInterval(autoScrollInterval);
        scrollToImage(currentImageIndex + 1, totalImages);
        startAutoScroll(totalImages);
    };

    if (totalImages > 1) startAutoScroll(totalImages);

    const carousel = document.getElementById('imageCarousel');
    if (carousel) carousel.scrollTo({ left: 0, behavior: 'auto' });
}


function openOverlay(index) {
    const overlay = document.getElementById('overlay');

    document.getElementById('overlayTitle').textContent = cities[index].name;
    document.getElementById('overlayDescription').textContent = cities[index].description;

    // Prepare and start the image carousel for this city
    initCarousel(index);

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}


function closeOverlay(event) {
    clearInterval(autoScrollInterval);

    if (event) event.stopPropagation();
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeOverlay();
});