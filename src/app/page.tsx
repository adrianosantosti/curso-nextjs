// import articles from '@/data/articles.json';
import Article from '@/libs/database/Articles';
import Image from 'next/image';

export default async function Home() {

  // const highlightedArticles = await Article.get({ limite: 4 });
  // const articles = await Article.get({ limite: 10, offset: 4 });
  const articles = await Article.get({ orderBy: { publishedAt: 'desc' }, limite: 14 });
  const highlightedArticles = articles.slice(0,4);
  const listArticles = articles.slice(4);
  // console.log('home: ', articles);


  return (
    <div className="ml-72">
      <div className="w-full h-[35vh] bg-orange-400 flex-center">
        <p>Algo chamativo</p>
      </div>

      <div className="container mx-auto my-6">
        <div className="grid grid-cols-4 gap-4 h-[35vh]">
          {highlightedArticles.map((article) => {
            return (
            <div key={article.title} className='flex-center relative overflow-hidden'>
              <div className='h-full w-full'>
              <Image className='h-full w-full object-cover transition duration-500 hover:scale-105 rounded-r-lg'
                        src={`/assets/images/articles/${article.image}`} alt={article.title} width={600} height={400} />
              </div>
              <p className='absolute bottom-0 pt-6 pb-2 px-2 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent w-full'>
              {article.id}-{article.title}
              </p>
            </div>
            )
          })}

          {/* <div className="flex-center bg-indigo-500">A</div>
          <div className="flex-center bg-purple-500">B</div>
          <div className="flex-center bg-blue-500">C</div>
          <div className="flex-center bg-emerald-500">D</div> */}
        </div>
      </div>

      <div className="container mx-auto my-6">
        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-8  flex flex-col gap-4">

            {
            listArticles.map((article) => {
                return(
                  <div key={article.title} className="flex bg-slate-800 rounded-md py-4">
                    <div className='flex items-center'>

                      <div className='h-40 rounded-r-lg overflow-hidden'>
                        <Image className='h-full w-full object-cover transition duration-500 hover:scale-105 rounded-r-lg'
                        src={`/assets/images/articles/${article.image}`} alt={article.title} width={600} height={400} />
                      </div>
                      
                    </div>

                    <div className="w-full flex flex-col gap-2 pl-4">
                      <h2 className="text-3xl mb-4 text-indigo-400">{article.id}-{article.title}</h2>
                      <p className="flex-grow">{article.publishedAt.toISOString()}</p>
                      <p className="flex-grow">{article.excerpt}</p>
                      <button className='bg-slate-700 hover:bg-indigo-400/40 rounded-lg px-4 py-2 inline max-w-max'>Ler mais</button>
                    </div>
                  </div>
                )
              })
            }

          </div>
          <div className="col-span-4 bg-purple-500">
            b
          </div>
         
        </div>
      </div>

    </div>
  )
}
