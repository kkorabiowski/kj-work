'use client';
import { useQuery } from '@tanstack/react-query';

const fetchOffers = async (queryParams?: string) => {
  try {
    const response = await fetch(
      `/api/offers${queryParams ? `?${queryParams}` : ''}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const useOffersQuery = (queryParams?: string) =>
  useQuery({
    queryKey: ['offers'],
    queryFn: () => fetchOffers(queryParams),
  });
