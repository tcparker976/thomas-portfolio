function ProfilePhoto() {
  return (
    <img 
      className="my-photo" 
      src="/assets/profile.jpg" 
      alt="Thomas Parker - Senior Software Engineer headshot" 
      loading="eager"
      width="300"
      height="300"
      tabIndex="0"
      role="img"
      aria-describedby="photo-description"
    />
  );
}

export default ProfilePhoto; 