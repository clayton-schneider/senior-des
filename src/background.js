'use strict'

import mongoose, { mongo } from 'mongoose'
import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import {
  createProtocol,
  /* installVueDevtools */
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let db

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: { secure: true, standard: true } }])

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 1200, height: 750, titleBarStyle: 'hiddenInset', webPreferences: {
    nodeIntegration: true
  } })
  win.setMenuBarVisibility(false)

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    // if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    mongoose.disconnect()
      .then(() => {
        console.log('disconnected from database')
        win = null
      }).catch(err => {
        console.log(err)
      })
    
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are not using Windows 10 dark mode, you may uncomment these lines
    // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
    // try {
    //   await installVueDevtools()
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString())
    // }

  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}


ipcMain.on('db:connect', () => {
  mongoose.connect('mongodb+srv://clayton-schneider:1234@cluster0-s9wrr.mongodb.net/prototype?retryWrites=true&w=majority',
    { useNewUrlParser: true })
  db = mongoose.connection
  db.on('error', err => {
    console.log(err);
  })
  db.once('open', () => {
    console.log('Successfully connected to db');
    win.webContents.send('db:connected')
  })
})

const sampleSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    serialNo: Number,
    sampleWeight: Number,
    coating: String,
    substrate: String
  },
  {
    collection: 'samples'
  }
)
const Sample = mongoose.model('Sample', sampleSchema)

ipcMain.on('createSample:start', (event, data) => {
  const { coating, sampleWeight, serialNo, substrate } = data

  const sample = new Sample({
    _id: new mongoose.Types.ObjectId(),
    serialNo,
    sampleWeight,
    coating,
    substrate
  })
  sample.save()
    .then(result => win.webContents.send('createSample:success'))
    .catch(err => win.webContents.send('createSample:error', err))
})

ipcMain.on('samples:get', () => {
  Sample.find({}, (err, results) => {
    if (err) {
      return console.log(err)
    }
    const editedResults = results.map(sample => {
      const editedSample = {
        id: sample._id.toHexString(),
        serialNo: sample.serialNo,
        sampleWeight: sample.sampleWeight,
        coating: sample.coating,
        substrate: sample.substrate
      }
      return editedSample
    })
    win.webContents.send('samples:returned', editedResults)
  })
})

ipcMain.on('experiment:create', (event, data) => {
  console.log(data)
})