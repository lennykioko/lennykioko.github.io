import OrgCard from "./OrgCard";

interface VolunteerItem {
  image: string;
  title: string;
  subTitle: string;
  date: string;
  description: string;
}

const volunteering: VolunteerItem[] = [
  {
    image: "/rotary.jpg",
    title: "Paul Harris Fellow",
    subTitle: "Rotary",
    date: "May 2023 - Present",
    description: "Economic Empowerment",
  },
  {
    image: "/rotaract.jpg",
    title: "The Rotary Foundation Director",
    subTitle: "Rotaract",
    date: "Jun 2023 - Jun 2024",
    description: "Economic Empowerment",
  },
  {
    image: "/rotaract.jpg",
    title: "Member",
    subTitle: "Rotaract",
    date: "Jun 2021 - Present",
    description: "Economic Empowerment",
  },
  {
    image: "/andela.jpg",
    title: "Bootcamp Learning Facilitator",
    subTitle: "Andela",
    date: "Jan 2019 - Feb 2019",
    description: "Science and Technology",
  },
  {
    image: "/toastmasters.jpg",
    title: "Member",
    subTitle: "ToastMasters International",
    date: "Apr 2019 - Oct 2019",
    description: "Education",
  },
  {
    image: "/redcross.jpg",
    title: "First Aid Volunteer",
    subTitle: "Kenya Red Cross",
    date: "Feb 2013 - Dec 2016",
    description: "Disaster and Humanitarian Relief",
  },
  {
    image: "/PA.jpg",
    title: "Gold Awardee Mentor",
    subTitle: "The President's Award for Youth Empowerment",
    date: "May 2013 - Nov 2016",
    description: "Education",
  },
  {
    image: "/stjohn.jpg",
    title: "First Aid Volunteer",
    subTitle: "St John Ambulance",
    date: "Feb 2013 - Nov 2016",
    description: "Health",
  },
  {
    image: "/mancity.png",
    title: "Proud Supporter",
    subTitle: "Manchester City FC",
    date: "Jan 2010 - Present",
    description: "Football",
  },
];

export default function Volunteer() {
  return (
    <section className="flex-col items-center justify-center border-b-2 border-amber-400 py-8">
      <div className="p-4 text-center text-2xl font-semibold">
        Volunteering &amp; Hobbies
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-4">
          {volunteering.map((volunteer, idx) => (
            <OrgCard key={`${volunteer.title}-${idx}`} {...volunteer} />
          ))}
        </div>
      </div>
    </section>
  );
}
