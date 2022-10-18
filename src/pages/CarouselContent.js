import furniture from "../assets/furniture.jpg"
export default function CarouselContent(){
    return(
        <div className="container mx-auto my-5 flex gap-5">
            <div className="w-auto h-auto sm:h-auto p-10 bg-white bg-opacity-100 backdrop-blur-lg drop-shadow-lg">
                <h2 className="font-bold text-5xl my-5">We Help You Make Modern Interior</h2>
                <p className="italic font-semibold">We will help you to make an elegant and luxurious interior designed by professional interior designer.</p>
            </div>
            <div className="w-full sm:hidden">
                <img src={furniture} alt="" className="h-auto" />
            </div>
            <div>
                xxxxxxxx
            </div>
        </div>
    );
}