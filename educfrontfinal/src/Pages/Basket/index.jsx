import React, { useContext } from 'react'
import { BasketContext } from '../../Context/BasketContext'
import { Link } from 'react-router-dom'
import './style.scss'
const Basket = () => {
    const {basket,removeBasket} = useContext(BasketContext)
  return (
    <section className='basket'>
        <div className='basket__container'>
        <div className='basket__container__allCard'>
        {basket.map(x=>{
            return(
                <div key={x._id} className="basket__container__allCard__card">
                  <div className="basket__container__allCard__card__content">
                    <i className={x.icon}></i>
                    <h3>{x.title}</h3>
                    <p>{x.text}</p>
                    <Link to={`/DetailPage/${x.id}`}><button>Detail</button></Link>
                    <button onClick={()=>removeBasket(x)}>Remove</button>
                  </div>
                </div>
            )
        })

        }
        </div>
        </div>
    </section>
  )
}

export default Basket