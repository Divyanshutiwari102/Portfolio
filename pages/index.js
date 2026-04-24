import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Awards from '../components/Awards'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Divyanshu Tiwari | Full Stack Java Developer</title>
        <meta name="description" content="Full Stack Java Developer building scalable systems, LLM pipelines, and production-grade infrastructure. Spring Boot, React.js, Next.js." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Divyanshu Tiwari | Full Stack Java Developer" />
        <meta property="og:description" content="Building production-grade systems, LLM pipelines, and real-time infrastructure." />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
