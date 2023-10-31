const { app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const ipc = ipcMain

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 680,
        minWidth: 940,
        minHeight: 560,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
            prelead: path.join(__dirname, )
        }
    })

    win.loadFile('src/index.html')
    win.setBackgroundColor('#171717')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })