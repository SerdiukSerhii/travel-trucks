import CamperDetailsPage from './CamperDetailsPage';

type PageProps = {
  params: Promise<{
    camperId: string;
  }>;
};

const Page = async ({ params }: PageProps) => {
  const { camperId } = await params;
  return <CamperDetailsPage camperId={camperId} />;
};

export default Page;
