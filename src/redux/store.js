import {configureStore} from '@reduxjs/toolkit';
import postReducer from '../pages/dashboardSlice'
// import userReducer from '../features/users/userSlice'
// import loginReducer from '../features/login/loginSlice'

export const store = configureStore({
    reducer:{
        posts:postReducer,
        // users:userReducer,
        // datas:loginReducer
    }
})