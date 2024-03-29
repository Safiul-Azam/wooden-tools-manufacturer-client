import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";
import Review from "./Review";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery("review", () =>
    fetch("https://wooden-tools.onrender.com/review").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container mx-auto my-24">
      <h2 className="text-2xl mb-10 text-primary text-center font-bold">
        CLIENT REVIEW
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 flex-column-reverse gap-8">
        {reviews.slice(-4).map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/allReview"
          className="btn btn-sm text-white btn-secondary rounded-none"
        >
          see more
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
