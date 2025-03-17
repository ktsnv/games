let games;
const container = document.querySelector("#container");
function preload() {
  games = loadJSON('https://api.github.com/repos/Edward358-AI/HTML5-games/contents/html5');
}

function setup() {
  for(const element of games)
  {
    let p = document.createElement("p");
    p.innerHTML = element.name;
    container.append(p);
  }
}
