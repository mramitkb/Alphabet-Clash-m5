function playNow() {
  // 1. hide and show screens
  hideScreenById("home-screen");
  hideScreenById("final-screen");
  showScreenById("playground-screen");
  // 16. reset life and score count for continue the process
  setValueById("life", 5);
  setValueById("score", 0);
  //   continue the game with the right pressed alphabet
  continueGame();
}
function continueGame() {
  // 2. random alphabet on the screen
  const alphabet = getARandomAlphabet();
  // 3. displayed current alphabet
  const displayedAlphabet = (document.getElementById(
    "displayed-alphabet"
  ).innerText = alphabet);
  // 4. set bg color
  setBGColorById(alphabet);
}
// 5. keyboard event
document.addEventListener("keyup", function handleKeyboardEvent(e) {
  // 6. player pressed and displayed key
  const playerPressed = e.key;
  const displayedAlphabet = getDisplayedKeyById("displayed-alphabet");
  // 7. Basic Conditions
  if (playerPressed === "Escape") {
    gameOver();
  }
  // 8. Major Conditions
  if (playerPressed === displayedAlphabet) {
    // 9. increase and set life for pressing the right key
    const score = getValueById("score");
    const increaseScore = score + 1;
    setValueById("score", increaseScore);
    // 10. remove bg from the previous alphabet
    removeBGColorById(displayedAlphabet);
    // 11. continue the process
    continueGame();
  } else {
    // 12. reduce and set life for pressing the wrong key
    const life = getValueById("life");
    const reduceLife = life - 1;
    setValueById("life", reduceLife);

    // 13. another condition for next step
    if (reduceLife === 0) {
      gameOver();
    }
  }
});
function gameOver() {
  hideScreenById("playground-screen");
  showScreenById("final-screen");
  // 14. show result on the final score
  const currentScore = getValueById("score");
  setValueById("final-score", currentScore);
  // 15. remove bg from the key
  const displayedAlphabet = getDisplayedKeyById("displayed-alphabet");
  removeBGColorById(displayedAlphabet);
}
