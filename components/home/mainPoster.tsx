import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import Image from "next/image"
import { AspectRatio } from "../ui/aspect-ratio"
import { Button } from "../ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export function MainPoster() {
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="w-full  border aspect-[16/4] border-none relative"
        >
            <ResizablePanel defaultSize={40}>
                <ResizablePanelGroup direction="vertical" >
                    <ResizablePanel defaultSize={75}>
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-bold text-2xl">Never Forget How <span className="text-violet-600">Beautiful</span> You Are</span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={25}>
                        <div className="flex h-full gap-4 items-center p-6 ">
                            <Button variant={'ghost'} className="font-bold">
                                REGISTER
                                <FontAwesomeIcon icon={faArrowRight} />

                            </Button>
                            <Button variant={'ghost'} className="font-bold">
                                PRICING
                                <FontAwesomeIcon icon={faArrowRight} />

                            </Button>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={60} >
                <div className="w-full h-full bg-center bg-contain bg-no-repeat" style={{ background: `url('https://github.com/shadcn.png')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="w-full h-full bg-black bg-opacity-40"></div>
                </div>
            </ResizablePanel>



            <div className="absolute bottom-32 right-80 ">

                <div className="gap-4 p-2 w-64  flex flex-col bg-gradient-to-r from-blue-700 to-purple-600 absolute text-white rounded-md shadow-lg shadow-teal-900">
                    <div className="p-2 rounded-lg justify-between bg-white flex items-center  text-purple-600 text-[8px] ">
                        <span className="font-bold">Grand Opening</span>
                        <span>All items are 25% for New Member!</span>
                    </div>
                    <div className="flex items-center gap-4 w-full">
                        <div className="flex flex-col"><span className="font-bold">20</span><span>hours</span></div>
                        <div className="flex flex-col"><span className="font-bold self-start">:</span></div>
                        <div className="flex flex-col"><span className="font-bold">10</span><span>minutes</span></div>
                        <div className="flex flex-col"><span className="font-bold self-start">:</span></div>
                        <div className="flex flex-col"><span className="font-bold">05</span><span>seconds</span></div>
                    </div>
                </div>
            </div>
        </ResizablePanelGroup>
    )
}
