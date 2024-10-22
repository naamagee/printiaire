// components/CheckoutWithUsernames.jsx
'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutWithUsernames({ price, quantity = 1 }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [usernames, setUsernames] = useState({
    pinterest: '',
    substack: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsernames(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          price, 
          quantity,
          usernames: {
            pinterest: usernames.pinterest.trim(),
            substack: usernames.substack.trim()
          }
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      
      await stripe.redirectToCheckout({
        sessionId,
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button 
        onClick={() => setOpen(true)} 
        className="w-full"
      >
        Buy Custom Magazine
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Your Custom Magazine</DialogTitle>
            <DialogDescription>
              Enter your Pinterest and Substack usernames so we can accurately curate a magazine that matches your style and interests.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="pinterest">Pinterest Username</Label>
              <Input
                id="pinterest"
                name="pinterest"
                placeholder="@your-pinterest"
                value={usernames.pinterest}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="grid w-full gap-1.5">
              <Label htmlFor="substack">Substack Username</Label>
              <Input
                id="substack"
                name="substack"
                placeholder="@your-substack"
                value={usernames.substack}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleCheckout} 
              disabled={loading || !usernames.pinterest || !usernames.substack}
            >
              {loading ? 'Processing...' : 'Continue to Checkout'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}