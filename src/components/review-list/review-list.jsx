import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {reviewPropTypes} from '../../prop-types/review';
import {MAX_REVIEW_COUNT} from '../../const';
import Review from '../review/review';

const ReviewList = ({reviews}) => {
  const isMaxReviews = reviews.length > MAX_REVIEW_COUNT;
  const reviewsCount = isMaxReviews ? MAX_REVIEW_COUNT : reviews.length;
  const maxReviews = isMaxReviews ? reviews.slice(reviews.length - MAX_REVIEW_COUNT) : reviews;

  const {error} = useSelector((state) => state.APP);

  return (
    <React.Fragment>
      <h2 className="reviews__title">
        {error
          ? `Oops..It seems that reviews didn't load. Sorry!`
          : <>Reviews · <span className="reviews__amount">{reviewsCount}</span></>}
      </h2>
      <ul className="reviews__list">
        {maxReviews.map((review) => <Review key={review.id} review={review} />)}
      </ul>
    </React.Fragment>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes),
};

export default ReviewList;
