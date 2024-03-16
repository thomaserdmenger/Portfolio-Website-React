import "./Projects.css"
import skills from "../../data/skills"
import { Link } from "react-router-dom"

export const Projects = () => {
  return (
    <main>
      <section className='projectPage'>
        {skills.map((item) => {
          return (
            <Link
              className='projectPage__item'
              to={`/projects/${item.id}`}
              key={item.id}>
              <img src={item.image} alt={item.alt} />
              <h3>{item.title}</h3>
              <div className='projectPage__item__skills'>
                {item.skills.map((skill, index) => {
                  return <p key={index}>{skill}</p>
                })}
              </div>
            </Link>
          )
        })}
      </section>
    </main>
  )
}
