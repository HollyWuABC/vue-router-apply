class VueRouter {
    constructor(options) {
        this.mode = options.mode || 'hash';
        this.routes = options.routes || [];
        // 路由表的数据是一个数组，需要改造成{'/home': Home, '/about': About}格式
        this.routesMap = this.createRoutesMap(this.routes);
        console.log('路由', this.routesMap);
    }
    createRoutesMap(routes) {
        return routes.reduce((memo, current) => {
            memo[current.path] = current.component;
            return memo;
        }, {});
    }
}
VueRouter.install = function(Vue, opts) {
        console.log(Vue);
        console.log(opts);
    }
    // 使用vue.use 就会调用install方法
export default VueRouter;