'use client';
import { useQuery } from '@tanstack/react-query';

const fetchOffers = async () => {
  try {
    const response = await fetch('/api/offers');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useOffersQuery = () => {
  return useQuery({ queryKey: ['offers'], queryFn: fetchOffers });
};
