import React from 'react'
import ReactDOM from 'react-dom/client'
//样式初始化一般放在最前面
import App from './App.tsx'
// UI框架的样式

//全局样式

import "./assets/style/global.scss"
// 组件的样式
import 'reset-css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
