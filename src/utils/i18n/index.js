import { createI18n } from "vue3-i18n";
import messages from "./message";

const i18n = createI18n({
  locale: "zh",
  messages: messages,
});

export default i18n;