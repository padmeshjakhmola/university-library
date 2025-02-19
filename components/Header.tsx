import Image from "next/image";
import Link from "next/link";
import AvatarImageComponent from "./AvatarImageComponent";

const Header = () => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="./icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>
      <div className="flex flex-row items-center gap-8">
        <AvatarImageComponent />
      </div>
    </header>
  );
};

export default Header;
