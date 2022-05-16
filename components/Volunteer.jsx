import OrgCard from './OrgCard'

const volunteering = [
  {
    image: '/rotaract.jpg',
    title: 'Member',
    subTitle: 'Rotaract',
    date: 'Jun 2021 - Present',
    description: 'Economic Empowerement',
  },
  {
    image: '/andela.jpg',
    title: 'Bootcamp Learning Facilitator',
    subTitle: 'Andela',
    date: 'Jan 2019 - Feb 2019',
    description: 'Science and Technology',
  },
  {
    image: '/toastmasters.jpg',
    title: 'Member',
    subTitle: 'ToastMasters International',
    date: 'Apr 2019 - Oct 2019',
    description: 'Education',
  },
  {
    image: '/redcross.jpg',
    title: 'First Aid Volunteer',
    subTitle: 'Kenya Red Cross',
    date: 'Feb 2013 - Dec 2016',
    description: 'Disaster and Humanitarian Relief',
  },
  {
    image: '/PA.jpg',
    title: 'Gold Awardee Mentor',
    subTitle: "The President's Award for Youth Empowerment",
    date: 'May 2013 - Nov 2016',
    description: 'Education',
  },
  {
    image: '/stjohn.jpg',
    title: 'First Aid Volunteer',
    subTitle: 'St John Ambulance',
    date: 'Feb 2013 - Nov 2016',
    description: 'Health',
  },
  {
    image: '/mancity.png',
    title: 'Proud Supporter',
    subTitle: 'Manchester City FC',
    date: 'Jan 2010 - Present',
    description: 'Football',
  },
]

function Volunteer() {
  return (
    <section className="flex-col items-center justify-center border-b-2 border-amber-400">
      <div className="p-4 text-center text-xl font-bold">
        Volunteering &amp; Hobbies
      </div>
      <div className="flex flex-col items-start justify-center">
        {volunteering &&
          volunteering.map((volunteer, idx) => (
            <OrgCard key={idx} {...volunteer} />
          ))}
      </div>
    </section>
  )
}

export default Volunteer
