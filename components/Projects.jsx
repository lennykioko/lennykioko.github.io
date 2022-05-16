import { GrGithub } from 'react-icons/gr'
import { HiOutlineExternalLink } from 'react-icons/hi'

const projects = [
  {
    image: `/balance.png`,
    title: 'Balance Checker',
    website: 'https://balance-checker-omega.vercel.app/',
    code: 'https://github.com/lennykioko/balance-checker',
  },
  {
    image: `/bible.png`,
    title: 'Bible In a Year',
    website: 'https://bible-in-a-year.vercel.app/',
    code: 'https://github.com/lennykioko/bible-in-a-year',
  },

  {
    image: `/opensea.png`,
    title: 'Opensea Clone',
    website: 'https://opensea-clone-iota.vercel.app/',
    code: 'https://github.com/lennykioko/Opensea-clone',
  },

  {
    image: `/uniswap.png`,
    title: 'Uniswap Clone',
    website: 'https://uniswap-clone-roan.vercel.app/',
    code: 'https://github.com/lennykioko/uniswap-clone',
  },

  {
    image: `/instagram.png`,
    title: 'Instagram Clone',
    website: 'https://instagram-clone-pi-ten.vercel.app/',
    code: 'https://github.com/lennykioko/instagram-clone',
  },

  {
    image: `/medium.png`,
    title: 'Medium Clone',
    website: 'https://medium-clone-sigma-indol.vercel.app/',
    code: 'https://github.com/lennykioko/medium-clone',
  },

  {
    image: `/hulu.png`,
    title: 'Hulu Clone',
    website: 'https://hulu-clone-swart-gamma.vercel.app/',
    code: 'https://github.com/lennykioko/hulu-clone',
  },

  {
    image: `/zoom.png`,
    title: 'Zoom Clone',
    website: 'https://zoom-meeting-clone.herokuapp.com/',
    code: 'https://github.com/lennykioko/zoom-clone',
  },

  {
    image: `/disney.png`,
    title: 'Disney+ Clone',
    website: 'https://disney-clone-3f461.web.app/',
    code: 'https://github.com/lennykioko/disney-clone',
  },
]

function Projects() {
  return (
    <div className="mb-2 flex-col items-center justify-center border-b-2 border-amber-400 bg-slate-100">
      <div className="py-4 text-center text-xl font-bold">Projects</div>
      <div className="flex flex-wrap items-start justify-between space-y-6 p-4">
        {projects.length > 0 &&
          projects.map((project) => (
            <div className="w-96 rounded-md border border-amber-400 bg-slate-100 hover:bg-slate-200">
              <a target="_blank" href={project?.website} rel="noreferrer">
                <img
                  layout="responsive"
                  src={project?.image}
                  width={600}
                  height={450}
                />
              </a>
              <div className="p-4">
                <div className="text-lg font-bold">{project?.title}</div>
                <div className="flex-col pt-2">
                  <a target="_blank" href={project?.website} rel="noreferrer">
                    <div className="mb-2 flex items-center space-x-1">
                      <HiOutlineExternalLink
                        className="h-4 w-4"
                        color="black"
                      />
                      <div className="hover:text-lg">Website</div>
                    </div>
                  </a>

                  <a target="_blank" href={project?.code} rel="noreferrer">
                    <div className="flex items-center space-x-1">
                      <GrGithub className="h-4 w-4" color="black" />
                      <div className="hover:text-lg">Code</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Projects
