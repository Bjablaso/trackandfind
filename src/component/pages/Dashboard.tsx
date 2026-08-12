import {Briefcase, Send, Clock, Check, Crown, CircleX, Triangle} from "lucide-react";
import {useState} from "react";


export interface ApplicationStat {
    key: string;            // stable backend key
    label: string;          // UI label
    icon: React.ReactNode;  // lucide icon
    count: number;          // backend number
    weeklyChange: number;   // backend delta
   // statuColor: string;
}
export interface CardProps {
    label: string;
    icon: React.ReactNode;
    count: number;
    weeklyChange: number;
   statuColor: string;
}


type  applicationActionName = ["APPLIED", "INTERVIEW", "OFFER", "SAVED"]

const ApplicationActionList =()=>{
    const [count, setCount] = useState(0);
    const [weeklyChange, setWeeklyChange] = useState(0);
    const [applicationStats, setApplicationStats] = useState<ApplicationStat[]>([
        {
            key: "applied",
            label: "APPLIED",
            icon: <Briefcase className="h-6 w-6" />,
            count: 0,
            weeklyChange: 0,
        },
        {
            key: "interview",
            label: "INTERVIEW",
            icon: <Send className="h-6 w-6" />,
            count: 0,
            weeklyChange: 0,
        },
        {
            key: "assessment",
            label: "ASSESSMENT",
            icon: <Clock className="h-6 w-6" />,
            count: 0,
            weeklyChange: 0,
        },
        {
            key: "offer",
            label: "OFFER",
            icon: <Check className="6-4 w-6" />,
            count: 0,
            weeklyChange: 0,
        },
        {
            key: "saved",
            label: "SAVED",
            icon: <Crown className="h-6 w-6" />,
            count: 0,
            weeklyChange: 0,
           // statuColor: "savedx"
        },
        {
            key: "rejected",
            label: "REJECTED",
            icon:  <CircleX className="h-6 w-6" />,
            count: 0,
            weeklyChange: 0,

        },

    ]);
    // /*Application status */
    // --color-unswiped:var(--status-unswiped) ;
    // --color-savedx: var(--status-saved);
    // --color-applied: var(--status-applied) ;
    // --color-interview: var(--status-interview);
    // --color-assessment: var(--status-assessment);
    // --color-offer: var(--status-offer);
    // --color-rejected: var(--status-rejected);
    // --color-archived: var(--status-archived);

    function StatCard({ label, icon, count, weeklyChange, statuColor}: CardProps) {
        return (
            // <div className={`flex-1 rounded-xl border p-4 shadow-sm flex flex-row gap-3
            //
            // `}>
            <div
                className="flex-1 rounded-xl border p-2 shadow-sm flex flex-row gap-2
                items-center
                "
                style={{
                    background: `
            radial-gradient(
                circle at 35% 0%,
                color-mix(in srgb, var(--status-${statuColor}) 20%, transparent) 0%,
                color-mix(in srgb, var(--status-${statuColor}) 10%, transparent) 35%,
                transparent 70%
            ),
            var(--card)
        `,
                    borderColor: `var(--status-${statuColor})`,
                }}
            >

                <div
                    className="
                        flex items-center justify-center
                        h-10 w-10
                        rounded-full
                        p-2
                        text-white/70
                       hover:opacity-50
                    "
                                    style={{
                                        backgroundColor: `color-mix(
                            in srgb,
                            var(--status-${statuColor}) 35%,
                            transparent
                        )`,
                        color: `var(--status-${statuColor})`,
                    }}
                >
                    {icon}
                </div>


                {/*</div>*/}

                <div className="flex flex-col items-center gap-2">
                    <span className="font-medium"
                          style={{

                              color: `color-mix(
                            in srgb,
                            var(--status-${statuColor}) 75%,
                            transparent`,
                          }}
                    >{label}</span>

                    <div className="text-3xl font-bold">
                        {count}
                    </div>

                    <div className="flex flex-row gap-2 text-[0.65rem] text-white/70">
                        <Triangle className="h-3 w-3 fill-current" />  {weeklyChange} this week
                    </div>
                </div>
            </div>
        );
    }



    return (
        <ul className="flex flex-row w-full gap-3 ">
            {applicationStats.map((stat) => (
                <StatCard
                    key={stat.key}
                    label={stat.label}
                    icon={stat.icon}
                    count={stat.count}
                    weeklyChange={stat.weeklyChange}
                    statuColor={stat.key}
                />
            ))}

        </ul>
    )
}


export const DashboardLeftContentArea = () => {
    return (
        <div className=" w-full h-full p-4 ">
           <ApplicationActionList/>
        </div>
    );
};

export const DashboardRightContentArear = () => {
    return (
        <div className="w-ful h-full">
            Dash Board
        </div>
    )
}