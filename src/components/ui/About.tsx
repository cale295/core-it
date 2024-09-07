import React from "react";
import { NeonGradientCard } from "../magicui/neon-gradient-card";
import { BorderBeam } from "../magicui/border-beam";

const AboutUs = () => {
    React.useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.text-reveal');
            elements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    el.classList.add('opacity-100', 'translate-y-0');
                } else {
                    el.classList.remove('opacity-100', 'translate-y-0');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div id="about" className="bg-slate-950 min-h-screen flex items-center justify-center">
            <NeonGradientCard className="flex w-full min-h-screen">
                <div className="flex justify-center items-center min-h-screen">
                    <div className="relative flex flex-col items-center justify-center text-center overflow-hidden rounded-lg border bg-slate-950 p-8 md:shadow-xl max-w-screen-lg">
                        <h1 className="text-[#5046e6] font-bold text-4xl md:text-6xl lg:text-8xl mb-4">Core IT</h1>
                        <p className="text-reveal opacity-0 transform translate-y-5 transition duration-700 ease-out text-white text-lg md:text-2xl lg:text-3xl">
                            Selamat datang di Core IT, sebuah organisasi yang berdedikasi untuk memberdayakan anggotanya dengan keterampilan dan pengetahuan dalam bidang teknologi digital. Kami berfokus pada tiga area utama: <span className="text-[#5046e6]">Web Programming, Cybersecurity, dan Networking.</span> Di Core IT, kami mengajarkan cara membuat website dinamis dan responsif, melindungi data dari ancaman siber, dan merancang serta mengelola sistem jaringan yang handal. Kami percaya bahwa pendidikan yang tepat dapat membuka jalan menuju masa depan yang cerah di dunia digital. Bergabunglah dengan kami untuk menguasai teknologi yang akan membentuk masa depan.
                        </p>
                        <BorderBeam size={500} duration={12} delay={9} />
                    </div>
                </div>
            </NeonGradientCard>
        </div>
    );
};

export default AboutUs;
