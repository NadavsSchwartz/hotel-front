import React from 'react';
import { Popover } from 'antd';
import moment from 'moment';
import Rating from '../Rating/Rating';

export default class App extends React.Component {
  render() {
    const { singleReview } = this.props;
    const reviewAuthorFirstName = singleReview ? singleReview.firstName : '';
    const authorName = reviewAuthorFirstName;
    const contentPositive = singleReview ? singleReview.reviewTextPositive : '';
    const contentNegative = singleReview ? singleReview.reviewTextNegative : '';
    const reviewTitle = singleReview ? singleReview.reviewTitle : '';
    const creationDate = singleReview ? singleReview.creationDate : '';
    const postTime = new Date(creationDate).getTime();
    const guestRating = singleReview ? singleReview.overallScore : '';

    return (
      <div className="comment-area">
        <div className="comment-wrapper">
          <div className="comment-header">
            <div className="avatar-area">
              <div className="author-info">
                <h3 className="author-name">{authorName}</h3>

                <div className="comment-date">
                  <Popover
                    placement="bottom"
                    content={moment(creationDate).format(
                      'dddd, MMMM Do YYYY, h:mm:ss a'
                    )}
                  >
                    <span>Reviewd - {moment(postTime).fromNow()}</span>
                  </Popover>
                </div>
              </div>
            </div>

            <div className="rating-area">
              <Rating guestRating={guestRating} type="bulk" />
            </div>
          </div>
          <div className="comment-body">
            <h4>{reviewTitle}</h4>
            <p>
              <span style={{ color: '#008489', fontWeight: 'bold' }}>
                Positive:
              </span>{' '}
              {contentPositive || 'No positive review'}
            </p>
            <p>
              <span style={{ color: '#c01919', fontWeight: 'bold' }}>
                Negative:
              </span>{' '}
              {contentNegative || 'No negative review'}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
