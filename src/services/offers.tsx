import 'server-only';

import { db } from '@/lib/prisma';

export const fetchOffers = async () => {
  try {
    const offers = await db.offer.findMany({});
    return {
      count: 0,
      offers,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
