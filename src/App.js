import cheer from './cheer.svg'
import LinkButton, {IconButton} from "./components/button";
function App() {
    return (
        <div className="bg-[#FFEEE2] dark:bg-[#201A18]
                        text-[#201A18] dark:text-[#FFEEE2]
                        h-[100vh] w-[100vw]
                        flex flex-col justify-around lg:justify-start lg:gap-10
                        text-center font-light font-['Roboto_Mono'] overflow-auto transition duration-300 ease-in-out">
            <img alt="a self-portrait of cheer" src={cheer} className='bg-white rounded-full mx-auto mt-10
            max-w-[40%] md:max-w-[15%] lg:max-w-[9%]'
            />
            <header>
                <h1 className="text-5xl md:text-3xl lg:text-5xl">cheer</h1>
                <small className="text-xs md:text-[8pt]">funny internet person</small>
            </header>
            <section className="flex flex-col justify-center gap-7 md:gap-2 md:w-[50%] lg:w-[20%] md:mx-auto lg:gap-7">
                <h2 className="text-lg">judge my taste:</h2>
                <LinkButton href="https://www.goodreads.com/user/show/121214441-cheer" label="goodreads"/>
                <LinkButton href="https://www.last.fm/user/eerch" label="last.fm"/>
                <LinkButton href="https://letterboxd.com/cheer_/" label="letterboxd"/>
            </section>
            <section className="flex justify-around md:justify-center md:gap-10 w-[90%] mx-auto">
                <IconButton category="brands" icon="square-twitter" href="https://twitter.com/eerchay"/>
                <IconButton category="brands" icon="square-youtube" href="https://youtube.com/@cheer_"/>
                <IconButton category="brands" icon="square-github" href="https://github.com/cheeeeer"/>
                <IconButton category="solid" icon="square-envelope" href="mailto:cheerfultoe@gmail.com"/>

            </section>
        </div>
    );
}

export default App;
