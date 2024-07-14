import { Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <p>Nav bar</p>
      <Outlet />
    </div>
  );
};

export default Navbar;
