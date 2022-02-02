function createDropDown(item) {
  return (
    `<li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">${item.name}</a>
                  <div class="dropdown-menu">
                  ` +
    item.children
      .map((child) => {
        return `<a class="dropdown-item" href="${child.link}">${child.name}</a>`;
      })
      .join("") +
    `
                  </div>  
                </li>`
  );
}

function createNavItens(itens) {
  return itens
    .map((item) => {
      if (item.children) {
        return createDropDown(item);
      }
      return `<li class='nav-item'><a class='nav-link' href=${item.link}>${item.name}</a></li>`;
    })
    .join("");
}

const navBar = {
  logo: "logoooo",
  itens: [
    {
      name: "Minha Lista",
      link: "/teste.html",
    },
    {
      name: "Franquias",
      link: "/teste.html",
    },
    {
      name: "Gênero",
      link: "/teste.html",
    },
    {
      name: "Plataforma",
      link: "#",
      children: [
        {
          name: "Playstation",
          link: "#",
        },
        {
          name: "Xbox",
          link: "#",
        },
        {
          name: "PC",
          link: "#",
        },
        {
          name: "Nintendo",
          link: "#",
        },
      ],
    },
    {
      name: "Sobre",
      link: "#",
    },
  ],
};

const navbarTemplate =
  `
<nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand" href="#">${navBar.logo}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     
      ` +
  createNavItens(navBar.itens) +
  `
    </ul>
    <div class="custom-control custom-switch">
    <input type="checkbox" class="custom-control-input" id="customSwitch1">
    <label class="custom-control-label mr-3" for="customSwitch1">Theme</label>
  </div>
  
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      
    </form>
  </div>
</nav>
`;

document.getElementById("navbar").innerHTML = navbarTemplate;
document.getElementById("customSwitch1").onclick = (event) => {
  console.log("cliquei");
  document.querySelector("body").classList.toggle("theme");
  document.querySelector(".navbar").classList.toggle("bg-dark");
  document.querySelector(".navbar").classList.toggle("navbar-dark");
};
