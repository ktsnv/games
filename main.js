let repos;
const container = document.querySelector("#container");
function preload() {
  repos = loadJSON('https://api.github.com/repos/Edward358-AI/HTML5-games/contents/html5');
}

function setup() {
  for(const element of repos)
  {
    let p = document.createElement("p");
    p.innerHTML = element.name;
    container.append(p);
  }
}
