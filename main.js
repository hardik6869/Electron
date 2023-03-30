console.log("Main Process Working");
console.log("main.js");

const { BrowserWindow, app } = require("electron");
const url = require("url");
const path = require("path");

let winOne, winTwo;

function createWindow() {
  winOne = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  winTwo = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  winOne.loadURL(
    url.format({
      pathname: path.join(__dirname, "one.html"),
      protocol: "file",
      slashes: true,
    })
  );

  winTwo.loadURL(
    url.format({
      pathname: path.join(__dirname, "two.html"),
      protocol: "file",
      slashes: true,
    })
  );

  winOne.webContents.openDevTools();
  winTwo.webContents.openDevTools();

  winOne.on("closed", () => {
    winOne = null;
  });

  winTwo.on("closed", () => {
    winTwo = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win == null) {
    createWindow();
  }
});
