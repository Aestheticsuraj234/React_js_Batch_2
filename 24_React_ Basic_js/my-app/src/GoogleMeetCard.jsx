
const GoogleMeetCard = ({avatar , username}) => {
  return (
    <>
        <img src={avatar} alt="username" height={100} width={100}  />
        <h2>{username}</h2>
    </>
  )
}

export default GoogleMeetCard