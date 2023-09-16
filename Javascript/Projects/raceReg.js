let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 18;

// Check if runner is an adult and early
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log(`Runner ${raceNumber} will race at 09:30 am.`);
} else if (runnerAge > 18 && !(registeredEarly)) {
  console.log(`Runner ${raceNumber} will race at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Runner ${raceNumber} will race at 12:30 pm.`);
} else {
  console.log(`Please see registration desk.`);
}
