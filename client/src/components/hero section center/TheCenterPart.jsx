import { useRef } from "react";

function TheCenterPart() {
    const FaceBook = useRef();
    const insta = useRef();
    const tiktok = useRef();

    return (
        <main className="relative flex items-center pl-10 bg-[#dde2cc] text-black font-medium font-Cabin dark:bg-DarkColor pt-14">
            <section className="dark:text-white">
                <div className="TheBigTxt">
                    <h3 className="text-4xl leading-normal font-extrabold">
                        Empowering Moms with <br /> Every Thoughtful Product Choice
                    </h3>
                </div>
                <div className="tracking-wider mt-9 text-base leading-normal dark:text-white">
                    <p>
                        Supporting moms with practical solutions and resources to make parenting
                        <br />
                        easier and more enjoyable. Explore our offerings today!
                    </p>
                </div>
                <div className="mt-10 mb-7">
                    <button className="select-none border-2 border-[#416048] p-3 max-w-48 min-w-40 rounded-3xl text-white dark:text-white bg-[#416048] hover:bg-transparent hover:text-black transition-colors duration-300">
                        Start Now
                    </button>
                </div>
                <div className="select-none FindUs text-xl flex gap-3 mb-10 ml-2 pb-10 mt-20">
                    <p>
                        Find Us On:
                    </p>
                    <div className="flex gap-3 items-center icons">
                        <a 
                            ref={FaceBook} 
                            className="opacity-70 hover:opacity-100 transition-opacity duration-300 inline-block w-6" 
                            href="#"
                        >
                            <img src="./icons/findusIcons/pinterest.svg" alt="Pinterest" />
                        </a>
                        <a 
                            ref={insta} 
                            className="opacity-70 hover:opacity-100 transition-opacity duration-300 inline-block w-6" 
                            href="#"
                        >
                            <img src="./icons/findusIcons/instagram.svg" alt="Instagram" />
                        </a>
                        <a 
                            ref={tiktok} 
                            className="opaacity-70 hover:opacity-100 transition-opacity duration-300 inline-block w-6" 
                            href="#"
                        >
                            <img src="./icons/findusIcons/tiktok.svg" alt="TikTok" />
                        </a>
                    </div>
                </div>
            </section>
            <div className="absolute right-16 bottom-10">
                <img src="./image/MotherHeroSectionImage.png" alt="" />
            </div>
        </main>
    );
}

export default TheCenterPart;
