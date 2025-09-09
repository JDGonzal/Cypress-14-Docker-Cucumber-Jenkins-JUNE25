#!/usr/bin/env node
const fs = require('fs').promises;
// const path = require('path');

const testResultsDir = './cypress/test-results';

async function deleteDirectory(directoryPath = testResultsDir) {
  try {
    await fs.rm(directoryPath, { recursive: true, force: true });
    console.log(
      `Directory '${directoryPath}' and its contents deleted successfully.`
    );
  } catch (error) {
    console.error(`Error deleting directory '${directoryPath}':`, error);
  }
}

deleteDirectory();
