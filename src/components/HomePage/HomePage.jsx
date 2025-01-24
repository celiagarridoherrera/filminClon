import Slider from "../Slider/Slider";
import { CategoryCarousel } from "../Categories/Categories";

export const HomePage = () => {

    return (
        <>
            <Slider page={1}></Slider>
            <CategoryCarousel page={1} ></CategoryCarousel>
            <CategoryCarousel page={2} ></CategoryCarousel>
            <CategoryCarousel page={3} ></CategoryCarousel>
        </>
    )

}