'use client';
import { useQuery } from '@tanstack/react-query';

const fetchOffers = async (queryParams: string) => {
  try {
    const response = await fetch(`/api/offers?${queryParams}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const useOffersQuery = (queryParams: string) => {
  return useQuery({
    queryKey: ['offers'],
    queryFn: () => fetchOffers(queryParams),
  });
};
