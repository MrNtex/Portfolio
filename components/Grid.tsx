import { gridItems } from "@/data";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import GridItem from "./GridItem";

const Grid = () => {
  return (
    <section id="about">
      <div className="relative w-full flex justify-center text-center">
        <TextGenerateEffect filter={false} words='My projects' className='text-[40px] md:text-5xl lg:text-6xl font-xs max-w-[800px] text-center mt-4 mb-4'/>
      </div>
      
      <div>
        <div className="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-14">
          {gridItems.map((item) => (
            <GridItem
              key={item.id}
              title={item.title}
              link={item.link}
              description={item.description}
              duration={item.duration}
              className={item.className}
              img={item.img ?? ''}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;