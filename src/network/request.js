import axios from "axios"

export function request(config){
    return new Promise((resolve,reject)=>{
        //    1、创建实例
        const instance = axios.create({
            // baseURL:'http://123.207.32.32:8000',
            // baseURL:'https://api.ecook.cn',
            //跨域则baseURL这里根据代理设置填写名称则可
            baseURL: '/api',
            timeout:5000
        })
        //2、axios拦截器
        instance.interceptors.request.use(config =>{
            return config
        },err =>{
            console.log(err)
        } )
        //响应拦截器
        instance.interceptors.response.use(res =>{
            return res.data
        },err => {
            console.log(err)
        })

        // 3、发送真正的网络请求
        instance(config)
            .then(res=>{
                resolve(res)
            })
            .catch(err=>{
                reject(err)
            })
    })
}