import React from 'react';
import { Users, MessageSquare, Calendar, Award } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Community() {
  const events = [
    {
      title: 'AI Model Development Workshop',
      date: '2024-03-15',
      time: '2:00 PM UTC',
      type: 'Virtual'
    },
    {
      title: 'Blockchain & AI Integration Meetup',
      date: '2024-03-20',
      time: '3:00 PM UTC',
      type: 'Hybrid'
    }
  ];

  const forums = [
    {
      title: 'Model Development',
      topics: 245,
      posts: 1234
    },
    {
      title: 'Integration Help',
      topics: 189,
      posts: 867
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Community Hub</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <div className="flex items-center mb-6">
              <Calendar className="w-8 h-8 text-gold mr-4" />
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
            </div>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.title} className="border-b pb-4">
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-gray-600">
                    {event.date} at {event.time}
                  </p>
                  <p className="text-sm text-gold">{event.type}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Events
            </Button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-8 h-8 text-gold mr-4" />
              <h2 className="text-2xl font-bold">Discussion Forums</h2>
            </div>
            <div className="space-y-4">
              {forums.map((forum) => (
                <div key={forum.title} className="border-b pb-4">
                  <h3 className="font-semibold">{forum.title}</h3>
                  <p className="text-gray-600">
                    {forum.topics} topics · {forum.posts} posts
                  </p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Join Discussion
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}