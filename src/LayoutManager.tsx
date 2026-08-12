import {NavBar, type NavItemName} from "./component/NavBar.tsx";
import {type JSX, useState} from "react";
import {Bell, Search, Sparkles} from "lucide-react";
import {DashboardLeftContentArea} from "./component/pages/Dashboard.tsx";


export const LayoutManager = () => {
    const [currentPage, setCurrentPage] = useState<NavItemName>("Dashboard");


    const PageMap: Record<NavItemName, JSX.Element> = {
        Dashboard: (
            <div className="grid grid-cols-[75%_25%] w-full h-full ">
                <div className="flex w-full">
                    <DashboardLeftContentArea/>
                </div>
                <div className="flex border-2 border-purple-700 h-full">Dash Board Here</div>
            </div>
        ),
        Jobs: (
            <div className="grid grid-rows-[75%_25%] lg:grid-cols-[75%_25%] h-full">
                <div className="flex h-full">Job Here</div>
                <div className="flex border-2 border-purple-700 h-full">Jobs Here</div>
            </div>
        ),
        Schedule: (
            <div className="grid grid-rows-[75%_25%] lg:grid-cols-[75%_25%] h-full">
                <div className="flex h-full">Schedule Here</div>
                <div className="flex border-2 border-purple-700 h-full">Schedule</div>
            </div>
        ),
        Agent: (
            <div className="grid grid-rows-[75%_25%] lg:grid-cols-[75%_25%] h-full">
                <div className="flex h-full">Agent Here</div>
                <div className="flex border-2 border-purple-700 h-full">Agent Here</div>
            </div>
        ),
        Settings: (
            <div className="grid grid-rows-[75%_25%] lg:grid-cols-[75%_25%] h-full">
                <div className="flex h-full">Settings Here</div>
                <div className="flex border-2 border-purple-700 h-full">Settings Here</div>
            </div>
        )
    };

    return (
        <div className="flex flex-row min-h-screen w-full">

            {/* Sidebar – hidden on small screens */}
            <div className="hidden xl:block basis-[12%] shadow-[-10px_0_30px_rgba(0,0,0,0.22)]">
                {/* Sidebar content */}
                <NavBar
                    onNavigate={setCurrentPage}
                />
            </div>

            <div className="basis-[88%] grid grid-rows-[9%_91%]">
                <div className="flex w-full h-full
                justify-between px-10 items-center
                ">
                    <div className="w-4/12 h-5/12 rounded-lg
                px-3 bg-charcoal-hover border border-cool-gray/30
                flex items-center justify-center">

                        <div className="flex flex-row items-center gap-3 w-full">

                            <Search className="text-muted-gray h-4 w-4 hover:opacity-70" />

                            <input
                                type="text"
                                placeholder="Search jobs, companies, or skills..."
                                className="
                                w-full h-8
                                bg-elevated-charcoal
                                rounded-md
                                px-3
                                text-off-white
                                placeholder-muted-gray
                                outline-none
                                whitespace-nowrap
                                overflow-x-auto
                                scrollbar-none
      "
                            />
                        </div>

                    </div>


                    <div className="flex flex-row gap-5 items-center">
                        <div className="flex flex-row gap-5 items-center">
                            <div className="relative">

                                {/* Bell Icon */}
                                <Bell className="h-6 w-6 text-off-white hover:opacity-70" />

                                {/* Badge */}
                                <div
                                    className="
                                    absolute
                                    -top-3
                                    -right-2
                                    h-4 w-4
                                    rounded-full
                                    bg-bright-purple
                                    flex items-center justify-center
                                    text-[10px] font-bold text-white
                                    shadow-[0_0_6px_var(--purple-glow)]
                                    hover:opacity-70
                                "
                                >
                                    3
                                </div>

                            </div>
                        </div>


                        <div className="p-2 rounded-full bg-warning/20 hover:opacity-70">
                            <Sparkles  />
                        </div>


                        <div className="relative">

                            <div className="h-10 w-10 rounded-full bg-charcoal-hover
                                flex items-center justify-center
                                 font-bold hover:opacity-70">
                                BJ
                            </div>

                            <div
                            className="
                              absolute
                                    top-8
                                    -right-2
                                    h-3 w-3
                                    rounded-full
                                    bg-success
                                    flex items-center justify-center
                                    text-[10px] font-bold text-white
                                    shadow-[0_0_6px_var(--purple-glow)]
                                    hover:opacity-70
                            ">

                            </div>

                        </div>
                    </div>
                </div>

                {PageMap[currentPage]}
            </div>


            {/* Main content */}
            {/*<div className="basis-[88%]  grid grid-rows-[9%_91%] ">*/}

            {/*    /!* Top bar *!/*/}
            {/*    <div className="border-2 border-red-500"> </div>*/}

            {/*    {currentPage === "Dashboard" ? (*/}
            {/*        <div className="*/}
            {/*      grid*/}
            {/*      grid-rows-[75%_25%]*/}
            {/*      lg:grid-rows-none*/}
            {/*      lg:grid-cols-[75%_25%]*/}
            {/*      h-full*/}
            {/*    ">*/}
            {/*            /!* Left panel *!/*/}
            {/*            <div className="flex  h-full">*/}
            {/*                /!* content *!/*/}
            {/*                Dash Board Here*/}
            {/*            </div>*/}

            {/*            /!* Right panel *!/*/}
            {/*            <div className="flex border-2 border-purple-700 h-full">*/}
            {/*                /!* content *!/*/}
            {/*                Dash Board Here*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    ): (*/}
            {/*        <div className="*/}
            {/*      grid*/}
            {/*      grid-rows-[75%_25%]*/}
            {/*      lg:grid-rows-none*/}
            {/*      lg:grid-cols-[75%_25%]*/}
            {/*      h-full*/}
            {/*    ">*/}

            {/*            /!* Left panel *!/*/}
            {/*            <div className="flex  h-full">*/}
            {/*                /!* content *!/*/}
            {/*                Here*/}
            {/*            </div>*/}

            {/*            /!* Right panel *!/*/}
            {/*            <div className="flex border-2 border-purple-700 h-full">*/}
            {/*                /!* content *!/*/}
            {/*                here*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    )}*/}
            {/*    /!* Main grid *!/*/}

            {/*    {currentPage === "Jobs" ? (*/}
            {/*        <div className="*/}
            {/*      grid*/}
            {/*      grid-rows-[75%_25%]*/}
            {/*      lg:grid-rows-none*/}
            {/*      lg:grid-cols-[75%_25%]*/}
            {/*      h-full*/}
            {/*    ">*/}
            {/*            /!* Left panel *!/*/}
            {/*            <div className="flex  h-full">*/}
            {/*                /!* content *!/*/}
            {/*                Job Here*/}
            {/*            </div>*/}

            {/*            /!* Right panel *!/*/}
            {/*            <div className="flex border-2 border-purple-700 h-full">*/}
            {/*                /!* content *!/*/}
            {/*                Jobs  Here*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    ): (*/}
            {/*        <div className="*/}
            {/*      grid*/}
            {/*      grid-rows-[75%_25%]*/}
            {/*      lg:grid-rows-none*/}
            {/*      lg:grid-cols-[75%_25%]*/}
            {/*      h-full*/}
            {/*    ">*/}

            {/*            /!* Left panel *!/*/}
            {/*            <div className="flex  h-full">*/}
            {/*                /!* content *!/*/}
            {/*                Here*/}
            {/*            </div>*/}

            {/*            /!* Right panel *!/*/}
            {/*            <div className="flex border-2 border-purple-700 h-full">*/}
            {/*                /!* content *!/*/}
            {/*                here*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    )}*/}

            {/*    {currentPage === "Schedule" ? (*/}
            {/*        <div className="*/}
            {/*      grid*/}
            {/*      grid-rows-[75%_25%]*/}
            {/*      lg:grid-rows-none*/}
            {/*      lg:grid-cols-[75%_25%]*/}
            {/*      h-full*/}
            {/*    ">*/}
            {/*            /!* Left panel *!/*/}
            {/*            <div className="flex  h-full">*/}
            {/*                /!* content *!/*/}
            {/*                Dash Board Here*/}
            {/*            </div>*/}

            {/*            /!* Right panel *!/*/}
            {/*            <div className="flex border-2 border-purple-700 h-full">*/}
            {/*                /!* content *!/*/}
            {/*                Dash Board Here*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    ): (*/}
            {/*        <div className="*/}
            {/*      grid*/}
            {/*      grid-rows-[75%_25%]*/}
            {/*      lg:grid-rows-none*/}
            {/*      lg:grid-cols-[75%_25%]*/}
            {/*      h-full*/}
            {/*    ">*/}

            {/*            /!* Left panel *!/*/}
            {/*            <div className="flex  h-full">*/}
            {/*                /!* content *!/*/}
            {/*               Schedule Here*/}
            {/*            </div>*/}

            {/*            /!* Right panel *!/*/}
            {/*            <div className="flex border-2 border-purple-700 h-full">*/}
            {/*                /!* content *!/*/}
            {/*                Shedule*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    )}*/}
            {/*    {currentPage === "Agent" ? (*/}
            {/*        <div className="*/}
            {/*      grid*/}
            {/*      grid-rows-[75%_25%]*/}
            {/*      lg:grid-rows-none*/}
            {/*      lg:grid-cols-[75%_25%]*/}
            {/*      h-full*/}
            {/*    ">*/}
            {/*            /!* Left panel *!/*/}
            {/*            <div className="flex  h-full">*/}
            {/*                /!* content *!/*/}
            {/*                Agent Here*/}
            {/*            </div>*/}

            {/*            /!* Right panel *!/*/}
            {/*            <div className="flex border-2 border-purple-700 h-full">*/}
            {/*                /!* content *!/*/}
            {/*                Agent  Here*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    ): (*/}
            {/*        <div className="*/}
            {/*      grid*/}
            {/*      grid-rows-[75%_25%]*/}
            {/*      lg:grid-rows-none*/}
            {/*      lg:grid-cols-[75%_25%]*/}
            {/*      h-full*/}
            {/*    ">*/}

            {/*            /!* Left panel *!/*/}
            {/*            <div className="flex  h-full">*/}
            {/*                /!* content *!/*/}

            {/*            </div>*/}

            {/*            /!* Right panel *!/*/}
            {/*            <div className="flex border-2 border-purple-700 h-full">*/}
            {/*                /!* content *!/*/}

            {/*            </div>*/}

            {/*        </div>*/}
            {/*    )}*/}

            {/*    {currentPage === "Settings" ? (*/}
            {/*        <div className="*/}
            {/*      grid*/}
            {/*      grid-rows-[75%_25%]*/}
            {/*      lg:grid-rows-none*/}
            {/*      lg:grid-cols-[75%_25%]*/}
            {/*      h-full*/}
            {/*    ">*/}
            {/*            /!* Left panel *!/*/}
            {/*            <div className="flex  h-full">*/}
            {/*                /!* content *!/*/}
            {/*                Settings Here*/}
            {/*            </div>*/}

            {/*            /!* Right panel *!/*/}
            {/*            <div className="flex border-2 border-purple-700 h-full">*/}
            {/*                /!* content *!/*/}
            {/*                Settings  Here*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    ): (*/}
            {/*        <div className="*/}
            {/*      grid*/}
            {/*      grid-rows-[75%_25%]*/}
            {/*      lg:grid-rows-none*/}
            {/*      lg:grid-cols-[75%_25%]*/}
            {/*      h-full*/}
            {/*    ">*/}

            {/*            /!* Left panel *!/*/}
            {/*            <div className="flex  h-full">*/}
            {/*                /!* content *!/*/}
            {/*                Here*/}
            {/*            </div>*/}

            {/*            /!* Right panel *!/*/}
            {/*            <div className="flex border-2 border-purple-700 h-full">*/}
            {/*                /!* content *!/*/}
            {/*                here*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    )}*/}

            {/*</div>*/}

        </div>
    );
};
