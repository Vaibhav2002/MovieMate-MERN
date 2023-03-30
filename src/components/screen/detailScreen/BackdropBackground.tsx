import {Image as Img} from "@/data/models/dto/Image";
import {Carousel} from "react-responsive-carousel";
import BottomGradientBox from "@/components/styled/BottomGradientBox";
import {useEffect, useState} from "react";
import Image from "next/image";


interface BackdropBackgroundProps {
    title: string
    backdrops: Img[]
}

const BackdropBackground = ({title, backdrops}: BackdropBackgroundProps) => {

    const [width, setWidth] = useState(0)
    const height = width / backdrops[0].aspect_ratio

    useEffect(() => {
        setWidth(window.innerWidth)
    }, []);

    return (
        <>
            <Carousel
                autoPlay
                infiniteLoop
                interval={7000}
                showStatus={false}
                showIndicators={false}
                showArrows={false}
            >
                {backdrops?.map(backdrop =>
                    <Image
                        key={backdrop.file_path}
                        src={backdrop.file_path}
                        alt={title}
                        loading="eager"
                        width={width}
                        height={height}
                    />
                )}
            </Carousel>
            <BottomGradientBox
                height="100%"
                sx={{background: "linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 150%)"}}
            />
        </>
    )
};


export default BackdropBackground;
