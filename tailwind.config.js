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
            },
            fontFamily: {
              'DM': ["DM Sans", "sans-serif"],
            },
            fontSize: {
              'heading': ['2rem','100%'],
              'body': ['1rem','100%'],
              'label': ['0.875rem','100%'],
              'small-text': ['0.625rem','100%'],
              'price-text': ['0.75rem','100%'],
            },
            backgroundImage: {
             'cafe': "url('./assets/images/bg-cafe.jpg')",
             'vector': "url('./assets/svg/vector.svg')",
            },
            screens: {
              'xs': '305px',
              'sm': '640px',
              'md': '768px',
              'lg': '1024px',
              'xl': '1280px',
              '2xl': '1536px',
            },
        }
    },
    plugins: []
};
