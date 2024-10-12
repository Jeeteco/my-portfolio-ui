import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Menu } from 'antd';
import { GlobalContext } from '../../context/GlobalProvider';

const AppHeader: React.FC = () => {

  const navigate = useNavigate()
  const {authToken, setAuthTokenHandler} = useContext(GlobalContext)

  const handleLogout = () => {
    setAuthTokenHandler(null);
    navigate('/');
  };
  let menuItems = [
    {
      key: 'home',
      label: <Link to="/">Home</Link>

    },
    {
      key: 'about',
      label: <Link to="/about">About</Link>

    },
    {
      key: 'contact',
      label: <Link to="/contact">Contact</Link>

    },
    {
      key: 'projects',
      label: <Link to="/projects">Projects</Link>

    },
    // {
    //   key:'login',
    //   label:<Link to="/login">Login</Link>
    // }
  ];

  if (authToken) {
    console.log("heeloe")
    menuItems.push({ key: 'detailboard', label: <Link to="/detailboard">DetailBoard</Link> })
    menuItems.push({
      key: 'logout',

      label: (
        <Button type='link' onClick={handleLogout}>LogOut</Button>)
    });
  }
  
   else{
    menuItems.push({key:"login",label:<Link to="/login">Login</Link>})
  }


  return (
    <header className='header' >
      <Menu mode="horizontal" items={menuItems} />
    </header>
  )

}

export default AppHeader
