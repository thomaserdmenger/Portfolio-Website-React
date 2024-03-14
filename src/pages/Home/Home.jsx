import "./Home.css"
import skills from "../../data/skills"
import { ButtonContact } from "../../components/ButtonContact/ButtonContact"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <main className='home'>
      <section className='home__hero'>
        <article className='home__hero__content'>
          <h1 className='home__hero__heading1'>
            Nice to meet you! I'm{" "}
            <span className='home__hero__heading1--underline'>
              Thomas Erdmenger
            </span>
            .
          </h1>
          <p>
            Based in Germany, I’m a front-end developer passionate about
            building accessible web apps that users love.
          </p>
          <ButtonContact />
          <img className='home__rings' src='/images/rings.png' alt='Rings' />
        </article>
        <article className='home__hero__image'>
          <img src='/public/images/portfolio.jpg' alt='Author' />
        </article>
      </section>
      <section className='home__skills'>
        <div>
          <h3>HTML</h3>
          <p>2 Years Experience</p>
        </div>
        <div>
          <h3>CSS</h3>
          <p>2 Years Experience</p>
        </div>
        <div>
          <h3>JavaScript</h3>
          <p>2 Years Experience</p>
        </div>
        <div>
          <h3>ReactJS</h3>
          <p>1 Year Experience</p>
        </div>
        <div>
          <h3>Accessibility</h3>
          <p>1 Year Experience</p>
        </div>
        <div>
          <h3>TailwindCSS</h3>
          <p>1 Year Experience</p>
        </div>
      </section>
      <section className='home__projects'>
        <Link to='/projects'>
          <h2>Projects</h2>
        </Link>
        <section className='home__projects__grid'>
          {skills.map((item) => {
            return (
              <Link
                to={`/projects/${item.id}`}
                key={item.id}
                className='home__projects__project'>
                <img src={item.image} alt={item.alt} />
                <h3>{item.title}</h3>
                <div className='home__projects__project__skills'>
                  {item.skills.map((skill, index) => {
                    return <p key={index}>{skill}</p>
                  })}
                </div>
              </Link>
            )
          })}
        </section>
      </section>
    </main>
  )
}
