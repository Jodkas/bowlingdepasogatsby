import * as React from 'react';
import * as styles from '../styles/pages/historia.module.css';
import boloMain from '../assets/images/pelotaHistoria.webp';
import tijeras from '../assets/images/tijeras.webp';
import confetis from '../assets/images/confetis.webp';
import circuloNegado from '../assets/images/circuloNegado.webp';
import inauguracion from '../assets/images/inauguracion.webp';
import cierre from '../assets/images/cierre.webp';
import abrimos from '../assets/images/abrimos.webp';
import useIntersection from '../useIntersection';

export default function Historia() {
  const [elementRef, isVisible] = useIntersection({
    treshold: 0,
  });
  const [elementRef2, isVisible2] = useIntersection({
    treshold: 0,
  });
  return (
    <>
      <main className={styles.main}>
        <div ref={elementRef} isvisible={isVisible ? 'true' : 'false'}>
          <img
            src={boloMain}
            alt="pelota de bowling con transparencia"
            loading="lazy"
          />
          <header ref={elementRef2} isvisible={isVisible2 ? 'true' : 'false'}>
            <h1>historia</h1>
            <p>de nuestro bowling</p>
          </header>
        </div>
      </main>
      <article className={styles.article}>
        <div></div>
        <section className={styles.sectionsList}>
          <section>
            <img src={tijeras} alt="" />
            <div>
              <h2>14 de Septiembre 1988</h2>
              <p>
                ¡El comienzo de una leyenda! En la emblemática Avenida{' '}
                <b>Paso y Santa Fe</b>, dimos vida a nuestro querido{' '}
                <b>bowling</b>. Aquel día, marcado en la historia, inauguramos
                un espacio de diversión sin igual. Desde entonces, hemos sido el
                punto de encuentro para amantes del <b>bowling</b> de todas las
                edades. Nuestro compromiso inquebrantable es brindar
                experiencias excepcionales y momentos inolvidables. ¡Únete a
                nosotros y forma parte de nuestra historia en constante
                crecimiento!
              </p>
              <img src={inauguracion} alt="" />
            </div>
          </section>
          <section>
            <img src={circuloNegado} alt="" />
            <div>
              <h2>8 de Agosto 2022</h2>
              <p>
                <b>Cerramos temporalmente</b> nuestro querido bowling debido a
                desafíos económicos, una decisión difícil y devastadora para
                nuestro equipo y comunidad de jugadores. A pesar de ello,
                estamos comprometidos en encontrar soluciones y reabrir en un
                futuro cercano. Agradecemos el apoyo y comprensión durante este
                periodo difícil y esperamos recibirlos nuevamente para crear
                momentos inolvidables juntos.
              </p>
              <img src={cierre} alt="" />
            </div>
          </section>
          <section>
            <img src={confetis} alt="" />
            <div>
              <h2>10 de Marzo 2023</h2>
              <p>
                ¡<b>Estamos de vuelta y en un lugar mejor!</b> Después de
                superar desafíos económicos, hemos reabierto en{' '}
                <b>Cordoba 2866</b>. Este nuevo espacio nos ofrece más
                oportunidades para brindar una experiencia excepcional de
                bowling. Esperamos dar la bienvenida a nuestros jugadores y a la
                comunidad, creando recuerdos inolvidables en nuestro renovado
                establecimiento. ¡Los esperamos con entusiasmo en nuestro
                emocionante nuevo lugar!
              </p>
              <img src={abrimos} alt="" />
            </div>
          </section>
        </section>
      </article>
    </>
  );
}

export const Head = () => (
  <>
    <title>Bowling de Paso - Historia</title>
    <meta name="description" content="Carta de comidas, busca tu favorita!" />
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1, minimum-scale=1"
    />
  </>
);
