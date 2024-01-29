import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { selcetPosts , selcetError , selcetStatus ,fetchPosts } from './dashboardSlice'
import NavBar from './NavBar'
import './dashboard.css'
import BlogList from './BlogList'
import DashboardDetails from './DashboardDetails'

const Dashboard = () => {

    const dispatch = useDispatch()
    const status = useSelector( selcetStatus )
    const error = useSelector( selcetError )

    // console.log(posts)

    useEffect(() => {
      if(status === 'idle'){
        dispatch(fetchPosts())
      }
    },[status,dispatch])

  return (

    <div>
      <NavBar/>
      <BlogList/>
      <DashboardDetails/>
    </div>
  )
}

export default Dashboard
