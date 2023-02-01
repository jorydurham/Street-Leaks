import Directory from '../../components/category-directory/directory.component';
import categories from '../../components/category-directory/directory.arrey';
import { Outlet } from 'react-router-dom';


const Home = () => {
  return (
    <div>
        <Outlet />
        <Directory categories={categories} />
    </div>
    
      
      
  );
}

export default Home;
