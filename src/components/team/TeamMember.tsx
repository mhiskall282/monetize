import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Card from '../ui/Card';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export default function TeamMember({
  name,
  role,
  image,
  bio,
  social
}: TeamMemberProps) {
  return (
    <Card className="p-6">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-center mb-1">{name}</h3>
      <p className="text-gray-600 text-center mb-3">{role}</p>
      <p className="text-gray-600 text-center mb-4">{bio}</p>
      
      <div className="flex justify-center space-x-4">
        {social.github && (
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gold transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
        {social.linkedin && (
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gold transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {social.twitter && (
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gold transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        )}
      </div>
    </Card>
  );
}