import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Header() {
    return (
        <main className={inter.className}>
            <div className="relative">

            <div className="bg-red-700 rotate-6 absolute"></div>
            <div className="flex float-end gap-16 mr-[290px] mt-20">
                <button>Home</button>
                <button>Skils</button>
                <button className="">Porfolio</button>
                <button className="bg-white rounded-2xl text-black py-2 px-6 font-semibold">
                    Contact Me
                </button>
            </div>
            </div>
           
        </main>
    );
}
