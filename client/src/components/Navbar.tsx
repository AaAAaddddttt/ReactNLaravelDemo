import { Link } from "react-router-dom";

const navbar = () => {
    const menuItems = [
        {
          title: 'Genders'
        },
        
        {title: 'Users'},

    ];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          RnL Demo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {menuItems.map((menuItem, index)=> (
            <li className="nav-item " key={index}>
              <Link className="nav-link" to="#">
                {menuItem.title}
              </Link>
            </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default navbar;
