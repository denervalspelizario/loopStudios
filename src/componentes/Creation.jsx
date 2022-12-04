import '../styles/componentes/Creation.sass';

const Creation = () => {
  return (
    <section className="section__creation">
        <div className="creation__text">
            <h3>Nossas criações</h3>
            <a href="#"><p class="btn">Veja todos</p></a>
        </div>
        <div className="creation__image__container">
            <div className="creation__image--list">
                <figure className="image--list" id="list--1">
                    <p className="text__image--list">deep earth</p>
                </figure>
                <figure className="image--list" id="list--2">
                    <p className="text__image--list">Night Arcade</p>
                </figure>
                <figure className="image--list" id="list--3">
                    <p className="text__image--list">soccer team vr</p>
                </figure>
                <figure className="image--list" id="list--4">
                    <p className="text__image--list">the grid</p>
                </figure>
            </div>
            <div className="creation__image--list">
                <figure className="image--list" id="list--5">
                    <p className="text__image--list">from up above vr</p>
                </figure>
                <figure className="image--list" id="list--6">
                    <p className="text__image--list">pockets borealis</p>
                </figure>
                <figure className="image--list" id="list--7">
                    <p className="text__image--list">the curiosity</p>
                </figure>
                <figure className="image--list" id="list--8">
                    <p className="text__image--list">make it fisheye</p>
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Creation