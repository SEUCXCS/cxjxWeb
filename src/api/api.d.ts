/**
 * Request
 */
export interface Request {
    code: number;
    data: Content;
}

export interface Content {
    /**
     * 作者
     */
    author: string;
    /**
    * 作者ID
    */
    authorId?: string;
    /**
     * 内容
     */
    content?: string;
    /**
     * 文章id
     */
    id: string;
    /**
     * 标题
     */
    title: string;
    /**
     * 类型，0 新闻（news）
     * 1 通知（notice）
     * 2 博客（blog）
     * 3 资源（resources）
     * 4 归档（archive）
     */
    type: number;
    /**
     * 更新时间
     */
    updateTime: string;
    /**
     * 上传时间
     */
    uploadTime: string;
}