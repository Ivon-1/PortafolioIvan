import React from "react";

function article_1() {
	return {
		date: "27/03/2025",
		title: "Los beneficios del cloud computing",
		description:
			"El cloud computing ofrece escalabilidad, acceso remoto y reducción de costos en infraestructura, permitiendo mayor flexibilidad y eficiencia en la gestión de datos y aplicaciones.",
		keywords: [
			"Los beneficios del cloud computing",
			"Ivan",
			"Ivan N",
			"Ivan N",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<h3>¿Cuáles son las ventajas de cloud computing?</h3>
						<p>
							Flexibilidad. Los usuarios pueden escalar los servicios para ajustarlos a sus necesidades, personalizar las aplicaciones y acceder a los servicios en la nube desde cualquier sitio con una conexión a internet.
						</p>
						<p>
							Eficiencia. Los usuarios empresariales pueden lanzar sus aplicaciones al mercado rápidamente, sin preocuparse por los costes de infraestructura subyacentes o del mantenimiento.
						</p>
						<p>
							Valor estratégico. Los servicios en la nube dan a las empresas una ventaja competitiva a través de la tecnología más innovadora disponible.
						</p>

						<h3>FLEXIBILIDAD</h3>
						<p>
							Escalabilidad: la infraestructura de nube se escala bajo demanda para dar soporte a las cargas de trabajo fluctuantes.
						</p>

						<p>
							Opciones de almacenamiento: los usuarios pueden elegir ofertas de almacenamiento público, privado o híbrido, en función de las necesidades de seguridad y otras consideraciones.
						</p>

						<p>
							Opciones de control: las organizaciones pueden determinar su nivel de control con opciones como servicio. Estas incluyen software como servicio (SaaS), plataforma como servicio (PaaS) e infraestructura como servicio (IaaS).
						</p>

						<h3>EFICIENCIA</h3>
						<p>
							Accesibilidad: las aplicaciones basadas en la nube y los datos son accesibles desde prácticamente cualquier dispositivo conectado a Internet.
						</p>

						<p>
							Rápida comercialización: el desarrollo en la nube permite a los usuarios lanzar sus aplicaciones al mercado rápidamente.

						</p>

						<p>
							Seguridad de los datos: los fallos de hardware no provocan pérdida de datos gracias a las copias de seguridad en red.
						</p>

						<h3>VALOR ESTRATÉGICO</h3>
						<p>
							Trabajo optimizado: los proveedores de servicios de nube (CSP, por sus siglas en inglés) gestionan la infraestructura subyacente, permitiendo a las organizaciones centrarse en el desarrollo de aplicaciones y otras prioridades.
						</p>

						<p>
							Actualizaciones periódicas: los proveedores de servicios actualizan las soluciones con regularidad para ofrecer a los usuarios la tecnología más actualizada.
						</p>

						<p>
							Colaboración: el acceso mundial significa que los equipos pueden colaborar desde muy diversas ubicaciones.
						</p>

						<p>
							Ventaja competitiva: las organizaciones se mueven con mayor agilidad que la competencia, que tiene que destinar los recursos de TI a la gestión de la infraestructura
						</p>
					</div>
					<img
						src="https://cdn.pixabay.com/photo/2022/12/23/01/25/steering-7673519_1280.jpg"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "26/03/2025",
		title: "Vibe Coding",
		description:
			"Cuando hablamos de vibe coding hablamos de un término acuñado por el experto en inteligencia artificial Andrej Karpathy para referirse a usar herramientas de IA para crear código en vez de que lo escriba una persona.",
		style: ``,
		keywords: [
			"Vibe Coding",
			"Ivan",
			"Ivan N",
			"Ivan N",
		],
		body: (
			<React.Fragment>
				<h1>¿Qué es el VIBE CODING?</h1>
				<p>Es como decir de una manera elegante que usas inteligencia artificial para crear el código, igual que si hubiera una palabra elegante para decir que tus dibujos los has hecho con ChatGPT, o que eres un "compositor" de música que usa Suno. Básicamente, en este concepto o método de trabajo consiste en que tú tienes una idea, y vas pidiéndole con lenguaje natural a un chat de inteligencia artificial que te cree código para hacer esto y lo otro. Así, la IA se encarga de generar el código mientras que tú supervisas el proceso haciendo las veces de mente creativa mediante prompts.</p>
				
				<h2>Ventajas del VIBE CODING</h2>
				<p>✅ Aumento de productividad – La IA ayuda a escribir código más rápido, generando sugerencias y completando fragmentos automáticamente.</p>
				<p>✅ Menos tareas repetitivas – Automatiza partes tediosas del código, permitiéndote enfocarte en la lógica y creatividad.</p>
				<p>✅ Aprendizaje acelerado – Facilita la comprensión de nuevas tecnologías y lenguajes al ofrecer ejemplos y explicaciones en tiempo real.</p>
				<p>✅ Depuración más rápida – Puede detectar errores y sugerir correcciones antes de que se conviertan en problemas mayores.</p>
				<p>✅ Prototipado ágil – Permite experimentar con ideas rápidamente sin escribir todo desde cero.</p>

				<h2>Desventajas del VIBE CODING</h2>
				<p>❌ Dependencia de la IA – Si te acostumbras demasiado, podrías perder habilidades fundamentales de programación.</p>
				<p>❌ Errores sutiles – La IA no siempre genera código óptimo o seguro, por lo que es necesario revisar y validar sus sugerencias.</p>
				<p>❌ Menos comprensión profunda – Si solo copias y pegas sin analizar, podrías no entender realmente cómo funciona el código.</p>
				<p>❌ Limitaciones creativas – Aunque la IA ayuda, puede limitar la exploración de soluciones innovadoras al basarse en patrones existentes.</p>
				<p>❌ Privacidad y seguridad – Algunas herramientas de IA pueden analizar tu código, lo que podría ser un riesgo en proyectos sensibles.</p>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
