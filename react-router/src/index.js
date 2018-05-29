import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Blog from './components/blog'
import Guide from './components/guide'
import Search from './components/search'
import Document from './components/document'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>首页</Link></li>
        <li><Link to='/guide'>入门</Link></li>
        <li><Link to='/document'>文档</Link></li>
        <li><Link to='/search'>搜索</Link></li>
        <li><Link to='/blog'>博客</Link></li>
      </ul>
      <Route path='/' component={App} exact></Route> {/* exact 严格准确匹配 */}
      <Route path='/guide' component={Guide}></Route>
      <Route path='/document' component={Document}></Route>
      <Route path='/search' component={Search}></Route>
      <Route path='/blog' component={Blog}></Route>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
