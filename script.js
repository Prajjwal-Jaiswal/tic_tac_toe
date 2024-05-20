const All_cell = document.querySelectorAll(".cell");

let c = 0;

let win = false;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let cell = All_cell[3 * i + j];
    const list = cell.classList;
    cell.addEventListener("click", () => {
      if (
        c % 2 === 0 &&
        !cell.classList.contains("rahul") &&
        !cell.classList.contains("modi") && win===false
      ) {
        list.add("modi");
        c++;
        if (check(i, j) === true) {
          win = true;
        }
        var audio = new Audio("audio/audio1.wav");
        audio.play();
      } else if (
        c % 2 !== 0 &&
        !cell.classList.contains("rahul") &&
        !cell.classList.contains("modi") && win===false
      ) {
        list.add("rahul");
        c++;
        if (check(i, j) === true) {
          win = true;
        }
        var audio = new Audio("audio/audio2.wav");
        audio.play();
      }

      if (c === 9 && win === false) {
        console.log("tied match");
        let container = document.querySelector(".container");
        let con_list = container.classList;
        con_list.add("tied");
        let result = document.querySelector(".card-header-title");
        result.innerText = "MATCH TIED , PLAY AGAIN";
        // again();
      }
    });
  }
}

function again() {
  win=false;
  for (let i = 0; i < All_cell.length; i++) {
    let cell = All_cell[i];
    c = 0;
    const list = cell.classList;
    if (list.contains("modi")) list.remove("modi");
    if (list.contains("rahul")) list.remove("rahul");
  }

  let container = document.querySelector(".container");
  let con_list = container.classList;

  if (con_list.contains("bjp")) con_list.remove("bjp");

  if (con_list.contains("cong")) con_list.remove("cong");

  if (con_list.contains("tied")) con_list.remove("tied");
  let result = document.querySelector(".card-header-title");
  result.innerText = "TIC-TAC-TOE";

  var audio = new Audio("audio/audio3.wav");
  audio.play();
}

const restart = document.querySelector(".restart");
restart.addEventListener("click", again);

function check(row, col) {
  let m = 0;
  let r = 0;
  for (let i = 0; i < 3; i++) {
    let cell = All_cell[3 * i + col];
    let list = cell.classList;
    if (list.contains("modi")) m++;
    else if (list.contains("rahul")) r++;
  }

  if (m === 3) {
    console.log("Modi wins");
    modi_win();
    return true;
  } else if (r === 3) {
    console.log("Rahul wins");
    rahul_win();
    return true;
  }

  m = 0;
  r = 0;
  for (let i = 0; i < 3; i++) {
    let cell = All_cell[3 * row + i];
    let list = cell.classList;
    if (list.contains("modi")) m++;
    else if (list.contains("rahul")) r++;
  }

  if (m === 3) {
    console.log("Modi wins");
    modi_win();
    return true;
  } else if (r === 3) {
    console.log("Rahul wins");
    rahul_win();
    return true;
  }

  m = 0;
  r = 0;
  for (let i = 0; i < 3; i++) {
    let cell = All_cell[3 * i + i];
    let list = cell.classList;
    if (list.contains("modi")) m++;
    else if (list.contains("rahul")) r++;
  }

  if (m === 3) {
    console.log("Modi wins");
    modi_win();
    return true;
  } else if (r === 3) {
    console.log("Rahul wins");
    rahul_win();
    return true;
  }

  m = 0;
  r = 0;
  let j = 2;
  for (let i = 0; i < 3; i++) {
    let cell = All_cell[3 * i + j];
    let list = cell.classList;
    if (list.contains("modi")) m++;
    else if (list.contains("rahul")) r++;

    j--;
  }

  if (m === 3) {
    console.log("Modi wins");
    modi_win();
    return true;
  } else if (r === 3) {
    console.log("Rahul wins");
    rahul_win();
    return true;
  }

  return false;
}

function modi_win() {
  console.log("MODI WINSS");
  let container = document.querySelector(".container");
  let con_list = container.classList;
  con_list.add("bjp");
  let result = document.querySelector(".card-header-title");
  result.innerText = "ABKI BAAR MODI SARKAR";
  var audio = new Audio("audio/win.wav");
  audio.play();
  // again();
}

function rahul_win() {
  console.log("RAHUL WINSS");
  let container = document.querySelector(".container");
  let con_list = container.classList;
  con_list.add("cong");
  let result = document.querySelector(".card-header-title");
  result.innerText = "PAPPU WINSS";
  var audio = new Audio("audio/win.wav");
  audio.play();
  // again();
}
