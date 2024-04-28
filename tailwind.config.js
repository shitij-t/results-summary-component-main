/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      md: "600px",
    },
    fontFamily: {
      hanken: ["HankenGrotesk"],
    },
    colors: {
      LightRed: "hsl(0, 100%, 67%)",
      LightRedfade: "hsl(0, 100%, 67%,0.1)",
      OrangeyYellow: "hsl(39, 100%, 56%)",
      OrangeyYellowFade: "hsl(39, 100%, 56%,.1)",
      GreenTeal: "hsl(166, 100%, 37%)",
      GreenTealFade: "hsl(166, 100%, 37%,.1)",
      CobaltBlue: "hsl(234, 85%, 45%)",
      CobaltBlueFade: "hsl(234, 85%, 45%,.1)",
      White: "hsl(0, 0%, 100%)",
      FadeWhite: "hsla(0, 0%, 100%,0.7)",
      PaleBlue: "hsl(221, 100%, 96%)",
      LightLavender: "hsl(241, 100%, 89%)",
      DarkGrayBlue: "hsl(224, 30%, 27%)",
      Lightslateblue: "hsl(252, 100%, 67%)",
      Lightroyalblue: "hsl(241, 81%, 54%)",
      Violetblue: "hsla(256, 72%, 46%, 1)",
      Persianblue: "hsla(241, 72%, 46%, 0)",
    },
  },
  plugins: [],
};
