/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: {
                primary: {
                  'eerie-black': '#111315',
                  'eerie-black-light': '#1B1D1F',
                  'nickel': '#6F757C',
                  'aero-blue': '#BEE3CC'
                },
                secondary: {
                  'floral-white': '#FEF7EE',
                  'maximum-yellow-red': '#F6C768',
                  'terracotta': '#ED735D',
                }
            }
        }
    },
    plugins: []
};
