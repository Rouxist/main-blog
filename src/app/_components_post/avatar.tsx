type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="md:w-12 w-8 md:h-12 h-8 md:mr-4 mr-2 rounded-full"
        alt={name}
        id="profile-img"
      />
      <div className="md:text-xl text-md font-bold">{name}</div>
    </div>
  )
}

export default Avatar
