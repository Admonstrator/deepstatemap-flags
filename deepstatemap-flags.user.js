// ==UserScript==
// @name         DeepStateMap - Neutral Flags
// @namespace    https://github.com/Admonstrator/deepstatemap-flags
// @version      1.1
// @description  Replaces the pigs on DeepStateMap with neutral flags.
// @author       Admonstrator
// @homepage    https://github.com/Admonstrator/deepstatemap-flags
// @homepageURL    https://github.com/Admonstrator/deepstatemap-flags
// @source  https://github.com/Admonstrator/deepstatemap-flags
// @match         https://deepstatemap.live/*
// @icon         data:image/png;base64,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
// @grant        none
// @downloadURL https://raw.githubusercontent.com/Admonstrator/deepstatemap-flags/main/deepstatemap-flags.user.js
// @updateURL https://raw.githubusercontent.com/Admonstrator/deepstatemap-flags/main/deepstatemap-flags.user.js
// ==/UserScript==

// Thanks to Farow/image-replacer.user.js for the base code.
// I support Ukraine by my heart but Militär & Geschichte mit Torsten Heinrich is a more neutral channel and needs flags instead of pigs or potatoes for a better overview.
// I can highly recommend his channel: https://www.youtube.com/@MilitarGeschichte
// Slava Ukraini!
//
// Changelog
// v1.1: Improved performance like @rainbow365#6624 suggested

window.addEventListener('load', function () {
    let lookup_table = {
        'https://deepstatemap.live/images/custom/enemy.png': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA/FBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQaGhoeHh4eHh4cHBzFxcXj4+Ph4eEgICDf39////8gICDf398gICAgICDf39/f398cHR7Fx9Dj5vDi5O4HDBUyVJE5YKc5YKUEChQZRYwdUKEcT6AEChQaRoweUaEeUKAEChQZRo0dUaIdUKEHChIuQn81TJI0TJEXBgekLS+9NDe7MzYbBgW5KSHVLybTLyYaBgW4KSLULyfSLycbBgW5KSLVMCjULycbBgUXBQSiJB67KiO5KSIDAQEWBQQZBgUZBgV4Dz63AAAAEXRSTlMAAS1YWlot2P79/Vj8W/1b/YACPEMAAAABYktHRBycBEEHAAAAB3RJTUUH5gcFDS8iRpOUxwAAAL5JREFUaN7t2VEOAiEMhOHOwt7/TJ7KRAzj6y4SfdoSzd8LfIGmZRJqLKoKDAwMDAwMDAwMDPzzsCQpgbNtH+E9EX6c4T3pitsZ3hQJZ7btzTHANQVuAxwRNaHJdnsfp6J+OVx0Z3MBAwMDAwN/gDPe49qncL0++mgC52QuYOYYGBgYGBiYBAJM5gIGBgYGBv7DzFUm8L4kCHSVpATSPcK3nN4OcNMz7eN6gLUGPnSdBQIMDAwMDAwMDAwM/K1ebrtVzQfBi1AAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDctMDVUMTM6NDc6MjQrMDA6MDDWAT8CAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA3LTA1VDEzOjQ3OjI0KzAwOjAwp1yHvgAAAABJRU5ErkJggg==',
        'https://deepstatemap.live/images/custom/iblorussia.png': 'data:image/png;base64,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',
        'https://deepstatemap.live/images/custom/eblorussia.png': 'data:image/png;base64,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'
    };

    for (let image of document.getElementsByTagName('img')) {
        let img_url = image.src;
        if (img_url in lookup_table) {
            image.src = lookup_table[img_url];
        }
    }
}, false);