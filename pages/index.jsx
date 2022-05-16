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
        <title>Lenny Kioko</title>
        <link rel="icon" href={`/favicon.ico`} />
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1, maximum-scale=1"
        />
        <meta
          name="keywords"
          content="software, engineer, consultant, developer, web, frontend, nairobi, kenya"
        />
        <meta
          name="description"
          content="Software engineer at Microsoft based in Nairobi, Kenya"
        />

        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
      </Head>

      <Header />
      <main className="relative w-full flex-col items-center justify-center">
        <Jumbotron />
        <Skills />
        <Experience />
        <Projects />
        <Volunteer />
        <Footer />
      </main>
    </div>
  )
}

export default Home
