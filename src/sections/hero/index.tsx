import Image from 'next/image';
import { IHero } from './interface';
import CtaButton from '@components/cta-button';
import { twMerge } from 'tailwind-merge';

const Hero = ({ title, description, leftImage, rightImage }: IHero) => {
  function splitString(title: string) {
    const regex = /<[^>]*>/g;
    return title.split(regex);
  }

  const splitedStrings = splitString(title);

  return (
    <section className="w-full min-h-screen flex items-center justify-center relative">
      <div className="w-[24rem] h-[24rem] aspect-square opacity-90 rounded-full bg-[#7C3EFF] blur-[15.6rem] absolute top-0 left-0" />
      <div className="w-[24rem] h-[24rem] aspect-square absolute top-0 left-0">
        <Image
          width={400}
          height={400}
          className="w-full h-full"
          src="https://res.cloudinary.com/dezqxmlny/image/upload/v1691754170/React%20Conference/Ornament_69_iazrv7.png"
          alt="circle shape line"
        />
      </div>
      <div className="w-[26rem] h-[26rem] aspect-square opacity-90 rounded-full bg-[#BE229C] blur-[15.6rem] absolute top-0 right-0" />
      <div className="w-[16rem] h-[16rem] aspect-square opacity-90 rounded-full bg-[#FFC93E] blur-[15.6rem] absolute bottom-0 right-32" />
      <div className="w-[16rem] h-[16rem] aspect-square opacity-90 rounded-full bg-[#22B5BE] blur-[15.6rem] absolute bottom-0 left-32" />
      <div className="w-[59rem] h-[52rem] absolute bottom-0 xl:bottom-auto xl:top-[12rem] left-0 xl:left-auto xl:right-[10rem]">
        <Image
          width={940}
          height={832}
          className="w-full h-full"
          src="https://res.cloudinary.com/dezqxmlny/image/upload/v1691756517/React%20Conference/Vector_1_yfnxde.png"
          alt="line shape"
        />
      </div>

      <div className="container pt-[9rem] py-[3rem] md:pt-[10rem] md:py-[7rem] xl:pt-[13rem] xl:py-[8.5rem]">
        <div className="flex gap-1 relative">
          <div className="flex flex-col lg:flex-row gap-[2rem] md:gap-[2.79rem]">
            <div className="flex flex-col gap-[2.19rem] items-start sm:items-center lg:items-end">
              <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-secondary text-end">
                {splitedStrings.map((titleStr, i) => (
                  <span className={twMerge(i == 0 && 'relative')} key={i}>
                    {i == 0 && (
                      <Image
                        className="absolute -top-14 -left-14 md:-top-12 md:-left-12 xl:-top-7 xl:-left-16"
                        width={85}
                        height={82}
                        src="https://res.cloudinary.com/dezqxmlny/image/upload/v1691756517/React%20Conference/Sketch-annotation-element-stroke-abstract--highlight-bling-line-2_kbin4w.png"
                        alt="title top line"
                      />
                    )}
                    {titleStr}
                    <br />
                  </span>
                ))}
              </h1>
              <div className="flex md:gap-[2rem] lg:gap-[3rem] xl:gap-[3.5rem] 2xl:gap-[4.35rem]">
                <div className="w-full hidden md:block min-w-[10rem] h-fit mt-[-0.32rem] relative">
                  <Image
                    className="w-full h-auto rounded-[2.5rem] xl:rounded-[3.13rem]"
                    width={330}
                    height={420}
                    src={leftImage.url}
                    alt={leftImage.alt}
                  />
                  <Image
                    className="w-[10rem] h-auto absolute -right-20 -bottom-16 z-0"
                    width={190}
                    height={190}
                    src="https://res.cloudinary.com/dezqxmlny/image/upload/v1691754701/React%20Conference/Ornament_13_rjagla.png"
                    alt="Left side image circle"
                  />
                </div>
                <div className="relative z-10">
                  <p className="text-base md:text-lg font-normal text-black">
                    {description}
                  </p>
                  <CtaButton
                    href="/"
                    isOpenNewTab={false}
                    label="Buy Tickets"
                    icon="Arrow Up Right"
                    className="mt-[1.62rem]"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:min-w-[22rem] lg:min-w-[26rem] xl:min-w-[30rem] 2xl:min-w-[34rem] h-fit relative right-0 lg:top-[10rem]">
              <Image
                className="w-full h-auto rounded-[1.25rem] md:rounded-[2.5rem] 2xl:rounded-[3.13rem]"
                width={550}
                height={560}
                src={rightImage.url}
                alt={rightImage.alt}
              />
              <Image
                className="w-[8.3rem] h-auto absolute -left-14 -bottom-16 z-0 animate-spin-slow"
                width={135}
                height={135}
                src="https://res.cloudinary.com/dezqxmlny/image/upload/v1691754701/React%20Conference/Star_2_udu7y2.png"
                alt="Right side image star"
              />
            </div>
            <div className="w-full blcok md:hidden h-fit mt-[-0.32rem] relative">
              <Image
                className="w-1/2 h-auto rounded-[1.25rem]"
                width={330}
                height={420}
                src={leftImage.url}
                alt={leftImage.alt}
              />
              <Image
                className="w-[8rem] h-auto absolute -right-8 bottom-0"
                width={190}
                height={190}
                src="https://res.cloudinary.com/dezqxmlny/image/upload/v1691754701/React%20Conference/Ornament_13_rjagla.png"
                alt="Left side image circle"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
