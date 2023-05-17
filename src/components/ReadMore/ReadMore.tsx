export const ReadMore = ({ readArticle }: any): JSX.Element => (
  <button
    onClick={readArticle}
    className="
    text-mine-shaft
    transition-all
    p-[10px]
    rounded-xl
    border
    border-mine-shaft
    hover:border-old-brick
    hover:bg-old-brick
    hover:text-white">
    Read More
  </button>
);
