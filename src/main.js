import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import i18n from "./utils/i18n";
import App from "./App.vue";

createApp(App).use(ElementPlus).use(i18n).mount("#app")
