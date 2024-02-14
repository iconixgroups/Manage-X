import io from 'socket.io-client';

const socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);

export default {
  install(Vue) {
    Vue.prototype.$socket = socket;
  }
};

// Usage in Vue components:
// this.$socket.emit('EVENT_NAME', data);
// this.$socket.on('EVENT_NAME', callback);