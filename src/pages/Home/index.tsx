import { Button } from 'antd';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="">
      <Button>HomePage</Button>
      <Outlet />
    </div>
  );
};

export default Home;
