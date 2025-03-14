// preload.js
// // All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const { contextBridge, ipcRenderer } = require('electron/renderer')

// invoke()/handle(), send()/on() is same
contextBridge.exposeInMainWorld('utoAPI', {
  exitProgram: () => ipcRenderer.invoke('exit-program'),
  setTitle: (title) => ipcRenderer.send('set-title', title)
})


// 버전을읽어 html로 넘김.
window.addEventListener('DOMContentLoaded', () => {
  // console.log('preload.js called.'); // 여기서는 console.log()사용못함.
  const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })

