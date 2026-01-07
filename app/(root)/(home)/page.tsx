import Header from '@/components/Header';
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import Filters from '@/components/ui/Filters'
import { getResources, getResourcesPlaylist } from '@/sanity/action'

  export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string |  undefined }
}

const page = async ({ searchParams }: Props) => {
  const resolvedSearchParams =  await searchParams;
  
  const resources = await getResources({
       query: resolvedSearchParams?.query || '',
       category: resolvedSearchParams?.category || '',
       page: 1
  })

  // ADD THIS LOG:
console.log("FIRST RESOURCE DATA:", JSON.stringify(resources[0], null, 2));

  const resourcePlaylist = await getResourcesPlaylist();
   

 // console.log(resourcePlaylist);
  
  return (
   <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
    <section className='nav-padding w-full'>
      <div className="flex-center relative min-h-68.5 w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
        <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
          JavaScript Mastery Resources</h1>
      </div>
      <SearchForm/>
    </section>
    
   < Filters/>

   {(resolvedSearchParams?.query || resolvedSearchParams?.category) && (
          <section className="flex-center mt-6 w-full flex-col sm:mt-20">
      <Header 
          title="Resources"
          query={resolvedSearchParams?.query || ''}
          category={resolvedSearchParams?.category || ''}
      />
       
      <div className="mt-12 flex w-full flex-wrap justify-center gap-16">
         {resources && resources.length > 0 ? (
            resources.map((resource: any, index: number) => (
             <ResourceCard 
               key={resource._id ?? `resource-${index}`}
              title={resource.title}
              id={resource._id}
              image={resource.image}
              downloadNumber={resource.views}
              downloadLink={resource.downloadLink}
              /> 
            ))
          ): (
            <p className="body-regular text-white-400">
             No resources found
            </p>
          )} 

      </div>


   </section> 
   )}

    {resourcePlaylist?.map((item: any, itemIndex: number) => (
      <section
       key={item._id ??  `playlist-${itemIndex}`}
        className="flex-center mt-6 w-full flex-col sm:mt-20">
         <h1 className="heading3 self-start text-white-800">
          {item.title}
         </h1>
         <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
             {item.resources?.map((resource: any, resIndex: number) => (
             <ResourceCard 
               key={resource._id ?? `${item._id}-${resIndex}`} 
              title={resource.title}
              id={resource._id}
              image={resource.image}
              downloadNumber={resource.views}
              downloadLink={resource.downloadLink}
              /> 
            ))}
         </div>
      </section>
    ))}
          
  </main> 
  )
}

export default page  

