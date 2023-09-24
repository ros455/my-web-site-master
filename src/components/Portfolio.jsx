import React, { useState, useEffect } from "react";
import "../style/portfolio.scss";
import TitleTemplate from "./template/TitleTemplate";
import PortfolioItemTemplate from "./template/PortfolioItemTemplate";
import axios from 'axios';
import { BASE_URL } from '../http/baseUrl';
import { Link } from "react-router-dom";
const Portfolio = () => {
  const [allPortfolio, setAllPortfolio] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/get-all-portfolio`)
    .then((res) => {
        setAllPortfolio(res.data)
        console.log('res.data',res.data);
    })
    .catch((error) => {
        console.log('Request error',error);
    })
},[])

  return (
    <div>
      <div className="portfolio_wrap">
        <TitleTemplate text={"Портфоліо робіт"} />

        <div className="portfolio_items_wrap">
          {allPortfolio.length && allPortfolio.map((item) => (
            <PortfolioItemTemplate key={item._id} item={item} />
          ))}
        </div>
      </div>
      <div className="portfolio_button_wrap">
      <div className="portfolio_button_block">
          <Link to='/all-portfolio'>
            <button className="portfolio_button">Більше</button>
          </Link>
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
