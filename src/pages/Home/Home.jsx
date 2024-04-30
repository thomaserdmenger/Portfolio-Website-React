import "./Home.css"
import skills from "../../data/skills"
import { ButtonContact } from "../../components/ButtonContact/ButtonContact"
import { Link } from "react-router-dom"
import { darkModeContext } from "../../context/Context"
import { useContext } from "react"
import { Experience } from "../../components/Experience/Experience"

export const Home = () => {
  const { darkMode } = useContext(darkModeContext)

  return (
    <main className={darkMode ? "home dark" : "home"}>
      <section className={darkMode ? "home__hero dark" : "home__hero"}>
        <article className={darkMode ? "home__hero__content dark" : "home__hero__content"}>
          <h1 className="home__hero__heading1">
            Nice to meet you! I'm{" "}
            <span className="home__hero__heading1--underline">Thomas Erdmenger</span>.
          </h1>
          <p>
            Based in Germany, I’m a front-end developer passionate about building accessible web
            apps that users love.
          </p>
          <ButtonContact />
          {!darkMode && <img className="home__rings" src="/images/rings.png" alt="Rings" />}
        </article>
        <article className="home__hero__image">
          <img src="/images/portfolio.jpg" alt="Author" />
        </article>
      </section>
      <section className={darkMode ? "home__skills dark" : "home__skills"}>
        <Experience language="HTML" expDate="2023-01-01" />
        <Experience language="CSS" expDate="2023-01-01" />
        <Experience language="JavaScript" expDate="2023-03-01" />
        <Experience language="Accessibility" expDate="2023-03-01" />
        <Experience language="ReactJS" expDate="2023-06-01" />
        <Experience language="TailwindCSS" expDate="2023-06-01" />
      </section>
      <section className={darkMode ? "home__projects dark" : "home__projects"}>
        <div className="home__projects__header-container">
          <h2>Projects</h2>
          <Link to="/projects">More Projects</Link>
        </div>
        <section className="home__projects__grid">
          {skills.map(
            (item, index) =>
              index < 4 && (
                <Link
                  to={`/projects/${item.id}`}
                  key={item.id}
                  className={darkMode ? "home__projects__project dark" : "home__projects__project"}>
                  <img className="home__projects__project-image" src={item.image} alt={item.alt} />
                  <h3>{item.title}</h3>
                  <div className="home__projects__project__skills">
                    {item.skills.map((skill, index) => {
                      return <p key={index}>{skill}</p>
                    })}
                  </div>
                </Link>
              )
          )}
        </section>
      </section>
    </main>
  )
}
