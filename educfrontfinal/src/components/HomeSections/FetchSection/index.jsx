import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { BasketContext } from "../../../Context/BasketContext";
const FetchSection = () => {
    const [search, setSearch] = useState("");
    const [property, setProperty] = useState(null);
    const [api, setApi] = useState([]);
    const {addbasket} = useContext(BasketContext)
    useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);
  return (
    <section className="fetchSection">
      <div className="fetchSection__container">
        <div className="fetchSection__container__title">
          <h2>Features That Make Us Hero</h2>
          <p>
            If you are looking at blank cassettes on the web, you may be very
            confused at the difference in price. You may see some for as low as
            $.17 each.
          </p>
          <input
            placeholder="Search..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setProperty({ choosenProperty: "title", asc: true })}
          >
            a-Z
          </button>
          <button
            onClick={() =>
              setProperty({ choosenProperty: "title", asc: false })
            }
          >
            Z-a
          </button>
          <button onClick={() =>
              setProperty(null)}>Default</button>
        </div>

        <div className="fetchSection__container__allCard">
          {api
            .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
              if (property && property.asc === true) {
                return a[property.choosenProperty] > b[property.choosenProperty] 
                ? 1 
                : b[property.choosenProperty] > a[property.choosenProperty] ? -1 
                : 0;
              }
              else if (property && property.asc === false) {
                return a[property.choosenProperty] < b[property.choosenProperty] 
                ? 1 
                : b[property.choosenProperty] < a[property.choosenProperty] ? -1 
                : 0;
              }
              else{
                return 0;
              }
            })
            .map((x) => {
              return (
                <div key={x._id} className="fetchSection__container__allCard__card">
                  <div className="fetchSection__container__allCard__card__content">
                    <i className={x.icon}></i>
                    <h3>{x.title}</h3>
                    <p>{x.text}</p>
                    <Link to={`/DetailPage/${x._id}`}><button>Detail</button></Link>
                    <button onClick={()=>addbasket(x)}>Add to basket</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default FetchSection;
