function normalizeUnits (manifest){
  const newManifest = {...manifest}

  if(newManifest.unit === "lb"){
    newManifest.weight = newManifest.weight * 0.45
    newManifest.unit = "kg"
  }
  return newManifest;
}

function validateManifest (manifest){
  const errors = {}

  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerId = "Invalid";
  }

  if (manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }

  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || Number.isNaN(manifest.weight) || manifest.weight <= 0) {
    errors.weight = "Invalid";
  }

  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest (manifest){
  const validationResult = validateManifest(manifest);

  if (Object.keys(validationResult).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    
    const normalizedManifest = normalizeUnits(manifest);
    console.log(`Total weight: ${normalizedManifest.weight} kg`);
    
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationResult);
  }
}

