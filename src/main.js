import Vue from "vue";
import App from "./App";
import router from './routes'

// Plugins
import GlobalComponents from "@/Plugins/globalComponents";
import GlobalDirectives from "@/Plugins/globalDirectives";
import Notifications from "@/components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "@/Plugins/material-dashboard";

import Chartist from "chartist";


Vue.prototype.$Chartist = Chartist;

Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
});
