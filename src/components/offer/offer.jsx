import React from 'react';
import {Link} from 'react-router-dom';
import {offerPropTypes} from '../../prop-types/offer';

const Offer = (props) => {
  const {offer} = props;
  const {previewSrc, price, hotelName, hotelId} = offer;
  const roomLink = `/offer/${hotelId}`;

  const getPremiumElement = () => <div className="place-card__mark"><span>Premium</span></div>;

  return (
    <article className="cities__place-card place-card">
      {offer.isPremium && getPremiumElement()}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={roomLink}>
          <img className="place-card__image" src={previewSrc} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={roomLink}>{hotelName}</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
};

Offer.propTypes = offerPropTypes;

export default Offer;
