import CatalogPage from './CatalogPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catalog',
  description: 'Explore campers available for rent.',
};

const Page = () => {
  return <CatalogPage />;
};

export default Page;
