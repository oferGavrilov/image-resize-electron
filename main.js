const path = require('path')
const { app, BrowserWindow } = require('electron')
const { Menu } = require('electron/main')


const isDev = process.env.NODE_ENV !== 'production'
const isMac = process.platform === 'darwin'

// Create window
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "Image Resizer",
        width: isDev ? 1000 : 500,
        height: 600
    })

    // Open devtools if in dev env
    if (isDev) mainWindow.webContents.openDevTools()

    mainWindow.loadFile(path.join(__dirname, './render/index.html'))
}

app.whenReady().then(() => {
    createMainWindow()

    // Implement menu
    const mainMenu = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(mainMenu)

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow()
        }
    })
})

// Menu template
const menu = {
    label: 'file',
    submenu: [
        {
            label: 'Quit',
            click: () => app.quit(),
            accelerator: 'CmdOrCtrl+w'
        }

    ]
}

app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit()
    }
})