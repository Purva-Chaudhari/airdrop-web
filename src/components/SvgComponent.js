const CheckMark = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="circle-check"
      className="svg-inline--fa fa-circle-check illustration-scroller__circle-check"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
      ></path>
    </svg>
  );
};

const Humanize = () => {
  return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M5.45499 9.16C5.45499 5.49537 8.42278 2.5 12.115 2.5C15.8034 2.5 18.775 5.47158 18.775 9.16C18.775 12.7681 15.9353 15.6898 12.3693 15.819C12.2877 15.822 12.206 15.8183 12.125 15.8079C12.044 15.8183 11.9623 15.822 11.8807 15.819C8.31281 15.6898 5.48072 12.7686 5.45502 9.17072L5.45499 9.16ZM8.45499 9.15465C8.47174 11.118 9.98254 12.6923 11.8835 12.8156C12.0432 12.8015 12.2068 12.8015 12.3665 12.8156C14.2707 12.6921 15.775 11.1158 15.775 9.16C15.775 7.12843 14.1466 5.5 12.115 5.5C10.089 5.5 8.45788 7.14173 8.45499 9.15465ZM35.8153 5.5C33.7837 5.5 32.1553 7.12843 32.1553 9.16C32.1553 11.1158 33.6595 12.6921 35.5637 12.8156C35.7235 12.8015 35.8871 12.8015 36.0468 12.8156C37.9477 12.6923 39.4585 11.118 39.4753 9.15465C39.4724 7.14173 37.8413 5.5 35.8153 5.5ZM29.1553 9.16C29.1553 5.47158 32.1268 2.5 35.8153 2.5C39.5075 2.5 42.4753 5.49537 42.4753 9.16L42.4752 9.17072C42.4495 12.7686 39.6175 15.6898 36.0496 15.819C35.9679 15.822 35.8862 15.8183 35.8053 15.8079C35.7243 15.8183 35.6426 15.822 35.561 15.819C31.995 15.6898 29.1553 12.7681 29.1553 9.16ZM13.7962 20.6575C11.3574 20.2303 8.70523 20.6821 6.94572 21.849C5.84953 22.5802 5.5 23.3956 5.5 24.02C5.5 24.6447 5.84982 25.4605 6.94705 26.1919L6.94976 26.1937C8.68771 27.3579 11.3007 27.8114 13.7466 27.4007C14.5636 27.2636 15.3371 27.8147 15.4743 28.6317C15.6115 29.4487 15.0603 30.2222 14.2433 30.3593C11.2098 30.8686 7.78352 30.3624 5.28159 28.6872C3.55962 27.5387 2.5 25.8749 2.5 24.02C2.5 22.1647 3.56018 20.5005 5.28295 19.3519L5.28565 19.3502C7.80614 17.6777 11.2732 17.1698 14.3138 17.7025C15.1298 17.8455 15.6754 18.6228 15.5325 19.4388C15.3895 20.2548 14.6122 20.8005 13.7962 20.6575ZM33.6162 17.7025C36.6568 17.1698 40.1239 17.6777 42.6444 19.3502L42.6471 19.3519C44.3698 20.5005 45.43 22.1647 45.43 24.02C45.43 25.8745 44.3708 27.5381 42.6494 28.6865C40.1474 30.3622 36.7206 30.8687 33.6867 30.3593C32.8697 30.2222 32.3185 29.4487 32.4557 28.6317C32.5929 27.8147 33.3664 27.2636 34.1834 27.4007C36.6293 27.8114 39.2423 27.3579 40.9802 26.1938L40.983 26.1919C42.0802 25.4605 42.43 24.6447 42.43 24.02C42.43 23.3957 42.0805 22.5804 40.9846 21.8492C39.2251 20.6822 36.5727 20.2303 34.1338 20.6575C33.3178 20.8005 32.5404 20.2548 32.3975 19.4388C32.2546 18.6228 32.8002 17.8455 33.6162 17.7025Z" fill="#4B17E6"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8199 20.44C21.7884 20.44 20.1599 22.0684 20.1599 24.1C20.1599 26.0558 21.6642 27.6321 23.5684 27.7556C23.7304 27.7413 23.8963 27.7415 24.0582 27.7563C25.9437 27.6481 27.4631 26.0686 27.4799 24.0947C27.4771 22.0817 25.8459 20.44 23.8199 20.44ZM17.1599 24.1C17.1599 20.4116 20.1315 17.44 23.8199 17.44C27.5121 17.44 30.4799 20.4354 30.4799 24.1L30.4799 24.1107C30.4543 27.6989 27.6294 30.6554 24.0434 30.7594C23.9654 30.7616 23.8873 30.7578 23.8099 30.7479C23.729 30.7583 23.6473 30.762 23.5656 30.759C19.9996 30.6298 17.1599 27.7081 17.1599 24.1ZM24.0074 32.47C26.3445 32.47 28.7621 33.052 30.652 34.3119C32.3748 35.4604 33.4349 37.1247 33.4349 38.98C33.4349 40.835 32.3751 42.499 30.6529 43.6475C28.7549 44.9164 26.338 45.505 23.9999 45.505C21.6615 45.505 19.2442 44.9162 17.3461 43.6469C15.6244 42.4984 14.5649 40.8347 14.5649 38.98C14.5649 37.1247 15.6251 35.4604 17.3479 34.3119L17.3515 34.3095C19.2495 33.0521 21.67 32.47 24.0074 32.47ZM19.01 36.8094C17.9143 37.5406 17.5649 38.3557 17.5649 38.98C17.5649 39.6047 17.9148 40.4204 19.012 41.1519L19.0138 41.1531C20.3157 42.0238 22.1184 42.505 23.9999 42.505C25.8815 42.505 27.6842 42.0238 28.9861 41.1531L28.9879 41.1519C30.0851 40.4204 30.4349 39.6047 30.4349 38.98C30.4349 38.3553 30.0851 37.5396 28.9879 36.8081C27.6978 35.948 25.8954 35.47 24.0074 35.47C22.1206 35.47 20.3119 35.9475 19.01 36.8094Z" fill="#4B17E6"/>
      </svg>
  );
};

const Context = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9999 6.685C22.4003 6.685 20.4646 7.78278 18.8318 10.7274L6.71179 32.5274C6.71174 32.5275 6.71185 32.5273 6.71179 32.5274C6.71172 32.5275 6.71148 32.5279 6.7114 32.5281C5.19082 35.2709 5.25591 37.4345 6.07105 38.8232C6.88543 40.2106 8.73947 41.32 11.8799 41.32H23.9999C24.0836 41.32 24.1656 41.3268 24.2455 41.34H36.1199C39.2489 41.34 41.1047 40.2315 41.922 38.842C42.7396 37.4522 42.8079 35.2889 41.2885 32.5481C41.2884 32.5478 41.2882 32.5476 41.2881 32.5474L35.0488 21.3087L35.0485 21.3081L29.1681 10.7274C27.5353 7.78278 25.5996 6.685 23.9999 6.685ZM23.7544 44.32H11.8799C8.08042 44.32 5.01446 42.9494 3.48384 40.3418C1.95405 37.7356 2.24908 34.3894 4.0881 31.0726L16.2081 9.27257C16.2084 9.2721 16.2087 9.27162 16.2089 9.27115C18.136 5.79663 20.9001 3.685 23.9999 3.685C27.0999 3.685 29.8639 5.7967 31.7911 9.27132C31.7913 9.27174 31.7915 9.27216 31.7918 9.27257L37.6711 19.8513L37.6714 19.8519L43.9118 31.0926C45.7519 34.4115 46.0403 37.7579 44.5078 40.363C42.9752 42.9685 39.911 44.34 36.1199 44.34H23.9999C23.9163 44.34 23.8343 44.3332 23.7544 44.32Z" fill="#4B17E6"/>
      <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M23.9999 4.5C24.8283 4.5 25.4999 5.17157 25.4999 6V25.9977L43.7413 38.7706C44.42 39.2457 44.5849 40.1811 44.1097 40.8597C43.6345 41.5383 42.6992 41.7032 42.0206 41.228L24.001 28.6105L5.98135 41.228C5.30274 41.7032 4.36742 41.5383 3.89225 40.8597C3.41708 40.1811 3.582 39.2457 4.26061 38.7706L22.4999 25.9992V6C22.4999 5.17157 23.1715 4.5 23.9999 4.5Z" fill="#4B17E6"/>
    </svg>
  );
};

const NativeAssetIcon = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.47998 24C2.47998 18.1516 7.2316 13.4 13.08 13.4C16.6108 13.4 19.6701 15.1354 21.574 17.759C22.0606 18.4295 21.9115 19.3675 21.241 19.854C20.5705 20.3406 19.6325 20.1915 19.146 19.521C17.7698 17.6246 15.5892 16.4 13.08 16.4C8.88843 16.4 5.47998 19.8084 5.47998 24C5.47998 28.1916 8.88843 31.6 13.08 31.6C15.9323 31.6 18.5845 30.0972 20.0538 27.6483L22.7122 23.2308L22.7148 23.2266L25.3538 18.8082C27.3644 15.4571 30.9923 13.4 34.9 13.4C40.7485 13.4 45.5 18.1516 45.5 24C45.5 29.8484 40.7485 34.6 34.9 34.6C31.3861 34.6 28.3313 32.8623 26.4111 30.248C25.9207 29.5803 26.0644 28.6415 26.732 28.1511C27.3997 27.6606 28.3385 27.8043 28.8289 28.472C30.2287 30.3777 32.414 31.6 34.9 31.6C39.0916 31.6 42.5 28.1916 42.5 24C42.5 19.8084 39.0916 16.4 34.9 16.4C32.0482 16.4 29.3964 17.9024 27.9269 20.3506C27.9267 20.3509 27.9265 20.3513 27.9263 20.3517L25.2878 24.7692L25.2852 24.7734L22.6263 29.1918C22.6261 29.192 22.626 29.1923 22.6258 29.1925C20.6151 32.5432 16.9874 34.6 13.08 34.6C7.2316 34.6 2.47998 29.8484 2.47998 24Z" fill="#4B17E6"/>
    </svg>
  );
};

const GlobalTruthIcon = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C8.84843 5.5 5.5 8.84843 5.5 13V18C5.5 18.8284 4.82843 19.5 4 19.5C3.17157 19.5 2.5 18.8284 2.5 18V13C2.5 7.19157 7.19157 2.5 13 2.5H18C18.8284 2.5 19.5 3.17157 19.5 4C19.5 4.82843 18.8284 5.5 18 5.5H13ZM28.5 4C28.5 3.17157 29.1716 2.5 30 2.5H35C40.8084 2.5 45.5 7.19157 45.5 13V18C45.5 18.8284 44.8284 19.5 44 19.5C43.1716 19.5 42.5 18.8284 42.5 18V13C42.5 8.84843 39.1516 5.5 35 5.5H30C29.1716 5.5 28.5 4.82843 28.5 4ZM4 28.5C4.82843 28.5 5.5 29.1716 5.5 30V35C5.5 39.1516 8.84843 42.5 13 42.5H18C18.8284 42.5 19.5 43.1716 19.5 44C19.5 44.8284 18.8284 45.5 18 45.5H13C7.19157 45.5 2.5 40.8084 2.5 35V30C2.5 29.1716 3.17157 28.5 4 28.5ZM44 30.5C44.8284 30.5 45.5 31.1716 45.5 32V35C45.5 40.8084 40.8084 45.5 35 45.5H32C31.1716 45.5 30.5 44.8284 30.5 44C30.5 43.1716 31.1716 42.5 32 42.5H35C39.1516 42.5 42.5 39.1516 42.5 35V32C42.5 31.1716 43.1716 30.5 44 30.5Z" fill="#4B17E6"/>
      <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M17 13.5C15.067 13.5 13.5 15.067 13.5 17C13.5 18.933 15.067 20.5 17 20.5C18.933 20.5 20.5 18.933 20.5 17C20.5 15.067 18.933 13.5 17 13.5ZM10.5 17C10.5 13.4101 13.4101 10.5 17 10.5C20.5899 10.5 23.5 13.4101 23.5 17C23.5 20.5899 20.5899 23.5 17 23.5C13.4101 23.5 10.5 20.5899 10.5 17ZM15 31.5C14.1716 31.5 13.5 32.1716 13.5 33C13.5 33.8284 14.1716 34.5 15 34.5C15.8284 34.5 16.5 33.8284 16.5 33C16.5 32.1716 15.8284 31.5 15 31.5ZM10.5 33C10.5 30.5147 12.5147 28.5 15 28.5C17.4853 28.5 19.5 30.5147 19.5 33C19.5 35.4853 17.4853 37.5 15 37.5C12.5147 37.5 10.5 35.4853 10.5 33ZM33 13.5C32.1716 13.5 31.5 14.1716 31.5 15C31.5 15.8284 32.1716 16.5 33 16.5C33.8284 16.5 34.5 15.8284 34.5 15C34.5 14.1716 33.8284 13.5 33 13.5ZM28.5 15C28.5 12.5147 30.5147 10.5 33 10.5C35.4853 10.5 37.5 12.5147 37.5 15C37.5 17.4853 35.4853 19.5 33 19.5C30.5147 19.5 28.5 17.4853 28.5 15ZM31 27.5C29.067 27.5 27.5 29.067 27.5 31C27.5 32.933 29.067 34.5 31 34.5C32.933 34.5 34.5 32.933 34.5 31C34.5 29.067 32.933 27.5 31 27.5ZM24.5 31C24.5 27.4102 27.4102 24.5 31 24.5C34.5899 24.5 37.5 27.4102 37.5 31C37.5 34.5899 34.5899 37.5 31 37.5C27.4102 37.5 24.5 34.5899 24.5 31Z" fill="#4B17E6"/>
    </svg>
  );
};


export { CheckMark, Humanize, Context, NativeAssetIcon, GlobalTruthIcon };
