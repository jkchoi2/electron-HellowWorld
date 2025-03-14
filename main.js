const electron = require('electron');
const { app, BrowserWindow,ipcMain } = electron;
const path = require('path');
//const electron = require('electron');
//const remote = electron.remote;
//const { dialog } = require('electron')
//const { contextBridge, ipcMain } = require('electron/renderer')

//console.log('main.js called.');


const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { preload: path.join(__dirname, 'preload.js'),
             nodeIntegration: true,
             conextIsolation: false
    //        enableRemoteModule: true,
        }
    });

    console.log('createWindow() called.');
    win.loadFile('index.html');

    // invoke()@preload.js -> handle()@main.js
    ipcMain.handle("exit-program", () => {
        BrowserWindow.getFocusedWindow().destroy();
        app.quit()
      });

    // send()@preload.js -> on()@main.js
    ipcMain.on('set-title', (event, title) => {
        const webContents = event.sender
        const win = BrowserWindow.fromWebContents(webContents)
        win.setTitle(title)
    })
  };


app.whenReady().then(() => {
    createWindow();
 
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
    //dialog.showErrorBox('Info','messagebox test');
    //electron.showMessageBox(null);
    //confirm('alert 테스트');
    
      
});

app.on('window-all-closed', () => {
    console.log('window-all-closeded.');
    if (process.platform !== 'darwin') app.quit();
});

