import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"
const name = 'world';
console.log(`Hello ${name}`);

var slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    autoplay: true,
    controls: true,
    nav: false,
    autoplayButtonOutput: false
});