function changeMode(size, weight, transform, background, color) {
    document.documentElement.style["font-size"] = size;
    document.documentElement.style["font-weight"] = weight;
    document.documentElement.style["text-transform"] = transform;
    document.documentElement.style["background-color"] = background;
    document.documentElement.style.color = color;
}

var spooky = function() {changeMode(9, "bold", "uppercase", "pink", "green")};
var darkMode = function() {changeMode(12, "bold", "capitalize", "black", "white")};
var screamMode = function() {changeMode(12, "normal", "lowercase", "white", "black")};

function main() {

    // PARAGRAPH

    var para = document.createElement("P");
    para.innerText = "Welcome Holberton!";
    document.body.appendChild(para);


    // SPOOKY BUTTON
    
    var Spookybtn = document.createElement("BUTTON");
    Spookybtn.innerHTML = "Spooky";
    Spookybtn.setAttribute("onClick", "spooky()");
    document.body.appendChild(Spookybtn);


    // DARK BUTTON
    
    var Darkbtn = document.createElement("BUTTON");
    Darkbtn.innerHTML = "Dark mode";
    Darkbtn.setAttribute("onClick", "darkMode()");
    document.body.appendChild(Darkbtn);


    // SCREAM BUTTON 

    var Screambtn = document.createElement("BUTTON");
    Screambtn.innerHTML = "Scream mode";
    Screambtn.setAttribute("onClick", "screamMode()");
    document.body.appendChild(Screambtn);
}

main();
