import ImageSlider from "@/components/ImageSlider";
// import { clientServerFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils"


export default function ServerRoutePage () {

    const server = serverSideFunction()
    console.log(server);
    
    // const result = clientServerFunction()

    return (
        <div>
            {server}
            ServerRoutePage
            <ImageSlider />
        </div>
    )
}