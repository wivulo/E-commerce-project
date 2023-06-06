import { FaArrowRight } from "react-icons/fa";
import Input from "../inputComponent";

const FooterComponent = () => {
    return (
        <footer className="w-full h-auto p-4">
            <div className="w-full h-72 bg-[#5959d9] flex flex-col gap-y-4 rounded-sm text-main-white px-3 py-8">
                <h2 className="text-xl font-semibold">Yes!</h2>
                <p className="font-medium">
                    Send me exclusive offers, unique gift ideas, 
                    and personalized tips for shopping and 
                    selling on Commerce.
                </p>
                <form className="flex flex-col gap-y-3">
                    <Input w="w-full" h="h-12" placeholder="Drop your email..."/>
                    <button type="submit" className="bg-main-third w-full rounded-full h-9 flex justify-center items-center gap-x-3 font-medium">
                        Subscribe <FaArrowRight/>
                    </button>
                </form>

            </div>
        </footer>
    )
}

export default FooterComponent;