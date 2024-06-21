'use client';

type CheckoutButtonProps = {
    email: string;
    price_id: string;
};

import React from 'react';
import { useRouter } from 'next/navigation';

const CheckoutButton = (props :CheckoutButtonProps) => {
    const router = useRouter();

    const handleCheckout = async () => {
        try {
            // Make a POST request to the API route
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    priceId: props.price_id,
                    email: props.email,
                }),
            });

            const { url } = await response.json();

            // Redirect to the Stripe checkout page
            router.push(url);
        } catch (error) {
            console.error('Error redirecting to checkout:', error);
        }
    };

    return (
        <button onClick={handleCheckout} className="bg-blue-500 text-white py-2 px-4 rounded">
            Proceed to Checkout
        </button>
    );
};

export default CheckoutButton;
