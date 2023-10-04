const Header = () => {
    return (
        <div className="absolute sticky top-0">
            <div className="h-48 bg-slate-100"></div>
            <nav className="w-full bg-slate-900 flex justify-between text-white py-4 px-8">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </nav>
        </div>
    )
}

export default Header;