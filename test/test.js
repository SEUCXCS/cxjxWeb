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



// k = {
//     "code": 200,
//     "data": {
//         "id": 114514,
//         "title": "测试标题",
//         "uploadTime": 1231131131,
//         "updateTime": 1231131131,
//         "content": "测试文章内容",
//         "author": 114514,
//         "type": 1s
//     }
// }

// 0 新闻（news）
// 1 通知（notice）
// 2 博客（blog）
// 3 资源（resources）
// 4 归档（archive）