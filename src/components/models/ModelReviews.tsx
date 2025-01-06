import React from 'react';
import { Star, ThumbsUp, MessageCircle } from 'lucide-react';
import Card from '../ui/Card';

const reviews = [
  {
    id: 1,
    user: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    rating: 5,
    date: '2024-02-20',
    comment: 'Excellent model performance and easy integration. Highly recommended!',
    helpful: 24,
    replies: 3
  },
  {
    id: 2,
    user: 'Jane Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    rating: 4,
    date: '2024-02-18',
    comment: 'Good accuracy but could use better documentation.',
    helpful: 15,
    replies: 2
  }
];

export default function ModelReviews() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Reviews</h3>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-gold fill-current" />
            <span className="ml-1 font-semibold">4.5</span>
          </div>
          <span className="text-gray-500">(128 reviews)</span>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-start space-x-4">
              <img
                src={review.avatar}
                alt={review.user}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{review.user}</h4>
                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'text-gold fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <p className="mt-2 text-gray-600">{review.comment}</p>

                <div className="flex items-center space-x-4 mt-4">
                  <button className="flex items-center text-sm text-gray-500 hover:text-gold">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    Helpful ({review.helpful})
                  </button>
                  <button className="flex items-center text-sm text-gray-500 hover:text-gold">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Reply ({review.replies})
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 text-gold hover:text-yellow-600 font-medium">
        Show all reviews
      </button>
    </Card>
  );
}