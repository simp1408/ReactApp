const Footer = function(){
    
    const d = new Date();
    let year = d.getFullYear();
    
    return (
        <footer className="fixed-bottom text-bg-secondary text-center">
            <p className="my-3">&copy; Simone Ponzani {year}</p>
        </footer>
    )
}

export default Footer;