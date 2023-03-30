console.log("From Renderer 1");

const { BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

const newWindowBtn = document.getElementById("newWindowBtn");
newWindowBtn.addEventListener("click", function (event) {
  console.log("click me");
  let winThree = new BrowserWindow({
    width: 500,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  winThree.loadURL(
    url.format({
      pathname: path.join(__dirname, "three.html"),
      protocol: "file",
      slashes: true,
    })
  );
  winThree.webContents.openDevTools();

  //   winThree.on("closed", () => {
  //     winThree = null;
  //   });
});
