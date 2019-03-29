const { getDailyGoal, setGoal } = require("../daily_goal");

test("initial value of dailyGoal should be 0", () => {
  expect(getDailyGoal()).toBe(0);
});

test("setGoal should change dailyGoal to 5", () => {
  // Setup document body for testing
  document.body.innerHTML =
    '<div id="currentDailyGoal">0</div>' +
    '<form onsubmit="setGoal(event)">' +
    ' <label for="dailyGoalUserInput">New Daily Goal (oz):</label>' +
    ' <input type="number" id="dailyGoalUserInput" />' +
    ' <input type="button" onclick="setGoal(event)" id="dgoalButton" />' +
    "</form>" +
    '<script src="../daily_goal.js"></script>';

  // Simulate user input of 5 and submission
  document.getElementById("dailyGoalUserInput").value = "5";
  setGoal();

  // Check if global variable was set to 5
  expect(getDailyGoal()).toBe("5");

  // Check if DOM shows 5
  const currDailyGoalVal = document.getElementById("currentDailyGoal")
    .innerHTML;
  expect(currDailyGoalVal).toBe("5");
});
