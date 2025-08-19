const fs = require("fs").promises;
const path = require("path");

async function checkDirectoryExistence(directoryPath) {
  try {
    await fs.access(directoryPath);
    console.log(`Directory '${directoryPath}' exists.`);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(`Directory '${directoryPath}' does not exist.`);
    } else {
      console.error(`Error checking directory '${directoryPath}':`, error);
    }
    return false;
  }
}

async function deleteDirectory(directoryPath) {
  try {
    await fs.rm(directoryPath, { recursive: true, force: true });
    console.log(
      `Directory '${directoryPath}' and its contents deleted successfully.`
    );
  } catch (error) {
    console.error(`Error deleting directory '${directoryPath}':`, error);
  }
}

async function createDirectory(directoryPath) {
  try {
    await fs.mkdir(directoryPath, { recursive: true }); // Create directory, recursive: true creates parent directories if they don't exist
    console.log(`Directory '${directoryPath}' created successfully.`);
  } catch (err) {
    if (err.code === "EEXIST") {
      // Handle case where directory already exists
      console.log(`Directory '${directoryPath}' already exists.`);
    } else {
      console.error(`Error creating directory '${directoryPath}':`, err);
    }
  }
}

let dirPath = path.join(__dirname, "cypress", "reports"); // Adjust path as needed

// Check if 'dirPath' exists
checkDirectoryExistence(dirPath).then((exists) => {
  if (exists) {
    deleteDirectory(dirPath)
      .then(() => createDirectory(dirPath))
      .then(() => createDirectory(dirPath+ "/mochareports")) // Create 'mochareports' subdirectory
      .catch((err) => console.error(`Error during directory operations:`, err));
  } else {
    // Create the directory if it doesn't exist
    createDirectory(dirPath)
    
      .catch((err) => console.error(`Error during directory creation:`, err));
  }
});
