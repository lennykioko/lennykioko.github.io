function Experience() {
  return (
    <div className="flex-col items-center justify-center border-b-2 border-amber-400">
      <div className="py-4 text-center text-xl font-bold">Experience</div>
      <div className="flex flex-col items-start justify-center">
        <div className="ml-4 mb-4 flex space-x-4">
          <div className="pl-2">
            <img
              className="object-contain"
              src={`/microsoft.jpg`}
              alt="Company Logo"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="text-lg font-bold">Software Engineer II</p>
            <p className="text-sm">Microsoft - Full-time</p>
            <p className="text-sm">Dec 2021 - Present</p>
            <p className="text-sm text-gray-500">Nairobi, Kenya</p>
          </div>
        </div>

        <div className="ml-4 mb-4 flex space-x-4">
          <div className="pl-2">
            <img
              className="object-contain"
              src={`/recordbay.jpg`}
              alt="Company Logo"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="text-lg font-bold">Frontend Developer</p>
            <p className="text-sm">RecordBay - Full-time</p>
            <p className="text-sm">Jul 2021 - Dec 2021</p>
            <p className="text-sm text-gray-500">Mönchengladbach, Germany</p>
          </div>
        </div>

        <div className="ml-4 mb-4 flex space-x-4">
          <div className="pl-2">
            <img
              className="object-contain"
              src={`/sovtech.jpg`}
              alt="Company Logo"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="text-lg font-bold">Software Developer</p>
            <p className="text-sm">SovTech - Contract</p>
            <p className="text-sm">Mar 2021 - Jun 2021</p>
            <p className="text-sm text-gray-500">London, United Kingdom</p>
          </div>
        </div>

        <div className="ml-4 mb-4 flex space-x-4">
          <div className="pl-2">
            <img
              className="object-contain"
              src={`/saltpay.jpg`}
              alt="Company Logo"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="text-lg font-bold">Software Developer</p>
            <p className="text-sm">SaltPay - Contract</p>
            <p className="text-sm">Mar 2021 - Jun 2021</p>
            <p className="text-sm text-gray-500">London, United Kingdom</p>
          </div>
        </div>

        <div className="ml-4 mb-4 flex space-x-4">
          <div className="pl-2">
            <img
              className="object-contain"
              src={`/certitude.jpg`}
              alt="Company Logo"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="text-lg font-bold">Software Developer</p>
            <p className="text-sm">Certitude Consultancy - Freelance</p>
            <p className="text-sm">Nov 2019 - Dec 2020</p>
            <p className="text-sm text-gray-500">Nairobi, Kenya</p>
          </div>
        </div>

        <div className="ml-4 mb-4 flex space-x-4">
          <div className="pl-2">
            <img
              className="object-contain"
              src={`/andela.jpg`}
              alt="Company Logo"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="text-lg font-bold">Software Developer</p>
            <p className="text-sm">Andela - Contract</p>
            <p className="text-sm">Jul 2018 - Oct 2019</p>
            <p className="text-sm text-gray-500">Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
