import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Pongámonos en contacto: formas de conectarte conmigo.
						</div>

						<div className="subtitle contact-subtitle">
							Gracias por tu interés en ponerte en contacto conmigo. Aprecio tus comentarios,
							preguntas y sugerencias. Si tienes una consulta o comentario específico,
							no dudes en enviarme un correo directamente a&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}.
							</a><br />
							Gracias por tu interés en ponerte en contacto conmigo.
							Valoro mucho tus comentarios, preguntas y sugerencias, ya que siempre estoy abierto a nuevas ideas y conversaciones interesantes.
							Si tienes una consulta específica o deseas compartir alguna opinión, no dudes en escribirme directamente al correo previamente indicado.
							Hago un esfuerzo por responder a todos los mensajes en un plazo de 24 horas, aunque en períodos de mucho trabajo puede tomarme un poco más de tiempo.
							Aprecio tu paciencia y aseguro que cada mensaje recibido es leído con atención. Si tu consulta es detallada o requiere una respuesta más extensa,
							haré todo lo posible por brindarte una respuesta completa y útil.
							Además, si prefieres un contacto más dinámico, también puedes encontrarme en redes sociales, donde comparto actualizaciones y respondo a mensajes siempre que el tiempo lo permite.
							Tu opinión y tus preguntas son importantes para mí, así que no dudes en escribirme. ¡Espero tu mensaje y muchas gracias por tu interés!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
