import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <Link to="/">
        <h1 className="text-2xl sm:text-4xl">🏡 MioCondominio</h1>
      </Link>
      <div className="bg-slate-100/50 py-2 px-3 rounded-full flex sm:space-x-2 items-center">
        <div className="text-sm truncate hidden sm:block">Tommaso</div>
        <div className="bg-cyan-500 border rounded-full h-6 w-6"></div>
      </div>
    </header>
  );
}

export default Header;
