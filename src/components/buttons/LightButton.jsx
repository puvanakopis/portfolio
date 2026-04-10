const LightButton = ({ href, download, children, className = '', ...rest }) => {
    const baseClassName =
        'inline-flex w-fit cursor-pointer items-center rounded-[50px] border-2 px-5 py-3 text-[20px] no-underline transition-all duration-300 max-md:text-[14px] max-[480px]:text-[13px] border-[#4F4D4D] bg-[#F8F9FA] text-[#4F4D4D] hover:bg-[#4F4D4D] hover:text-[#F8F9FA]';

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

export default LightButton;
