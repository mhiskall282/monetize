import React from 'react';
import TeamMember from '../components/team/TeamMember';
import { teamMembers } from '../data/team';

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-600">
            Meet the experts behind Monetize
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}