import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

function Jumbotron() {
  const PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || ''

  return (
    <section className="border-b-2 border-amber-400 pb-8">
      <div className="flex w-full items-center justify-center">
        <div className="mt-14 rounded-full border-4 border-amber-400 p-1">
          <img
            className="rounded-full object-contain"
            src={`${PREFIX}/profile.jpg`}
            alt="Profile Photo"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center p-4 text-xl">
        <ImQuotesLeft className="mr-3 mb-3 h-6 w-6 self-start" />
        <div className="text-center">
          <p>Hi, I am Lenny,</p>
          <p>Software Engineer II @ Microsoft,</p>
          <p>Blockchain Enthusiast,</p>
          <p>Ex-Andelan,</p>
          <p>Passionate about building Impactful Technologies,</p>
          <p>-</p>
          <p>Excellence - Passion - Integrity - Collaboration</p>
        </div>
        <ImQuotesRight className="ml-3 mt-3 h-6 w-6 self-end" />
      </div>
    </section>
  )
}

export default Jumbotron
