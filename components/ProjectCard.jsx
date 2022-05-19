import { GrGithub } from 'react-icons/gr'
import { HiOutlineExternalLink } from 'react-icons/hi'

function ProjectCard({ image, title, website, code, idx, showCode }) {
  return (
    <div
      className={`w-96 rounded-md border border-amber-400 bg-slate-100 hover:bg-slate-200 ${
        idx === 0 ? 'mt-8' : null
      }`}
    >
      <a target="_blank" href={website} rel="noreferrer">
        <img
          layout="responsive"
          loading="lazy"
          src={image}
          width={600}
          height={450}
        />
      </a>
      <div className="p-4">
        <div className="p-4 pb-0 text-lg font-bold">{title}</div>
        <div className="flex-col p-4">
          <a target="_blank" href={website} rel="noreferrer">
            <div className="mb-4 flex items-center space-x-2">
              <HiOutlineExternalLink className="h-6 w-6" color="black" />
              <div>Website</div>
            </div>
          </a>

          {showCode ? (
            <a target="_blank" href={code} rel="noreferrer">
              <div className="flex items-center space-x-2">
                <GrGithub className="h-6 w-6" color="black" />
                <div>Code</div>
              </div>
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
