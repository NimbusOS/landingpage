/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    // colors: {
    //   "primary": "#DECCFF",  
    //   "secondary": "#ece2ff",   
    //   "accent": "#f6d5ff",  
    //   "neutral": "#f6eefd",    
    //   "base-100": "#FFFFFF",
    //   "base-200": "#f6f6f7",
    //   "base-300": '#5d597a',  
    //   "info": "#3ABFF8",      
    //   "success": "#36D399",     
    //   "warning": "#FBBD23",      
    //   "error": "#F87272",
    // },
    fontFamily: {
      'roboto': ['Roboto'],
      'nunito': ['Nunito']
    },
    keyframes: {
      slide: {
        '0%, 100%': {
          transform: 'rotate(-3deg)'
        },
        '50%': {
          transform: 'rotate(3deg)'
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        main: {  
          "primary": "#DECCFF",  
          "secondary": "#ece2ff",   
          "accent": "#f6d5ff",  
          "neutral": "#f6eefd",    
          "base-100": "#FFFFFF",
          "base-200": "#f6f6f7",
          "base-300": '#3a3279',  
          "info": "#3ABFF8",      
          "success": "#36D399",     
          "warning": "#FBBD23",      
          "error": "#F87272",
        },
      },
    ],
  },
}
