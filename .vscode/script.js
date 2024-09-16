function toggleMode() {
  const html =
    document.documentElement /* o Doc.docElement é o arquivo inteiro*/
  html.classList.toggle("light") /* SUBSTITUI O "IF" */

  // pegar a TAG img
  const img = document.querySelector("#profile img")

  // substituit a imagem
  if (html.classList.contains("light")) {
    // se tiver em light mode adcionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode então manter a imagem normal
    img.setAttribute("src", "./assets/avatar.jpg")
  }
}
