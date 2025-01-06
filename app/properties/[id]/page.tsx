import { Property } from '@/components/property';
import { getProperty } from '@/lib/actions';

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const property = await getProperty(id);

  if (!property) return <div className='flex items-center justify-center min-h-screen text-3xl'>Property not found</div>;

  return (
    <section className='container my-52'>
      <Property data={property} />
    </section>
  );
}

export default Page;
