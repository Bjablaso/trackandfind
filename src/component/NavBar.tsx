// @flow
import * as React from 'react';
import {
    LayoutDashboard,
    Briefcase,
    Calendar,
    Bot,
    Settings,
    ChevronDown
} from "lucide-react";
import {type JSX, useState} from "react";


 interface INavItem {
    name: NavItemName;
    icon: JSX.Element;
}

const NavItem:INavItem[] = [
    {
        name: 'Dashboard',
        icon: <LayoutDashboard className="h-4 w-4"/>
    },
    {
        name: 'Jobs',
        icon: <Calendar className="h-4 w-4"/>
    },
    {
        name: 'Schedule',
        icon: <Briefcase className="h-4 w-4"/>
    },
    {
        name: 'Agent',
        icon: <Bot className="h-4 w-4"/>
    },
    {
        name: 'Settings',
        icon: <Settings className="h-4 w-4"/>
    }

];

interface  NavProps {
    //hidden: boolean;
    onNavigate?: (page: NavItemName) => void;
}
export type NavItemName = "Dashboard" | "Jobs" | "Schedule" | "Agent" | "Settings";


const LogInPreview = () => {
    return (
        <div className="flex flex-row w-full h-8/12 p-3 gap-3
                    bg-elevated-charcoal border border-border
                    rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.22)]">

            {/* Left: Avatar */}
            <div className="basis-[30%] h-[50px] w-[50px]
                      rounded-full flex items-center justify-center
                       text-white
                      font-semibold text-lg
                      bg-deep-purple
                      shadow-[0_0_15px_var(--purple-glow)]
                      hover:opacity-50
                      ">
                FL
            </div>

            {/* Right: Info + Chevron */}
            <div className="flex flex-row flex-1 items-center gap-2">

                {/* Name + Plan */}
                <div className="flex flex-col basis-[80%] leading-tight">
          <span className="text-off-white font-medium text-sm hover:opacity-50">
            Brandon J.
          </span>
                    <span className="text-muted-gray text-xs">
            Premium Plan
          </span>
                </div>

                {/* Chevron */}
                <div className="basis-[20%] flex items-center justify-center">
                    <ChevronDown className="h-4 w-4 text-off-white hover:opacity-50" strokeWidth={3} />
                </div>

            </div>
        </div>
    );
};



export const NavBar:React.FC<NavProps> = ({
                                        onNavigate,
                                          }) => {
   // const [active, setActive]     = useState("Dashboard");
    // const [open,   setOpen]       = useState(false);
    const [itemName, setItemName] = useState("Dashboard");

    function selectNavItem(name: NavItemName) {
        setItemName(name);

        if (onNavigate) {
            onNavigate(name);
        }
    }

    return (
        <div
            className="
            grid grid-rows-[10%_60%_12%_18%]
            w-full h-full
            bg-sidebar
            border-r border-border
            shadow-[8px_0_24px_rgba(0,0,0,0.30)]
            p-2
        "
        >
            <div className="flex flex-col  w-full h-full
            justify-end items-center
            ">
                <div>

                </div>
                <span className="track-logo text-2xl">
                  Track<span className="track-logo-accent">And</span>Find
                </span>

            </div>
            <div className="flex  justify-center  ">
                <ul className="flex flex-col gap-3 relative top-8">
                    {NavItem.map((item, index) => {
                       return (
                           <li key={index} className={`flex flex-row gap-4 items-center p-3
                           ${itemName === item.name ? "sidebar-item-active" : ""}
                           `}

                               onClick={() => selectNavItem(item.name)}
                           >
                               {item.icon}
                               <span>{item.name}</span>
                           </li>
                       )
                    })}
                </ul>
            </div>
            <div className="flex w-full h-full items-center">
                <LogInPreview/>
            </div>
            <div></div>


        </div>
    );
};