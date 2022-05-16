import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

function Jumbotron() {
  return (
    <section className="border-b-2 border-amber-400 p-4">
      <div className="flex w-full items-center justify-center">
        <div className="mt-16 rounded-full border-4 border-amber-400 p-2">
          <img
            className="rounded-full object-contain"
            src="/profile.jpg"
            alt="Profile Photo"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center p-4 text-xl">
        <ImQuotesLeft className="mr-3 mb-3 h-6 w-6 self-start" />
        <div className="text-center">
          <p>Hi 👋, I am Lenny.</p>
          <p>Software Engineer II @ Microsoft.</p>
          <p>Blockchain Enthusiast.</p>
          <p>Ex-Andelan.</p>
        </div>
        <ImQuotesRight className="ml-3 mt-3 h-6 w-6 self-end" />
      </div>
    </section>
  )
}

export default Jumbotron
