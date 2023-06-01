// 打包本文件夹下的所有文件
// 生成文件到 src\assets\archives\pack

// 生成packConfig.json
let fs = require("fs");
let path = require("path");
let { marked } = require("marked");
let md5 = require("md5");

if (!fs.existsSync(path.join(__dirname, './pack'))) {
    fs.mkdirSync(path.join(__dirname, './pack'))
}


// 逐层打包
function dopack(config) {
    config.forEach(item => {
        if (item.link) {
            item.linkID = pack(item.link)
        }
        if (item.items) {
            dopack(item.items)
        }
    })
}


// 打包文件
function pack(link) {
    // 如果路径是文件夹，则获取index.md
    if (fs.statSync(path.join(__dirname, link)).isDirectory()) {
        link = path.join(link, "index.md")
    }
    // 如果没有加.md，则加上
    if (!link.endsWith(".md")) {
        link += ".md"
    }
    // 查询文件是否存在
    if (!fs.existsSync(path.join(__dirname, link))) {
        console.log("文件不存在", link)
        return -1
    }
    // 读取文件
    let data = fs.readFileSync(path.join(__dirname, link), 'utf-8')
    // 转换为html
    // marked.
    let html = marked(data)
    // 生成文件
    let linkID = md5(link)
    fs.writeFileSync(path.join(__dirname, `./pack/${linkID}.html`), html)
    return linkID
}




let config = [{
    text: '竞赛相关',   // 菜单名称
    collapsible: true, // 是否是一个可以折叠的组
    // link: "/bot1/menu", // 显示的文章
    items: [
        {
            text: '蓝桥杯（软件类）',
            collapsible: true,
            link: "/竞赛相关/蓝桥杯（软件类）/index.md",
            items: [
                {
                    text: "关于试题",
                    collapsible: false,
                    link: "竞赛相关/蓝桥杯（软件类）/关于试题.md",
                },
                {
                    text: "22届_软件类_蓝桥杯报名相关事宜",
                    collapsible: false,
                    link: "竞赛相关/蓝桥杯（软件类）/22届_软件类_蓝桥杯报名相关事宜.md",
                }
            ]
        }
    ]  // 下拉菜单列表
},
{
    text: "22新生大会",
    collapsible: true,
    items: [
        {
            text: "关于计协的简短介绍",
            collapsible: false,
            link: "22新生大会/关于计协的简短介绍.md",
        },
        {
            text: "钤元の分享",
            collapsible: false,
            link: "22新生大会/钤元の分享.md",
        }
    ]

}]
// interface Items {
//     text: string,   // 菜单名称
//     collapsible: boolean,   // 是否是一个可以折叠的组
//     link?: string,// 用于生成link
//     linkID?: string,// 用于生成linkID
//     items?: Items[] // 下拉菜单列表
// }

dopack(config)
// 保存配置文件
fs.writeFileSync(path.join(__dirname, './pack/packConfig.json'), JSON.stringify(config, null, 4))

