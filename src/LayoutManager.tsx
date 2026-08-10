

export const LayoutManager = () => {
    return (
        <div className="flex flex-row min-h-screen w-full">

            {/* Sidebar – hidden on small screens */}
            <div className="hidden md:block basis-[10%] border-2 border-green-600">
                {/* Sidebar content */}
            </div>

            {/* Main content */}
            <div className="basis-[90%] grid grid-rows-[9%_91%] border-2 border-amber-500">

                {/* Top bar */}
                <div className="border-b border-amber-500"></div>

                {/* Main grid */}
                <div className="
                  grid
                  grid-rows-[75%_25%]
                  lg:grid-rows-none
                  lg:grid-cols-[75%_25%]
                  h-full
                ">

                    {/* Left panel */}
                    <div className="flex border-2 border-white h-full">
                        {/* content */}
                    </div>

                    {/* Right panel */}
                    <div className="flex border-2 border-purple-700 h-full">
                        {/* content */}
                    </div>

                </div>

            </div>

        </div>
    );
};
