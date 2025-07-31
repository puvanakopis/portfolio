import { animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import './FloatingHomeButton.css';

function FloatingHomeButton() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <button
      aria-label="Go to Top"
      onClick={scrollToTop}
      className="floating-home-button"
    >
      <FaArrowUp />
    </button>
  );
}

export default FloatingHomeButton;