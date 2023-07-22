import dayjs from "dayjs";
import { type KonwledgeBaseConfig } from "@/api/KonwledgeBaseConfig.d";
import { type Resources } from "@/api/Resources.d";
import { useUrlStore } from '@/stores/common'
// const bu = useUrlStore()
export {
    type KonwledgeBaseConfig,
    type Resources
}
import { ref } from 'vue'
// 本地mock数据
const url = ref('http://127.0.0.1:4523/m1/2650283-0-default')
// 测试数据
// const url = ref('http://81.68.242.84:5438')
// // 正式数据
// const url = ref('http://api.cxjx.truraly.icu')

import axios from "axios";
const AXIOS = axios.create({
    // baseURL: bu.getUrl(),
    baseURL: url.value,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});

// 根据ID获取资源
export async function getResources(id: number | string | string[]): Promise<Resources> {
    if (typeof id == "string") id = parseInt(id)
    else if (Array.isArray(id)) id = id[0]
    let response = await AXIOS.get("/api/resources/" + id)
    if (response.data.code != 200) {
        throw new Error("获取资源失败")
    }
    let res: Resources = response.data.data
    return res
}

// 获取知识库配置
export async function GetKonwledgeBaseConfig(t: string): Promise<KonwledgeBaseConfig> {
    let response = await AXIOS.get("/api/knowledgebases/" + t)
    if (response.data.code != 200) {
        throw new Error("获取知识库配置失败")
    }
    let res: KonwledgeBaseConfig = response.data.data
    return res
}
// 获取新闻列表
export async function GetNewsList(detail: boolean, amount?: number): Promise<Resources[]> {
    let query = "?detail=" + detail + "&amount=" + amount
    let response = await AXIOS.get("/api/resources/news" + query)
    if (response.data.code != 200) {
        throw new Error("获取新闻列表失败")
    }
    let res: Resources[] = response.data.data
    // 处理时间
    res.forEach((item: any) => {
        item.uploadTime = dayjs(item.uploadTime).format("YYYY-MM-DD HH:mm:ss")
        item.updateTime = dayjs(item.updateTime).format("YYYY-MM-DD HH:mm:ss")
    })
    return res
}
// 获取通知列表
export async function GetNoticeList(detail: boolean, amount?: number): Promise<Resources[]> {
    let query = "?detail=" + detail + "&amount=" + amount
    let response = await AXIOS.get("/api/resources/notice" + query)
    if (response.data.code != 200) {
        throw new Error("获取通知列表失败")
    }
    let res: Resources[] = response.data.data
    // 处理时间
    res.forEach((item: any) => {
        item.uploadTime = dayjs(item.uploadTime).format("YYYY-MM-DD HH:mm:ss")
        item.updateTime = dayjs(item.updateTime).format("YYYY-MM-DD HH:mm:ss")
    })
    return res
}

