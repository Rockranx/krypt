import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2  hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h1 className="mt-2 text-white text-lg flex justify-center font-bold">{title}</h1>
      <p className="mt-2 text-white text-sm md:w-12/12 flex justify-center p-2">{subtitle}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-center p-2">
          <h1 className="text-white text-3xl  sm:text-5xl py-2 text-gradient p-1">
            We offer premium services
            <br />
            Wanna try it out?
          </h1>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security Guaranteed"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is tight. We always uphold privacy"
        />

        <ServiceCard
          color="bg-[#8984F8]"
          title="Best Exchange"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Best security. Privacy is the key resource"
        />

        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest Transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Speed is our motto. Delivery is our desire  "
        />
      </div>
    </div>
  );
};

export default Services;
