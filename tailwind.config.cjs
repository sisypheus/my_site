/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        '88': '22rem',
        '108': '28rem',
        '116': '30rem',
        '124': '32rem',
        '132': '34rem',
        '140': '36rem',
      },
      height: {
        '88': '22rem',
        '108': '28rem',
        '116': '30rem',
        '124': '32rem',
        '132': '34rem',
        '140': '36rem',
      },
      blur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};
