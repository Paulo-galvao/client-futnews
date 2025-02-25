import "./Navbar.css"

export default function Navbar() {
    return <>
        <nav>
            <div className="navbar-logo">
                <span>FutNews</span>
                <img src="/home/bola-logo.png" alt="bolinha" />
            </div>
            <div className="options">
                <div className="navbar-login">
                    <button className="login">Login
                        <i className='bx bx-log-in'></i>
                    </button>
                 </div>
                <div className="navbar-search">
                    <input type="text" placeholder="Procure por um título" />
                    <i className='bx bx-search-alt'></i>
                </div>
            </div>
        </nav>
    </>
}