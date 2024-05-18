

  const gatoCajas=document.getElementById("gatoContainer");
  const gatoNotif=document.getElementById("gatoNotif");
  const modalVolver=document.getElementById("modalVolver");
  const modalBody=document.getElementById("modal-body");

/*const gatos = [
  {
    id: 1,
    color: "Crema",
    edad: 2,
    genero:"Macho",
    raza:"Siames",
    peso: 4,
    img:"siames1.png"
  },
  {
    id: 2,
    color: "Blanco",
    edad: 4,
    genero:"Hembra",
    raza:"Angora",
    peso: 3,
    img:"angora.jpg"
  },
  {
    id: 3,
    color: "Negro",
    edad: 1,
    genero:"Hembra",
    raza:"Bombay",
    peso: 4,
    img:"bombay.jpg"
  },
  {
    id: 4,
    color: "Marron",
    edad: 2,
    genero:"Macho",
    raza:"Europeo",
    peso: 3,
    img:"europeancat.png"
  },
  {
    id: 5,
    color: "Marron",
    edad: 6,
    genero:"Macho",
    raza:"Persa",
    peso: 3,
    img:"persiancat.png"
  },
  {
    id: 6,
    color: "Gris",
    edad: 3,
    genero:"Hembra",
    raza:"Siames",
    peso: 4,
    img:"siames2.jpg"
  },
];
*/

const {gatos}=require("./script2.js");
console.log(gatos);
gatos.forEach(
    ({Id_sn,img}) => {
      gatoCajas.innerHTML += `
        <div class="gato_caja">
        <img id="${Id_sn}" onClick="reply_id(this.id,this.src)" class="gatoFoto" src=${img} alt="Imágen del gato" data-toggle="modal" data-target="#exampleModalCenter" >
        </div>
      `;
    }
  );

function reply_id(fotoId,fotoSrc){
  let currFoto=0;
   for(let i=0;i<gatos.length;i++){
    if(fotoId==gatos[i].Id_sn){
       currFoto=fotoId;
    }
   }
   modalBody.innerHTML+=`
   <img id="${fotoId}" class="gatoFotoModal" src=${fotoSrc}>
   `;
    modalBody.innerHTML+=`
    <div class="modal-data">
    <p class="gatoColor">Color: ${gatos[currFoto-1].color}</p>
    <p class="gatoEdad">Edad: ${gatos[currFoto-1].edad} años</p>
    <p class="gatoGenero">Género: ${gatos[currFoto-1].genero}</p>
    <p class="gatoRaza">Raza: ${gatos[currFoto-1].raza}</p>
    <p class="gatoPeso">Peso: ${gatos[currFoto-1].peso} Kg</p>
    </div>
    `;
}
