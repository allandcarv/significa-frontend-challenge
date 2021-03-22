import { createGlobalStyle } from 'styled-components';

// Colors
import * as Colors from '@core/styles/colors';

export default createGlobalStyle`
  .icon__search-default {
    width: 16px;
    height: 16px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Eicon-magnifier-grey%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Styleguide-presentation' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='8.icons' transform='translate(-674.000000, -348.000000)'%3E%3Cg id='icon__magnifier' transform='translate(674.000000, 348.000000)'%3E%3Crect id='icon__search' x='0' y='0' width='16' height='16'%3E%3C/rect%3E%3Cpath d='M14.6666667,14.6666667 L10.6666667,10.6666667' id='Line' stroke='%237A8C99' stroke-width='2' stroke-linecap='square'%3E%3C/path%3E%3Ccircle id='Oval-4' stroke='%237A8C99' stroke-width='2' cx='6.66666667' cy='6.66666667' r='5.33333333'%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .icon__heart-grey {
    width: 24px;
    height: 24px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Eicon-heart-grey%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Styleguide-presentation' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='8.icons' transform='translate(-570.000000, -344.000000)'%3E%3Cg id='icon-heart-grey' transform='translate(570.000000, 344.000000)'%3E%3Crect id='Rectangle-13' x='0' y='0' width='24' height='24'%3E%3C/rect%3E%3Cpath d='M12,5.7384007 C24.3159972,-3.87751835 26.3133219,14.4898505 12,20 C-2.31332192,15.570284 -0.31599724,-3.87751835 12,5.7384007 Z' id='Rectangle-12' stroke='%237A8C99' stroke-width='2'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
  }

  .icon__heart-white {
    width: 24px;
    height: 24px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Eicon-heart-white%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Styleguide-presentation' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='8.icons' transform='translate(-530.000000, -344.000000)'%3E%3Cg id='icon-heart-white' transform='translate(530.000000, 344.000000)'%3E%3Crect id='Rectangle-13' x='0' y='0' width='24' height='24'%3E%3C/rect%3E%3Cpath d='M12,5.7384007 C24.3159972,-3.87751835 26.3133219,14.4898505 12,20 C-2.31332192,15.570284 -0.31599724,-3.87751835 12,5.7384007 Z' id='Rectangle-12' stroke='%23FFFFFF' stroke-width='2'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
  }

  .icon__heart-full {
    width: 24px;
    height: 24px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Eicon-heart-full%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Styleguide-presentation' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='8.icons' transform='translate(-610.000000, -344.000000)'%3E%3Cg id='24x24/icon_heart' transform='translate(610.000000, 344.000000)'%3E%3Crect id='Rectangle-13' x='0' y='0' width='24' height='24'%3E%3C/rect%3E%3Cpath d='M12,6.28384428 C24.3324939,-3.604485 26.3324939,15.2832147 12,20.9494617 C-2.33249393,16.3942559 -0.332493933,-3.604485 12,6.28384428 Z' id='Rectangle-12' stroke='%23FFFFFF' stroke-width='2' fill='%23FFFFFF'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
  }

  .icon__arrow-grey {
    width: 24px;
    height: 24px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Eicon-arrow-grey%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Styleguide-presentation' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='8.icons' transform='translate(-794.000000, -344.000000)'%3E%3Cg id='icon__arrow' transform='translate(794.000000, 344.000000)'%3E%3Crect id='Rectangle-13' x='0' y='0' width='24' height='24'%3E%3C/rect%3E%3Cpolyline id='Rectangle-3' stroke='%238B93A6' stroke-width='2' transform='translate(9.000000, 12.000000) rotate(-45.000000) translate(-9.000000, -12.000000) ' points='4 17 4 7 4 7 14 7'%3E%3C/polyline%3E%3Cpath d='M3,12 L23,12' id='Line' stroke='%238B93A6' stroke-width='2' stroke-linecap='square'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
  }

  .icon__arrow-white {
    width: 24px;
    height: 24px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Eicon-arrow-white%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Styleguide-presentation' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='8.icons' transform='translate(-834.000000, -344.000000)'%3E%3Cg id='icon__arrow' transform='translate(834.000000, 344.000000)'%3E%3Crect id='Rectangle-13' x='0' y='0' width='24' height='24'%3E%3C/rect%3E%3Cpolyline id='Rectangle-3' stroke='%23FFFFFF' stroke-width='2' transform='translate(9.000000, 12.000000) rotate(-45.000000) translate(-9.000000, -12.000000) ' points='4 17 4 7 4 7 14 7'%3E%3C/polyline%3E%3Cpath d='M3,12 L23,12' id='Line' stroke='%23FFFFFF' stroke-width='2' stroke-linecap='square'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
  }

  .icon__imdb {
    height: 16px;
    width: 35px;
    background-color: ${Colors.yellow};
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='35px' height='16px' viewBox='0 0 35 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Elogo-imdb%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Styleguide-presentation' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='7.Labels' transform='translate(-392.000000, -882.000000)' fill='%230A1014' fill-rule='nonzero'%3E%3Cg id='998d9f9c579873b1d738668122a52170' transform='translate(392.000000, 882.000000)'%3E%3Cg id='Group' transform='translate(17.500000, 8.463502) scale(-1, 1) rotate(-180.000000) translate(-17.500000, -8.463502) translate(0.000000, 0.934090)'%3E%3Cpolygon id='Shape' points='0 7.32673772 0 0.213658131 1.84939148 0.213658131 3.69878296 0.213658131 3.69878296 7.32673772 3.69878296 14.4398173 1.84939148 14.4398173 0 14.4398173'%3E%3C/polygon%3E%3Cpath d='M4.73245436,7.32673772 L4.73245436,0.213658131 L6.36460446,0.213658131 L7.99639959,0.213658131 L8.00172414,4.79118616 C8.00704868,7.30512388 8.01805274,9.32513218 8.0290568,9.28155017 C8.04006085,9.23796817 8.33362069,7.23461315 8.6765213,4.82909896 C9.01906694,2.42358478 9.31298174,0.403930796 9.32931034,0.338734948 C9.356643,0.214012457 9.36196755,0.214012457 10.4989351,0.214012457 C11.6359026,0.214012457 11.6412272,0.214012457 11.6628803,0.338734948 C11.6792089,0.403930796 11.853144,1.65824221 12.0490872,3.11877093 C12.2393509,4.58496886 12.5169371,6.64820484 12.658215,7.70692872 L12.9194726,9.63445813 L12.9358012,4.92122353 L12.9468053,0.213658131 L14.5679513,0.224642215 L16.1834178,0.240941176 L16.1834178,7.32673772 L16.1834178,14.4125343 L13.7792089,14.4288332 L11.3693205,14.4398173 L11.3419878,14.3204097 C11.3309838,14.249899 11.1460446,12.827283 10.9341278,11.1548678 C10.4716024,7.51134118 10.5262677,7.87523322 10.487931,7.97834187 C10.4662779,8.02192388 10.2540061,9.47713772 10.0090771,11.2090796 C9.76414807,12.9410215 9.55223124,14.3746215 9.53590264,14.4015502 C9.52489858,14.423164 8.43691684,14.439463 7.12068966,14.439463 L4.73280933,14.439463 L4.73280933,7.32673772 L4.73245436,7.32673772 Z' id='Shape'%3E%3C/path%3E%3Cpath d='M17.2440669,7.32106851 L17.2440669,0.202674048 L20.3337221,0.229957093 C23.0045132,0.246256055 23.4723631,0.262555017 23.8259128,0.344049827 C24.8702333,0.582865052 25.4413793,1.10407751 25.6699797,2.02177993 C25.7789554,2.47779654 25.8385903,4.10131488 25.8332657,6.97382976 C25.8332657,10.079845 25.7732759,11.8117869 25.6483266,12.2841024 C25.3544118,13.3973924 24.5276876,14.0649412 23.1841278,14.2715128 C22.4876775,14.3799363 21.0518256,14.4398173 19.1371197,14.4398173 L17.2440669,14.4398173 L17.2440669,7.32106851 Z M21.7642495,11.8550145 C22.1071501,11.6813952 22.1014706,11.703009 22.1288032,8.19518893 C22.1504564,4.8829564 22.1014706,3.42242768 21.9601927,3.0748346 C21.8568966,2.84133426 21.6339757,2.71094256 21.2367647,2.67302976 L20.9428499,2.64043183 L20.9428499,7.32638339 L20.9428499,12.0123349 L21.2694219,11.979737 C21.4486815,11.9581232 21.6719574,11.9039114 21.7642495,11.8550145 Z' id='Shape'%3E%3C/path%3E%3Cpath d='M26.6546653,7.32673772 L26.6546653,0.213658131 L28.3137931,0.213658131 L29.9675963,0.213658131 L30.0275862,0.430859516 C30.0549189,0.550267128 30.1092292,0.75116955 30.1418864,0.870577163 L30.2018763,1.09876263 L30.3594828,0.903175087 C30.56643,0.653375779 31.1755578,0.251570934 31.523428,0.132163322 C32.3774848,-0.155548789 33.4001521,0.0453536332 34.0639452,0.642746021 C34.3958418,0.941442215 34.5644523,1.22915433 34.6894016,1.7071391 C34.7820487,2.05473218 34.7873732,2.42925398 34.7873732,6.29529689 L34.7873732,10.5032637 L34.6404158,10.8182588 C34.3411765,11.453564 33.9223124,11.8011571 33.2368661,11.9747765 C32.7580122,12.0941841 31.9966024,12.0941841 31.5614097,11.9694616 C31.196856,11.8663529 30.7236815,11.5892706 30.4137931,11.3015585 C30.3158215,11.2037647 30.2235294,11.1279391 30.2125254,11.1279391 C30.2015213,11.1279391 30.1908722,11.8720221 30.1908722,12.7840554 L30.1908722,14.4401716 L28.4231237,14.4401716 L26.6553753,14.4401716 L26.6553753,7.32673772 L26.6546653,7.32673772 Z M30.9192698,9.96539792 C31.2454868,9.82969135 31.2454868,9.84599031 31.2674949,6.43064913 C31.278499,4.68772318 31.2621704,3.11310173 31.2348377,2.81972042 C31.1858519,2.36370381 31.1641988,2.29319308 31.0388945,2.18441522 C30.8539554,2.02709481 30.6147059,2.02709481 30.4350913,2.18441522 C30.2011663,2.38531765 30.1848377,2.72192664 30.2011663,6.32718616 C30.2174949,9.90551696 30.2174949,9.87291903 30.5110548,9.98134256 C30.7073529,10.0525619 30.7126775,10.0525619 30.9192698,9.96539792 Z' id='Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .icon__rotten {
    height: 16px;
    width: 16px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Elogo-rotten-tomatoes%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Styleguide-presentation' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='7.Labels' transform='translate(-382.000000, -834.000000)' fill='%23FFFFFF' fill-rule='nonzero'%3E%3Cpath d='M387.35566,834.149397 C390.351365,833.370974 390.69458,835.791721 389.953222,837.773951 C389.20308,840.647422 392.028221,840.594028 392.238072,838.973753 C392.651443,836.77938 394.46203,835.792198 395.86975,837.02406 C397.314395,838.47033 396.680886,841.383845 393.825483,841.098524 C391.987283,840.914424 391.583406,843.432698 393.921687,843.62315 C397.617353,843.851335 398.794237,846.265051 397.481236,847.897602 C395.647164,849.703204 393.159,847.368566 392.262146,845.572963 C391.482384,844.463715 390.275903,845.586116 390.722897,846.347858 C392.21169,848.66773 391.058073,850.069783 389.472278,849.997321 C387.939221,849.896016 387.068742,848.917535 387.956996,846.523175 C388.403874,845.035549 386.971385,844.689326 386.056987,845.873634 C384.714401,848.210787 382.74685,847.50404 382.160759,846.373006 C381.788921,845.464603 381.8258,843.292516 384.926545,843.548757 C386.8402,844.041812 386.276929,842.051716 384.854416,841.923953 C383.794154,841.871155 381.356675,841.05345 382.232888,838.999353 C383.074699,837.681561 385.094884,837.596704 386.056987,839.749245 C386.405259,840.253693 387.015809,841.065249 388.125335,840.349158 C388.527835,839.729663 388.26418,838.692413 387.115196,837.949434 C385.554843,837.003203 385.702426,834.945173 387.35566,834.149397 Z' id='path3575'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-color: ${Colors.red};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .icon-red {
    background-color: ${Colors.red}
  }

  .icon-yellow {
    background-color: ${Colors.yellow}
  }
`;
