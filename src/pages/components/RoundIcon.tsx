import Image from "next/image";

const RoundIcon = ({ icon }: { icon: string }) => {
  return (
    <div className="flex items-center justify-center rounded-full bg-white sm:h-12 sm:w-12">
      <Image src={icon} alt="icon" width={24} height={24} className="" />
    </div>
  );
};

export default RoundIcon;
