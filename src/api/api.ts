import dayjs from "dayjs";
import { type Content } from "@/api/api.d";
// export default
//     // 封装请求
//     function cxjxApiGet(url: string): Promise<any> {
//     let baseUrl = "http://81.68.242.84:5438"
//     return new Promise((resolve, reject) => {
//         fetch(baseUrl + url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json;charset=UTF-8'
//             },
//             mode: 'cors',
//             cache: 'default'
//         }).then(function (response) {
//             return response.json();
//         }).then(function (res) {
//             if (res.code == 200) {
//                 resolve(res.data)
//             } else {
//                 reject(res)
//             }
//         }).catch(function (e) {
//             reject(e)
//         });
//     }
//     )
// }

// 获取新闻列表
async function GetNewsList(detail: boolean, amount?: number): Promise<Content[]> {
    let query = "?detail=" + detail + "&amount=" + amount
    let res: Content[] = await Get("/api/content/news" + query)
    // 处理时间
    res.forEach((item: any) => {
        item.uploadTime = dayjs(item.uploadTime).format("YYYY-MM-DD HH:mm:ss")
        item.updateTime = dayjs(item.updateTime).format("YYYY-MM-DD HH:mm:ss")
    })
    return res
}
// 获取通知列表
async function GetNoticeList(detail: boolean, amount?: number): Promise<Content[]> {
    let query = "?detail=" + detail + "&amount=" + amount
    let res: Content[] = await Get("/api/content/notice" + query)
    // 处理时间
    res.forEach((item: any) => {
        item.uploadTime = dayjs(item.uploadTime).format("YYYY-MM-DD HH:mm:ss")
        item.updateTime = dayjs(item.updateTime).format("YYYY-MM-DD HH:mm:ss")
    })
    return res
}
// 获取blog
async function GetBlogList(detail: boolean, amount?: number): Promise<Content[]> {
    let query = "?detail=" + detail + "&amount=" + amount
    let res: Content[] = await Get("/api/content/blog" + query)
    // 处理时间
    res.forEach((item: any) => {
        item.uploadTime = dayjs(item.uploadTime).format("YYYY-MM-DD HH:mm:ss")
        item.updateTime = dayjs(item.updateTime).format("YYYY-MM-DD HH:mm:ss")
    })
    return res
}
// 获取文章内容
async function GetContent(id: number | string): Promise<Content> {
    let query = "?id=" + id + "&detail=true"
    let res: Content = await Get("/api/content" + query)
    // if (resarr.length == 0) throw new Error("文章不存在")
    // let res: Content = resarr[0]
    // 处理时间
    res.uploadTime = dayjs(res.uploadTime).format("YYYY-MM-DD HH:mm:ss")
    res.updateTime = dayjs(res.updateTime).format("YYYY-MM-DD HH:mm:ss")
    return res
}
// get接口
function Get(url: string): Promise<any> {
    let baseUrl = "http://81.68.242.84:5438"
    return new Promise((resolve, reject) => {
        fetch(baseUrl + url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            mode: 'cors',
            cache: 'default'
        }).then(function (response) {
            return response.json();
        }).then(function (res) {
            if (res.code == 200) resolve(res.data)
            else reject(res)
        }).catch(function (e) {
            reject(e)
        })
    }
    )
}
export default {
    GetNewsList,
    GetNoticeList,
    GetBlogList,
    GetContent
}

