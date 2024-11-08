import Link from "next/link";
import { IconType } from "react-icons";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io5";
import CopyButton from "./copy";

interface IShare {
    Icon: IconType;
    link: string;
}

const share: IShare[] = [
    { Icon: IoLogoFacebook, link: "https://www.facebook.com/share/sharer.php?u=" },
    { Icon: IoLogoLinkedin, link: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { Icon: IoLogoTwitter, link: "https://www.twitter.com/intent/tweet?url="},
    { Icon: IoLogoWhatsapp, link: "https://wa.me/?text="},
]

export default function ShareButton ({ slug }: { slug: string}) {
    const domain = "https://blog-cms-mirza.vercel.app/blog/"
    return (
        <div>
            <p className="text-lg font-semibold mb-2">bagikan</p>
            <div className="flex gap-2">
                { share.map((item, idx) => {
                    return (
                        <Link target="_blank" key={idx} href={`${item.link}${domain}${slug}`} className="w-7 h-7 mr-0 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                            <item.Icon/>
                        </Link>
                    )
                })}
                <CopyButton link={`${domain}${slug}`} />
            </div>
        </div>
    )
}