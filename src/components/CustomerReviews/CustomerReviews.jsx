import React from 'react';
import '../CustomerReviews/customerReviews.css';

const reviews = [
  {
    name: "MR. MAVE DONAnpL",
    location: "MUMBAI",
    image: "https://img.lovepik.com/free-png/20211212/lovepik-business-man-likes-png-image_401513074_wh1200.png",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recurun MAURIS. velit lacus venenatis sit amet erat velereta veniam lectus."
  },
  {
    name: "MR.STEVE JOE",
    location: "LONDON",
    image: "https://pngimages.in/uploads/png-compressd/2023/May-2023/businessman_Free_Transparent_Png_Images.png",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recurun MAURIS. velit lacus venenatis sit amet erat velereta veniam lectus."
  },
  {
    name: "MS. CAMILA YULDIZ",
    location: "CHITTAGONG",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88GQM6_S7MWwSsy12pefbXl3h-Zj4KLOVVNx-KUkzdeLhfUxf51WuoYbjejOvyNOYrCk&usqp=CAU",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recurun MAURIS. velit lacus venenatis sit amet erat velereta veniam lectus."
  }
];

const CustomerReviews = () => {
  return (
    <div className="customer-reviews">
      <h3>Trusted Brand</h3>
      <h1>Trusted by 1600+ Couples</h1>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-image">
              <img src={review.image} alt={review.name} />
            </div>
            <p>{review.review}</p>
            <h4>{review.name}</h4>
            <span>{review.location}</span>
          </div>
        ))}
      </div>
      <button className="more-reviews-button">MORE CUSTOMER REVIEWS</button>
    </div>
  );
};

export default CustomerReviews;
