import { Hero } from '../components/Hero';
import { ArticleCard } from '@/components/ArticleCard/ArticleCard';
import { testImage } from '@/static/images/staticImage';
import { CreateArticle } from '@/components/CreateArticle/CreateArticle';

export default function Home(): JSX.Element {
  return (
    <div>
      <Hero />
      <div className="max-w-[1200px] px-[20px] mb-0 mt-[40px] mx-auto xl:px-0  ">
        <div>
          <CreateArticle />
        </div>
        <div className="lg:grid-cols-2 mt-[30px] grid grid-cols-1 gap-5">
          <ArticleCard
            image={testImage}
            title="Test Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida eget ligula quis bibendum. Aliquam sit amet pulvinar felis, sed placerat est. Suspendisse potenti."
            userName="Ivan Petrov"
          />
        </div>
      </div>
    </div>
  );
}
