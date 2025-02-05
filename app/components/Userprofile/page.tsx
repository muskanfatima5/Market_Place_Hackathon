"use client"
import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedFeedback, setEditedFeedback] = useState("");

  
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews") || "[]") || [];
    setReviews(storedReviews);
  }, []);

 
  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  interface Review {
    name: string;
    feedback: string;
    date: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (name && email && feedback) {
      const newReview: Review = {
        name,
        feedback,
        date: new Date().toLocaleDateString(),
      };
      setReviews([newReview, ...reviews]);
      setFeedback(""); 
    }
  };

  const handleEdit = (index: number): void => {
    const reviewToEdit: Review = reviews[index];
    setEditingIndex(index);
    setEditedFeedback(reviewToEdit.feedback);
  };

  const handleSaveEdit = () => {
    const updatedReviews = reviews.map((review, index) =>
      index === editingIndex ? { ...review, feedback: editedFeedback } : review
    );
    setReviews(updatedReviews);
    setEditingIndex(null);
    setEditedFeedback(""); 
  };

  interface DeleteHandler {
    (index: number): void;
  }

  const handleDelete: DeleteHandler = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-gray-700 text-center mb-6">User Profile</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Personal Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-medium">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="feedback" className="font-medium">Feedback</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              rows={4}
              placeholder="Share your thoughts here"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-500 text-white py-3 rounded-md hover:bg-slate-600 transition duration-200"
          >
            Submit Feedback
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-700 mb-4">User Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet!</p>
        ) : (
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 rounded-md shadow-md"
              >
                <p className="text-lg font-semibold">{review.name}</p>
                {editingIndex === index ? (
                  <div>
                    <textarea
                      value={editedFeedback}
                      onChange={(e) => setEditedFeedback(e.target.value)}
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4}
                    />
                    <button
                      onClick={handleSaveEdit}
                      className="mt-2 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                    >
                      Save Edit
                    </button>
                  </div>
                ) : (
                  <p className="mt-2">{review.feedback}</p>
                )}
                <p className="text-xs text-gray-400 mt-2">{review.date}</p>
                <div className="flex justify-between mt-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
