const DarkButton = ({ href, download, children, className = '', ...rest }) => {
    const baseClassName =
        'inline-flex w-fit cursor-pointer items-center rounded-xl border border-[#4F4D4D] px-5 py-3 text-[20px] no-underline transition-all duration-300 max-md:text-[14px] max-[480px]:text-[13px] bg-[#4F4D4D] text-[#F8F9FA] hover:-translate-y-0.5 hover:shadow-md hover:bg-[#F8F9FA] hover:text-[#4F4D4D]';

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