var slogans = [
    "Passion for coding with an eye for design.",
    "There are many like it, but this website is mine.",
    "Clean, powerful code for projects big and small.",
    "Code well, test well, work well.",
    "I'm not afraid of a little DMCA notice, no sir!"
];

$(".slogan").text(slogans[Math.floor(Math.random() * slogans.length)]);
