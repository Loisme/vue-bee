import {request} from "@/network/request";

export function getHomeData() {
    return request({
        url: `api/navigation-bar/home?platform=1&appVersion=1.8.1`,
        headers: {
            "api-version": 3
        }
    })
}


//json_metadata
//关注
export function getAttention() {
    return request({
        url: `api/recommend/user?num=10&platform=1`
    })
}

//关注-刷新数据
export function getAttentionRefresh(lastAccount) {
    return request({
        url: `api/recommend/user?lastAccount=${lastAccount}&num=10&platform=1`
    })
}


//热门页面数据
export function getBannersData() {
    return request({
        url: `api/posts/hot?pageNum=-1&isRefresh=1&currentPage=1&platform=1`
    })
}