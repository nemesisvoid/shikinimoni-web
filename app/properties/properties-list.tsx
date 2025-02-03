import { PropertyCard } from '@/components/property-card.';
import { PropertyType } from '@/types/appwrite.types';

type PropertyListProps = {
  priceFilter?: string;
  modeFilter?: string;
  data: PropertyType[] | undefined;
};

export const PropertiesList = ({ data, priceFilter, modeFilter }: PropertyListProps) => {
  let displayedProperties = data;
  console.log('dis', displayedProperties);

  // if (priceFilter === 'all') {
  //   displayedProperties = data;
  // }
  // Apply mode filter
  // if (modeFilter && modeFilter !== 'all') {
  //   displayedProperties = displayedProperties?.filter(property => property.model === modeFilter);
  // }
  switch (modeFilter) {
    case 'rent':
      displayedProperties = displayedProperties?.filter(property => property.model === 'rent');
      break;
    case 'sale':
      displayedProperties = displayedProperties?.filter(property => property.model === 'sale');
      break;
    case 'all':
    default:
      break;
  }

  switch (priceFilter) {
    case 'low-to-high':
      displayedProperties = displayedProperties?.sort((a, b) => a.price - b.price);
      break;
    case 'high-to-low':
      displayedProperties = displayedProperties?.sort((a, b) => b.price - a.price);
  }

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
