// 这些都会传递给 `createRouter`
const routes = [

    { path: '/users/:id', component: User },
    // 动态字段以冒号开始
    // $route.params:{id:xxxx}

    { path: '/users/:username/posts/:postId', component: xxx },
    // 也可以这么配置
    // $route.params:{username:xxxx,postId:xxxx}

    { path: '/user-:afterUser(.*)', component: UserGeneric },
    // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
    
]