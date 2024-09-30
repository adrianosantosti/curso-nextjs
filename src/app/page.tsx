import articles from '@/data/articles.json';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="ml-72">
      <div className="w-full h-[35vh] bg-orange-400 flex-center">
        <p>Algo chamativo</p>
      </div>

      <div className="container mx-auto my-6">
        <div className="grid grid-cols-4 gap-4 h-[35vh]">
          <div className="flex-center bg-indigo-500">A</div>
          <div className="flex-center bg-purple-500">B</div>
          <div className="flex-center bg-blue-500">C</div>
          <div className="flex-center bg-emerald-500">D</div>
        </div>
      </div>

      <div className="container mx-auto my-6">
        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-8  flex flex-col gap-4">

            {
            articles.map((article) => {
                return(
                  <div key={article.title} className="flex bg-slate-800 rounded-md py-4">
                    <div>
                      <Image className='h-full w-full object-cover transition duration-500 hover:scale-105 rounded-r-lg'
                      src={`/assets/images/articles/${article.image}`} alt={article.title} width={600} height={400} />
                    </div>

                    <div className="flex flex-col gap-2 py-4">
                      <h2 className="text-3xl">{article.title}</h2>
                      <p className="flex-grow">{article.excerpt}</p>
                      <button>Ler mais</button>
                    </div>
                  </div>
                );
              })
            };

          

          </div>
          <div className="col-span-4 bg-purple-500">
            b
          </div>
         
        </div>
      </div>

    </div>
  );
}
