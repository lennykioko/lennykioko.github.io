function OrgCard({ image, title, subTitle, date, description }) {
  return (
    <div className="m-4 flex space-x-8 p-4">
      <div className="p-4 pt-0">
        <img
          className="object-contain"
          loading="lazy"
          src={image}
          alt="Company Logo"
          width={50}
          height={50}
        />
      </div>
      <div>
        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm">{subTitle}</p>
        <p className="text-sm">{date}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}

export default OrgCard
