import { submitTypes } from './types';

export const SubmitButton = ({ handleOnClick }: submitTypes): JSX.Element => (
  <button
    className="px-[20px]
    mt-[20px]
    py-[5px] 
    border
    border-mine-shaft
    rounded-md
    hover:text-white
    hover:bg-mine-shaft
    transition-all"
    onClick={handleOnClick}>
    CreateArticle
  </button>
);
