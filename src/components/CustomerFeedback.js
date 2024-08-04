import React from "react";
import { GoStarFill } from "react-icons/go";

function CustomerFeedback() {
  const feedbacks = [
    {
      img: "/user1.jpg",
      name: "Jenny Wilson",
      feedback:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. they were very conscientious about gluten allergies.",
      rating: 4,
    },
    {
      img: "/user4.jpeg",
      name: "Dianne Russell",
      feedback:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
      rating: 5,
    },
    {
      img: "/user2.jpeg",
      name: "Devon Lane",
      feedback:
        "Normally, orders are wines, but theirs are lean meaty and tender and delicious.",
      rating: 4,
    },
  ];

  return (
    <div className="bg-gray-900 md:p-4 rounded-md px-2 py-4">
      <div className="text-white font-semibold text-xl mb-2">
        Customer's Feedback
      </div>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="mb-4 md:p-4 py-4">
          <div className="flex items-center gap-3">
            <img
              src={feedback.img}
              alt=""
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="font-bold text-white">{feedback.name}</div>
          </div>
          <div className="my-2">
            <StarRating rating={feedback.rating} />
          </div>
          <div className="text-gray-400 text-sm">{feedback.feedback}</div>
        </div>
      ))}
    </div>
  );
}

export default CustomerFeedback;

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      i < rating ? (
        <GoStarFill key={i} className="text-yellow-500 text-lg" />
      ) : (
        <GoStarFill key={i} className="text-white text-lg" />
      )
    );
  }
  return <div className="flex">{stars}</div>;
};
