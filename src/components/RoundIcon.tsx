import Image from "next/image";

const RoundIcon = ({ icon }: { icon: string }) => {
  return (
    <div className="flex items-center justify-center rounded-full bg-white h-7 w-7 sm:h-12 sm:w-12">
      <Image src={icon} alt="icon" width={24} height={24} className="p-1 sm:p-px" />
    </div>
  );
};

export default RoundIcon;
