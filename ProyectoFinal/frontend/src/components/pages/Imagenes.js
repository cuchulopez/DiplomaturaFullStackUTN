import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ImagenItem } from '../layouts/imagenes/ImagenItem'

export const Imagenes = () => {

    const [loading, setLoading] = useState(false);
    const [imagenes, setImagenes] = useState([]);
    
    useEffect(() => {
        const cargarImagenes = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3100/api/imagenes');
            setImagenes(response.data);
            setLoading(false);
        };

        cargarImagenes();
    }, []);

    return (
        <div className="contenido">
            <h1>Imagenes</h1>

            <div class="col-xl-12 d-flex align-items-stretch">
                <div class="imagenes d-flex flex-column justify-content-center">
                    <div class="row">

                    { loading ? (
                                <p>Cargando ... </p>
                            ) : (
                                imagenes.map(imagen => 
                                    <ImagenItem
                                        key = { imagen.id }
                                        image_id = { imagen.imagen_id }
                                        description = { imagen.descripcion }
                                    />
                                
                                )
                            )}

                    </div>
                </div>
            </div>


        </div>
    )
}
