import { BsCart4 } from 'react-icons/bs'
import Category from './category/category'
import Price from './price/price'
import Colors from './colors/colors'
import './sidebar.css'

function sidebar({handleChange}) {
    return <>
        <section className="sidebar">
            <div className="logo-container">
                <h1><BsCart4 /></h1>
            </div>
            <Category handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Colors handleChange={handleChange} />
        </section>
    </>
}

export default sidebar;
