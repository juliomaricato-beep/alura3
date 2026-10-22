// [0] tipo, [1] = vida atual, [2] vida max, [3] dano, [4] agilidade, [5] defesa, [6] bloqueando
let p1s = [0, 100, 100, 10, 10, 0, 0];
// [0] tipo, [1] = vida atual, [2] vida max, [3] dano, [4] agilidade, [5] defesa, [6] bloqueando
// [0] 1 = tanque, vida x1.5, dano x0.75, agilidade x0.5, defesa x1.5
// [0] 2 = guerreiro, vida x0.75, dano x2, agilidade x1, defesa x0.5
// [0] 3 = ladino, vida x0.5, dano x1.75, agilidade x2, defesa x0.5
// [0] 4 = random, all x1
let i1s = [0, 0, 0, 0, 0, 0];
let i2s = [0, 0, 0, 0, 0, 0];
let i3s = [0, 0, 0, 0, 0, 0];
// [0] dificuldade, [1] inimigo 1, [2] inimigo 2, [3] inimigo 3, [4] concluida?
let nivel = [2, 1, 0, 0, 1]
// [0]rodada atual, [1] turno atual, [2] quantidade de turnos
let turno = [0, 0, 0];
let ação1 = 0;
let ação2 = 0;
let ação3 = 0;

function setup(){
createCanvas(800, 600);
frameRate(1);
}

function draw() {
background("white");
if (nivel[4] === 1) {
GNivel();
nivel[4] = 0;
turno[0] = 1;
turno[1] = 1;
}
fill("black");
text("Nivel: " + nivel[0], 10, 20);
text("Inimigo 1: PV:" + i1s[1] + "/" + i1s[2] + " atk:" + i1s[3] + " agi:" + i1s[4] + " def:" + i1s[5] + " classe " + i1s[0], 10, 40);
text("Inimigo 2: PV:" + i2s[1] + "/" + i2s[2] + " atk:" + i2s[3] + " agi:" + i2s[4] + " def:" + i2s[5] + " classe " + i2s[0], 10, 60);
text("Inimigo 3: PV:" + i3s[1] + "/" + i3s[2] + " atk:" + i3s[3] + " agi:" + i3s[4] + " def:" + i3s[5] + " classe " + i3s[0], 10, 80);
text("Player: PV:" + p1s[1] + "/" + p1s[2] + " atk:" + p1s[3] + " agi:" + p1s[4] + " def:" + p1s[5] + " classe " + p1s[0], 10, 250);
text("Rodada: " + turno[0] + " Turno: " + turno[1] + "/" + turno[2], 10, 270);
  combate();
}

function GNivel(){
  if(nivel[0] >= 1.5) {
  nivel[2] = 1
  turno[2] = 3;
  } else {
  turno[2] = 2;
  }
  if(nivel[0] >= 2) {
  nivel[3] = 1
  turno[2] = 4;
  } 
  if(nivel[1] === 1) {
  i1s[0] = round(random(1,4));
  // vida
  i1s[1] = round((random(60, 80)*nivel[0]));
  i1s[2] = i1s[0];
  // dano
  i1s[3] = round((random(15, 20)*nivel[0]));
  // agilidade
  i1s[4] = round((random(15, 20)*nivel[0]));
  // defesa
  i1s[5] = round((random(5, 10)*nivel[0]));
  if (i1s[0] === 1){
  i1s[1] = round((i1s[1]*1.5));
  i1s[2] = i1s[1];
  i1s[3] = round((i1s[3]*0.75));
  i1s[4] = round((i1s[4]*0.5));
  i1s[5] = round((i1s[5]*1.5));
  } else if (i1s[0] === 2){
  i1s[1] = round((i1s[1]*0.75));
  i1s[2] = i1s[1];
  i1s[3] = round((i1s[3]*2));
  i1s[4] = round((i1s[4]*1));
  i1s[5] = round((i1s[5]*0.5));
  } else if (i1s[0] === 3){
  i1s[1] = round((i1s[1]*0.5));
  i1s[2] = i1s[1];
  i1s[3] = round((i1s[3]*1.75));
  i1s[4] = round((i1s[4]*2));
  i1s[5] = round((i1s[5]*0.5));
  }
  }
  if(nivel[2] === 1) {
  i2s[0] = round(random(1,4));
  // vida
  i2s[1] = round((random(60, 80)*nivel[0]));
  i2s[2] = i2s[1];
  // dano
  i2s[3] = round((random(15, 20)*nivel[0]));
  // agilidade
  i2s[4] = round((random(15, 20)*nivel[0]));
  // defesa
  i2s[5] = round((random(5, 10)*nivel[0]));
  if (i2s[0] === 1){
  i2s[1] = round((i2s[1]*1.5));
  i2s[2] = i2s[1];
  i2s[3] = round((i2s[3]*0.75));
  i2s[4] = round((i2s[4]*0.5));
  i2s[5] = round((i2s[5]*1.5));
  } else if (i2s[0] === 2){
  i2s[1] = round((i2s[1]*0.75));
  i2s[2] = i2s[1];
  i2s[3] = round((i2s[3]*2));
  i2s[4] = round((i2s[4]*1));
  i2s[5] = round((i2s[5]*0.5));
  } else if (i2s[0] === 3){
  i2s[1] = round((i2s[1]*0.5));
  i2s[2] = i2s[1];
  i2s[3] = round((i2s[3]*1.75));
  i2s[4] = round((i2s[4]*2));
  i2s[5] = round((i2s[5]*0.5));
  }
  turno[2] = 3;
  }
  if(nivel[3] === 1) {
  i3s[0] = round(random(1,4));
  // vida
  i3s[1] = round((random(60, 80)*nivel[0]));
  i3s[2] = i3s[1];
  // dano
  i3s[3] = round((random(15, 20)*nivel[0]));
  // agilidade
  i3s[4] = round((random(15, 20)*nivel[0]));
  // defesa
  i3s[5] = round((random(5, 10)*nivel[0]));
  if (i3s[0] === 1){
  i3s[1] = round((i3s[1]*1.5));
  i3s[2] = i3s[1];
  i3s[3] = round((i3s[3]*0.75));
  i3s[4] = round((i3s[4]*0.5));
  i3s[5] = round((i3s[5]*1.5));
  } else if (i3s[0] === 2){
  i3s[1] = round((i3s[1]*0.75));
  i3s[2] = i3s[1];
  i3s[3] = round((i3s[3]*2));
  i3s[4] = round((i3s[4]*1));
  i3s[5] = round((i3s[5]*0.5));
  } else if (i3s[0] === 3){
  i3s[1] = round((i3s[1]*0.5));
  i3s[2] = i3s[1]
  i3s[3] = round((i3s[3]*1.75));
  i3s[4] = round((i3s[4]*2));
  i3s[5] = round((i3s[5]*0.5));
  }
  turno[2] = 4;
  }

}

function combate(){
  if (nivel[4] === 0) {

  
  

 // turno do jogador
  if(turno[1] === 1) {

  if(p1s[6] === 1) {
  p1s[6] = 0;
  p1s[5] -= 5;
 }
}

  // turno do inimigo 1
  if(turno[1] === 2) {
  if (i1s[1] > 0) {
 ação1 = round(random(1, 100));
  if (i1s[6] === 1 && i1s[0] === 1) {
  i1s[6] = 0;
  i1s[5] -= 8;   
  } else if (i1s[6] === 1 && i1s[0] === 2) {
  i1s[6] = 0;
  i1s[5] -= 3;   
  } else if (i1s[6] === 1 && i1s[0] === 4) {
  i1s[6] = 0;
  i1s[5] -= 5;
 }
  if (i1s[0] === 1) {
    // tanque
    if (ação1 <= 50 && (i1s[3] - p1s[5]) > 0) {
      // ataque normal
      p1s[1] -= i1s[3] - p1s[5];
    } else if (ação1 > 50) {
      // bloquear
      p1s[5] += 8;
      p1s[6] = 1;
    }
} else if (i1s[0] === 2) {
    // Guerreiro
    if (ação1 <= 50 && (i1s[3] - p1s[5]) > 0) {
      // ataque normal
      p1s[1] -= i1s[3] - p1s[5];
    } else if (ação1 > 50 && ação1 <= 75 && (i1s[3] * 2 - p1s[5]) > 0 && i1s[1] > i1s[2] * 0.2) {
      // ataque especial
      p1s[1] -= i1s[3] * 2 - p1s[5];
      i1s[1] -= round(i1s[2]*0.1);
    } else if (ação1 > 75) {
      // bloquear
      p1s[5] += 3;
      p1s[6] = 1;
    } else if (i1s[0] === 3) {
     // ladino
    if (ação1 <= 80 && (i1s[3] - p1s[5]) > 0) {
      // ataque normal
      p1s[1] -= (i1s[3] - p1s[5]);
    } else if (ação1 > 80 && (i1s[3] * 2 - p1s[5]) > 0) {
      // ataque critico
      p1s[1] -= (i1s[3] * 2 - p1s[5]);
    }
  } else if (i1s[0] === 4) {
    // random
if (ação1 <= 70 && (i1s[3] - p1s[5]) > 0) {
    // ataque normal
    p1s[1] -= (i1s[3] - p1s[5]);
} else if (ação1 > 70) {
    // bloquear
    p1s[5] += 5;
    p1s[6] = 1;
}
  }
}
}
if(turno[2] > 2) {
turno[1] = 3;
  } else if (turno[2] === 2) {
turno[0] += 1;
turno[1] = 1;
  }
}

  // turno do inimigo 2
  if(turno[1] === 3) {
  if (i2s[1] > 0) {
  let ação2 = round(random(1, 100));
  if (i2s[6] === 1 && i2s[0] === 1) {
  i2s[6] = 0;
  i2s[5] -= 8;   
  } else if (i2s[6] === 1 && i2s[0] === 2) {
  i2s[6] = 0;
  i2s[5] -= 3;   
  } else if (i2s[6] === 1 && i2s[0] === 4) {
  i2s[6] = 0;
  i2s[5] -= 5;
 }
  if (i2s[0] === 1) {
    // tanque
    if (ação1 <= 50 && (i2s[3] - p1s[5]) > 0) {
      // ataque normal
      p1s[1] -= (i2s[3] - p1s[5]);
    } else if (ação1 > 50) {
      // bloquear
      p1s[5] += 8;
      p1s[6] = 1;
    }
} else if (i2s[0] === 2) {
    // Guerreiro
    if (ação1 <= 50 && (i2s[3] - p1s[5]) > 0) {
      // ataque normal
      p1s[1] -= (i2s[3] - p1s[5]);
    } else if (ação1 > 50 && ação1 <= 75 && (i2s[3] * 2 - p1s[5]) > 0 && i2s[1] > i2s[2] * 0.2) {
      // ataque especial
      p1s[1] -= (i2s[3] * 2 - p1s[5]);
      i2s[1] -= round(i2s[2]*0.1);
    } else if (ação1 > 75) {
      // bloquear
      p1s[5] += 3;
      p1s[6] = 1;
    } else if (i2s[0] === 3) {
     // ladino
    if (ação1 <= 80 && (i2s[3] - p1s[5]) > 0) {
      // ataque normal
      p1s[1] -= (i2s[3] - p1s[5]);
    } else if (ação1 > 80 && (i2s[3] * 2 - p1s[5]) > 0) {
      // ataque critico
      p1s[1] -= (i2s[3] * 2 - p1s[5]);
    }
  } else if (i2s[0] === 4) {
    // random
if (ação1 <= 70 && (i2s[3] - p1s[5]) > 0) {
    // ataque normal
    p1s[1] -= (i2s[3] - p1s[5]);
} else if (ação1 > 70) {
    // bloquear
    p1s[5] += 5;
    p1s[6] = 1;
}
  }
}
}
if(turno[2] > 3) {
turno[1] = 4;
  } else if (turno[2] === 3) {
turno[0] += 1;
turno[1] = 1;
  }
}

  // turno do inimigo 3
  if(turno[1] === 4) {
  if (i3s[1] > 0) {
  let ação1 = round(random(1, 100));
  if (i3s[6] === 1 && i3s[0] === 1) {
  i3s[6] = 0;
  i3s[5] -= 8;   
  } else if (i3s[6] === 1 && i3s[0] === 2) {
  i3s[6] = 0;
  i3s[5] -= 3;   
  } else if (i3s[6] === 1 && i3s[0] === 4) {
  i3s[6] = 0;
  i3s[5] -= 5;
 }
  if (i3s[0] === 1) {
    // tanque
    if (ação1 <= 50 && (i3s[3] - p1s[5]) > 0) {
      // ataque normal
      p1s[1] -= (i3s[3] - p1s[5]);
    } else if (ação1 > 50) {
      // bloquear
      p1s[5] += 8;
      p1s[6] = 1;
    }
} else if (i3s[0] === 2) {
    // Guerreiro
    if (ação1 <= 50 && (i3s[3] - p1s[5]) > 0) {
      // ataque normal
      p1s[1] -= (i3s[3] - p1s[5]);
    } else if (ação1 > 50 && ação1 <= 75 && (i3s[3] * 2 - p1s[5]) > 0 && i3s[1] > i3s[2] * 0.2) {
      // ataque especial
      p1s[1] -= (i3s[3] * 2 - p1s[5]);
      i3s[1] -= round(i3s[2]*0.1);
    } else if (ação1 > 75) {
      // bloquear
      p1s[5] += 3;
      p1s[6] = 1;
    } else if (i3s[0] === 3) {
     // ladino
    if (ação1 <= 80 && (i3s[3] - p1s[5]) > 0) {
      // ataque normal
      p1s[1] -= (i3s[3] - p1s[5]);
    } else if (ação1 > 80 && (i3s[3] * 2 - p1s[5]) > 0) {
      // ataque critico
      p1s[1] -= (i3s[3] * 2 - p1s[5]);
    }
  } else if (i3s[0] === 4) {
    // random
if (ação1 <= 70 && (i3s[3] - p1s[5]) > 0) {
    // ataque normal
    p1s[1] -= (i3s[3] - p1s[5]);
} else if (ação1 > 70) {
    // bloquear
    p1s[5] += 5;
    p1s[6] = 1;
}
  }
}
}
turno[0] += 1;
turno[1] = 1;
}
  }
}


function keyPressed() {
  if(turno[1] === 1) {
    if(key === "a" && i1s[1] > 0 && i1s[5] < p1s[3]) {
      // atacar inimigo 1
        turno[1] = 2;
    i1s[1] -= p1s[3] - i1s[5];
    } else if(key === "s" && i2s[1] > 0 && i2s[5] < p1s[3]) {
      // atacar inimigo 2
        turno[1] = 2;
    i2s[1] -= p1s[3] - i2s[5];
    } else if(key === "d" && i3s[1] > 0 && i3s[5] < p1s[3]) {
      // atacar inimigo 3
    i3s[1] -= p1s[3] - i3s[5];
      turno[1] = 2;
    } else if(key === "f") {
      // bloquear
    p1s[5] += 5;
    p1s[6] = 1;
      turno[1] = 2;
    }
  
  }
}