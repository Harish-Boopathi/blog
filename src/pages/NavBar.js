import React from 'react'
import {Button , Dropdown , ConfigProvider} from 'antd'
import { SyncOutlined , VerticalAlignBottomOutlined} from '@ant-design/icons';
import logo from '../images/Logo.svg'

const NavBar = () => {

    const items = [
        {
          key: '1',
          label: (
            <a><SyncOutlined /> Profile</a>
          ),
        },
        {
          key: '2',
          label: (
            <a><VerticalAlignBottomOutlined /> Logout</a>
          ),
        },
      ];

  return (
    <div id='nav-bar'>
        <div id='nav-left'>
            <img src={logo} alt="logo" />
            <ConfigProvider
                theme={{
                token: {
                    colorText:'white',
                    colorBgTextHover:'rgba(36,36,36)',
            
                },
                }}
            >
                <Button className='options' id='active' type='text'>Dashboard</Button>
                <Button className='options' type='text'>Posts</Button>
            </ConfigProvider>
        </div>

        <Dropdown 
          menu={{
            items,
          }}
          arrow
          className='drop-down'
        >
          <Button>dropDowns</Button>
        </Dropdown>
    </div>
  )
}

export default NavBar
