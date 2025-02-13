function hideScreenById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showScreenById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function getARandomAlphabet() {
  const alphabetsString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetsString.split("");
  const index = Math.round(Math.random() * 25);
  const alphabet = alphabets[index];
  return alphabet;
}
function setBGColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeBGColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}
function getDisplayedKeyById(elementId) {
  const elementText = document.getElementById(elementId).innerText;
  const element = elementText.toLowerCase();
  return element;
}
function getValueById(elementId) {
  const elementText = document.getElementById(elementId);
  const element = parseInt(elementText.innerText);
  return element;
}
function setValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
