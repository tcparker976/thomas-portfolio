/**
 * Smoothly scrolls to an element with the specified ID, accounting for navbar height and main padding
 * @param {string} sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 44; // Minimum height of navbar
    const mainPadding = window.innerWidth * 0.12; // 12vw converted to pixels
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - mainPadding;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}; 