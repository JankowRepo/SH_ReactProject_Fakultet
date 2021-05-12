import {rejects} from "assert";

enum MethodType{
    POST='Post',
    PUT='Put',
    GET='Get',
    DELETE='Delete',
}

const requestFunction=<R>(
    url:string,
    payload:any,
    method:MethodType,
    auth:string
    ):Promise<R>=>{
    const options: RequestInit={
        method,
        ...(!!auth && {
            headers:{
                Authorization: 'Bearer ${auth}',
            }
        }),
    };
    let parserUrl=url;
    if(
        method===MethodType.POST ||
        method===MethodType.PUT &&
        payload
    ){
        options.body=JSON.stringify(payload);
    } else if(payload){
        const query=Object
            .keys(payload)
            .map((key:string)=>'${key}=${payload[key]}')
            .join('&');
        parserUrl='${url}?${query}';
    }
    return new Promise((resolve,reject)=>{
        fetch(parserUrl, options)
        .then(res=>res.json().then(data=>{
            if(res.status!==200) reject(Error('Result status code of ${res.status}'));
            return data;
            }))
            .then(json=>resolve(json))
            .catch(err=>reject(err));
    });
}

const http={
    post: (url:string, payload:any, auth:string ='')=>requestFunction(url,payload, MethodType.POST, auth),
    get: (url:string, payload:any, auth:string ='')=>requestFunction(url,payload, MethodType.GET, auth),
    put: (url:string, payload:any, auth:string ='')=>requestFunction(url,payload, MethodType.PUT, auth),
    delete: (url:string, payload:any, auth:string ='')=>requestFunction(url,payload, MethodType.DELETE, auth),
}

export default http;