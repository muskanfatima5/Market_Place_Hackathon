import Link from "next/link"
import "../style/home.css"
import Image from "next/image"

function Header(){
    return(
       <>
       <div>
        <div className="head-one">
          <div className="header"> 
            <p className="line-one text-center">
              Sign up and get 20% off to your first order. </p>
            <p className="line-two">Sign Up Now</p>
          </div>
          <div className="cross">
            <img
              src="/images/cross.png"
              alt="close"
              width={13.13}
              height={13.13}
            />
          </div>
        </div>
      </div>
      <div className="head-two">
        <div className="heading">
        <div>
        <Image src="/images/menu.png" alt="menu-img" width={24} height={24} className="w-[24px] h-[24px] ml-[16px] hover:bg-slate-400 md:hidden lg:hidden"/>
        </div>
          <h1 className="shop">SHOP.CO</h1>
          <Link href="./Home">
          <p className="two">Home</p>
          </Link>
          <Link href="./Categ">
          <p className="one">Shop
          <img className="droping"
            src="/images/dropdown.png"
            alt="dropdown"
            width={16}
            height={16}
          /></p></Link>
          
          <p className="three">New Arrivals</p>
          <p className="four">Brands</p>
          <div className="options">
{/*             <Image src="/images/mob-search.png" alt="cart" width={24} height={24} className="w-[24px] h-[24px] ml-[-40px] md:hidden lg:hidden" /> */}
            <Link href="./Cart">
            <Image src="/images/cart.png" alt="cart" width={24} height={24} className="cart"/>
            </Link>
            <Link href="/components/Userprofile">
            <img src="/images/log.png" alt="log" width={24} height={24} className="user" />
            </Link>
          </div>
        </div>
        </div>
      </>
      )
      }export default Header
