import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Limpa o erro ao digitar
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'O nome é obrigatório.';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'O email é obrigatório.';
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(formData.email)) {
            newErrors.email = 'O email não é válido.';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'A mensagem é obrigatória.';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Dados enviados:', formData);
            alert('Formulário enviado com sucesso!');
            setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
        }
    };

    return (
        <section id="contact" className="contact">
            <h2>Contato</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Seu email"
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Sua mensagem"
                        rows="5"
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit" className="submit-button">Enviar</button>
            </form>
        </section>
    );
};

export default Contact;
