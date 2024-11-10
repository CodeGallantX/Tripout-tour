
const Logo = () => {
    return (
        <div>
            <a href="/" className="flex items-center gap-3">
            <div className="relative z-30">
                <img src="/logo-rm.png" alt="logo" className="h-10 w-auto" />
                    <span className="absolute inset-0 rounded-full bg-white -z-10 px-5 py-5"></span>
            </div>
                <span className="text-xl text-white font-bold">Tripout</span>
            </a>
        </div>
    )
}

export default Logo
