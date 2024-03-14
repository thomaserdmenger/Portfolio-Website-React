import "./Projects.css"
import skills from "../../data/skills"
import { useParams } from "react-router-dom"

export const Projects = () => {
  const { id } = useParams()

  return (
    <main>
      <section>
        <article>
          <img src={skills[id].image} alt={skills[id].alt} />
        </article>
      </section>
    </main>
  )
}
