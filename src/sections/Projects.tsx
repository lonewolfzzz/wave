import Image, { StaticImageData } from 'next/image';
import imageSrc from '@/assets/bl3.jpg';

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="p-10 bg-[#c4c4c4] flex flex-col md:flex-row max-w-[1000px] justify-center text-black border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      {/* Left Side: Title and Description */}
      <div className="flex-1 p-4">
        <h3

          className="text-5xl font-bold mb-8"
        >
          {title}
        </h3>
        <p className="text-gray-700">{description}</p>
      </div>
      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 lg:max-w-full flex justify-center items-center">
        <div className="image-container"> {/* Wrap the Image component to apply hover effect */}
          <Image
            src={image}
            alt={title}
            width={500}
            height={200}
            className="object-cover rounded-lg h-full hover:zoom-rotate"
          />
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <div className="flex justify-center items-center py-6 mb-20 mx-4 md:mx-8 lg:mx-0">
      <Card
        title="Be ahead with the latest A.I. machine at your fingertips"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ullam quae temporibus veniam? Quaerat molestiae ex ipsam tenetur neque, architecto pariatur mollitia laudantium id, non ab. Provident animi quos odit."
        image={imageSrc}
      />
    </div>
  );
};
