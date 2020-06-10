var screenshotAPI = require("./screenshotmachineAPI");
var driveUpload = require("./googleDriveUpload");

screenshotAPI.savePhotos();
//wait for the photos to be saved locally to upload them
setTimeout(driveUpload.upload, 20000);