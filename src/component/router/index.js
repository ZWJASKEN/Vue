import Login from '../login/Login.vue';
import Register from '../register/Register.vue';

export default{
    routes: [
        {name:'login',path:'/login',component:Login},
        {name:'register',path:'/register',component:Register}
    ]
}