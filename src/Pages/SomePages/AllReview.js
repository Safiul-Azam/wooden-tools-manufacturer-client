import React from "react";
import { useQuery } from "react-query";
import Review from "../Home/Review";
import Loading from "../Shared/Loading";

const AllReview = () => {
  const { data: reviews, isLoading } = useQuery("review", () =>
    fetch("https://wooden-tools.onrender.com/review").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container mx-auto my-24">
      <h2 className="text-2xl mb-10 text-secondary text-center font-bold">
        CLIENT REVIEW
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 flex-column-reverse gap-20">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
