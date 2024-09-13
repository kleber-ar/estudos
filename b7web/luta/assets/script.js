let char = new Knight("Kar");
let monster = new LittleMonster();
let log = new Log(document.querySelector('.log'));

const stage = new Stage(
  char,
  monster,
  document.querySelector("#char"),
  document.querySelector("#monster"),
  log,
);

stage.start();
