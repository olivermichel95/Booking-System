"use client";

import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

const Reviews = ({ params }) => {
  const [hotel, setHotel] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchHotelData = () => {
      setIsLoading(true);
      const docRef = doc(db, "hotels", params.hotelId);
      getDoc(docRef)
        .then((docSnap) => {
          setHotel(docSnap.data());
          setReviews(docSnap.data().reviews);
          console.log(docSnap.data().reviews);

          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          setIsLoading(false);
        });
    };
    fetchHotelData();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center">
        {error && <p className="text-danger">{error.message}</p>}
        {isLoading && <div className="spinner-border"></div>}
      </div>
      <h1 className="text-center">Reviews</h1>

      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "25rem" }}>
          <img
            src={hotel.image}
            className="card-img-top "
            alt="beautiful hotel"
          />
          <div className="card-body">
            <h5 className="card-title">{hotel.name}</h5>
            {/* <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p> */}
          </div>
        </div>
      </div>

      <div
        className="d-flex flex-column mb-3 mt-3 mx-auto"
        style={{ maxWidth: "40rem" }}
      >
        {reviews.map((client) => (
          <div key={hotel.id} className="border-bottom border-dark-subtle mt-3">
            <h4>{client.name}</h4>
            <div className="card-body">
              {/* <h5 className="card-title">Secondary card title</h5> */}
              <blockquote>
                <q>{client.comment}</q>
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;