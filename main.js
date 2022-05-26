function deafGrandma() {
  let go = true;
  let goodbyes = 0;
  while (go) {
    let userInput = prompt();

    if (userInput === "") {
      alert("WHAT!?");
    } else if (userInput.toUpperCase() != userInput) {
      alert("SPEAK UP, KID!");
    } else if (
      userInput.toUpperCase() === userInput &&
      userInput != "GOODBYE!"
    ) {
      alert("NO, NOT SINCE 1946!");
    } else if (userInput == "GOODBYE!") {
      goodbyes += 1;
      if (goodbyes == 1) {
        alert("LEAVING SO SOON?");
        console.log(goodbyes);
      } else if (goodbyes == 2) {
        alert("LATER, SKATER!");
        console.log(goodbyes);
        go = false;
      }
    }
  }
}
deafGrandma();
