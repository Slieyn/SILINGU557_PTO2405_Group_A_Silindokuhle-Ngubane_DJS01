/**
 * Debugging Guide
 * - Ensure calculations are correct and robust.
 * - Handle unit conversions (velocity in km/h, acceleration in m/s^2, time in seconds).
 * - Add validations and meaningful error handling.
 */

// Given Parameters
const initialVelocityKmH = 10000; // velocity (km/h)
const accelerationMs2 = 3; // acceleration (m/s^2)
const timeSeconds = 3600; // seconds (1 hour)
const initialDistanceKm = 0; // initial distance (km)
const fuelKg = 5000; // initial fuel (kg)
const fuelBurnRateKgS = 0.5; // fuel burn rate (kg/s)

// Unit Conversion since the Velocity is in Km/h.
// Convert km/h to m/s
const convertKmHToMs = (velocityKmH) => (velocityKmH * 1000) / 3600;

// Convert m/s to km/h
const convertMsToKmH = (velocityMs) => (velocityMs * 3600) / 1000;

// Declare Function to calculate new velocity
//Use of an 'if' statement for if acceleration/time returns negative it must throw new error.
// Convert back to Km/H using convertMsToKmH.
// Formula used V(velocity) = U(initialVelocity) + at(acceleration,time)
const calcNewVelocityKmH = (
  initialVelocityKmH,
  accelerationMs2,
  timeSeconds
) => {
  if (accelerationMs2 < 0 || timeSeconds < 0) {
    throw new Error("Acceleration and time must be non-negative.");
  }

  // Convert initial velocity to m/s
  const initialVelocityMs = convertKmHToMs(initialVelocityKmH);

  // Calculate new velocity in m/s
  const newVelocityMs = initialVelocityMs + accelerationMs2 * timeSeconds;

  // Convert back to km/h
  return convertMsToKmH(newVelocityMs);
};

// Declare function to calculate the new distance.
//Convert initialVelocityKmH to m/s.
// Calculate the total Distance travelled in meters.
//Formula: distance = initialDistance + velocity * time.
const calcNewDistanceKm = (
  initialDistanceKm,
  initialVelocityKmH,
  timeSeconds
) => {
  const initialVelocityMs = convertKmHToMs(initialVelocityKmH);
  const distanceMeters =
    initialDistanceKm * 1000 + initialVelocityMs * timeSeconds;
  return distanceMeters / 1000; // Convert meters back to kilometers
};

// Calculate remaining fuel
// Formula: burnedFuel = burnRate x time.
//Set up an 'if' statement that if the burned fuel exceeds the availalble fuel, it must throw an error.
// return with fuelKg - burnedFuel = remainingFuel.
const calcRemainingFuelKg = (fuelKg, fuelBurnRateKgS, timeSeconds) => {
  const burnedFuel = fuelBurnRateKgS * timeSeconds;
  if (burnedFuel > fuelKg) {
    throw new Error("Insufficient fuel for the given burn rate and time.");
  }
  return fuelKg - burnedFuel;
};

//Call the functions for Velocity,Distance and Fuel
//Use try..catch block to handle errors e.g insufficient fuel
try {
  // Perform calculations
  const correctedNewVelocityKmH = calcNewVelocityKmH(
    initialVelocityKmH,
    accelerationMs2,
    timeSeconds
  );
  const correctedNewDistanceKm = calcNewDistanceKm(
    initialDistanceKm,
    initialVelocityKmH,
    timeSeconds
  );
  const correctedRemainingFuelKg = calcRemainingFuelKg(
    fuelKg,
    fuelBurnRateKgS,
    timeSeconds
  );

  // Output results
  //Log results with toFixed(2) to ensure 2decimals.
  console.log(
    `Corrected New Velocity: ${correctedNewVelocityKmH.toFixed(2)} km/h`
  );
  console.log(
    `Corrected New Distance: ${correctedNewDistanceKm.toFixed(2)} km`
  );
  console.log(
    `Corrected Remaining Fuel: ${correctedRemainingFuelKg.toFixed(2)} kg`
  );
} catch (error) {
  console.error(`Error: ${error.message}`);
}
