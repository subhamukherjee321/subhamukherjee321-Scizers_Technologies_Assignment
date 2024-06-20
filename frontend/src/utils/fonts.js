import {Poppins, Oswald} from "next/font/google";

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-poppins"
})

export const oswald = Oswald({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-oswald"
})