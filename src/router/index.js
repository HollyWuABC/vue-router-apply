// VueRouter 是一个类
import Vue from 'vue';
import VueRouter from './vue-router';
import routes from './routes';
Vue.use(VueRouter, { a: 1 });

export default new VueRouter({
    mode: 'hash', // 分为hash(带有#号) history
    routes
});


/**
 * 实现vue-router的思路：
 * （1） 需要实例化路由 router
 * （2）vue注册好后。使用router-view 来展示路由内容，使用router-link实现路由跳转
 * （3）vueRouter的生命周期钩子
 * （4）this.$router 和 this.$routes
 * （5） Vue.use 注册插件
 */