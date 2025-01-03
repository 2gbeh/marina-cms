import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",

    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                black: "#101828",
                white: "#ffffff",
                primary: "#4f39f6",
                "primary-dark": "#615fff",
                secondary: "#615fff",
                "secondary-dark": "#7c86ff",
                tertiary: "#dff638",
                "tertiary-dark": "#fcff5f",
            },
        },
    },

    plugins: [forms],
};
