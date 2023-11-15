import { getServerSession } from 'next-auth';

import { Dashboard } from '@/components/dashboard/dashboard';

import { redirect } from '@/navigation';

const DashboardPage = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect('/');
  }

  return <Dashboard />;
};

export default DashboardPage;
