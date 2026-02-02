function goNext() {
  document.getElementById("poemSection").classList.add("hidden");
  document.getElementById("envelopeSection").classList.remove("hidden");
}

function openEnvelope() {
  document.getElementById("envelope").classList.add("open");
  document.getElementById("openBtn").style.display = "none";
}
