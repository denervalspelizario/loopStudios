import '../styles/componentes/Creation.sass';

const Creation = () => {
  return (
    <section class="section__creation">
        <div class="creation__text">
            <h3>Nossas criações</h3>
            <a href="#"><p class="btn">Veja todos</p></a>
        </div>
        <div class="creation__image__container">
            <div class="creation__image--list">
                <figure class="image--list" id="list--1">
                    <p class="text__image--list">deep earth</p>
                </figure>
                <figure class="image--list" id="list--2">
                    <p class="text__image--list">Night Arcade</p>
                </figure>
                <figure class="image--list" id="list--3">
                    <p class="text__image--list">soccer team vr</p>
                </figure>
                <figure class="image--list" id="list--4">
                    <p class="text__image--list">the grid</p>
                </figure>
            </div>
            <div class="creation__image--list">
                <figure class="image--list" id="list--5">
                    <p class="text__image--list">from up above vr</p>
                </figure>
                <figure class="image--list" id="list--6">
                    <p class="text__image--list">pockets borealis</p>
                </figure>
                <figure class="image--list" id="list--7">
                    <p class="text__image--list">the curiosity</p>
                </figure>
                <figure class="image--list" id="list--8">
                    <p class="text__image--list">make it fisheye</p>
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Creation