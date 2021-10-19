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
  document.getElementById("panel").style.left = "0px";
  document.getElementById("panel_arrow").style.left = "270px";
  document.getElementById("panel_arrow").innerHTML = "<";
  document.getElementById("main_page").style.left = "270px";
}

function closePanel() {
  document.getElementById("panel").style.left = "-270px";
  document.getElementById("panel_arrow").style.left = "0px";
  document.getElementById("panel_arrow").innerHTML = ">";
  document.getElementById("main_page").style.left = "0px";
}
