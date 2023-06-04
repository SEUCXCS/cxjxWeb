export default
    // 封装请求
    function cxjxApiGet(url: string): Promise<any> {
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
            console.log("访问新闻列表", res);
            if (res.code == 200) {
                resolve(res.data)
            } else {
                reject(res)
            }
        }).catch(function (e) {
            reject(e)
        });
    }
    )
}