// This file is a Server Component, so it can fetch data and generate static paths.
import { notFound } from 'next/navigation';
import { portfolioItems } from '@/lib/portfolio-data';
import PortfolioDetail from '@/components/portfolio/portfolio-detail';

// This function generates the static paths for each portfolio item at build time.
export function generateStaticParams() {
    return portfolioItems.map((item) => ({
      slug: item.slug,
    }));
}

export default function PortfolioItemPage({ params }: { params: { slug: string } }) {
  // Find the specific portfolio item based on the slug from the URL.
  const item = portfolioItems.find((p) => p.slug === params.slug);

  // If no item is found, display the 404 page.
  if (!item) {
    notFound();
  }

  // Render the client component, passing the portfolio item data as props.
  return <PortfolioDetail item={item} />;
}
