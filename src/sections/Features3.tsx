import Image, { StaticImageData } from 'next/image'; // Import the Image component and StaticImageData from Next.js

// Your existing imports
import IntegrationIcon from "@/assets/lock2.png"; 
import GoalSettingIcon from "@/assets/lock2.png"; 
import EncryptionIcon from "@/assets/lock2.png";


// Define an interface for the feature object
interface Feature {
  title: string;
  description: string;
  icon: StaticImageData; // Use StaticImageData type for icons
}

// Define the features with their corresponding icons
const features3: Feature[] = [
    {
      title: 'Integration Ecosystem',
      description: 'Enhance your productivity by connecting with your tools, keeping your essentials in one place',
      icon: IntegrationIcon, // Add the icon for this feature
    },
    {
      title: 'Goal Setting and Tracking',
      description: 'Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight',
      icon: GoalSettingIcon, // Add the icon for this feature
    },
    {
      title: 'Secure Data Encryption',
      description: 'With end-to-end encryption, your data is securely stored and protected from unauthorized access',
      icon: EncryptionIcon, // Add the icon for this feature
    },
    {
      title: 'Customizable Workflows',
      description: 'Easily tailor your workflows to fit your unique team needs and processes.',
      icon: IntegrationIcon, // Use a suitable icon
    },
    {
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time, no matter where you are.',
      icon: GoalSettingIcon, // Use a suitable icon
    },
];

export const Features3 = () => {
  return (
    <div className='py-2 text-white bg-[radial-gradient(ellipse_100%_160%_at_top_left,#AD49E1,#000_60%)]'>
      <div className='container'>
        <div 
          className="mt-16 flex flex-wrap justify-center gap-4 "
        >
          {features3.slice(0, 5).map(({ title, description, icon }: Feature) => (
            <div 
              key={title} 
              className=" border border-white/30 px-5 py-10 rounded-xl flex flex-col items-center md:w-80 bg-black relative transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_7px_14px_#EAEAEA]" // Add relative positioning
            >
              {/* Image icon above title */}
              <div className="absolute top-4 left-4"> {/* Position the icon in the top-left corner */}
                <Image 
                  src={icon} 
                  alt={`${title} icon`} 
                  width={50} // Set appropriate width
                  height={50} // Set appropriate height
                  className="object-contain rounded-lg" // Added rounded-full class for circular icon
                />
              </div>
              <h3 className="mt-12 font-bold" style={{ fontSize: '30px' }}>{title}</h3> {/* Adjusted margin-top */}
              <p className="mt-2 text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};