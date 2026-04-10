const DarkButton = ({ href, download, children, className = '', ...rest }) => {
    const baseClassName =
        'inline-flex w-fit cursor-pointer items-center justify-center rounded-lg border border-[#4F4D4D] bg-[#4F4D4D] px-6 py-3 text-[1rem] font-medium text-[#F8F9FA] no-underline transition-all duration-300 hover:bg-transparent hover:text-[#4F4D4D] max-md:w-full';

    return (
        <a
            href={href}
            download={download}
            className={`${baseClassName} ${className}`.trim()}
            {...rest}
        >
            {children}
        </a>
    );
};

export default DarkButton;