let dailyGoal = 0;
let totalWaterDrankToday = 0;
let waterDrankRecently = 0;

function setGoal(e) {
  e.preventDefault();
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

function progressBarAndUserInput() {
  setWaterDrankRecently();
  progressBar();
  
}

function setWaterDrankRecently() {
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
  totalWaterDrankToday = parseInt(totalWaterDrankToday) + parseInt(waterDrankRecently);
  // making change to application
  document.getElementById("totalWaterDrankToday").innerHTML = totalWaterDrankToday;
  if (totalWaterDrankToday >= dailyGoal) {
    alert("YOU HAVE REACHED YOUR GOAL FOR THE DAY!");
  }
  

}

function progressBar() {
  var elem = document.getElementById("my-bar");   
  var id = setInterval(displayBar, 100);
  let p = (totalWaterDrankToday / dailyGoal) * 100;
  let width = p;
  
  function displayBar() {
    if (totalWaterDrankToday > dailyGoal) {
      width = 100;
      elem.style.width = width + "%";
      clearInterval(id);
    } else {
      elem.style.width = width + '%'; 
      clearInterval(id);
    }
  }
}


function init() {
  let timeOf = 2;
  let showImage = document.createElement('img');
  showImage.id = "deadRose";
  showImage.src="MediumRose.jpg", showImage.style.width="100px", showImage.style.height="250px", showImage.style.margin="auto", showImage.style.display="flex";
  document.body.appendChild(showImage);
  id = setInterval(() => {
    console.log("Time remaining: " + timeOf);
    if(timeOf > 0) {
      timeOf = timeOf-1;
    }
    else {
      element = document.getElementById('deadRose');
      element.parentNode.removeChild(element);
      clearInterval(id);
      let showImage = document.createElement('img');
      showImage.src="DeadRose.jpg", showImage.style.width="100px", showImage.style.height="250px", showImage.style.margin="auto", showImage.style.display="flex"; 
      document.body.appendChild(showImage);
    }
  }, 1000);
}

function remove() {
  var removeImg = document.getElementById('deadRose');
  removeImg.parentNode.removeChild(removeImg);
  
}
