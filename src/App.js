import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Contacts} from "./components/Contacts";
import {NotFound} from "./components/NotFound";
import {MainLayout} from "./layouts/MainLayout";
import  './App.css'
import Todos from "./components/Todos";
import {Todo} from "./components/Todo";
import {Albums} from "./components/Albums";
import {Album} from "./components/Album";
import Comments from "./components/Comments";
import SingleComment from "./components/SingleComment";


const App = () => {
  return <BrowserRouter>

      <div className='App'>
          
          <Routes>

          <Route path='/' element={<MainLayout />}>
              <Route index element={<Home/>}/>
              <Route path='about' element={<About />}/>
              <Route path='contacts' element={<Contacts />}/>
              <Route path='*' element={<NotFound />}/>
              <Route path='todos' element={<Todos />}/>
              <Route path='albums' element={<Albums />}/>
              <Route path='comments' element={<Comments />}/>
              <Route path='comments/:commentId' element={<SingleComment />}/>


              </Route>

          </Routes>
      </div>



      </BrowserRouter>


};

export {App};