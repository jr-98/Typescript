"use strict";
/*Santa Claus 🎅 wants to frame the names of the good children to decorate his workshop 🖼️,
but the frame must follow specific rules.Your task is to help the elves generate this magical
frame.
Rules:

Given an array of names, you must create a rectangular frame that contains all of them.
Each name must be on a line, aligned to the left.
The frame is built with * and has a border one line thick.
The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.
Example of how it works:

createFrame(['midu', 'madeval', 'educalvolpz'])

// Expected result:
***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/
function createFrame(names) {
    let length_el = names.reduce((max, el) => Math.max(max, el.length), 0);
    const border = "*".repeat(Number(length_el + 4));
    let format_names = names.map(el => `* ${el}${" ".repeat(Number((length_el - (el.length))))} *`);
    return `${border}\n${format_names.join('\n')}\n${border}`;
}
const frame = createFrame(['Evelyn', 'pampi', 'Jonathan']);
console.log(frame);
