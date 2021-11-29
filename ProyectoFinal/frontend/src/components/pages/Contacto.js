import React, {useState} from 'react';
import axios from 'axios';

export const Contacto = () => {

    const initialForm = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData =>({
            ...oldData,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3100/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false){
            setFormData(initialForm);
        }
    }

    return (
        <div className="contenido">
            <div className="section-title">
                <h2>Contacto</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className="row justify-content-center">
                {/* <div className="col-lg-6 ">
                    <div className="mapa">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6598.6875405122955!2d-56.693663660288856!3d-36.54405830750999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc7d97fe495ee016c!2sDepartamentos%20Belsole!5e0!3m2!1ses-419!2sar!4v1629752215197!5m2!1ses-419!2sar" />                         */}
                    {/* </div>
                </div> */}

                <div className="col-lg-6 ">
                    <form className="formulario" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="text" name="name" id="name" className="form-control"  placeholder="Nombre" value = {formData.name} onChange={handleChange} required></input>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email"  name="email" id="email" className="form-control" placeholder="Correo electrónico" value = {formData.email} onChange={handleChange} required></input>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" name="subject" id="subject" className="form-control" placeholder="Asunto"  value = {formData.subject} onChange={handleChange} required></input>
                        </div>
                        <div className="form-group mt-3">
                            <textarea name="message" id="message" className="form-control" value = {formData.message} onChange={handleChange} rows="5" placeholder="Mensaje" required></textarea>
                        </div>
                        { sending ? <p>Enviando...</p> : null }
                        { msg ? <p>{ msg }</p> : null }

                        <div className="text-center my-6">
                            <button className="envio-msj" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
