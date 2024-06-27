// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const pictures = [
        "IMG_1158_Original.jpg",
        "IMG_1131_Original.jpg",
        "IMG_1316_Original.jpg"
        // Add more image URLs as needed
    ];

    const gallery = document.createElement("div");
    gallery.classList.add("image-gallery");

    pictures.forEach(function(imageSrc) {
        const img = document.createElement("img");
        img.src = imageSrc;
        img.alt = "Image of Lavisha";
        gallery.appendChild(img);
    });

    document.querySelector("main").appendChild(gallery);
});
