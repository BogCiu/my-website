var pannel_state = true;

function actionPanel() {
  if (!pannel_state) {
    openPanel();
    pannel_state = true;
  } else {
    closePanel();
    pannel_state = false;
  }
}

function openPanel() {
  document.getElementById("panel").style.left = "25px";
}

function closePanel() {
  document.getElementById("panel").style.left = "-275px";
}
