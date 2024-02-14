import Vue from 'vue';
import './styles/quasar.sass';
import iconSet from 'quasar/icon-set/material-icons.js';
import '@quasar/extras/material-icons/material-icons.css';
import { Quasar, Notify } from 'quasar';

// Import Quasar plugins and add here
import { Dialog, Loading } from 'quasar';

Vue.use(Quasar, {
  config: {
    notify: {
      /* Notify defaults */
    }
  },
  components: {
    /* not specifying anything will automatically import all Quasar components */
  },
  directives: {
    /* not specifying anything will automatically import all Quasar directives */
  },
  plugins: {
    Notify,
    Dialog,
    Loading
  },
  iconSet: iconSet
});

// This is a placeholder for any additional Quasar framework initialization code
// that may be required for the Manage X SaaS App.