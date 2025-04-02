import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import img1 from './assets/images/img1.jpg'
import img3 from './assets/images/img3.jpg'
import img5 from './assets/images/img5.jpg'
import img6 from './assets/images/img6.jpg'
import img7 from './assets/images/img7.jpg'

export default function Reviews() {
  const [index, setIndex] = useState(0)

  const reviews = [
    {
      img: img1,
      name: 'Emily Selman',
      comment: 'Amazing service and fresh groceries! Will order again!',
    },
    {
      img: img3,
      name: 'John Doe',
      comment: 'Great products and fast delivery!',
    },
    {
      img: img5,
      name: 'Sophia Lee',
      comment: 'Best online grocery shopping experience!',
    },
    {
      img: img6,
      name: 'Alex Green',
      comment: 'The quality is superb, highly recommend!',
    },
    {
      img: img7,
      name: 'Elena Gilbert',
      comment: 'Fresh Products, love it',
    },
  ]

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  return (
    <>
      <div className="text-center mt-4 text-5xl">
        <b className="font-mono">Know What Our Customer Says About Us</b>
      </div>

      <div className="reviews-container mt-6">
        <div
          className="reviews-slider d-flex overflow-hidden"
          style={{ width: '100%', position: 'relative' }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="slide-item"
              style={{
                width: '100%',
                transform: `translateX(-${index * 100}%)`,
                transition: 'transform 0.5s ease',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div className="border-2 w-96 h-48 mt-6 rounded-2xl mx-2 space-x-2">
                <div className="d-flex">
                  <div>
                    <img
                      src={review.img}
                      className="w-20 h-20 mx-3 mt-3"
                      style={{ borderRadius: '120px' }}
                      alt={review.name}
                    />
                  </div>
                  <div className="mt-3 grid">
                    <b className="fs-4 mx-5">{review.name}</b>
                    <div className="d-flex mx-5">
                      <i className="bi bi-star-fill text-warning ms-2"></i>
                      <i className="bi bi-star-fill text-warning ms-2"></i>
                      <i className="bi bi-star-fill text-warning ms-2"></i>
                      <i className="bi bi-star-fill text-warning ms-2"></i>
                      <i className="bi bi-star-fill text-warning ms-2"></i>
                    </div>
                    <p className="text-muted ms-5">{review.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-outline-primary" onClick={prevReview}>
            <i className="bi bi-arrow-left-circle"></i>
          </button>
          <button className="btn btn-outline-primary" onClick={nextReview}>
            <i className="bi bi-arrow-right-circle"></i>
          </button>
        </div>
      </div>
    </>
  )
}
