import Image from 'next/image';
import logo from '../static/images/article-logo.png';

export const Hero = (): JSX.Element => (
  <div
    className="bg-hero-background
    bg-cover
    bg-center
    min-h-[800px]">
    <div className="z-[4] relative">
      <nav className=" bg-transparent-nav">
        <div className="max-w-[1200px] my-0 px-[20px] xl:px-0 mx-auto">
          <div className="w-[120px] pt-[10px] pb-[10px]">
            <a href="#">
              <Image src={logo} alt="logos" priority />
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-[1200px] px-[20px] xl:px-0 my-0 mx-auto">
        <div className="text-white max-w-[450px] mt-[200px]">
          <h2 className="font-bold text-xl mb-[20px]">Description</h2>
          <p className="leading-7 text-lg">
            Proin dignissim nunc eu sapien convallis, sit amet faucibus metus tincidunt. Praesent at
            volutpat dui. Nam ut tincidunt purus. Praesent ut magna est. Integer varius ipsum vitae
            velit efficitur, non ullamcorper mauris commodo.
          </p>
        </div>
      </div>
    </div>
  </div>
);
