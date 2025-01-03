import { PropertyCard } from '@/components/property-card.';
import { getProperties } from '@/lib/actions';

type PropertyListProps = {
  priceFilter: string;
  modeFilter: string;
  typeFilter: string;
};

export const PropertiesList = async ({ priceFilter, modeFilter, typeFilter }: PropertyListProps) => {
  const properties = await getProperties();
  let displayedProperties = properties;

  if (priceFilter === 'all' && modeFilter === 'all' && typeFilter === 'all') {
    displayedProperties = properties;
  }
  if (modeFilter !== 'all') {
    displayedProperties = displayedProperties?.filter(property => property.model === modeFilter);
  }

  if (modeFilter === 'rent') displayedProperties = properties?.filter(property => property.model === 'rent');

  if (modeFilter === 'sale') displayedProperties = properties?.filter(property => property.model === 'sale');

  if (typeFilter === 'apartment') displayedProperties = properties?.filter(property => property.type === 'apartment');

  if (typeFilter === 'mansion') displayedProperties = properties?.filter(property => property.type === 'house');

  if (typeFilter === 'house') displayedProperties = properties?.filter(property => property.type === 'house');

  if (priceFilter === 'low-to-high') displayedProperties = displayedProperties?.sort((a, b) => a.price - b.price);

  if (priceFilter === 'high-to-low') displayedProperties = displayedProperties?.sort((a, b) => b.price - a.price);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
      {displayedProperties?.map(property => (
        <PropertyCard
          key={property.name}
          data={property}
        />
      ))}
    </div>
  );
};
