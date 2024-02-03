function whatsappButton({brandName:t="",buttonName:e="",brandSubtitleText:a="",welcomeMessage:o="",phoneNumber:n="",brandImageUrl:i="",callToAction:l="",buttonSize:r="large",buttonMargin:p="false",buttonIconSize:s=22}){let d=`
      <div>
       <style>
         @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        
          @font-face {
            font-family: 'Helvetica';
            font-style: normal;
            font-weight: normal;
            font-display: optional;
            src: local('Helvetica');
        }
        
         :root {
            --color-primary-900: hsl(230, 54%, 11%);
            --color-gray-700: hsl(240, 1%, 31%);
            --color-text-secondary: var(--color-gray-700);
            --color-whatsapp-green-light:hsl(173, 86%, 20%);
            --color-whatsapp-green-dark:hsl(173, 86%, 20%)
        }
      *,
*:before,
*:after {
  box-sizing: border-box;
}

.wa-widget-body pre {
  font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
    sans-serif;
  white-space: pre-wrap;
}

.wa-widget-wrapper {
  position: fixed;
  right: 40px;
  bottom: 45px;
  display: flex;
  flex-direction: column;
  z-index: 99999;
}

@media screen and (max-width: 640px) {
  .wa-widget-wrapper {
    right: 24px;
  }
  .wa-powered-by-body-hide{
    display: none !important;
  }
}

.wa-widget-brand-image {
  width: 48px;
  height: 48px;
  border-radius: 500px;
}

.wa-widget-body {
  font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
    sans-serif;
  margin-bottom: 16px;
  display: grid;
  height: 453px;
  grid-template-rows: 81px minmax(0px, 1fr) 124px;
  overflow: hidden;
  border-radius: 24px;
  background-color: white;
  box-shadow: 0px 24px 50px 10px rgba(0, 102, 255, 0.07);
  max-width: 498px;
  width: calc(100vw - 60px);
}

.wa-widget-body-inner {
  padding: 16px 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--color-whatsapp-green-dark);
}

.wa-chat-wrapper {
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: white;
  padding: 24px;
}

.wa-chat-bubble-wrapper {
  z-index: 10;
  display: flex;
  height: max-content;
  max-height: 100%;
  width: auto;
  flex-direction: column;
  overflow: auto;
  border-radius: 16px;
  background-color: white;
  padding: 24px;
}

.start-chat-section {
  z-index: 50;
  display: flex;
  width: 100%;
  background-color: white;
  padding: 20px 24px;

  flex-direction: column;
}

.start-chat-button:hover {
  opacity: 80%;
  transition: 0.3s;
}

.start-chat-button {
  cursor: pointer;
  justify-content: center;
  border-width: 0;
  display: flex;
  height: 56px;
  width: 100%;
  align-items: center;
  align-self: end;
  border-radius: 500px;
  background-color: var(--color-whatsapp-green-light);
}

.start-chat-button-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.start-chat-label {
  color: white;
  font-size: 1rem;
  padding-left: 8px;
}

.wa-cta-button:hover {
  opacity: 80%;
  transition: 0.3s;
}

.wa-cta-button {
  cursor: pointer;
  justify-content: center;
  border-width: 0;
  display: flex;
  width: auto;
  align-items: center;
  align-self: end;
  border-radius: 500px;
  background-color: var(--colorIndexPagination);
  color: var(--colorBackground);
}

.wa-button-size-regular {
  padding: 9px;
}

.wa-button-size-medium {
  padding: 13px;
}

.wa-button-size-large {
  padding: 17px;
}

.wa-button-size-with-words {
  padding-right: 40px !important;
  padding-left: 40px !important;
}

.wa-cta-button-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
color: var(--colorBackground);
}

#wa-close-btn {
  cursor: pointer;
}

.wa-cta-button-label-margin {
  margin-left: 8px;
}

.wa-cta-button-label {
  color: white;
 font-size: .875rem;
font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
}

.wa-sleekflow-label {
  color: hsl(209 77% 60%);
  text-decoration: none;
}

.wa-powered-by-logo {
  display: inline-block;
  position: relative;
  top: 2px;
}

.wa-powered-by-logo svg {
  margin-right: 6px;
}

.wa-powered-by-label {
  margin-top: 12px;
  text-align: center;
}

.wa-powered-by-label-box{
  margin-top: 12px;
  text-align: right;
  padding-right: 12px;
  font-size: 13px;
}

#wa-cta-button-powered {
  font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
    sans-serif;
  position: absolute;
  right: 0.5rem;
  bottom: -22px;
  width: 100%;
}

#wa-cta-button-powered-label {
  margin-top: 12px;
  text-align: right;
  font-size: 14px;
  padding-right: 12px;
}


#wa-cta-button-powered-icon {
  /* inline-block relative top-[1px] */
  position: relative;
  display: inline-block;
  top: 1px;
}

#wa-cta-button-powered-sleekflow {
  color: hsl(209 77% 60%);
  text-decoration: none;
}

#wa-powered-by-body {
  position: absolute;
  bottom: -25px;
  right: 4px;
  width: 100%;
}

.wa-cta-container{
  display: flex;
  justify-content: end;
}

.wa-preview-box .wa-cta-container{
  position: relative !important;
}
      </style>
            
<div class="wa-widget-wrapper">
   <div id="wa-chat-window" class="wa-widget-body">
      <div class="wa-widget-body-inner">
         <div style="display:flex;width:100%">
            <img src="{{brandImageUrl}}" class="wa-widget-brand-image"/>
            <div style="padding-left:8px;display:flex;flex-direction:column;color:white">
               <p class="font-header" style="font-size:1.25rem;font-weight:500;line-height:1.5rem;margin:0">
                  {{brandName}}
               </p>
               <p style="margin:0;font-size:0.875rem;line-height:1.25rem">{{brandSubtitleText}}</p>
            </div>
         </div>
       <button aria-label="Search this blog" class="elcreative_ripple button_close_comments relative inline-flex shrink-0 grow-0 cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-full bg-transparent p-2 text-colorItemMeta hover:bg-colorTextTrans1 focus:bg-colorTextTrans1 active:bg-colorTextTrans2 ltr:mr-2 rtl:ml-2 dark:text-colorColorModeDarkMeta dark:hover:bg-colorColorModeDarkTextTrans1 dark:focus:bg-colorColorModeDarkTextTrans1 dark:active:bg-colorColorModeDarkTextTrans2" data-toggle-trigger-off="" id="wa-close-btn" type="button">
<svg aria-hidden="true" fill="#EDEDED" height="16" viewBox="0 0 16 16" width="16"><path d="M13.3536 3.35357L13.7072 3.00001L13.0001 2.29291L12.6465 2.64646L13.3536 3.35357ZM2.64652 12.6465L2.29297 13L3.00008 13.7071L3.35363 13.3536L2.64652 12.6465ZM3.35363 2.64646L3.00008 2.29291L2.29297 3.00001L2.64652 3.35357L3.35363 2.64646ZM12.6465 13.3536L13.0001 13.7071L13.7072 13L13.3536 12.6465L12.6465 13.3536ZM12.6465 2.64646L2.64652 12.6465L3.35363 13.3536L13.3536 3.35357L12.6465 2.64646ZM2.64652 3.35357L12.6465 13.3536L13.3536 12.6465L3.35363 2.64646L2.64652 3.35357Z"></path></svg></button>
      </div>
      <div class="wa-chat-wrapper">
         <div class="wa-chat-bubble-wrapper">
            <p
               style="font-weight:500;margin-bottom:8px;margin-top:0px;color:var(--color-primary-900)">
               {{brandName}}
            </p>
            <pre style="color:var(--color-gray-700);margin:0px">{{welcomeMessage}}</pre>
         </div>
         <img style="max-width:100%;top:0;left:0;position:absolute;object-fit:cover" alt="WhatsApp Background" src="https://res.cloudinary.com/dqhdmvyeh/image/upload/v1688374001/website-images/en/0-common/whatsApp-bg.jpg"/>
      </div>
      <div class="start-chat-section">
         <a rel="noopener noreferrer" target="_blank"
            style="text-decoration:none;width:100%"
            href="https://api.whatsapp.com/send?phone={{phoneNumber}}&amp;text={{welcomeMessage}}">
            <button class="start-chat-button">
               <div class="start-chat-button-inner">
    <svg viewBox="0,0,256,256" fill="none" xmlns="http://www.w3.org/2000/svg" width="{{buttonIconSize}}" height="{{buttonIconSize}}">
      <g transform=""><g fill="#EDEDED" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,4c-2.20557,0 -4,1.70459 -4,3.7998v0.7002c0,0.27637 0.22363,0.5 0.5,0.5c0.27637,0 0.5,-0.22363 0.5,-0.5v-0.7002c0,-1.54395 1.3457,-2.7998 3,-2.7998c1.6543,0 3,1.25586 3,2.7998v0.8335c0,0.74219 -0.30811,1.44141 -0.86768,1.96924l-1.4502,1.36719c-0.75146,0.70801 -1.18213,1.69141 -1.18213,2.69727v1.83301c0,0.27637 0.22363,0.5 0.5,0.5c0.27637,0 0.5,-0.22363 0.5,-0.5v-1.83301c0,-0.74268 0.30811,-1.44189 0.86768,-1.96973l1.4502,-1.36719c0.75146,-0.70801 1.18213,-1.69092 1.18213,-2.69678v-0.8335c0,-2.09521 -1.79443,-3.7998 -4,-3.7998z"></path><circle cx="12" cy="19.5" r="0.5"></circle><path d="M12,0c-6.6167,0 -12,5.3833 -12,12c0,6.6167 5.3833,12 12,12c6.6167,0 12,-5.3833 12,-12c0,-6.6167 -5.3833,-12 -12,-12zM12,23c-6.06543,0 -11,-4.93457 -11,-11c0,-6.06543 4.93457,-11 11,-11c6.06543,0 11,4.93457 11,11c0,6.06543 -4.93457,11 -11,11z"></path></g></g></g>
           </svg>
                  <p class="start-chat-label font-header">{{callToAction}}</p>
               </div>
            </button>
         </a>
          <p class="wa-powered-by-label">
          ⚡ Powered by 
          <a rel="noopener noreferrer" target="_blank" class="wa-sleekflow-label" href="https://sajidali.net/?utm_source=tool&utm_medium=whatsapp-button&utm_campaign=webbutton">
            <span>Sajidali</span>
          </a>
        </p>
      </div>
   </div>
   <button id="wa-cta-button" class="bg-colorGadgetKey wa-cta-button wa-button-size-{{buttonSize}} {{buttonPadding}}">
      <div class="wa-cta-button-inner">
      <svg width="24px" height="24px" class="icon icon-tabler icon-tabler-brand-whatsapp"  viewBox="0,0,256,256"><g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M24,3.99805c-11.02771,0 -20,8.97229 -20,20c0,3.27532 0.86271,6.33681 2.26172,9.06641l-2.16797,7.76172c-0.50495,1.8034 1.27818,3.58644 3.08203,3.08203l7.76758,-2.16797c2.72738,1.39608 5.78439,2.25781 9.05664,2.25781c11.02771,0 20,-8.97229 20,-20c0,-11.02771 -8.97229,-20 -20,-20zM24,6.99805c9.40629,0 17,7.59371 17,17c0,9.40629 -7.59371,17 -17,17c-3.00158,0 -5.8094,-0.78052 -8.25781,-2.14453c-0.34512,-0.19235 -0.7522,-0.24078 -1.13281,-0.13477l-7.38672,2.06055l2.0625,-7.38281c0.10655,-0.38122 0.05811,-0.7891 -0.13477,-1.13477c-1.36674,-2.4502 -2.15039,-5.25915 -2.15039,-8.26367c0,-9.40629 7.59371,-17 17,-17zM17.24023,15c-0.319,0 -0.83444,0.11966 -1.27344,0.59766c-0.438,0.476 -1.67187,1.63047 -1.67187,3.98047c0,2.35 1.71022,4.61945 1.94922,4.93945c0.238,0.317 3.3032,5.29498 8.1582,7.20898c4.034,1.59 4.85447,1.27336 5.73047,1.19336c0.876,-0.078 2.82661,-1.15353 3.22461,-2.26953c0.398,-1.116 0.39825,-2.07058 0.28125,-2.26758c-0.119,-0.199 -0.43802,-0.31959 -0.91602,-0.55859c-0.477,-0.239 -2.82372,-1.39373 -3.26172,-1.55273c-0.438,-0.159 -0.75817,-0.23972 -1.07617,0.23828c-0.318,0.478 -1.23272,1.55309 -1.51172,1.87109c-0.279,0.32 -0.55716,0.36009 -1.03516,0.12109c-0.479,-0.241 -2.0158,-0.74409 -3.8418,-2.37109c-1.42,-1.265 -2.3753,-2.82864 -2.6543,-3.30664c-0.278,-0.476 -0.03002,-0.73761 0.20898,-0.97461c0.215,-0.214 0.4778,-0.55694 0.7168,-0.83594c0.237,-0.279 0.31561,-0.47692 0.47461,-0.79492c0.159,-0.317 0.07994,-0.59694 -0.03906,-0.83594c-0.119,-0.239 -1.04766,-2.60187 -1.47266,-3.54687c-0.357,-0.794 -0.73322,-0.81122 -1.07422,-0.82422c-0.278,-0.011 -0.59802,-0.01172 -0.91602,-0.01172z"></path></g></g></svg><strong class="wa-cta-button-label font-header wa-cta-button-label-margin">WhatsApp</strong>
      </div>
   </button>
</div>

        </div>
       `;d=(d=(d=(d=(d=(d=(d=(d=(d=(d=d.replaceAll("{{buttonName}}",e)).replaceAll("{{brandImageUrl}}",i)).replaceAll("{{brandName}}",t)).replaceAll("{{brandSubtitleText}}",a)).replaceAll("{{buttonSize}}",r)).replaceAll("{{callToAction}}",l)).replaceAll("{{phoneNumber}}",n)).replaceAll("text={{welcomeMessage}}","text="+o.replace(/(?:\r\n|\r|\n)/g,"%0a"))).replaceAll("{{welcomeMessage}}",o)).replaceAll("{{buttonIconSize}}",s),"true"===p&&(d=(d=d.replaceAll("{{buttonMargin}}","wa-cta-button-label-margin")).replaceAll("{{buttonPadding}}","wa-button-size-with-words")),"false"===p&&(d=(d=d.replaceAll("{{buttonMargin}}","")).replaceAll("{{buttonPadding}}","")),document.querySelector("body").insertAdjacentHTML("beforeend",d),document.querySelector("#wa-chat-window").style.display="none",document.getElementById("wa-cta-button").onclick=()=>{var t=document.querySelector("#wa-chat-window");return"none"!==window.getComputedStyle(t).display?t.style.display="none":t.style.display="grid"},document.querySelector("#wa-close-btn").onclick=()=>{document.querySelector("#wa-chat-window").style.display="none"}}
