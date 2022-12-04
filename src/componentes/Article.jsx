import '../styles/componentes/Article.sass';
import ImageInteractive from '/image/desktop/image-interactive.jpg';

const Article = () => {
  return (
    <main>
        <figure>
            <img  class="main__image" src={ImageInteractive} alt="Homem branco loiro usando oculos de realidade virtual e se dirvetindo"/>
        </figure>
        <article class="article__container">
            <h2>O líder em</h2>
            <h2>Interações vr</h2>
            <p>Fundada em 2011, a Loopstudios vem produzindo projetos de realidade virtual de classe mundial para algumas das melhores empresas do mundo.
             Nossas criações premiadas transformaram os negócios por meio de experiências digitais que se vinculam à sua marca</p>
        </article>
    </main>
  )
}

export default Article