import { app, BrowserWindow, Menu } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        minWidth: 900,
        height: 700,
        minHeight: 700,
        frame: true,
        icon: path.join(__dirname, "assets/icon.png"),
        webPreferences: {
            devTools: true,
            // preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            enableRemoteModule: false, // Recommended for security
        },
    });

    // Load your SvelteKit app
    win.loadURL("https://dazzlegpt.mullion.io"); // Load the running SvelteKit app
    win.webContents.on("before-input-event", (event, input) => {
        if (input.key === "F12" && input.type === "keyDown") {
            win.webContents.toggleDevTools();
        }
    });
}

app.whenReady().then(() => {
    Menu.setApplicationMenu(null);
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
