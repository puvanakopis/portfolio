import { animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

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
      className="fixed bottom-[50px] right-[50px] z-[999] flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border-2 border-[#4F4D4D] bg-[#F8F9FA] text-[24px] text-[#4F4D4D] transition-all duration-300 hover:bg-[#4F4D4D] hover:text-[#F8F9FA] max-md:bottom-[30px] max-md:right-[30px] max-md:h-[40px] max-md:w-[40px] max-md:text-[20px] max-[480px]:bottom-[20px] max-[480px]:right-[20px] max-[480px]:h-[35px] max-[480px]:w-[35px] max-[480px]:text-[18px]"
    >
      <FaArrowUp />
    </button>
  );
}

export default FloatingHomeButton;