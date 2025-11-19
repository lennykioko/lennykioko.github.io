import OrgCard from "./OrgCard";

interface ExperienceItem {
  image: string;
  title: string;
  subTitle: string;
  date: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    image: "/cityzen.jpg",
    title: "Algorithmic Trader",
    subTitle: "The Markets",
    date: "June 2019 - Present",
    description: "Nairobi, Kenya",
  },
  {
    image: "/microsoft.jpg",
    title: "Software Engineer II",
    subTitle: "Microsoft - Full-time",
    date: "Dec 2021 - Aug 2025",
    description: "Nairobi, Kenya",
  },
  {
    image: "/recordbay.jpg",
    title: "Frontend Developer",
    subTitle: "RecordBay - Full-time",
    date: "Jul 2021 - Dec 2021",
    description: "Mönchengladbach, Germany",
  },
  {
    image: "/sovtech.jpg",
    title: "Software Developer",
    subTitle: "SovTech - Contract",
    date: "Mar 2021 - Jun 2021",
    description: "London, United Kingdom",
  },
  {
    image: "/saltpay.jpg",
    title: "Software Developer",
    subTitle: "SaltPay - Contract",
    date: "Mar 2021 - Jun 2021",
    description: "London, United Kingdom",
  },
  {
    image: "/certitude.jpg",
    title: "Software Developer",
    subTitle: "Certitude Consultancy - Freelance",
    date: "Nov 2019 - Dec 2020",
    description: "Nairobi, Kenya",
  },
  {
    image: "/andela.jpg",
    title: "Software Developer",
    subTitle: "Andela - Contract",
    date: "Jul 2018 - Oct 2019",
    description: "Nairobi, Kenya",
  },
];

export default function Experience() {
  return (
    <section className="flex-col items-center justify-center border-b-2 border-amber-400 py-8">
      <div className="p-4 text-center text-2xl font-semibold">Experience</div>
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-4">
          {experiences.map((experience, idx) => (
            <OrgCard key={`${experience.title}-${idx}`} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
