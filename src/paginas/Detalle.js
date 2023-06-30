
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../componentes/navbar';
import Home from '../componentes/contenido';
import About from '../componentes/tabla';
import TabsInternas from '../componentes/tabs';
import Sidebar from '../componentes/sidebar';
import "../css/sb-admin-2.css"
import "../css/sb-admin-2.min.css"
import Contenido from '../componentes/contenido';
import Pie from '../componentes/estaticos/pie';

function Detalle({ }) {

  const { id } = useParams();

  return (
    <>
      {/* Page Wrapper */}
      <div id="wrapper">



        {/* Sidebar */}
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* Sidebar - Brand */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" style={{ marginTop: 20 }}>
            <div className="sidebar-brand-text mx-3">
              Nombre
              <p className='small text-secondary'>Version 1.0</p>
            </div>
          </a>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Dashboard */}
          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span>
            </a>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">Interface</div>
          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="fas fa-fw fa-cog" />
              <span>Components</span>
            </a>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="buttons.html">
                  Buttons
                </a>
                <a className="collapse-item" href="cards.html">
                  Cards
                </a>
              </div>
            </div>
          </li>
          {/* Nav Item - Utilities Collapse Menu */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              <i className="fas fa-fw fa-wrench" />
              <span>Utilities</span>
            </a>
            <div
              id="collapseUtilities"
              className="collapse"
              aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Utilities:</h6>
                <a className="collapse-item" >
                  Colors
                </a>
                <a className="collapse-item" >
                  Borders
                </a>
                <a className="collapse-item" >
                  Animations
                </a>
                <a className="collapse-item" >
                  Other
                </a>
              </div>
            </div>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">Addons</div>
          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="true"
              aria-controls="collapsePages"
            >
              <i className="fas fa-fw fa-folder" />
              <span>Pages</span>
            </a>
            <div
              id="collapsePages"
              className="collapse"
              aria-labelledby="headingPages"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Login Screens:</h6>
                <a className="collapse-item" href="login.html">
                  Login
                </a>
                <a className="collapse-item" href="register.html">
                  Register
                </a>
                <a className="collapse-item" href="forgot-password.html">
                  Forgot Password
                </a>
                <div className="collapse-divider" />
                <h6 className="collapse-header">Other Pages:</h6>
                <a className="collapse-item" href="404.html">
                  404 Page
                </a>
                <a className="collapse-item" href="blank.html">
                  Blank Page
                </a>
              </div>
            </div>
          </li>
          {/* Nav Item - Charts */}
          <li className="nav-item">
            <a className="nav-link" href="charts.html">
              <i className="fas fa-fw fa-chart-area" />
              <span>Charts</span>
            </a>
          </li>
          {/* Nav Item - Tables */}
          <li className="nav-item">
            <a className="nav-link" href="tables.html">
              <i className="fas fa-fw fa-table" />
              <span>Tables</span>
            </a>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />
          {/* Sidebar Toggler (Sidebar) */}
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" />
          </div>
          {/* Sidebar Message */}
          <div className="sidebar-card d-none d-lg-flex">
            <img
              className="sidebar-card-illustration mb-2"
              alt="..."
            />
            <p className="text-center mb-2">
              <strong>SB Admin Pro</strong> is packed with premium features,
              components, and more!
            </p>
            <a
              className="btn btn-success btn-sm"
              href="https://startbootstrap.com/theme/sb-admin-pro"
            >
              Upgrade to Pro!
            </a>
          </div>
        </ul>
        {/* End of Sidebar */}



        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">


          <Contenido />


          {/* Footer 
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Your Website 2021</span>
              </div>
            </div>
          </footer>*/}
          <Pie />
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
    </>


    /*  <div className="row">
       <div className="container-fluid"> 
         <h1>{id}</h1>
         <div className="col-2">
           <Sidebar />
         </div>
         <div id="centro" className="col-10">
           <TabsInternas />
 
                     <Routes>
                         <Route path="/detalles/:id" Component={About} />
                         <Route exact path="home" Component={Home} />
                         
                       </Routes> 
         </div>
       </div>
     </div> */
  );
}

export default Detalle;