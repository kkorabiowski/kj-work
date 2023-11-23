'use client';
import { useQuery } from '@tanstack/react-query';

const fetchOffers = async () => {
  try {
    const response = await fetch('/api/offers/home');
    const data = await response.json();
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export const useHomeOffersQuery = () => {
  return useQuery({ queryKey: ['home-offers'], queryFn: fetchOffers });
};
