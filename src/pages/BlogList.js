import React from 'react'
import {Card, Input} from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import { selcetPosts } from './dashboardSlice'
import { useSelector } from 'react-redux';
import './dashboard.css'

const BlogList = () => {

    const posts = useSelector( selcetPosts )

    const changeData = (date) => {
        const dateObj = new Date(date);
        const newDate = dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
        return newDate
    }

    const postsList = posts.map(post =>{
        return(
            <Card className='post' key={post.id} onClick={e => console.log(post.name)}>
                <img className='image'  src={post.image_url} alt="image here" />
                <div className='details'>
                    <h3>{post.name}</h3>
                    <p>{post.user.first_name} {post.user.last_name} , {changeData(post.updated_at)}</p>
                </div>
            </Card>
        )
    } )

  return (
    <div id='blog-coloumn'>

        <p>Public Blogs</p>
        <div id='search'>
            <Input placeholder="Search" prefix={<SearchOutlined />} />
        </div>

        <div id='blog-list'>
        <nav>{postsList}</nav>
            
        </div>
    </div>
  )
}

export default BlogList
