let dailyGoal = 0;
let totalWaterDrankToday = 0;
let waterDrankRecently = 0;

function setGoal(e) {
  if (e) {
    e.preventDefault();
  }
  let dailyGoalUserInputValue = document.getElementById("dailyGoalUserInput")
    .value;
  if (dailyGoalUserInputValue == null) {
    dailyGoal = 1;
  } else if (isNaN(dailyGoalUserInputValue)) {
    alert("Please enter a number");
    return;
  } else if (dailyGoalUserInputValue < 1) {
    alert("Please enter a positive number");
    return;
  }
  dailyGoal = dailyGoalUserInputValue;
  // Update label to reflect new daily goal
  document.getElementById("currentDailyGoal").innerHTML = dailyGoal;
}

function setWaterDrankRecently(e) {
  e.preventDefault();
  // retrieving value from user input
  waterDrankRecently = document.getElementById("waterDrankRecently").value;
  // error checking on user input
  if (isNaN(waterDrankRecently)) {
    alert("Please enter a number!");
    return;
  }
  if (waterDrankRecently < 1) {
    alert("Please enter a number greater than 0!");
    return;
  }
  // adding the previous totalWaterDrankToday with new user input
  totalWaterDrankToday =
    parseInt(totalWaterDrankToday) + parseInt(waterDrankRecently);
  // making change to application
  document.getElementById(
    "totalWaterDrankToday"
  ).innerHTML = totalWaterDrankToday;
  if (totalWaterDrankToday >= dailyGoal) {
    alert("YOU HAVE REACHED YOUR GOAL FOR THE DAY!");
  }
  getWaterStillNeeded();
  getPercentageGoal();
}

function getDailyGoal() {
  return dailyGoal;
}

function getWaterStillNeeded(){
    // subtract appropriate values to calculate 
    // water that still needs to be consumed
    let waterStillNeeded = dailyGoal-totalWaterDrankToday;
    if(waterStillNeeded < 0){
        waterStillNeeded = 0;
    }
    document.getElementById("waterNeeded").innerHTML = waterStillNeeded;
}

function getPercentageGoal(){
    // divide appropriate values to calculate
    // percentatge of water consumed
    let percentage = (totalWaterDrankToday/dailyGoal) * 100;
    // adding percentage sign to the value calculated
    percentage = percentage + "%";
    document.getElementById("percentageWaterConsumed").innerHTML = percentage;
}

module.exports = {
  getDailyGoal,
  setGoal,
  setWaterDrankRecently
};
