<template>
  <div id="app">
    <Nav :connected="connected"/>
    <router-view class="router"></router-view>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
const { remote, ipcRenderer } = require('electron')

export default {
  components: {
    Nav
  },
  data() {
    return {
      connected: false,
      connection: null
    }
  },
  methods: {
    connectDB() {
      ipcRenderer.send('db:connect')
      ipcRenderer.on('db:connected', () => {
        this.connected = true
      })
    }
  },
  created() {
    this.connectDB();
  }
}
</script>

<style lang="scss">
*, *::before, *::after {
  margin: 0;
  padding: 0;
}

:root {
  --text: #E5E5E5;
  --text-alt: #b2b2b2;
  --accent: #393E4D;
  --green: rgba(0,178,27, 0.6);
}

body {
  margin: 0;
  box-sizing: border-box;
}

#app {
  background-image: linear-gradient(126.52deg, #2A2F3A 16.71%, #15171D 89.58%);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
}

.router {
  align-self: flex-start;
  flex: 1;
}
</style>
