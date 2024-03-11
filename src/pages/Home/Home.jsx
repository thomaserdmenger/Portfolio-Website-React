import { ButtonContact } from '../../components/ButtonContact/ButtonContact'
import './Home.css'

export const Home = () => {
  return (
    <main className='home'>
      <section className='home__hero'>
        <article className='home__hero__content'>
          <h1 className='home__hero__heading1'>
            Nice to meet you! I'm{' '}
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
        </article>
        <article className='home__hero__image'>
          <img src='/public/images/portfolio.jpg' alt='Author' />
        </article>
      </section>
    </main>
  )
}
