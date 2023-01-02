import image from './image1.jpg'
import './App.css';
import Welcome from './form/loginpage';
import Navbar from './Navigation/Navbar';
import Shoppage from './shoppage/shoppage';
import Card from './Card/card';
import Buildpage from './form/buildpage';
import Welcompage from './Welcomepage/welcompage';
import { Route,Switch,Redirect} from 'react-router-dom';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
//How to center div?






function App() {
  const log=useSelector((state)=>state.loging.islogin)

  return (
    <Fragment>
      <div className='div1app'>
    <Navbar/>
    
    <Switch>
      <Route path='/' exact>
       {!log&& <Redirect to='/welcome'></Redirect>}
        {log&&<Redirect to="/shopingcart"/>}  
</Route>
  <Route path='/welcome'>
  <Welcompage/></Route>

 <Route path='/shopingcart'>
    <Shoppage/>
 {!log&& <Redirect to="/"/> }
  </Route>
    <Route path='/carditems'>
      <Card></Card>
      {!log&& <Redirect to="/"/> }
    </Route>
    <Route path='/formpage'>
    <Welcome />
     {log&&<Redirect to="/shopingcart"/>}  
    </Route>
    <Route path='/buildaccount'>
      <Buildpage/>
    </Route>
    </Switch>
   </div></Fragment>
   
  );
}

export default App;
