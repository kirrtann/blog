const Image = ({ src, alt, description, date, ButtonText ,className}: { src: string, alt: string, description: string, date: string, ButtonText: string ,className:string}) => {
    return (
        <div className="image-container">
            <div className="image-wrapper text-[#e43c13]  relative">
                <img src={src} alt={alt} className={className}/>
                <button className="absolute bottom-1  left-2   bg-white text-[#e43c13] px-3 py-2 rounded-full">
                    {ButtonText}
                </button>
            </div>
            <div className="text-content mt-4 text-[#e43c13]">
                <p className=" text-sm text-[#e43c13]">{date}</p>
                <h2 className="text-xl font-semibold">{description}</h2>
            </div>
        </div>
    );
};

export default Image;
