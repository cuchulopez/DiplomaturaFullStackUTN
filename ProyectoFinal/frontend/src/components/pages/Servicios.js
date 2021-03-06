import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ServicioItem } from '../layouts/servicios/ServicioItem'



export const Servicios = (props) => {

    const [loading, setLoading] = useState(false);
    const [servicios, setServicios] = useState([]);
    
    useEffect(() => {
        const cargarServicios = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3100/api/servicios');
            setServicios(response.data);
            setLoading(false);
        };

        cargarServicios();
    }, []);

    return (
        <div className="contenido">
            
            <div className="row">
                <div className="content col-xl-5 d-flex align-items-stretch">
                    <div className="content">
                        <h3>Nuestros servicios</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                        </p>
                    </div>
                </div>
                <div className="col-xl-7 d-flex align-items-stretch">
                    <div className="servicio d-flex flex-column justify-content-center">
                        <div className="row">

                            { loading ? (
                                <p>Cargando ... </p>
                            ) : (
                                servicios.map(servicio => 
                                    <ServicioItem
                                        key = { servicio.id }
                                        icon = { servicio.icono }
                                        title = { servicio.titulo }
                                        description = { servicio.descripcion }
                                    />
                                
                                )
                            )}
                        </div>
                   </div>
              </div>
            </div>
        </div>
    )
}
