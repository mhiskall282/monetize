import React from 'react';
import { Wallet } from 'lucide-react';
import Button from '../ui/Button';

export default function ConnectWallet() {
  const handleConnect = async () => {
    // Simulated wallet connection
    console.log('Connecting wallet...');
  };

  return (
    <Button
      variant="secondary"
      icon={<Wallet className="w-4 h-4" />}
      onClick={handleConnect}
      className="ml-4"
    >
      Connect Wallet
    </Button>
  );
}