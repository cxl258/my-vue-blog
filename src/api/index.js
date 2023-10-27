import request from '../utils/request'

export const yiyan = ()=>{
    return request.request({
        url:'/api/yiiyan',
        method:"get"
    })
}