import CustomLink from '@components/costom-link';
import { IFooter } from './interface';
import IconStore from '@components/icons';
import Image from 'next/image';

const Footer = ({ logo, socialLinks, copyRightText }: IFooter) => {
  return (
    <footer className="w-full md:min-h-[16rem] lg:min-h-[18rem] xl:min-h-[21rem] bg-secondary flex items-center justify-center">
      <div className="container flex items-center justify-center">
        <div className="w-fit flex flex-col gap-[3rem] md:gap-[4rem] lg:gap-[4.87rem] items-center justify-center py-[2.5rem] md:py-[3rem] lg:py-[3.5rem] xl:py-[4.31rem]">
          <div className="w-32 h-8 md:w-36 lg:w-40 md:h-10 xl:w-44 lg:h-12">
            <Image width={176} height={48} src={logo.url} alt={logo.alt} />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {socialLinks.map((socialLink, i) => (
                <CustomLink key={i} href={socialLink.href} isOpenNewTab={true}>
                  <span className="w-6 h-6 flex items-center justify-center text-white">
                    <IconStore iconName={socialLink.icon} />
                  </span>
                </CustomLink>
              ))}
            </div>
            <p className="text-white text-base font-normal text-center">
              {copyRightText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
