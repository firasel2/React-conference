import IconStore from '@components/icons';
import { ITimeLineStep } from './interface';
import { twMerge } from 'tailwind-merge';

const TimeLineStep = ({
  icon,
  isHover,
  lineShow,
  classNames,
}: ITimeLineStep) => {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center gap-2 w-fit',
        classNames
      )}
    >
      <div
        className={twMerge(
          'min-w-[3rem] min-h-[3rem] flex items-center justify-center rounded-full border-[1px] border-solid border-gray-light text-gray-light bg-gray-thin transition-all duration-300',
          isHover && 'border-primary text-primary bg-primary/10'
        )}
      >
        {icon && <IconStore iconName={icon} />}
      </div>
      {lineShow && (
        <div
          className={twMerge(
            'block w-[0.125rem] h-full rounded bg-gray-light transition-all duration-300',
            isHover && 'bg-primary'
          )}
        ></div>
      )}
    </div>
  );
};

export default TimeLineStep;
