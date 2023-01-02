function goStepTwo() {
  stepInfo.style.display = "none";
  stepPlan.style.display = "flex";
  circle1.style.color = "white";
  circle1.style.backgroundColor = "rgba(255, 255, 255, 0)";
  circle2.style.backgroundColor = "rgb(255, 255, 255)";
  circle2.style.color = "black";
}

function backStepOne() {
  stepInfo.style.display = "flex";
  stepPlan.style.display = "none";
  circle1.style.color = "black";
  circle1.style.backgroundColor = "rgba(255, 255, 255)";
  circle2.style.backgroundColor = "rgb(255, 255, 255, 0)";
  circle2.style.color = "white";
}

function goStepThree() {
  stepPlan.style.display = "none";
  stepAddOn.style.display = "flex";
  circle2.style.color = "white";
  circle2.style.backgroundColor = "rgba(255, 255, 255, 0)";
  circle3.style.backgroundColor = "rgb(255, 255, 255)";
  circle3.style.color = "black";
}
function backSteptTwo() {
  stepPlan.style.display = "flex";
  stepAddOn.style.display = "none";
  circle2.style.color = "black";
  circle2.style.backgroundColor = "rgba(255, 255, 255)";
  circle3.style.backgroundColor = "rgb(255, 255, 255, 0)";
  circle3.style.color = "white";
}

function goStepFour() {
  stepSummary.style.display = "flex";
  stepAddOn.style.display = "none";
  circle3.style.color = "white";
  circle3.style.backgroundColor = "rgba(255, 255, 255, 0)";
  circle4.style.backgroundColor = "rgb(255, 255, 255)";
  circle4.style.color = "black";
}

function backStepThree() {
  stepSummary.style.display = "none";
  stepAddOn.style.display = "flex";
  circle3.style.color = "black";
  circle3.style.backgroundColor = "rgba(255, 255, 255)";
  circle4.style.backgroundColor = "rgb(255, 255, 255, 0)";
  circle4.style.color = "white";
}

function goFromFourToTwo() {
  stepSummary.style.display = "none";
  stepPlan.style.display = "flex";
  circle2.style.color = "black";
  circle2.style.backgroundColor = "rgba(255, 255, 255)";
  circle4.style.backgroundColor = "rgb(255, 255, 255, 0)";
  circle4.style.color = "white";
}
function goToStepThankYou() {
  stepSummary.style.display = "none";
  stepThankYou.style.display = "flex";
}

/*fonction pour checker si le checkbox est checké pour display plan<year */

checkBox = document
  .getElementById("switch")
  .addEventListener("click", event => {
    if (event.target.checked) {
      planYear.style.display = "flex";
      planMonth.style.display = "none";
      addonAnnee.style.display = "flex";
      addonMois.style.display = "none";
      resumeYear.style.display = "flex";
      resumeMonth.style.display = "none";
    } else {
      planYear.style.display = "none";
      planMonth.style.display = "flex";
      addonAnnee.style.display = "none";
      addonMois.style.display = "flex";
      resumeYear.style.display = "none";
      resumeMonth.style.display = "flex";
    }
  });
/*fonction pour changer couler des bouton PLAN et choper les infos */
checkBox = document
  .getElementById("moisArcade")
  .addEventListener("click", event => {
    moisArcade.style.backgroundColor = "hsl(217, 100%, 97%)";
    moisArcade.style.border = " solid 1px hsl(213, 96%, 18%)";
    /*res les autres background et borders */
    moisAdvenced.style.backgroundColor = "white";
    moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisPro.style.backgroundColor = "white";
    moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeArcade.style.backgroundColor = "white";
    anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeAdvenced.style.backgroundColor = "white";
    anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneePro.style.backgroundColor = "white";
    anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* la suite */
    document.getElementById("modeResume").innerHTML = "Arcade (monthly)";
    document.getElementById("priceResume").innerHTML = "9$/mo";
    document.getElementById("modeTotal").innerHTML = "Total (per month)";
  });
checkBox = document
  .getElementById("moisAdvenced")
  .addEventListener("click", event => {
    moisAdvenced.style.backgroundColor = "hsl(217, 100%, 97%)";
    moisAdvenced.style.border = " solid 1px hsl(213, 96%, 18%)";
    /*res les autres background et borders */
    moisArcade.style.backgroundColor = "white";
    moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisPro.style.backgroundColor = "white";
    moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeArcade.style.backgroundColor = "white";
    anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeAdvenced.style.backgroundColor = "white";
    anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneePro.style.backgroundColor = "white";
    anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* la suite */
    document.getElementById("modeResume").innerHTML = "Advenced (monthly)";
    document.getElementById("priceResume").innerHTML = "12$/mo";
    document.getElementById("modeTotal").innerHTML = "Total (per month)";
  });
checkBox = document
  .getElementById("moisPro")
  .addEventListener("click", event => {
    moisPro.style.backgroundColor = "hsl(217, 100%, 97%)";
    moisPro.style.border = " solid 1px hsl(213, 96%, 18%)";
    /*res les autres background et borders */
    moisAdvenced.style.backgroundColor = "white";
    moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisArcade.style.backgroundColor = "white";
    moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeArcade.style.backgroundColor = "white";
    anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeAdvenced.style.backgroundColor = "white";
    anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneePro.style.backgroundColor = "white";
    anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* la suite */
    document.getElementById("modeResume").innerHTML = "Pro (monthly)";
    document.getElementById("priceResume").innerHTML = "15$/mo";
    document.getElementById("modeTotal").innerHTML = "Total (per month)";
  });
checkBox = document
  .getElementById("anneeArcade")
  .addEventListener("click", event => {
    anneeArcade.style.backgroundColor = "hsl(217, 100%, 97%)";
    anneeArcade.style.border = " solid 1px hsl(213, 96%, 18%)";
    /*res les autres background et borders */
    moisArcade.style.backgroundColor = "white";
    moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisPro.style.backgroundColor = "white";
    moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisAdvenced.style.backgroundColor = "white";
    moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeAdvenced.style.backgroundColor = "white";
    anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneePro.style.backgroundColor = "white";
    anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* la suite */
    document.getElementById("modeResume").innerHTML = "Arcade (yearly)";
    document.getElementById("priceResume").innerHTML = "90$/yr";
    document.getElementById("modeTotal").innerHTML = "Total (per year)";
  });
checkBox = document
  .getElementById("anneeAdvenced")
  .addEventListener("click", event => {
    anneeAdvenced.style.backgroundColor = "hsl(217, 100%, 97%)";
    anneeAdvenced.style.border = " solid 1px hsl(213, 96%, 18%)";
    /*res les autres background et borders */
    moisAdvenced.style.backgroundColor = "white";
    moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisPro.style.backgroundColor = "white";
    moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisArcade.style.backgroundColor = "white";
    moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeArcade.style.backgroundColor = "white";
    anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneePro.style.backgroundColor = "white";
    anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* la suite */
    document.getElementById("modeResume").innerHTML = "Advenced (yearly)";
    document.getElementById("priceResume").innerHTML = "12O$/yr";
    document.getElementById("modeTotal").innerHTML = "Total (per year)";
  });
checkBox = document
  .getElementById("anneePro")
  .addEventListener("click", event => {
    anneePro.style.backgroundColor = "hsl(217, 100%, 97%)";
    anneePro.style.border = " solid 1px hsl(213, 96%, 18%)";
    /*res les autres background et borders */
    moisArcade.style.backgroundColor = "white";
    moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisPro.style.backgroundColor = "white";
    moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisAdvenced.style.backgroundColor = "white";
    moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeArcade.style.backgroundColor = "white";
    anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeAdvenced.style.backgroundColor = "white";
    anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* la suite */
    document.getElementById("modeResume").innerHTML = "Pro (yearly)";
    document.getElementById("priceResume").innerHTML = "150$/yr";
    document.getElementById("modeTotal").innerHTML = "Total (per year)";
  });

/*fonction pour chopper les infos des ADD ONS */
checkBox = document
  .getElementById("onlineMois")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("onlinePrice").innerHTML = "+1$/mo";
      document.getElementById("modeTotal").innerHTML = "Total (per month)";
      const myAddOnOnline = 1;
      console.log(myAddOnCust + myAddOnOnline + myAddOnStorage);
    } else {
      document.getElementById("onlinePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("storageMois")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("storagePrice").innerHTML = "+2$/mo";
      document.getElementById("modeTotal").innerHTML = "Total (per month)";
      const myAddOnStorage = 2;
      console.log(myAddOnCust + myAddOnOnline + myAddOnStorage);
    } else {
      document.getElementById("storagePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("customizableMois")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("customizablePrice").innerHTML = "+2$/mo";
      document.getElementById("modeTotal").innerHTML = "Total (per month)";
      const myAddOnCust = 2;
      console.log(myAddOnCust + myAddOnOnline + myAddOnStorage);
    } else {
      document.getElementById("customizablePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("onlineAnnee")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("onlinePrice").innerHTML = "+10$/yr";
      document.getElementById("modeTotal").innerHTML = "Total (per year)";
    } else {
      document.getElementById("onlinePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("storageAnnee")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("storagePrice").innerHTML = "+20$/yr";
      document.getElementById("modeTotal").innerHTML = "Total (per year)";
    } else {
      document.getElementById("storagePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("customizableAnnee")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("customizablePrice").innerHTML = "+20$/yr";
      document.getElementById("modeTotal").innerHTML = "Total (per year)";
    } else {
      document.getElementById("customizablePrice").innerHTML = "+0$";
    }
  });
function reset() {
  document.getElementById("onlineMois").checked = false;
  document.getElementById("storageMois").checked = false;
  document.getElementById("customizableMois").checked = false;
  document.getElementById("onlineAnnee").checked = false;
  document.getElementById("storageAnnee").checked = false;
  document.getElementById("customizableAnnee").checked = false;
  document.getElementById("onlinePrice").innerHTML = "+0$";
  document.getElementById("storagePrice").innerHTML = "+0$";
  document.getElementById("customizablePrice").innerHTML = "+0$";
  document.getElementById("onlinePrice").innerHTML = "+0$";
  document.getElementById("storagePrice").innerHTML = "+0$";
  document.getElementById("customizablePrice").innerHTML = "+0$";
  document.getElementById("modeResume").innerHTML = "Choose a plan";
  document.getElementById("priceResume").innerHTML = "0$";
  moisArcade.style.backgroundColor = "white";
  moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
  moisPro.style.backgroundColor = "white";
  moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
  moisAdvenced.style.backgroundColor = "white";
  moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
  anneeArcade.style.backgroundColor = "white";
  anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
  anneeAdvenced.style.backgroundColor = "white";
  anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
  anneePro.style.backgroundColor = "white";
  anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
}
