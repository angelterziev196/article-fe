import { Article } from './types';
import { ReadMore } from '../ReadMore/ReadMore';

export const ArticleCard = ({ image, title, description, userName }: Article): JSX.Element => {
  return (
    <div
      className="overflow-hidden
      shadow-md
      hover:shadow-xl
      hover:scale-105
      transition-all
      shadow-silver
      rounded-xl
      flex
      md:flex-row
      flex-col
      border-mine-shaft-transparent">
      <div
        style={{
          backgroundImage: `url(${image})`
        }}
        className="relative md:w-[300px] h-48 md:h-auto bg-cover bg-center"></div>
      <div className="p-[20px] text-mine-shaft md:max-w-[300px]">
        <h2 className="font-bold text-xl mb-[20px]">{title}</h2>
        <p>{description}</p>
        <div className="mt-[20px] text-sm text-silver flex row justify-between items-center">
          <span>By {userName}</span>
          <ReadMore />
        </div>
      </div>
    </div>
  );
};
