import { Button } from 'antd'
import React from 'react'
import axios from "axios"
export default function Home() {

    const ajax = () => {
        // 取数据
        // /posts/1 == /posts/?id=1
        // axios.get("http://localhost:8000/posts/1")
        //     .then(res => { console.log(res.data) })

        // 增数据
        // id自增长
        // axios.post("http://localhost:8000/posts/",{
        //     title:"3",
        //     author:"xiaoming"
        // })

        // put修改会替换整个数组
        // axios.put("http://localhost:8000/posts/",{
        //     title:"111-修改"
        // })

        // patch修改
        // axios.patch("http://localhost:8000/posts/1", {
        //     title: "111-修改"
        // })

        // 删除
        // axios.delete("http://localhost:8000/posts/1")

        // _embed寻找附属库
        // axios.get("http://localhost:8000/posts?_embed=comments").then(res=>{
        //     console.log(res.data)
        // })

        // _expand寻找主库
        // axios.get("http://localhost:8000/comments?_expand=post").then(res=>{
        //     console.log(res.data)
        // })
    }

    return (
        <div>
            <Button type="primary" onClick={ajax}>Button</Button>
        </div>
    )
}
