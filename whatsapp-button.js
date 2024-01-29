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
        
        .font-header {
            font-family: "Inter", "Noto Sans TC", "Noto Sans SC", "Helvetica", "Arial", sans-serif;
            font-weight: 700 !important;
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
  background-color: var(--color-whatsapp-green-light);
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
}

#wa-close-btn {
  cursor: pointer;
}

.wa-cta-button-label-margin {
  margin-left: 8px;
}

.wa-cta-button-label {
  color: white;
  font-size: 1rem;
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
   <button id="wa-cta-button" class="wa-cta-button wa-button-size-{{buttonSize}} {{buttonPadding}}">
      <div class="wa-cta-button-inner">
      <svg width='24' height='24' viewBox="0 0 24 24" data-testid="ShareIcon-whatsapp" shape="circle" enable-background="new 0 0 24 24" class="sc-gKsewC gUNlLC"><g clip-path="url(#clip0_657_572)"><circle cx="50%" cy="50%" r="50%" fill="#00E676"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M16.201 7.74608C15.0805 6.61991 13.5866 6.00122 11.9957 6.00122C8.71989 6.00122 6.05132 8.66984 6.04847 11.9457C6.04847 12.9949 6.32217 14.0156 6.84105 14.9194L6 18.0014L9.15324 17.1746C10.0228 17.6479 11.0007 17.8988 11.9957 17.8988H11.9986C15.2744 17.8988 17.943 15.2302 17.9458 11.9514C17.943 10.3634 17.3243 8.86941 16.201 7.74608ZM11.9957 16.8924C11.1062 16.8924 10.2366 16.6529 9.47826 16.2024L9.29865 16.0941L7.42837 16.5844L7.9273 14.7598L7.81041 14.5716C7.31433 13.7847 7.05488 12.8752 7.05488 11.9429C7.05488 9.22295 9.27299 7.0048 11.9986 7.0048C13.3186 7.0048 14.5588 7.52085 15.4939 8.45315C16.4262 9.38831 16.9394 10.6285 16.9394 11.9486C16.9366 14.6771 14.7185 16.8924 11.9957 16.8924ZM14.7071 13.1917C14.5588 13.1175 13.8289 12.7583 13.6921 12.707C13.5552 12.6585 13.4555 12.6328 13.3585 12.7811C13.2587 12.9294 12.9736 13.2658 12.8881 13.3627C12.8026 13.4625 12.7142 13.4739 12.5659 13.3998C12.4177 13.3257 11.9387 13.1688 11.3713 12.6614C10.9294 12.2679 10.6329 11.7804 10.5445 11.6321C10.459 11.4839 10.536 11.404 10.6101 11.3299C10.6757 11.2643 10.7584 11.156 10.8325 11.0704C10.9066 10.9849 10.9323 10.9222 10.9808 10.8224C11.0292 10.7226 11.0064 10.6371 10.9694 10.563C10.9323 10.4888 10.6358 9.7561 10.5103 9.45959C10.3906 9.16878 10.268 9.20869 10.1768 9.20584C10.0912 9.20014 9.99145 9.20014 9.89166 9.20014C9.79187 9.20014 9.63222 9.2372 9.49537 9.38546C9.35852 9.53371 8.97648 9.89295 8.97648 10.6257C8.97648 11.3584 9.50962 12.0626 9.58375 12.1624C9.65788 12.2622 10.6301 13.7619 12.1212 14.4062C12.4747 14.5602 12.7512 14.6514 12.9679 14.7198C13.3243 14.8339 13.6465 14.8168 13.9031 14.7797C14.1882 14.7369 14.7812 14.4205 14.9066 14.0726C15.0292 13.7248 15.0292 13.4283 14.9922 13.3656C14.9551 13.3028 14.8553 13.2658 14.7071 13.1917Z" fill="white"></path></g><defs><clipPath id="clip0_657_572"><path d="M0 4.00122C0 1.79208 1.79086 0.0012207 4 0.0012207H20C22.2091 0.0012207 24 1.79208 24 4.00122V20.0016C24 22.2108 22.2091 24.0016 20 24.0016H4C1.79086 24.0016 0 22.2108 0 20.0016V4.00122Z" fill="white"></path></clipPath></defs></svg>
         <p class="wa-cta-button-label font-header {{buttonMargin}}">{{buttonName}}</p>
      </div>
   </button>
   <div id="wa-cta-button-powered">
      <p id="wa-cta-button-powered-label">
      <span id="wa-cta-button-powered-icon">
         <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="mr-[8px]"
         >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.84653 0.0360377C6.13974 0.138097 6.33912 0.438354 6.33912 0.777828V4.66669L9.15651 4.66669C9.41915 4.66669 9.65997 4.82804 9.78125 5.08527C9.90254 5.34251 9.88415 5.65289 9.73354 5.89048L4.80311 13.6682C4.62681 13.9463 4.30753 14.066 4.01433 13.964C3.72113 13.8619 3.52174 13.5616 3.52174 13.2222L3.52174 9.33331H0.704349C0.441715 9.33331 0.200895 9.17196 0.0796083 8.91473C-0.0416787 8.65749 -0.0232851 8.34711 0.127325 8.10952L5.05775 0.331805C5.23405 0.0536972 5.55333 -0.0660216 5.84653 0.0360377Z" fill="#FFA800" />
         </svg>
      </span>
      Powered by
      <a id="wa-cta-button-powered-sleekflow" href="https://sajidali.net/whatsapp-button-generator" target="_blank" rel="noreferrer">Sajid ali</a>
      </p>
   </div>
</div>

        </div>
       `;d=(d=(d=(d=(d=(d=(d=(d=(d=(d=d.replaceAll("{{buttonName}}",e)).replaceAll("{{brandImageUrl}}",i)).replaceAll("{{brandName}}",t)).replaceAll("{{brandSubtitleText}}",a)).replaceAll("{{buttonSize}}",r)).replaceAll("{{callToAction}}",l)).replaceAll("{{phoneNumber}}",n)).replaceAll("text={{welcomeMessage}}","text="+o.replace(/(?:\r\n|\r|\n)/g,"%0a"))).replaceAll("{{welcomeMessage}}",o)).replaceAll("{{buttonIconSize}}",s),"true"===p&&(d=(d=d.replaceAll("{{buttonMargin}}","wa-cta-button-label-margin")).replaceAll("{{buttonPadding}}","wa-button-size-with-words")),"false"===p&&(d=(d=d.replaceAll("{{buttonMargin}}","")).replaceAll("{{buttonPadding}}","")),document.querySelector("body").insertAdjacentHTML("beforeend",d),document.querySelector("#wa-chat-window").style.display="none",document.getElementById("wa-cta-button").onclick=()=>{var t=document.querySelector("#wa-chat-window");return"none"!==window.getComputedStyle(t).display?t.style.display="none":t.style.display="grid"},document.querySelector("#wa-close-btn").onclick=()=>{document.querySelector("#wa-chat-window").style.display="none"}}
