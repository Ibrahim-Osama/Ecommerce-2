
import style from './HeaderBasket.module.css'
import Logo from '../../../assets/Svg/Cart.svg?react'
const HeaderBasket = () =>
{
    let {basketQuantity , basketContainer}= style
  return <>
   <div className={basketContainer}>
      <Logo title='Basket Icon Logo'/>
      <div className={basketQuantity}>0</div>
    </div>
  
  </>
}

export default HeaderBasket
