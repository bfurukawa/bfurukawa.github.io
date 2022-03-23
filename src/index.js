const form = document.querySelector("#form");
const title = document.querySelector("#title");
const textA = document.querySelector("#textA");
const urlImagem = document.querySelector("#url");
const button = document.querySelector("#botao");
const divcards = document.querySelector("#divcartoes");

form.onsubmit = function (event) {
  event.preventDefault();
};

button.onclick = () => {
  if(urlImagem.value=="" || title.value == "" || textA.value == ""){
    window.alert("Algum dos campos vazios, favor completar todos antes do envio")
  }
  else{
    divcards.innerHTML += `
      <div id="cartao">
        <img src="${urlImagem.value}" alt="">
        <h3>${title.value}</h3>
        <p>${textA.value}</p>
      </div>`;
    urlImagem.value = "";
    title.value = "";
    textA.value = "";
  }
  
};