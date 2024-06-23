import Headers from '../../Components/Common/Header/Headers'
import style from './Mainlayout.module.css'
import Footer from '../../Components/Common/Footer/Footer';



const {container ,wrapper} = style
const MainLayout = () => {
  return <>
  
    <div className={`container  ${container}`}>
   <Headers/>
    <div className={wrapper}>
         
    </div>


    <Footer/>
    </div>
  
  </>
}

export default MainLayout
