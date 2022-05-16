import OrgCard from './OrgCard'

const experiences = [
  {
    image: '/microsoft.jpg',
    title: 'Software Engineer II',
    subTitle: 'Microsoft - Full-time',
    date: 'Dec 2021 - Present',
    description: 'Nairobi, Kenya',
  },
  {
    image: '/recordbay.jpg',
    title: 'Frontend Developer',
    subTitle: 'RecordBay - Full-time',
    date: 'Jul 2021 - Dec 2021',
    description: 'Mönchengladbach, Germany',
  },
  {
    image: '/sovtech.jpg',
    title: 'Software Developer',
    subTitle: 'SovTech - Contract',
    date: 'Mar 2021 - Jun 2021',
    description: 'London, United Kingdom',
  },
  {
    image: '/saltpay.jpg',
    title: 'Software Developer',
    subTitle: 'SaltPay - Contract',
    date: 'Mar 2021 - Jun 2021',
    description: 'London, United Kingdom',
  },
  {
    image: '/certitude.jpg',
    title: 'Software Developer',
    subTitle: 'Certitude Consultancy - Freelance',
    date: 'Nov 2019 - Dec 2020',
    description: 'Nairobi, Kenya',
  },
  {
    image: '/andela.jpg',
    title: 'Software Developer',
    subTitle: 'Andela - Contract',
    date: 'Jul 2018 - Oct 2019',
    description: 'Nairobi, Kenya',
  },
]

function Experience() {
  return (
    <section className="flex-col items-center justify-center border-b-2 border-amber-400">
      <div className="p-4 text-center text-xl font-bold">Experience</div>
      <div className="flex flex-col items-start justify-center">
        {experiences &&
          experiences.map((experience, idx) => (
            <OrgCard key={idx} {...experience} />
          ))}
      </div>
    </section>
  )
}

export default Experience
