import type { Metadata } from 'next';
import { getCamperById } from '@/lib/api/campers';
import CamperDetailsPage from './CamperDetailsPage';

type PageProps = {
  params: Promise<{
    camperId: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { camperId } = await params;
  const camper = await getCamperById(camperId);

  return {
    title: `${camper.name} | TravelTrucks`,
    description: camper.description,
  };
}

const Page = async ({ params }: PageProps) => {
  const { camperId } = await params;

  return <CamperDetailsPage camperId={camperId} />;
};

export default Page;
