import {WatchProvider} from "@/data/models/dto/WatchProvider";
import Image from "next/image";
import ScrollableSection from "@/components/ScrollableSection";

interface WatchOnSectionProps {
    watchProviders: WatchProvider[]
}


const WatchOnSection = ({watchProviders}: WatchOnSectionProps) => {

    return (
        <ScrollableSection header="Watch on" headerVariant="overline" compact={true}>
            {watchProviders.map(provider =>
                <Image
                    key={provider.provider_id}
                    src={provider.logo_path}
                    alt={provider.provider_name}
                    style={{borderRadius: "50%"}}
                    width={48}
                    height={48}/>
            )}
        </ScrollableSection>

    )
}

export default WatchOnSection