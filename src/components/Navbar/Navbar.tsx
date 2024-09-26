export const Navbar = () => {
    return (
        <nav className="h-screen text-stone-50 flex flex-col bg-slate-900 border-r border-indigo-400/40 w-72 p2 gap-4">
          <div> 
            
            <img 
              className="max-w-full p-2" 
              src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png" 
              alt="Logo Emerson Broga" />
          </div>
          <ul className="flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
            <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">Home</li>
            <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">Games</li>
            <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">Top 10</li>
            <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">Walkthroughs</li>
          </ul>
          <ul className=" my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
            <li>User</li>
            <li></li>
            <li></li>
          </ul>
        </nav>
    )
}