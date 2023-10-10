import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <Image height={40} width={40} alt="logo" src="/logo.svg" />{" "}
      <div className="flex items-center font-bold text-2xl text-[#007dfc]">
        academy
      </div>
    </>
  );
};
