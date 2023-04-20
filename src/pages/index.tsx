import { Hero } from '../components/Hero';
import { SubmitButton } from '@/components/SubmitButton';

export default function Home(): JSX.Element {
  return (
    <div>
      <Hero />
      <div className="max-w-[1200px] my-0 mx-auto"></div>
    </div>
  );
}
