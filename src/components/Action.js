import React from 'react';
import './Action.css';
import { Link } from 'react-router-dom';
import { scrollToTop } from "../util/constants";


const Action = ({ menudata }) => {
  return (
    <div className='action-outer-wrapper'>
      <div className='action-wrapper'>
        {menudata.map(action => (
          <Link key={action.id} to={action.site} className='action__item__link' onClick={scrollToTop}>
            <figure className='action__item__pic-wrap'>
              <img
                className='action__item__img'
                alt={action.title}
                src={action.img}
              />
            </figure>
            <div className='action__item__info'>
              <h4>{action.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Action;
