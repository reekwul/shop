import {createApp} from 'vue'
import App from './App.vue'
import store from './vuex/index'
const app = createApp(App);

/*
components.forEach(component =>{
    app.component(component."name", component)
});

*/
app
    .use(store)
    .mount('#app')
