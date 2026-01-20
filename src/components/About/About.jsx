import ProfilePhoto from './ProfilePhoto';
import ProfessionalTagline from './ProfessionalTagline';
import SocialLinks from './SocialLinks';
import QuickSkills from './QuickSkills';
import AboutText from './AboutText';

function About() {
  return (
    <section id="about" className="about-container">
      <div className="my-photo-container">
        <ProfilePhoto />
        <ProfessionalTagline />
        <SocialLinks />
        <QuickSkills />
      </div>
      <AboutText />
    </section>
  );
}

export default About; 