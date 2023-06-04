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



let k = [];
document.querySelectorAll(".cover-normal").forEach(ele => { k.push(ele.href.replace(/https:\/\/www.bilibili.com\/video\//, '')) })
console.log(k.join(""))


let videos = `BV1714y1D7JS/BV1Su4y1o7BK/BV1Ce4y1y7Ly/BV1f14y1Z726/BV1ZV4y1k7xn/BV1xk4y1j7NG/BV1WL411a7hp/BV1tU4y1s7aa/BV1ao4y1L7g2/BV15M4y187by/BV11B4y177kr/BV1bT411x7Nt/BV1zT411z7Lc/BV1mv4y1779v/BV1bR4y1a7eW/BV17G4y1X7t8/BV1FR4y1e7Cy/BV16K4y1A7Av/BV1BW4y1L7oL/BV1q541127rm/BV1gW411m7QX/BV1Ev4y1978y/BV1F8411V7zY/BV1iG4y1b7VL/BV1kY411Z7pU/BV1wd4y1C7YM/BV1Ld4y1C7kY/BV14e411V7Bi/BV1hP41177cE/BV1ce4y1r7as/BV1oT411c73Q/BV1VW4y1t7XU/BV1Cy4y1V7J6/BV1TY411L7ZD/BV1GU4y1C7yu/BV1ra411P7nn/BV1FF411P7xj/BV1QU4y1Y7oD/BV1Ne4y1D7Ki/BV1Gz4y1C7Xj/BV1Xg411f7bc/BV1YU4y1S7D1/BV14v4y1T7mG/BV1Sr4y137rC/BV1wg411R7Tg/BV1F5411Q793/BV1vZ4y1a7Be/BV1JS4y1h7Dj/BV1AY411A7jB/BV1fL4y1F7ZY/BV1ZY4y1t7Rp/BV1QA4y1D7x8/BV1w44y1371Y/BV1TS4y1a7tG/BV1Sa41147dU/BV1t3411J7UU/BV1Za411x7Bu/BV1CS4y137uc/BV1Z44y1N7s4/BV1WL411P71u/BV11i4y1C7MV/BV1ES4y1k7a8/BV1EL4y1s7tZ/BV1HV411v7Np/BV1WR4y1j7Ar/BV1gr4y1Y7Xa/BV17L4y1x7x8/BV1fL4y1s7ym/BV1MS4y1Z7wN/BV13F411q7Y8/BV1pa41167XE/BV1fb4y1e7Gv/BV1JP4y1G7ze/BV1Dt411j7Cv/BV1XS4y1X7ts/BV1pf4y1M76Y/BV1Wg411T71J/BV1jr4y1C7BF/BV1QU4y1u7D7/BV1Au411f7JZ/BV13T4y1o7R6/BV1iU4y1c7XC/BV1Sy4y1S7UK/BV1XK4y1p7GF/BV1zQ4y1r7i6/BV1gf4y1w79R/BV1jq4y1f7UQ/BV1164y1t7WK/BV1go4y1C7Tm/BV13L411x7He/BV16W411s7Gz/BV14v411P7MG/BV1Kq4y1Q7pH/BV1Wq4y1D7HT/BV1qy4y1x7VV/BV1Tv411N71e/BV18L4y1e7oi/BV1W54y177bL/BV19y4y127Kv/BV1ot4y1B71b/
BV1oq4y1E7mr/BV1nP4y1W7dr/BV1dq4y1E7Gn/BV1C44y1C7Co/BV13o4y1X7Mf/BV1uB4y1K7T8/BV1W5411T7or/BV17M4y1g75h/BV1X5411T7uj/BV1ab4y1C7gk/BV1Eo4y1Z753/BV125411T7G4/BV1KM4y1u7Fz/BV19f4y1b7jX/BV1tQ4y1R7MR/BV1rN411Z7jc/BV1DX4y1372m/BV1iQ4y1o7D6/BV1S64y1179w/BV15B4y1c7Gg/
BV1cp4y147ex/BV1A54y1b7Bo/BV1L5411c7L3/BV1kZ4y1c7nu/BV1Zp4y187JQ/BV1nB4y1P7EW/BV14K4y1D7QP/javascript:;BV1rp4y1n7Ft/BV1Pz4y1Z7UF/BV1jv4y1f7jH/BV1fy4y1B7yQ/BV15o4y1d71y/BV1W541177Dh/BV1c64y1f7oj/BV1UK411L7YK/BV1yA411x74S/BV1ut4y1Y7Yn/BV1cv411r77j/BV1wy4y187G8/
BV17i4y177mJ/BV1Lv411k7Nt/BV1nt411x7Dj/BV1d5411s7W9/BV1MQ4y1P7VP/BV12A41187WG/BV1ta4y1x7gA/BV1WT4y1j7jP/BV1pp4y1a7A9/BV1ZK411N75m/BV18b411q71r/BV1Wf4y197uA/BV12a4y1E7PT/BV1jt4y1D714/BV1Dp4y1U7sd/BV1d54y1i7jB/BV1CK411J7fX/BV1Rg4y1v7Xv/
BV1bV411k7Y7/BV1mz411i7SM/BV13K411p7jL/BV1q54y1Q7Hy/BV1MK411s7Xt/BV1Zs411f7JE/BV1At4y117gp/BV1Sg4y1z7XF/BV1px411A7ir/BV1Nk4y1R7a2/BV1554y1R7mW/BV19a4y1t7VJ/BV1EK4y1b7Bi/BV1Xk4y1r7dJ/BV16T4y1g7Bg/BV1at4y1m7pj/BV1bp411A7eL/BV1Et411y7AZ/BV13b411T72m/BV1St411z7bu/
BV1hE411N7xu/BV1xW411d73p/BV1kx411o7Yo/BV1c7411q7n7/BV1F7411e7Cz/BV1JE411j7T4/BV1NE411n71A/BV1Qb411g7bY/BV1Ss411x7FW/BV12t411f7Zh/BV17J411W7FJ/BV1aJ411k76k/BV1y7411a7nC/BV1us41137Fd/BV1KJ411C7qF/BV1b4411b7K4/BV1mJ411U7PK/BV1oJ411V7oy/
BV17J411V7az/BV1u4411j7o9/BV1nJ411b7Fz/BV1NJ411v7df/BV1EJ411M73j/BV18J411C7Af/BV1Bx411o7WB/BV1G4411D7SW/BV1tJ411P7AE/BV114411r7gv/BV1JE411X71M/BV14J411P7EQ/BV1r4411S7wK/BV1zx411d7w9/BV1yt411J73a/BV1jW411R72B/BV1qb411B7Z7/BV14b41127Gu/BV1Ls411Q7wa/BV1jx411R7jb/
BV19W411m7T6/BV1H4411N7aC/BV1W4411t7BZ/BV1ab411v71F/BV1T4411J7Yb/BV1h4411777m/BV12b411K7TS/BV1eb411h7UU/BV1Eb411v73n/`
    .replace(/\n/g, '').split('/');

// 随机获取一个视频
function getVideo() {
    let video = "https://www.bilibili.com/video/" + videos[Math.floor(Math.random() * videos.length)] + '/';
    console.log(video);
    return video;
}

function jump() {
    window.location.href = getVideo();
}

// 当视频播放完毕时，跳转到新页面
function jumpWhenEnd() {
    // 获取视频元素
    let video = document.querySelector('video');
    // 监听视频播放完毕事件
    video.addEventListener('ended', () => {
        alert('视频播放完毕');
        // 跳转页面
        window.location.href = getVideo();
    });
}