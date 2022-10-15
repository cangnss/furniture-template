import { Menu2, Search } from "tabler-icons-react";

export default function Header() {
  return (
    <header>
      <nav className="w-full fixed top-0 bg-white">
        <div className="container mx-auto py-5 flex items-center justify-between">
          <div>
            <span className="text-2xl text-sky-700 font-bold">furni.shop</span>
          </div>
          <div className="items-center">
            <ul className="flex space-x-8">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Search size={24} strokeWidth={2} color={"gray"} />
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
