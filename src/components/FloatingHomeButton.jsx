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
      className="fixed bottom-[50px] right-[50px] z-[999] inline-flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-lg border border-[#4F4D4D] bg-[#4F4D4D] text-[22px] font-medium text-[#F8F9FA] transition-all duration-300 hover:bg-transparent hover:text-[#4F4D4D] max-md:bottom-[30px] max-md:right-[30px] max-md:h-[42px] max-md:w-[42px] max-md:text-[20px] max-[480px]:bottom-[20px] max-[480px]:right-[20px] max-[480px]:h-[38px] max-[480px]:w-[38px] max-[480px]:text-[18px]"
    >
      <FaArrowUp />
    </button>
  );
}

export default FloatingHomeButton;