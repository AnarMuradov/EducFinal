import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './style.scss'
const DetailPage = () => {
    const [api, setApi] = useState([]);
    const {id}= useParams()
    useEffect(() => {
    fetch(`http://localhost:3000/${id}`)
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, [id]);
  return (
    <div className='detailPage'>
        <div className='detailPage__container'> 
        <div className="detailPage__container__card">
                  <div className="detailPage__container__card__content">
                    <i className={api.icon}></i>
                    <h3>{api.title}</h3>
                    <p>{api.text}</p>
                  </div>
                </div>
        </div>
    </div>
  )
}

export default DetailPage