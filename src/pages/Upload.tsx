import React, { useState } from 'react';
import { Upload as UploadIcon, FileCode, Cpu, Shield } from 'lucide-react';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Select from '../components/ui/Select';

export default function Upload() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    license: '',
    file: null
  });

  const categories = [
    { value: 'computer-vision', label: 'Computer Vision' },
    { value: 'nlp', label: 'Natural Language Processing' },
    { value: 'robotics', label: 'Robotics' },
    { value: 'generative-ai', label: 'Generative AI' }
  ];

  const licenses = [
    { value: 'commercial', label: 'Commercial' },
    { value: 'academic', label: 'Academic' },
    { value: 'personal', label: 'Personal' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle model upload
    console.log('Uploading model:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Upload Your AI Model</h1>
          <p className="text-xl text-gray-600">
            Share your innovation with the world and start earning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <FileCode className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Smart Contracts</h3>
            <p className="text-gray-600">Automated licensing and payments</p>
          </Card>
          <Card className="p-6 text-center">
            <Cpu className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Model Verification</h3>
            <p className="text-gray-600">Quality and security checks</p>
          </Card>
          <Card className="p-6 text-center">
            <Shield className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="font-semibold mb-2">IP Protection</h3>
            <p className="text-gray-600">Blockchain-backed ownership</p>
          </Card>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit}>
            <Input
              label="Model Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              label="Description"
              as="textarea"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
            <Select
              label="Category"
              options={categories}
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
            />
            <Input
              label="Price (USD)"
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required
            />
            <Select
              label="License Type"
              options={licenses}
              value={formData.license}
              onChange={(e) => setFormData({ ...formData, license: e.target.value })}
              required
            />
            <Input
              label="Model File"
              type="file"
              onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] })}
              required
            />
            <Button
              type="submit"
              variant="primary"
              className="w-full mt-6"
              icon={<UploadIcon className="w-4 h-4" />}
            >
              Upload Model
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}