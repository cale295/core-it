import React from "react";
import BoxReveal from "../magicui/box-reveal";
import HyperText from "../magicui/hyper-text";
import Meteors from "../magicui/meteors";

const Home = () => {
    return (
        <div id="home" className="bg-slate-950 flex flex-col md:flex-row items-center justify-center min-h-screen p-6 md:p-10">
            <div className="absolute overflow-hidden inset-0 z-10">
                <Meteors number={window.innerWidth < 768 ? 20 : 50} />
            </div>
            <div className="w-full md:hidden mb-8 z-10">
                <img 
                    src="/img/core-it.png" 
                    alt="Core IT" 
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            <div className="hidden md:block md:w-1/2 lg:w-1/3 z-10">
                <img 
                    src="/img/core-it.png" 
                    alt="Core IT" 
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            <div className="h-full w-full md:max-w-[40rem] flex flex-col items-center md:items-start justify-center overflow-hidden text-white z-10">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <HyperText className="text-[2.5rem] md:text-[4.5rem] font-semibold text-center md:text-left leading-tight"
                    text="CORE IT" />
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <h2 className="mt-[1rem] text-[1.5rem] md:text-[2rem] text-center md:text-left leading-tight">
                    Apa Yang Ada Di{" "}
                    <span className="text-[#5046e6]">Core IT?</span>
                    </h2>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <div className="mt-[2rem] md:mt-[3rem] mb-[1rem] text-[1.25rem] md:text-[1.5rem] text-center md:text-left leading-relaxed">
                    <p>
                        -&gt; Disini Kita Akan Mempelajari Tentang
                        <span className="font-semibold text-[#5046e6]"> Web Programming</span>,
                        <span className="font-semibold text-[#5046e6]"> Cyber Security</span>,
                        &
                        <span className="font-semibold text-[#5046e6]"> Networking</span>
                        . <br />
                        -&gt; Segera Bergabung Dengan Kami. <br />
                    </p>
                    </div>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <a href="https://forms.gle/7TxaSF4YJrLG3Jcq6">
                        <button
                            className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                            >
                            <span
                                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                            >
                            </span>
                            <span
                                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
                            >
                                JOIN SEKARANG
                            </span>
                        </button>
                    </a>
                </BoxReveal>
            </div>
        </div>
    );
};

export default Home;
