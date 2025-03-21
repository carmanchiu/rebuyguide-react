// Header.tsx
// import React from 'react';
import { Link } from 'react-router-dom';

// interface HeaderProps {
//   children: React.ReactNode;
// }

function Header() {
  return (
      <header>
        {/* <div> */}
          <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                  <Link to="/" className="navbar-brand">REBUYGUIDE</Link>
                  <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
              </div>
          </nav>
        {/* </div> */}
      </header>
  );
}

export default Header;