function Volunteer() {
  return (
    <div className="flex-col items-center justify-center border-b-2 border-amber-400">
      <div className="py-4 text-center text-xl font-bold">
        Volunteering &amp; Hobbies
      </div>
      <div className="flex flex-col items-start justify-center">
        <div className="ml-4 mb-4 flex space-x-4">
          <div className="pl-2">
            <img
              className="object-contain"
              src={`/rotaract.jpg`}
              alt="Company Logo"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="text-lg font-bold">Member</p>
            <p className="text-sm">Rotaract</p>
            <p className="text-sm">Jun 2021 - Present</p>
            <p className="text-sm text-gray-500">Economic Empowerement</p>
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
            <p className="text-lg font-bold">Bootcamp Learning Facilitator</p>
            <p className="text-sm">Andela</p>
            <p className="text-sm">Jan 2019 - Feb 2019</p>
            <p className="text-sm text-gray-500">Science and Technology</p>
          </div>
        </div>

        <div className="ml-4 mb-4 flex space-x-4">
          <div className="pl-2">
            <img
              className="object-contain"
              src={`/toastmasters.jpg`}
              alt="Company Logo"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="text-lg font-bold">Member</p>
            <p className="text-sm">ToastMasters International</p>
            <p className="text-sm">Apr 2019 - Oct 2019</p>
            <p className="text-sm text-gray-500">Education</p>
          </div>
        </div>

        <div className="ml-4 mb-4 flex space-x-4">
          <div className="pl-2">
            <img
              className="object-contain"
              src={`/redcross.jpg`}
              alt="Company Logo"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="text-lg font-bold">First Aid Volunteer</p>
            <p className="text-sm">Kenya Red Cross</p>
            <p className="text-sm">Feb 2013 - Dec 2016</p>
            <p className="text-sm text-gray-500">
              Disaster and Humanitarian Relief
            </p>
          </div>
        </div>

        <div className="ml-4 mb-4 flex space-x-4">
          <div className="pl-2">
            <img
              className="object-contain"
              src={`/PA.jpg`}
              alt="Company Logo"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="text-lg font-bold">Gold Awardee Mentor</p>
            <p className="text-sm">
              The President's Award for Youth Empowerment
            </p>
            <p className="text-sm">May 2013 - Nov 2016</p>
            <p className="text-sm text-gray-500">Education</p>
          </div>
        </div>

        <div className="ml-4 mb-4 flex space-x-4">
          <div className="pl-2">
            <img
              className="object-contain"
              src={`/stjohn.jpg`}
              alt="Company Logo"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="text-lg font-bold">First Aid Volunteer</p>
            <p className="text-sm">St John Ambulance</p>
            <p className="text-sm">Feb 2013 - Nov 2016</p>
            <p className="text-sm text-gray-500">Health</p>
          </div>
        </div>

        <div className="ml-4 mb-4 flex space-x-4">
          <div className="pl-2">
            <img
              className="object-contain"
              src={`/mancity.png`}
              alt="Company Logo"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="text-lg font-bold">Proud Supporter</p>
            <p className="text-sm">Manchester City FC</p>
            <p className="text-sm">Jan 2010 - Present</p>
            <p className="text-sm text-gray-500">Football</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Volunteer
