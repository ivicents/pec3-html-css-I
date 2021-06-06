// document.addEventListener("DOMContentLoaded", function () {
//     var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

//     if ("IntersectionObserver" in window) {
//         console.log("Lazy if")
//         let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
//             entries.forEach(function (entry) {
//                 if (entry.isIntersecting) {
//                     let lazyImage = entry.target;
//                     console.log("lazy image", lazyImage)
//                     lazyImage.src = lazyImage.dataset.src;
//                     lazyImage.srcset = lazyImage.dataset.srcset;
//                     lazyImage.classList.remove("lazy");
//                     lazyImageObserver.unobserve(lazyImage);
//                 }
//             });
//         });

//         lazyImages.forEach(function (lazyImage) {
//             lazyImageObserver.observe(lazyImage);
//         });
//     } else {
//         // Possibly fall back to event handlers here
//         console.log("Lazy else")
//     }
// });

// if ('loading' in HTMLImageElement.prototype) {
//     // Si el navegador soporta lazy-load, tomamos todas las imágenes que tienen la clase
//     // `lazyload`, obtenemos el valor de su atributo `data-src` y lo inyectamos en el `src`.
//     const images = document.querySelectorAll("img.lazyload");
//     images.forEach(img => {
//         img.src = img.dataset.src;
//     });
// } else {
//     // Importamos dinámicamente la libreria `lazysizes`
//     let script = document.createElement("script");
//     script.async = true;
//     script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js";
//     document.body.appendChild(script);
// }