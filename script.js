function rolarParaProdutos() {
  document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! 🍭");
  this.reset();
});
