import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import About from "../components/About/About";
const AppLayout = () => {
  //state variable
  // const [count, setCount] = useState(0);
  //useEffect
  // useEffect(()=>{
  //   document.title = count
  //   setCount(count+1)
  // },[count]
  // )

  //---To get Header footer in common  (<Outlet />)
  return (
    <>
      <Header />
      <Home/>
      
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
