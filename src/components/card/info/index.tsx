import { IInfo } from './interface';
import Image from 'next/image';
import Link from 'next/link';
import IconStore from '@components/icons';
import { twMerge } from 'tailwind-merge';

const Info = (props: IInfo) => {
  const { title, subTitle, type } = props;

  return (
    <div
      className={twMerge(
        'w-full bg-white border-0 rounded-lg flex items-center gap-y-4 gap-x-4 md:gap-x-[2.5rem]',
        type === 'Schedules' ? 'py-4 md:py-6 px-7 md:px-10' : 'p-3 md:p-4'
      )}
    >
      {type !== 'Schedules' && props.image?.url && (
        <div className="w-[5.5rem] md:w-[8.75rem] aspect-square rounded-lg bg-primary-thin overflow-hidden">
          <Image
            width={140}
            height={140}
            src={props.image.url}
            alt={props.image?.alt}
          />
        </div>
      )}
      <div className="w-full flex flex-col justify-start gap-2 md:gap-[1.25rem]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="block text-black text-base md:text-xl font-bold w-fit">
            {title}
          </span>
          {/* Speaker card socila links */}
          {type === 'Speakers' &&
            props.socialLinks &&
            Object.entries(props.socialLinks).length > 0 && (
              <div className="flex flex-wrap items-center gap-4">
                {props.socialLinks.twitter && (
                  <Link
                    href={props.socialLinks.twitter}
                    target="_blank"
                    aria-label="twitter-profile"
                  >
                    <IconStore iconName="Twitter" />
                  </Link>
                )}
                {props.socialLinks.linkedin && (
                  <Link
                    href={props.socialLinks.linkedin}
                    target="_blank"
                    aria-label="linkedin-profile"
                  >
                    <IconStore iconName="Linked In" />
                  </Link>
                )}
                {props.socialLinks.dribble && (
                  <Link
                    href={props.socialLinks.dribble}
                    target="_blank"
                    aria-label="dribble-profile"
                  >
                    <IconStore iconName="Dribble" />
                  </Link>
                )}
                {props.socialLinks.github && (
                  <Link
                    href={props.socialLinks.github}
                    target="_blank"
                    aria-label="github-profile"
                  >
                    <IconStore iconName="Github" />
                  </Link>
                )}
              </div>
            )}
          {/* Schedule card date */}
          {type === 'Schedules' && (
            <span className="block text-black text-xs md:text-base font-normal">
              {subTitle}
            </span>
          )}
        </div>
        {/* Card sub-title */}
        {type !== 'Schedules' && (
          <span className="block text-black text-xs md:text-base font-normal">
            {subTitle}
          </span>
        )}
        {/* Schedule list */}
        {type === 'Schedules' &&
          props.sessions.map((session, i) => (
            <div
              className="text-black text-xs md:text-base font-normal opacity-80 flex flex-col "
              key={i}
            >
              <span>
                Duration: {session.begin}-{session.end}
              </span>
              <span className="pl-[1.5rem] relative before:contents:'' before:absolute before:left-2 before:top-[0.35rem] before:w-2 before:h-2 before:rounded-full before:bg-black">
                {session.title}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Info;
