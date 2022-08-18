import Head from 'next/head'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Volunteer from '../components/Volunteer'

const Home = () => {
  return (
    <div className="min-w-screen min-h-screen flex-col items-center justify-center bg-slate-50 text-black">
      <Head>
        <html lang="en" />
        <title>Lenny Kioko</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Software, Engineer, Programmer, Coder, Remote, Mentor, Consultant, Developer, Web, Web3, Blockchain, Frontend, Nairobi, Kenya"
        />
        <meta
          name="description"
          content="Software engineer at Microsoft based in Nairobi, Kenya"
        />

        <meta property="og:image" content="/cityzen.jpg" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
      </Head>

      <Header />
      <main className="w-full flex-col items-center justify-center">
        <Jumbotron />
        <Skills />
        <Experience />
        <Volunteer />
        <Projects />
        <Footer />
      </main>
    </div>
  )
}

export default Home
