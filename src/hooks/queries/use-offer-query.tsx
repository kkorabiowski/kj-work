'use client';

import { useQuery } from '@tanstack/react-query';

const getOffer = async (offerId: string) => {
  try {
    const response = await fetch('/api/offers/' + offerId);
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch');
  }
};

export const useOfferQuery = (offerId: string) => {
  return useQuery({ queryKey: ['offer'], queryFn: () => getOffer(offerId) });
};
