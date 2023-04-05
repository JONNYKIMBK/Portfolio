import styles from "./Resume.module.css";

export default function Resume() {
  return (
    <div className={styles.body}>
      <div className={styles.resume}>
        <div className={styles.first}>
          <div className={styles.name}>Jonathan Kim</div>
          <p>
            Hola, mi nombre es Jonathan, y soy un desarrollador web Full Stack
            de Posadas, Misiones, Argentina. Recientemente, he completado un
            bootcamp de más de 800 horas de programación, y actualmente estoy
            ampliando mis habilidades técnicas a través de una tecnicatura en
            análisis de sistemas.
          </p>
          <p>
            Anteriormente, estudié Ciencias Económicas, específicamente la
            carrera de Contador Público, y trabajé en el e-commerce de una
            empresa líder en productos eléctricos e iluminación. En esa
            posición, fui responsable de mantener la página web y de cargar
            todos los productos que vendían, lo que me permitió adquirir
            valiosas habilidades en atención al cliente y en el mundo
            empresarial.
          </p>
          <p>
            Actualmente, estoy buscando una empresa innovadora donde pueda
            combinar mis habilidades en programación con mi experiencia previa
            para desarrollarme en puestos de nivel junior en Frontend o Backend.
            Estoy muy emocionado por las oportunidades que me puedan ofrecer y
            estoy seguro de que podré aportar valor a cualquier proyecto en el
            que participe.
          </p>
        </div>

        <div className={styles.second}>
          <p className={styles.titles}>Habilidades técnicas:</p>
          <div className={styles.resume}>
            <div className={styles.first}>
              <p>Lenguajes:</p>

              <ul>
                <li>Javascript</li>
                <li>Typescript</li>
              </ul>

              <p>Backend:</p>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>
            <div className={styles.first}>
              <p>Frontend:</p>
              <ul>
                <li>React.js</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Material UI</li>
              </ul>
              <p>Bases de datos:</p>
              <ul>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
          <p className={styles.titles}>Habilidades blandas:</p>
          <ul>
            <li>Gestión del tiempo</li>
            <li>Trabajo en equipo</li>
            <li>Adaptabilidad al cambio</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
