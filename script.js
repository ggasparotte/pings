function revealList() {
    var reasonsList = document.getElementById("reasonsList");

    // Alterna a visibilidade da lista.
    reasonsList.style.display = (reasonsList.style.display === "none") ? "block" : "none";
}

function revealImage() {
    var imageContainer = document.getElementById("imageContainer");

    // Alterna a visibilidade do contêiner de imagem.
    imageContainer.style.display = (imageContainer.style.display === "none") ? "block" : "none";
}
