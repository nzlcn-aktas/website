document.addEventListener("DOMContentLoaded", () => {
    const columns = document.querySelectorAll(".artist-column");
    const galleryContent = document.querySelector(".gallery-content");
    const galleryGrid = document.querySelector(".gallery-grid");
    const gallerySplit = document.querySelector(".gallery-split");
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.querySelector(".nav-links");

    // Menu Button Function (Index page)
    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    const artData = {
        vangogh: [
            { img: "data/vangogh/1.jpeg", name: "Almond Blossoms", artist: "Van Gogh", desc: "Van Gogh painted these flowers for his brother's new baby. It represents new life." },
            { img: "data/vangogh/2.jpeg", name: "The Bedroom", artist: "Van Gogh", desc: "This is a painting of the artist's own room. He used simple colors to show a sense of rest." },
            { img: "data/vangogh/3.jpeg", name: "Self-Portrait", artist: "Van Gogh", desc: "The artist painted himself. You can see his feelings through the strong lines and colors." }
        ],
        monet: [
            { img: "data/monet/1.jpeg", name: "Water Lilies 1919", artist: "Monet", desc: "Monet loved painting his garden. This work shows how light looks on the water." },
            { img: "data/monet/2.jpeg", name: "Poplars on the Epte", artist: "Monet", desc: "A painting of tall trees by a river. It shows a beautiful, sunny moment in nature." },
            { img: "data/monet/3.jpeg", name: "Flower Beds at Vetheuil", artist: "Monet", desc: "A very colorful painting of a garden. It makes you feel the warmth of a sunny day." }
        ],
        picasso: [
            { img: "data/picasso/1.jpeg", name: "The Weeping Woman", artist: "Picasso", desc: "This famous work shows a woman in deep sadness. Picasso used strange shapes to show her pain." },
            { img: "data/picasso/2.jpeg", name: "Bust of a Faun", artist: "Picasso", desc: "A modern painting of a mythical creature. Picasso changed natural shapes into simple forms." },
            { img: "data/picasso/3.jpeg", name: "Bust de Femme", artist: "Picasso", desc: "A painting of a woman made with geometric shapes. It is a great example of his modern style." }
        ],
        klimt: [
            { img: "data/klimt/1.jpeg", name: "Judith", artist: "Klimt", desc: "A powerful painting of a woman. Klimt used real gold to make the picture look special." },
            { img: "data/klimt/2.jpeg", name: "The Kiss", artist: "Klimt", desc: "Klimt's most famous work. It shows two people in love, covered in beautiful gold patterns." },
            { img: "data/klimt/3.jpeg", name: "Portrait of Margaret", artist: "Klimt", desc: "A very elegant painting of a lady. The artist used many small details to make it beautiful." }
        ],
        // Extra "all" specific images (if any)
        all_extra: [
            { img: "data/all/1.jpeg", name: "Cimon and Iphigenia", artist: "Peter Paul Rubens", desc: "A famous painting from the Baroque period. It shows a story from old myths." },
            { img: "data/all/2.jpeg", name: "The Klingler Quartet", artist: "Oppenheimer", desc: "This painting shows four musicians playing music together." },
            { img: "data/all/3.jpeg", name: "View of Assisi", artist: "Blechen", desc: "A beautiful and quiet view of an Italian town." }
        ]
    };

    function loadGallery(artistKey) {
        galleryGrid.innerHTML = "";
        let imagesToShow = [];

        if (artistKey === "all") {
            // "all" seçildiğinde: Diğer tüm sanatçıları ve "all_extra" listesini birleştir
            Object.keys(artData).forEach(key => {
                imagesToShow = imagesToShow.concat(artData[key]);
            });
        } else {
            // Belirli bir sanatçı seçildiyse sadece onu göster
            imagesToShow = artData[artistKey];
        }

        imagesToShow.forEach(art => {
            const card = document.createElement("div");
            card.classList.add("art-card");
            card.innerHTML = `
                <div class="img-container">
                    <img src="${art.img}" alt="${art.name}">
                </div>
                <div class="art-info">
                    <h2 class="art-title">${art.name}</h2>
                    <h3 class="art-artist">${art.artist}</h3>
                    <p class="art-desc">${art.desc}</p>
                </div>
            `;
            galleryGrid.appendChild(card);
        });
    }

    columns.forEach(col => {
        col.addEventListener("click", () => {
            const isAlreadyActive = col.classList.contains("active");
            columns.forEach(c => c.classList.remove("active"));
            
            if (isAlreadyActive) {
                gallerySplit.classList.remove("shrink");
                galleryContent.classList.remove("active");
                document.body.classList.remove("gallery-open");
            } else {
                col.classList.add("active");
                gallerySplit.classList.add("shrink");
                galleryContent.classList.add("active");
                document.body.classList.add("gallery-open");
                loadGallery(col.dataset.artist);
            }
        });
    });
});