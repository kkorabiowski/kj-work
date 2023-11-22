import { getServerSession } from 'next-auth';

import { AddOffer } from '@/components/dashboard/components/add-offer';

import { redirect } from '@/navigation';

const AddOfferPage = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect('/');
  }

  return <AddOffer />;
};
export default AddOfferPage;
