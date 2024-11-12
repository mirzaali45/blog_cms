import Link from "next/link";
import Wrapper from "./wrapper";

export default function Navbar() {
  return (
    <div className="h-[80px] top-0 z-0">
      <Wrapper>
        <Link href={"/"} className="flex items-center gap-2">
          <img
            src="https://www.blogger.com/img/logo_blogger_40px_2x.png"
            alt="Logo Blogger"
            className="h-8"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-700">
            Mirza News
          </span>
        </Link>
      </Wrapper>
    </div>
  );
}