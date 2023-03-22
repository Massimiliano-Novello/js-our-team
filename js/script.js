//MILESTONE 0
//Creo l'arrey con dentro gli ogetti
const team = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg",
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
  },
];

//MILESTONE 1
//Stampare in console e nel DOM tutto il team
const cardRow = document.querySelector(".row");
let card = "";
for (let i = 0; i < team.length; i++) {
  const curTeam = team[i];
  console.log(curTeam);
  card += ` <div class="card border border-0">
                <img src="${curTeam.foto}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${curTeam.nome}</h5>
                    <p class="card-text">
                        ${curTeam.ruolo}
                    </p>
                </div>
            </div>`;
}
console.log(card);
cardRow.innerHTML = card;



