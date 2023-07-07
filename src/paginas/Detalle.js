
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../componentes/contenido_eficacia';
import About from '../componentes/tabla';
import TabsInternas from '../componentes/tabs-1';
import "../css/sb-admin-2.css"
import "../css/sb-admin-2.min.css"
import Contenido_eficacia from '../componentes/contenido_eficacia';
import Contenido_eficiencia from '../componentes/contenido_eficiencia';
import Pie from '../componentes/estaticos/pie';
import deleteData from '../api/eliminar';
import fetchData from '../api/listar';
import guardarTareas from '../api/guardar_tareas';
import { Button } from 'react-bootstrap';
import obtenerSoft from '../api/obtener_soft';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faTasks, faTimes, faHourglass, faComments, faCheckDouble, faArrowCircleLeft, faHamburger } from '@fortawesome/free-solid-svg-icons';
import Tabla from '../componentes/tabla';
import Instrucciones from '../componentes/estaticos/instrucciones';
import Contenido_sat_puntajes from '../componentes/contenido_sat_puntajes';
import Contenido_sat_comentarios from '../componentes/contenido_sat_comentarios';
import Contenido_usabilidad from '../componentes/contenido_usabilidad';

export default function Detalle({ }) {

  const { id } = useParams();
  const [soft, setSoft] = useState([]);

  //0 es ninguna tab sel default, 1 eficacia, 2 eficiencia, 3 puntajes, 4 comentarios, 5 usabilidad
  const [tabSelected, setTabSelected] = useState(0);


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      const sidebarCollapse = document.querySelector('.sidebar .collapse');
      if (sidebarCollapse) {
        sidebarCollapse.classList.remove('show');
      }
    }

    if (windowWidth < 480) {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar && !sidebar.classList.contains('toggled')) {
        document.body.classList.add('sidebar-toggled');
        sidebar.classList.add('toggled');

        const sidebarCollapse = document.querySelector('.sidebar .collapse');
        if (sidebarCollapse) {
          sidebarCollapse.classList.remove('show');
        }
      }
    }
  }, [windowWidth]);


  useEffect(() => {

    const obtnerSoftware = async () => {
      try {
        const data = await obtenerSoft(id);
        setSoft(data);
      } catch (error) {
        console.error('Error al obtener el soft:', error);
      }
    };

    obtnerSoftware();
  }, []);

  const handleTabSelected = (tab) => {
    if (tab < 1 || tab > 5) return;
    setTabSelected(tab);
  }

  //const soft = getSoft();
  /* 
    const soft = () => {
      try {
        const soft = obtenerSoft(id);
        console.log("soft", soft);
        return soft;
      } catch (error) {
        console.log("Error al obtener soft", error.message);
      }
    } */

  async function guardar(idn) {

    //console.log("idn", idn);

    try {

      const tablaValores = [
        [5, 4, 3],
        [5, 3, 2],
        [2, 4, 3],
        [2, 1, 3],
        [3, 2, 3],
        [4, 4, 2]
      ];


      const resp = await guardarTareas(idn, tablaValores);

      console.log("Guardado exitoso", resp);

    } catch (error) {

      console.log("Guardado fallido:", error.message);
      //handleToast(true, "Eliminación fallida", "danger");

    }
  }

  return (
    <>

      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <FontAwesomeIcon icon={faHamburger} />
      </button>

      {/* Page Wrapper */}
      <div id="wrapper">







        {/* Sidebar */}
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* Sidebar - Brand */}

          <div style={{ marginTop: 20, textAlign: "center" }}>
            <h5
              className='d-flex justify-content-center'
              style={{ color: 'white' }}>
              <b>
                {soft.nombre}
              </b>
            </h5>

            <span
              className='small d-flex align-items-center justify-content-center'
              style={{ color: 'white', marginBottom: 10 }}>Version {soft.version}
            </span>

          </div>

          {/* <a className="d-flex align-items-center justify-content-center" style={{ marginTop: 20 }}>
            <div className="mx-3">
              {soft.nombre}
              <p className=''>Version 1.0</p>
            </div>
          </a> */}


          {/* Divider */}
          <hr style={{ height: 4, backgroundColor: "white" }}
            className="sidebar-divider my-1" />

          {/* Nav Item */}
          <li className={`nav-item ${tabSelected == 1 ? "active" : ""}`}>
            <a
              style={{ cursor: "pointer" }}
              className="nav-link"
              onClick={() => handleTabSelected(1)}
            >
              {/* <i className="fas fa-fw fa-tachometer-alt" />  */}
              <FontAwesomeIcon style={{ marginRight: 5 }} className="fas fa-fw" icon={faTasks} />
              <span>Eficacia</span>
            </a>
          </li>

          {/* Divider */}
          <hr style={{ height: 1, backgroundColor: "white" }}
            className="sidebar-divider my-1" />

          {/* Nav Item */}
          <li className={`nav-item ${tabSelected == 2 ? "active" : ""}`}>
            <a
              style={{ cursor: "pointer" }}
              className="nav-link"
              onClick={() => handleTabSelected(2)}
            >
              {/* <i className="fas fa-fw fa-tachometer-alt" />  */}
              <FontAwesomeIcon style={{ marginRight: 5 }} className="fas fa-fw" icon={faHourglass} />
              <span>Eficiencia</span>
            </a>
          </li>


          {/* Divider */}
          <hr style={{ height: 1, backgroundColor: "white" }}
            className="sidebar-divider my-1" />

          {/* Nav Item */}
          <li className={`nav-item ${tabSelected == 3 ? "active" : ""}`}>
            <a
              style={{ cursor: "pointer" }}
              className="nav-link"
              onClick={() => handleTabSelected(3)}
            >
              {/* <i className="fas fa-fw fa-tachometer-alt" />  */}
              <FontAwesomeIcon style={{ marginRight: 5 }} className="fas fa-fw" icon={faGaugeHigh} />
              <span>Satisfacción basada en puntajes</span>
            </a>
          </li>


          {/* Divider */}
          <hr style={{ height: 1, backgroundColor: "white" }}
            className="sidebar-divider my-1" />

          {/* Nav Item */}
          <li className={`nav-item ${tabSelected == 4 ? "active" : ""}`}>
            <a
              style={{ cursor: "pointer" }}
              className="nav-link"
              onClick={() => handleTabSelected(4)}
            >
              {/* <i className="fas fa-fw fa-tachometer-alt" />  */}
              <FontAwesomeIcon style={{ marginRight: 5 }} className="fas fa-fw" icon={faComments} />
              <span>Satisfacción basada en comentarios</span>
            </a>
          </li>


          {/* Divider */}
          <hr style={{ height: 4, backgroundColor: "white" }}
            className="sidebar-divider my-1" />


          {/* Nav Item */}
          <li className={`nav-item ${tabSelected == 5 ? "active" : ""}`}>
            <a
              style={{ cursor: "pointer" }}
              className="nav-link"
              onClick={() => handleTabSelected(5)}
            >
              {/* <i className="fas fa-fw fa-tachometer-alt" />  */}
              <FontAwesomeIcon style={{ marginRight: 5 }} className="fas fa-fw" icon={faCheckDouble} />
              <span className="last">Usabilidad</span>
            </a>
          </li>



          {/* <li className="nav-item">
            <Button onClick={() => guardar(id)}> OK </Button>
          </li> */}

          {/* Divider */}

          <hr style={{ height: 4, backgroundColor: "white" }}
            className="sidebar-divider d-none d-md-block" />

          {/* Sidebar Toggler (Sidebar) */}
          {/* <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" >
              <FontAwesomeIcon icon={faArrowCircleLeft} />
            </button>
          </div>*/}

        </ul>
        {/* End of Sidebar */}










        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">


          {/*   <Contenido tabSel={tabSelected} /> */}
          {/* {console.log("___________id_soft||||||||||||||||", id)} */}

          <div>
            {tabSelected === 0 && <Instrucciones />}
            {tabSelected === 1 && <Contenido_eficacia idSof={id} />}
            {tabSelected === 2 && <Contenido_eficiencia idSof={id} />}
            {tabSelected === 3 && <Contenido_sat_puntajes idSof={id} />}
            {tabSelected === 4 && <Contenido_sat_comentarios idSof={id} />}
            {tabSelected === 5 && <Contenido_usabilidad idSof={id} />}
          </div>



          {/* <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Your Website 2021</span>
              </div>
            </div>
          </footer> */}
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


