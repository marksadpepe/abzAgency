import { createApp } from 'vue';
import App from './App.vue';
import components from "@/components/UI";
import router from "@/routes/router.js";

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
});

app.use(router).mount('#app')
