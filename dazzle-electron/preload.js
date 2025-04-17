import { contextBridge, ipcRenderer } from "electron";

// Expose specific APIs to the renderer process
contextBridge.exposeInMainWorld("myApi", {
    sendMessage: (message) => ipcRenderer.send("message-channel", message),
    onMessage: (callback) =>
        ipcRenderer.on("message-channel", (event, message) => callback(message)),
});
