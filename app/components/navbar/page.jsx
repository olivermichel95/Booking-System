import React from "react";
  
 
const NavbarComponent = () => {
  return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-primary text-light p-3">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
        <li className="nav-item ">
          <a className="nav-link active text-white font-3" aria-current="page" href="/">Home</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link text-white w-50" href="/">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/products">product</a>
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
};

export default NavbarComponent;
