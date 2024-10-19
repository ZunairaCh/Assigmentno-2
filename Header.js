import styles from "./Header.module.css";

const Header = () => {
    return (
        <><div className={styles.header}>
            <h1>Zunaira Chouhdry</h1>
            <nav>
                <ul className="{style.nav} gap-10 lg:gap-16 hidden md:flex"> 
                    <li className="menuLink"><a href="#home">Home</a></li>
                    <li className="menuLink"><a href="#about">About</a></li>
                    <li className="menuLink"><a href="#services">Services</a></li>
                    <li className="menuLink"><a href="#contact">Contact</a></li>
                </ul>
                <div className="container pt-8">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-medium"></div>
                    </div>
                </div>
            </nav>
        </div></>

                    
    )
}

export default Header;
