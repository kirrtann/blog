import Button from "./button";

const Image = ({ src, alt, description, date, ButtonText ,className}: { src: string, alt: string, description: string, date: string, ButtonText: string ,className:string}) => {
    return (
        <div className="image-container">
            <div className="image-wrapper text-[#e43c13]  relative">
                <img src={src} alt={alt} className={className}/>
               <Button
               ButtonText={ButtonText}/>
            </div>
            <div className="text-content mt-4 text-[#e43c13]">
                <p className=" text-[16px] text-[#e43c13]">{date}</p>
                <h2 className="text-[22px] ">{description}</h2>
            </div>
        </div>
    );
};

export default Image;
