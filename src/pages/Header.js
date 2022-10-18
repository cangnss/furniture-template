import { Menu2, Search } from "tabler-icons-react";

export default function Header() {
  return (
    <header className="z-10">
      <nav className="w-full fixed top-0 bg-white">
        <div className="container mx-auto py-5 flex justify-between">
          <div>
            <span className="text-2xl text-sky-700 font-bold">furni.shop</span>
          </div>
          <div className="items-center">
            <ul className="flex space-x-8">
              <li className="text-xl hover:text-slate-600">
                <a href="">Home</a>
              </li>
              <li className="text-xl hover:text-slate-600">
                <a href="">About</a>
              </li>
              <li className="text-xl hover:text-slate-600">
                <a href="">Features</a>
              </li>
              <li className="text-xl hover:text-slate-600">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Search size={28} strokeWidth={2} color={"black"} />
            <Menu2
              size={32}
              strokeWidth={2}
              color={"black"}
              className="md:hidden"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
