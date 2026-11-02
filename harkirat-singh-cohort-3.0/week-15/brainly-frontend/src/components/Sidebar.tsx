import { BrainLogo } from "../icons/BrainLogo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 left-0 top-0 fixed pl-4">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-4">
                <BrainLogo />
            </div>
            Brainly
        </div>
        <div className="pt-8 pl-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon />}/>
            <SidebarItem text="Twitter" icon={<YoutubeIcon />}/>
        </div>
    </div>
}