/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 *Different units:
 * velocity = km/h
 * acceleration = m/s^2
 * time = seconds
 */

// Given Parameters
const initialVelocityKmH = 10000; // velocity (km/h)
const accelerationMs2 = 3; // acceleration (m/s^2)
const timePerSeconds = 3600; // seconds (1 hour)
const initialDistanceKm = 0; // distance (km)
const remainingfuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgS = 0.5; // fuel burn rate (kg/s)

// Converts Units
/**
 * Coverts a value from km/h to m/s
 * @param {number}.velocity km/h - velocity km/h
 * @returns{number}.velocity in m/s - velocity m/s
 *
 */

const convertKmHtoMs = (velocityKmH) => {
  return (velocityKmH * 1000) / 3600;
};
/**
 * Coverts a value from m/s to km/h
 * @param {number}.velocity m/s - velocity m/s
 * @returns{number}.velocity in km/h - velocity km/h
 *
 */

const convertMstoKmH = (velocityMs) => {
  return (velocityMs * 3600) / 1000;
};

/**
 * @param - Used to calculate the parameters of a function
 * Calculates the new velocity according to acceleration and time.
 * @param{number} initialVelocity - initial velocity in m/s
 * @param{number} acceleration - Acceleraton in m/s
 * @param{number} time - timePerSeconds
 * @returns{number} new velocity in m/s
 *  */

const calcNewVelocity = (initialVelocity, acceleration, time) => {
  if (
    typeof initialVelocity !== "number" ||
    typeof acceleration !== "number" ||
    typeof time
  )
    throw new Error("Invalid results:All parameters must be in numbers.");
};
if (time < 0) {
  throw new Error("Invalid results: Time cannot be negative");
}
return initialVelocity + acceleration * time;
{
 
}

/**
 * Main Calculations from Step 1 - Step 5
 */

try {
  // Step 1: Convert initial velocity from km/h to m/s
  const initialVelocityMs = convertKmHtoMs (initialVelocityKmH);
}

// Step 2: Calculate new velocity in m/s
const newVelocityMs = calcNewVelocity (initialVelocityMs, accelerationMs2, timePerSeconds);

const d2 = d + vel * time; //calcultes new distance
const rf = fbr * time; //calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => {
  return vel + acc * time;
};

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
