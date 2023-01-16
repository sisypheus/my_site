import Image from "next/image";

const RoundIcon = ({ icon }: { icon: string }) => {
  return (
    <div className="flex items-center justify-center rounded-full bg-white h-8 w-8 sm:h-12 sm:w-12">
      <Image src={icon} alt="icon" width={24} height={24} className="p-px" />
    </div>
  );
};

export default RoundIcon;
