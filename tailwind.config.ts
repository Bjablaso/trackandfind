import type { Config } from "tailwindcss";
import motion from "tailwindcss-motion";

const config: Config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [motion], // ✅ remove parentheses
};

export default config;
