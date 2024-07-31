import React from 'react';

const GridItem = ({
    className,
    title,
    link,
    description,
    duration,
    id,
    img,
}: {
    className?: string;
    title: string;
    link: string;
    description: string;
    duration: string;
    id: number;
    img: string;
}) => {
    return (
        <a
            key={id}
            className={`relative h-[300px] md:h-[400px] lg:h-[500px] bg-gray-200 dark:bg-black overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-3 `}
            href={link}
        >
            
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 flex flex-col  p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-70">
                <p className="lg:text-3xl md:text-3xl sm:text-2xl font-extralight text-white p-5">{description}</p>

                <div className="absolute bottom-10 left-10">
                    <h2 className="text-3xl text-white">{title}</h2>
                    <p className="text-sm text-white opacity-70">{duration}</p>
                </div>
            </div>
        </a>
    );
};

export default GridItem;
