/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                foreground: "var(--foreground)",
                test: "var(--background)",
                card: "var(--card)",
                popover: "var(--popover)",
                "card-gradient": "var(--card-border-gradient)",
            },
        },
    },
    plugins: [],
};
