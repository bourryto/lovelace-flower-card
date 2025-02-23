/*! For license information please see flower-card.js.LICENSE.txt */
(()=>{"use strict";var t={147:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const r=i(356),n=i(239),o=i(516);class a extends n.LitElement{constructor(){super(...arguments),this.formatList=(t,e)=>({label:e.states[t].attributes.friendly_name,value:t}),this.renderFiller=()=>n.html`<div class="form-control"></div>`,this.renderTextbox=(t,e)=>{var i;return n.html`
        <div class="form-control">
            <ha-textfield
                label="${t}"
                .value="${null!==(i=this._config[e])&&void 0!==i?i:""}"
                .configValue="${e}"
                @change="${this._valueChanged}">
            </ha-textfield>
        </div>
        `},this.renderSwitch=(t,e)=>n.html`
        <div class="form-control">
            <ha-switch
                id="${e}"
                name="${e}"
                .checked="${this._config[e]}"
                .configValue="${e}"
                @change="${this._valueChanged}"
            >
            </ha-switch>
            <label for="${e}">${t}</label>
        </div>
        `,this.renderDropdown=(t,e,i)=>n.html`  
        <div class="form-control">
            <ha-combo-box
                label="${t}"
                .value="${this._config[e]}"
                .configValue="${e}"
                .items="${i}"
                @value-changed="${this._valueChanged}"
                @change=${this._valueChanged}
            ></ha-combo-box>
        </div>
          `,this.renderRadio=(t,e,i)=>n.html`
            <div class="form-control">
                <label>${t}</label>
                ${i.map((t=>n.html`
                        <ha-radio
                            id="${e}_${t.value}"
                            name="${e}"
                            .checked="${this._config[e]===t.value}"
                            .configValue="${e}"
                            .value="${t.value}"
                            @change="${this._valueChanged}"
                        >
                        </ha-radio>
                        <label for="${e}_${t.value}">${t.label}</label>
                    `))}
            </div>
          `,this.renderCheckboxes=(t,e,i)=>n.html`
            <label>${t}</label>
            ${i.map((t=>n.html`                
                <div class="form-control">
                    <ha-checkbox
                        id="${e}_${t.value}"
                        name="${e}[]"
                        .checked="${this._config[e].indexOf(t.value)>-1}"
                        .configValue="${e}"
                        .value="${t.value}"
                        @change="${this._valueChanged}"
                    >
                    </ha-checkbox>
                    <label for="${e}_${t.value}">${t.label}</label>
                </div>
                `))}
          `}setConfig(t){this._config=t}set hass(t){this._hass=t}renderForm(t){return n.html`
        <div class="card-config">
            ${t.map((t=>{const e=t.cssClass?`form-row ${t.cssClass}`:"form-row";return n.html`
                    <div class="${e}">
                        <label>${t.label}</label>
                        ${t.controls.map((t=>this.renderControl(t)))}
                    </div>
                    `}))}            
        </div>
        `}renderControl(t){switch(t.type){case o.FormControlType.Dropdown:return this.renderDropdown(t.label,t.configValue,t.items);case o.FormControlType.Radio:if(void 0===t.items)throw new Error("Radio control must have items defined");return this.renderRadio(t.label,t.configValue,t.items);case o.FormControlType.Checkboxes:if(void 0===t.items)throw new Error("Radio control must have items defined");return this.renderCheckboxes(t.label,t.configValue,t.items);case o.FormControlType.Switch:return this.renderSwitch(t.label,t.configValue);case o.FormControlType.Textbox:return this.renderTextbox(t.label,t.configValue);case o.FormControlType.Filler:return this.renderFiller()}return n.html``}_valueChanged(t){if(!this._config||!this._hass)return;const e=t.target,i=t.detail;if("HA-CHECKBOX"===e.tagName){const t=this._config[e.configValue].indexOf(e.value);e.checked&&t<0?this._config[e.configValue]=[...this._config[e.configValue],e.value]:!e.checked&&t>-1&&(this._config[e.configValue]=[...this._config[e.configValue].slice(0,t),...this._config[e.configValue].slice(t+1)])}else if(e.configValue)if(e.configValue.indexOf(".")>-1){const[t,i]=e.configValue.split(".");this._config={...this._config,[t]:{...this._config[t],[i]:e.checked}}}else this._config={...this._config,[e.configValue]:void 0===e.checked&&(null==i?void 0:i.value)?e.checked||i.value:e.value||e.checked};(0,r.fireEvent)(this,"config-changed",{config:this._config})}getEntitiesByDomain(t){return Object.keys(this._hass.states).filter((e=>e.substr(0,e.indexOf("."))===t)).map((t=>this.formatList(t,this._hass)))}getEntitiesByDeviceClass(t,e){return Object.keys(this._hass.states).filter((i=>i.substr(0,i.indexOf("."))===t&&this._hass.states[i].attributes.device_class===e)).map((t=>this.formatList(t,this._hass)))}getDropdownOptionsFromEnum(t){const e=[];for(const[i,r]of Object.entries(t))e.push({value:r,label:i});return e}static get styles(){return n.css`
            .form-row {
                margin-bottom: 10px;
            }
            .form-control {
                display: flex;
                align-items: center;
            }
            ha-switch {
                padding: 16px 6px;
            }
            .side-by-side {
                display: flex;
                flex-flow: row wrap;
            }            
            .side-by-side > label {
                width: 100%;
            }
            .side-by-side > .form-control {
                width: 49%;
                padding: 2px;
            }
            ha-textfield { 
                width: 100%;
            }
        `}}e.default=a},516:(t,e)=>{var i;Object.defineProperty(e,"__esModule",{value:!0}),e.FormControlType=void 0,function(t){t.Dropdown="dropdown",t.Checkbox="checkbox",t.Checkboxes="checkboxes",t.Radio="radio",t.Switch="switch",t.Textbox="textbox",t.Filler="filler"}(i||(e.FormControlType=i={}))},356:(t,e,i)=>{i.r(e),i.d(e,{DEFAULT_DOMAIN_ICON:()=>J,DEFAULT_PANEL:()=>K,DEFAULT_VIEW_ENTITY_ID:()=>st,DOMAINS_HIDE_MORE_INFO:()=>et,DOMAINS_MORE_INFO_NO_HISTORY:()=>it,DOMAINS_TOGGLE:()=>nt,DOMAINS_WITH_CARD:()=>G,DOMAINS_WITH_MORE_INFO:()=>tt,NumberFormat:()=>r,STATES_OFF:()=>rt,TimeFormat:()=>n,UNIT_C:()=>ot,UNIT_F:()=>at,applyThemesOnElement:()=>U,computeCardSize:()=>P,computeDomain:()=>F,computeEntity:()=>z,computeRTL:()=>H,computeRTLDirection:()=>V,computeStateDisplay:()=>Z,computeStateDomain:()=>W,createThing:()=>dt,debounce:()=>ht,domainIcon:()=>pt,evaluateFilter:()=>ft,fireEvent:()=>lt,fixedIcons:()=>mt,formatDate:()=>u,formatDateMonth:()=>y,formatDateMonthYear:()=>g,formatDateNumeric:()=>h,formatDateShort:()=>p,formatDateTime:()=>x,formatDateTimeNumeric:()=>M,formatDateTimeWithSeconds:()=>S,formatDateWeekday:()=>l,formatDateYear:()=>_,formatNumber:()=>X,formatTime:()=>D,formatTimeWeekday:()=>O,formatTimeWithSeconds:()=>N,forwardHaptic:()=>gt,getLovelace:()=>Mt,handleAction:()=>wt,handleActionConfig:()=>_t,handleClick:()=>$t,hasAction:()=>xt,hasConfigOrEntityChanged:()=>At,hasDoubleClick:()=>St,isNumericState:()=>B,navigate:()=>vt,numberFormatToLocale:()=>q,relativeTime:()=>L,round:()=>Q,stateIcon:()=>kt,timerTimeRemaining:()=>j,toggleEntity:()=>bt,turnOnOffEntities:()=>Et,turnOnOffEntity:()=>yt});var r,n,o,a=function(){return a=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},a.apply(this,arguments)},s={second:45,minute:45,hour:22,day:5},l=function(t,e){return c(e).format(t)},c=function(t){return new Intl.DateTimeFormat(t.language,{weekday:"long",month:"long",day:"numeric"})},u=function(t,e){return d(e).format(t)},d=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"})},h=function(t,e){return m(e).format(t)},m=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"numeric",day:"numeric"})},p=function(t,e){return f(e).format(t)},f=function(t){return new Intl.DateTimeFormat(t.language,{day:"numeric",month:"short"})},g=function(t,e){return v(e).format(t)},v=function(t){return new Intl.DateTimeFormat(t.language,{month:"long",year:"numeric"})},y=function(t,e){return b(e).format(t)},b=function(t){return new Intl.DateTimeFormat(t.language,{month:"long"})},_=function(t,e){return w(e).format(t)},w=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric"})};(o=r||(r={})).language="language",o.system="system",o.comma_decimal="comma_decimal",o.decimal_comma="decimal_comma",o.space_comma="space_comma",o.none="none",function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(n||(n={}));var $=function(t){if(t.time_format===n.language||t.time_format===n.system){var e=t.time_format===n.language?t.language:void 0,i=(new Date).toLocaleString(e);return i.includes("AM")||i.includes("PM")}return t.time_format===n.am_pm},x=function(t,e){return A(e).format(t)},A=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:$(t)?"numeric":"2-digit",minute:"2-digit",hour12:$(t)})},S=function(t,e){return E(e).format(t)},E=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:$(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:$(t)})},M=function(t,e){return C(e).format(t)},C=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:$(t)})},D=function(t,e){return k(e).format(t)},k=function(t){return new Intl.DateTimeFormat(t.language,{hour:"numeric",minute:"2-digit",hour12:$(t)})},N=function(t,e){return T(e).format(t)},T=function(t){return new Intl.DateTimeFormat(t.language,{hour:$(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:$(t)})},O=function(t,e){return I(e).format(t)},I=function(t){return new Intl.DateTimeFormat(t.language,{hour:$(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:$(t)})},L=function(t,e,i,r){void 0===r&&(r=!0);var n=function(t,e,i){void 0===e&&(e=Date.now()),void 0===i&&(i={});var r=a(a({},s),i||{}),n=(+t-+e)/1e3;if(Math.abs(n)<r.second)return{value:Math.round(n),unit:"second"};var o=n/60;if(Math.abs(o)<r.minute)return{value:Math.round(o),unit:"minute"};var l=n/3600;if(Math.abs(l)<r.hour)return{value:Math.round(l),unit:"hour"};var c=n/86400;if(Math.abs(c)<r.day)return{value:Math.round(c),unit:"day"};var u=new Date(t),d=new Date(e),h=u.getFullYear()-d.getFullYear();if(Math.round(Math.abs(h))>0)return{value:Math.round(h),unit:"year"};var m=12*h+u.getMonth()-d.getMonth();if(Math.round(Math.abs(m))>0)return{value:Math.round(m),unit:"month"};var p=n/604800;return{value:Math.round(p),unit:"week"}}(t,i);return r?function(t){return new Intl.RelativeTimeFormat(t.language,{numeric:"auto"})}(e).format(n.value,n.unit):Intl.NumberFormat(e.language,{style:"unit",unit:n.unit,unitDisplay:"long"}).format(Math.abs(n.value))};function j(t){var e,i=3600*(e=t.attributes.remaining.split(":").map(Number))[0]+60*e[1]+e[2];if("active"===t.state){var r=(new Date).getTime(),n=new Date(t.last_changed).getTime();i=Math.max(i-(r-n)/1e3,0)}return i}function R(){return(R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t}).apply(this,arguments)}var U=function(t,e,i,r){void 0===r&&(r=!1),t._themes||(t._themes={});var n=e.default_theme;("default"===i||i&&e.themes[i])&&(n=i);var o=R({},t._themes);if("default"!==n){var a=e.themes[n];Object.keys(a).forEach((function(e){var i="--"+e;t._themes[i]="",o[i]=a[e]}))}if(t.updateStyles?t.updateStyles(o):window.ShadyCSS&&window.ShadyCSS.styleSubtree(t,o),r){var s=document.querySelector("meta[name=theme-color]");if(s){s.hasAttribute("default-content")||s.setAttribute("default-content",s.getAttribute("content"));var l=o["--primary-color"]||s.getAttribute("default-content");s.setAttribute("content",l)}}},P=function(t){return"function"==typeof t.getCardSize?t.getCardSize():4};function F(t){return t.substr(0,t.indexOf("."))}function z(t){return t.substr(t.indexOf(".")+1)}function H(t){var e,i=(null==t||null==(e=t.locale)?void 0:e.language)||"en";return t.translationMetadata.translations[i]&&t.translationMetadata.translations[i].isRTL||!1}function V(t){return H(t)?"rtl":"ltr"}function W(t){return F(t.entity_id)}var B=function(t){return!!t.attributes.unit_of_measurement||!!t.attributes.state_class},q=function(t){switch(t.number_format){case r.comma_decimal:return["en-US","en"];case r.decimal_comma:return["de","es","it"];case r.space_comma:return["fr","sv","cs"];case r.system:return;default:return t.language}},Q=function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)},X=function(t,e,i){var n=e?q(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==r.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,Y(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,Y(t,i)).format(Number(t))}return"string"==typeof t?t:Q(t,null==i?void 0:i.maximumFractionDigits).toString()+("currency"===(null==i?void 0:i.style)?" "+i.currency:"")},Y=function(t,e){var i=R({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var r=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=r,i.maximumFractionDigits=r}return i},Z=function(t,e,i,r){var n=void 0!==r?r:e.state;if("unknown"===n||"unavailable"===n)return t("state.default."+n);if(B(e)){if("monetary"===e.attributes.device_class)try{return X(n,i,{style:"currency",currency:e.attributes.unit_of_measurement})}catch(t){}return X(n,i)+(e.attributes.unit_of_measurement?" "+e.attributes.unit_of_measurement:"")}var o=W(e);if("input_datetime"===o){var a;if(void 0===r)return e.attributes.has_date&&e.attributes.has_time?(a=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),x(a,i)):e.attributes.has_date?(a=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),u(a,i)):e.attributes.has_time?((a=new Date).setHours(e.attributes.hour,e.attributes.minute),D(a,i)):e.state;try{var s=r.split(" ");if(2===s.length)return x(new Date(s.join("T")),i);if(1===s.length){if(r.includes("-"))return u(new Date(r+"T00:00"),i);if(r.includes(":")){var l=new Date;return D(new Date(l.toISOString().split("T")[0]+"T"+r),i)}}return r}catch(t){return r}}return"humidifier"===o&&"on"===n&&e.attributes.humidity?e.attributes.humidity+" %":"counter"===o||"number"===o||"input_number"===o?X(n,i):e.attributes.device_class&&t("component."+o+".state."+e.attributes.device_class+"."+n)||t("component."+o+".state._."+n)||n},J="mdi:bookmark",K="lovelace",G=["climate","cover","configurator","input_select","input_number","input_text","lock","media_player","scene","script","timer","vacuum","water_heater","weblink"],tt=["alarm_control_panel","automation","camera","climate","configurator","cover","fan","group","history_graph","input_datetime","light","lock","media_player","script","sun","updater","vacuum","water_heater","weather"],et=["input_number","input_select","input_text","scene","weblink"],it=["camera","configurator","history_graph","scene"],rt=["closed","locked","off"],nt=new Set(["fan","input_boolean","light","switch","group","automation"]),ot="°C",at="°F",st="group.default_view",lt=function(t,e,i,r){r=r||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return n.detail=i,t.dispatchEvent(n),n},ct=new Set(["call-service","divider","section","weblink","cast","select"]),ut={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},dt=function(t,e){void 0===e&&(e=!1);var i=function(t,e){return r("hui-error-card",{type:"error",error:t,config:e})},r=function(t,e){var r=window.document.createElement(t);try{if(!r.setConfig)return;r.setConfig(e)}catch(r){return console.error(t,r),i(r.message,e)}return r};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);var n=t.type;if(n&&n.startsWith("custom:"))n=n.substr(7);else if(e)if(ct.has(n))n="hui-"+n+"-row";else{if(!t.entity)return i("Invalid config given.",t);var o=t.entity.split(".",1)[0];n="hui-"+(ut[o]||"text")+"-entity-row"}else n="hui-"+n+"-card";if(customElements.get(n))return r(n,t);var a=i("Custom element doesn't exist: "+t.type+".",t);a.style.display="None";var s=setTimeout((function(){a.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(s),lt(a,"ll-rebuild",{},a)})),a},ht=function(t,e,i){var r;return void 0===i&&(i=!1),function(){var n=[].slice.call(arguments),o=this,a=i&&!r;clearTimeout(r),r=setTimeout((function(){r=null,i||t.apply(o,n)}),e),a&&t.apply(o,n)}},mt={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function pt(t,e){if(t in mt)return mt[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return e&&"off"===e?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===e?"mdi:window-closed":"mdi:window-open";case"lock":return e&&"unlocked"===e?"mdi:lock-open":"mdi:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"mdi:cast-connected":"mdi:cast";case"zwave":switch(e){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"mdi:bookmark"}}var ft=function(t,e){var i=e.value||e,r=e.attribute?t.attributes[e.attribute]:t.state;switch(e.operator||"=="){case"==":return r===i;case"<=":return r<=i;case"<":return r<i;case">=":return r>=i;case">":return r>i;case"!=":return r!==i;case"regex":return r.match(i);default:return!1}},gt=function(t){lt(window,"haptic",t)},vt=function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),lt(window,"location-changed",{replace:i})},yt=function(t,e,i){void 0===i&&(i=!0);var r,n=F(e),o="group"===n?"homeassistant":n;switch(n){case"lock":r=i?"unlock":"lock";break;case"cover":r=i?"open_cover":"close_cover";break;default:r=i?"turn_on":"turn_off"}return t.callService(o,r,{entity_id:e})},bt=function(t,e){var i=rt.includes(t.states[e].state);return yt(t,e,i)},_t=function(t,e,i,r){if(r||(r={action:"more-info"}),!r.confirmation||r.confirmation.exemptions&&r.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(gt("warning"),confirm(r.confirmation.text||"Are you sure you want to "+r.action+"?")))switch(r.action){case"more-info":(i.entity||i.camera_image)&&lt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":r.navigation_path&&vt(0,r.navigation_path);break;case"url":r.url_path&&window.open(r.url_path);break;case"toggle":i.entity&&(bt(e,i.entity),gt("success"));break;case"call-service":if(!r.service)return void gt("failure");var n=r.service.split(".",2);e.callService(n[0],n[1],r.service_data,r.target),gt("success");break;case"fire-dom-event":lt(t,"ll-custom",r)}},wt=function(t,e,i,r){var n;"double_tap"===r&&i.double_tap_action?n=i.double_tap_action:"hold"===r&&i.hold_action?n=i.hold_action:"tap"===r&&i.tap_action&&(n=i.tap_action),_t(t,e,i,n)},$t=function(t,e,i,r,n){var o;if(n&&i.double_tap_action?o=i.double_tap_action:r&&i.hold_action?o=i.hold_action:!r&&i.tap_action&&(o=i.tap_action),o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?"))switch(o.action){case"more-info":(o.entity||i.entity||i.camera_image)&&(lt(t,"hass-more-info",{entityId:o.entity?o.entity:i.entity?i.entity:i.camera_image}),o.haptic&&gt(o.haptic));break;case"navigate":o.navigation_path&&(vt(0,o.navigation_path),o.haptic&&gt(o.haptic));break;case"url":o.url_path&&window.open(o.url_path),o.haptic&&gt(o.haptic);break;case"toggle":i.entity&&(bt(e,i.entity),o.haptic&&gt(o.haptic));break;case"call-service":if(!o.service)return;var a=o.service.split(".",2),s=a[0],l=a[1],c=R({},o.service_data);"entity"===c.entity_id&&(c.entity_id=i.entity),e.callService(s,l,c,o.target),o.haptic&&gt(o.haptic);break;case"fire-dom-event":lt(t,"ll-custom",o),o.haptic&&gt(o.haptic)}};function xt(t){return void 0!==t&&"none"!==t.action}function At(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var r=e.get("hass");return!r||r.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}function St(t){return void 0!==t&&"none"!==t.action}var Et=function(t,e,i){void 0===i&&(i=!0);var r={};e.forEach((function(e){if(rt.includes(t.states[e].state)===i){var n=F(e),o=["cover","lock"].includes(n)?n:"homeassistant";o in r||(r[o]=[]),r[o].push(e)}})),Object.keys(r).forEach((function(e){var n;switch(e){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(e,n,{entity_id:r[e]})}))},Mt=function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null},Ct={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},Dt={binary_sensor:function(t,e){var i="off"===t;switch(null==e?void 0:e.attributes.device_class){case"battery":return i?"mdi:battery":"mdi:battery-outline";case"battery_charging":return i?"mdi:battery":"mdi:battery-charging";case"cold":return i?"mdi:thermometer":"mdi:snowflake";case"connectivity":return i?"mdi:server-network-off":"mdi:server-network";case"door":return i?"mdi:door-closed":"mdi:door-open";case"garage_door":return i?"mdi:garage":"mdi:garage-open";case"power":case"plug":return i?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return i?"mdi:check-circle":"mdi:alert-circle";case"smoke":return i?"mdi:check-circle":"mdi:smoke";case"heat":return i?"mdi:thermometer":"mdi:fire";case"light":return i?"mdi:brightness-5":"mdi:brightness-7";case"lock":return i?"mdi:lock":"mdi:lock-open";case"moisture":return i?"mdi:water-off":"mdi:water";case"motion":return i?"mdi:walk":"mdi:run";case"occupancy":case"presence":return i?"mdi:home-outline":"mdi:home";case"opening":return i?"mdi:square":"mdi:square-outline";case"running":return i?"mdi:stop":"mdi:play";case"sound":return i?"mdi:music-note-off":"mdi:music-note";case"update":return i?"mdi:package":"mdi:package-up";case"vibration":return i?"mdi:crop-portrait":"mdi:vibrate";case"window":return i?"mdi:window-closed":"mdi:window-open";default:return i?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"mdi:garage-open":"mdi:garage";case"door":return e?"mdi:door-open":"mdi:door-closed";case"shutter":return e?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return e?"mdi:blinds-open":"mdi:blinds";case"window":return e?"mdi:window-open":"mdi:window-closed";default:return pt("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in Ct)return Ct[e];if("battery"===e){var i=Number(t.state);if(isNaN(i))return"mdi:battery-unknown";var r=10*Math.round(i/10);return r>=100?"mdi:battery":r<=0?"mdi:battery-alert":"hass:battery-"+r}var n=t.attributes.unit_of_measurement;return"°C"===n||"°F"===n?"mdi:thermometer":pt("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?pt("input_datetime"):"mdi:calendar":"mdi:clock"}},kt=function(t){if(!t)return"mdi:bookmark";if(t.attributes.icon)return t.attributes.icon;var e=F(t.entity_id);return e in Dt?Dt[e](t):pt(e,t.state)}},43:function(t,e,i){var r=this&&this.__decorate||function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};Object.defineProperty(e,"__esModule",{value:!0}),e.FlowerCardEditor=void 0;const n=i(239),o=i(854),a=i(139),s=i(147),l=i(516);let c=class extends s.default{render(){if(!this._hass||!this._config)return n.html``;Object.prototype.hasOwnProperty.call(this._config,"show_bars")||(this._config.show_bars=a.default_show_bars);const t=this.getEntitiesByDomain("plant"),e=this.getEntitiesByDeviceClass("sensor","battery");return this.renderForm([{controls:[{label:"Display Type",configValue:"display_type",type:l.FormControlType.Radio,items:[{label:"Full",value:o.DisplayType.Full},{label:"Compact",value:o.DisplayType.Compact},{label:"Overview",value:o.DisplayType.Overview}]}]},{controls:[{label:"Entity",configValue:"entity",type:l.FormControlType.Dropdown,items:t}]},{controls:[{label:"Battery Sensor",configValue:"battery_sensor",type:l.FormControlType.Dropdown,items:e}]},{controls:[{label:"Show Bars",configValue:"show_bars",type:l.FormControlType.Checkboxes,items:a.plantAttributes}]}])}};e.FlowerCardEditor=c,e.FlowerCardEditor=c=r([(0,n.customElement)("flower-card-editor")],c)},248:function(t,e,i){var r=this&&this.__decorate||function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a},n=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(n,o){function a(t){try{l(r.next(t))}catch(t){o(t)}}function s(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,s)}l((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const o=i(239),a=i(800),s=i(854),l=i(330),c=i(429),u=i(139),d=i(135);console.info(`%c FLOWER-CARD %c ${l.version}`,"color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:u.CARD_NAME,name:"Flower card",preview:!0,description:"Custom flower card for https://github.com/Olen/homeassistant-plant"});let h=class extends o.LitElement{set hass(t){var e;this._hass=t,this.stateObj=(null===(e=this.config)||void 0===e?void 0:e.entity)?t.states[this.config.entity]:void 0,this.previousFetchDate||(this.previousFetchDate=0),Date.now()>this.previousFetchDate+1e3&&(this.previousFetchDate=Date.now(),this.get_data(t).then((()=>{this.requestUpdate()})))}static getConfigElement(){return n(this,void 0,void 0,(function*(){return yield Promise.resolve().then((()=>i(43))),document.createElement(u.CARD_EDITOR_NAME)}))}static getStubConfig(t){const e=Object.values(t.states).filter((t=>0===t.entity_id.indexOf("plant.")));return{entity:e.length>0?e[0].entity_id:"plant.my_plant",battery_sensor:"sensor.myflower_battery",show_bars:u.default_show_bars}}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this.config=t}render(){if(!this.config||!this._hass)return o.html``;if(!this.stateObj)return o.html`
                <hui-warning>
                Entity not available: ${this.config.entity}
                </hui-warning>
              `;const t=this.stateObj.attributes.species;let e="header",i="";switch(this.config.display_type){case s.DisplayType.Compact:e="header-compact",i="";break;case s.DisplayType.Overview:e="header-overview",i="card-overview";break;default:i="card-margin-top"}const r=e,n=i;if(this.config.display_type===s.DisplayType.Overview){const t=(0,c.getStatus)(this);return o.html`
                <ha-card class="${n}">
                    <div class="${r}" @click="${()=>(0,d.moreInfo)(this,this.stateObj.entity_id)}">
                        <div class="status-ring" style="background-color: ${t}">
                            <img src="${this.stateObj.attributes.entity_picture?this.stateObj.attributes.entity_picture:u.missingImage}">
                        </div>
                    </div>
                </ha-card>
            `}return o.html`
            <ha-card class="${n}">
            <div class="${r}" @click="${()=>(0,d.moreInfo)(this,this.stateObj.entity_id)}">
                <img src="${this.stateObj.attributes.entity_picture?this.stateObj.attributes.entity_picture:u.missingImage}">
                <span id="name"> ${this.stateObj.attributes.friendly_name} <ha-icon .icon="mdi:${"problem"==this.stateObj.state.toLowerCase()?"alert-circle-outline":""}"></ha-icon>
                </span>
                <span id="battery">${(0,c.renderBattery)(this.config,this._hass)}</span>
                <span id="species">${t} </span>
            </div>
            <div class="divider"></div>
            ${(0,c.renderAttributes)(this)}
            </ha-card>
            `}get_data(t){var e;return n(this,void 0,void 0,(function*(){try{this.plantinfo=yield t.callWS({type:"plant/get_info",entity_id:null===(e=this.config)||void 0===e?void 0:e.entity})}catch(t){this.plantinfo={result:{}}}}))}getCardSize(){return this.config.display_type===s.DisplayType.Overview?1:5}static get styles(){return a.style}};r([(0,o.property)()],h.prototype,"_hass",void 0),r([(0,o.property)()],h.prototype,"config",void 0),h=r([(0,o.customElement)(u.CARD_NAME)],h),e.default=h},800:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.style=void 0;const r=i(399);e.style=r.css`
.card-margin-top {
  margin-top: 32px;
}
.card-overview {
    background-color: transparent;
    border-style: none;
    height: 100px;
    width: 100px;
}
.attributes {
  display: flex;
  white-space: nowrap;
  padding: 8px;
}
.attributes.width-100 {
  padding: 2px;

}
.attribute ha-icon {
  margin-right: 10px;
  margin-left: 5px;
}
.attribute {
  white-space: nowrap;
  display: flex;  
  align-items: center;
  width: 50%;
}
#battery {
  float: right;
  margin-right: 16px;
  margin-top: -15px;
}
.header {
  padding-top: 8px;
  height: 72px;
}
.header-compact {
  padding-top: 4px;
  height: 55px;
}
.header-overview {
    height: 100px;
    width: 100px;
}
    
.status-ring{
    height: 100px;
    width: 100px;
    border-radius: 100%;
    padding: 0;
}
    
.attribute .header, .attribute .header-compact{
  height: auto;
  padding-top: 0px;
}
.header > img {
  border-radius: 50%;
  width: 88px;
  height: 88px;
  object-fit: cover;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: -32px;
  float: left;
  box-shadow: var( --ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2) );
}
.header-compact > img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 4px;
  margin-top: 0px;
  float: left;
  box-shadow: var( --ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2) );
}
.status-ring > img {
    border-radius: 100%;
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 10px;
    box-shadow: var( --ha-card-box-shadow, 0 0 2px 2px rgba(0, 0, 0, 0.14));
}
.header > #name {
  font-weight: bold;
  width: 100%;
  margin-top: 16px;
  text-transform: capitalize;
  display: block;
}
.header-compact > #name {
  font-weight: bold;
  width: 100%;
  margin-top: 8px;
  text-transform: capitalize;
  display: block;
  white-space: nowrap;
}
#name ha-icon {
    color: rgb(240, 163, 163);
}
.header > #species {
  text-transform: capitalize;
  color: #8c96a5;
  display: block;
}
.header-compact > #species {
  text-transform: capitalize;
  line-height: 85%;
  color: #8c96a5;
  font-size: 0.8em;
  margin-top: 0px;
  margin-right: 4px;
  opacity: 0.4;
  display: block;
}
.meter {
  height: 8px;
  background-color: #f1f1f1;
  border-radius: 2px;
  display: inline-grid;
  overflow: hidden;
}
.meter.red {
  flex-grow: 1;
  margin-right: 5px;
  max-width: 5%
}
.meter.green {
  flex-grow: 10;
  margin-right: 5px;
  max-width: 40%
}
.attribute.tooltip.width-100 .meter.green {
  max-width: 90%;
}
.attribute.tooltip.width-100 .header {
  display: none;
}
.meter > span {
  grid-row: 1;
  grid-column: 1;
  height: 100%;
}
.meter > .good {
  background-color: rgba(43,194,83,1);
}
.meter > .bad {
  background-color: rgba(240,163,163);
}
.meter > .unavailable {
  background-color: rgba(158,158,158,1);
}
.divider {
  height: 1px;
  background-color: #727272;
  opacity: 0.25;
  margin-left: 8px;
  margin-right: 8px;
}
.tooltip {
  position: relative;
}
.tooltip .tip {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  padding: 6px 10px;
  top: 3.3em;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-180%);
          transform: translateX(-50%) translateY(-180%);
  background: grey;
  color: white;
  white-space: nowrap;
  z-index: 2;
  border-radius: 2px;
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), -webkit-transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), -webkit-transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
}
.battery.tooltip .tip {
  top: 2em;
}
.tooltip:hover .tip, .tooltip:active .tip {
  display: block;
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateX(-50%) translateY(-200%);
          transform: translateX(-50%) translateY(-200%);
}
.width-100 { // only used for attributes, can ignore for header and others
  width: 100%;    
  margin-bottom: 3px;
  margin-right: 5px;
}
.width-100 .header {
  display: none;
}
@media (max-width: 600px) {
  .header > .unit {
    display: none;
  }
}
`},854:(t,e)=>{var i;Object.defineProperty(e,"__esModule",{value:!0}),e.DisplayType=void 0,function(t){t.Full="full",t.Compact="compact",t.Overview="overview"}(i||(e.DisplayType=i={}))},429:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.renderAttributeChunks=e.getChunkedDisplayed=e.renderAttribute=e.renderAttributes=e.getStatus=e.renderBattery=void 0;const r=i(854),n=i(239),o=i(534),a=i(139),s=i(135);e.renderBattery=(t,e)=>{if(!t.battery_sensor)return n.html``;const i=e.states[t.battery_sensor];if(!i)return n.html``;const r=parseInt(i.state),{icon:o,color:a}=[{threshold:90,icon:"mdi:battery",color:"green"},{threshold:80,icon:"mdi:battery-90",color:"green"},{threshold:70,icon:"mdi:battery-80",color:"green"},{threshold:60,icon:"mdi:battery-70",color:"green"},{threshold:50,icon:"mdi:battery-60",color:"green"},{threshold:40,icon:"mdi:battery-50",color:"green"},{threshold:30,icon:"mdi:battery-40",color:"orange"},{threshold:20,icon:"mdi:battery-30",color:"orange"},{threshold:10,icon:"mdi:battery-20",color:"red"},{threshold:0,icon:"mdi:battery-10",color:"red"},{threshold:-1/0,icon:"mdi:battery-alert-variant-outline",color:"red"}].find((({threshold:t})=>r>t))||{icon:"mdi:battery-alert-variant-outline",color:"red"};return n.html`
        <div class="battery tooltip">
            <div class="tip" style="text-align:center;">${r}%</div>
            <ha-icon .icon="${o}" style="color: ${a}"></ha-icon>
        </div>
    `},e.getStatus=t=>{const e=t.config.show_bars||a.default_show_bars;if(t.plantinfo&&t.plantinfo.result){const i=t.plantinfo.result;let r=!0;for(const t of e)if(i[t]){let{max:e,min:n,current:o,icon:a,sensor:s,unit_of_measurement:l}=i[t];if(e=Number(e),n=Number(n),o=Number(o),o<n||o>e){r=!1;break}}return r?"green":"red"}},e.renderAttributes=t=>{const i={},r={},n={},o={},s={},l={},c={},u=t.config.show_bars||a.default_show_bars;if(t.plantinfo&&t.plantinfo.result){const e=t.plantinfo.result;for(const t of u)if(e[t]){let{max:a,min:u,current:d,icon:h,sensor:m,unit_of_measurement:p}=e[t];a=Number(a),u=Number(u),d=Number(d),h=String(h),m=String(m),p=String(p),o[`max_${t}`]={max:a,min:u},s[t]=d,i[t]=h,l[t]=m,n[t]=p,r[t]=p,"dli"===t&&(n.dli="mol/d⋅m²",r.dli='<math style="display: inline-grid;" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>mol</mn></mrow><mrow><mn>d</mn><mn>⋅</mn><msup><mn>m</mn><mn>2</mn></msup></mrow></mfrac></mrow></math>'),c[t]={name:t,current:d,limits:o[`max_${t}`],icon:h,sensor:m,unit_of_measurement:p}}}return(0,e.renderAttributeChunks)(t,c)},e.renderAttribute=(t,e)=>{const{max:i,min:a}=e.limits,l=e.unit_of_measurement,c=e.icon||"mdi:help-circle-outline",u=e.current||0,d=!isNaN(u),h=100*Math.max(0,Math.min(1,(u-a)/(i-a))),m=d?`${e.name}: ${u} ${l}<br>(${a} ~ ${i} ${l})`:t._hass.localize("state.default.unavailable"),p="dli"===e.name?'<math style="display: inline-grid;" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>mol</mn></mrow><mrow><mn>d</mn><mn>⋅</mn><msup><mn>m</mn><mn>2</mn></msup></mrow></mfrac></mrow></math>':l,f="attribute tooltip "+(t.config.display_type===r.DisplayType.Compact?"width-100":"");return n.html`
        <div class="${f}" @click="${()=>(0,s.moreInfo)(t,e.sensor)}">
            <div class="tip" style="text-align:center;">${(0,o.unsafeHTML)(m)}</div>
            <ha-icon .icon="${c}"></ha-icon>
            <div class="meter red">
                <span class="${d?u<a||u>i?"bad":"good":"unavailable"}" style="width: 100%;"></span>
            </div>
            <div class="meter green">
                <span class="${d?u>i?"bad":"good":"unavailable"}" style="width:${d?h:"0"}%;"></span>
            </div>
            <div class="meter red">
                <span class="bad" style="width:${d?u>i?100:0:"0"}%;"></span>
            </div>
            ${t.config.display_type===r.DisplayType.Compact?"":n.html`<div class="header"><span class="value">${u}</span>&nbsp;<span class='unit'>${(0,o.unsafeHTML)(p)}</span></div>`}
        </div>
    `},e.getChunkedDisplayed=(t,e)=>Object.values(t).reduce(((t,i,r)=>{const n=Math.floor(r/e);return t[n]||(t[n]=[]),t[n].push(i),t}),[]),e.renderAttributeChunks=(t,i)=>{const o=(0,e.getChunkedDisplayed)(i,t.config.display_type===r.DisplayType.Compact?1:2),a="attributes "+(t.config.display_type===r.DisplayType.Compact?"width-100":"");return o.map((i=>n.html`<div class="${a}">${i.map((i=>i?n.html`${(0,e.renderAttribute)(t,i)}`:""))}</div>`)).flat()}},139:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.plantAttributes=e.missingImage=e.default_show_bars=e.CARD_EDITOR_NAME=e.CARD_NAME=void 0,e.CARD_NAME="flower-card",e.CARD_EDITOR_NAME=`${e.CARD_NAME}-editor`,e.default_show_bars=["moisture","conductivity","temperature","illuminance","humidity","dli"],e.missingImage="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIGZvY3VzYWJsZT0iZmFsc2UiIHJvbGU9ImltZyIgYXJpYS1oaWRkZW49InRydWUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICAgIDxnPgogICAgICA8IS0tP2xpdCQ0MTM0MjMxNjkkLS0+PHBhdGggZD0iTTMsMTNBOSw5IDAgMCwwIDEyLDIyQzEyLDE3IDcuOTcsMTMgMywxM00xMiw1LjVBMi41LDIuNSAwIDAsMSAxNC41LDhBMi41LDIuNSAwIDAsMSAxMiwxMC41QTIuNSwyLjUgMCAwLDEgOS41LDhBMi41LDIuNSAwIDAsMSAxMiw1LjVNNS42LDEwLjI1QTIuNSwyLjUgMCAwLDAgOC4xLDEyLjc1QzguNjMsMTIuNzUgOS4xMiwxMi41OCA5LjUsMTIuMzFDOS41LDEyLjM3IDkuNSwxMi40MyA5LjUsMTIuNUEyLjUsMi41IDAgMCwwIDEyLDE1QTIuNSwyLjUgMCAwLDAgMTQuNSwxMi41QzE0LjUsMTIuNDMgMTQuNSwxMi4zNyAxNC41LDEyLjMxQzE0Ljg4LDEyLjU4IDE1LjM3LDEyLjc1IDE1LjksMTIuNzVDMTcuMjgsMTIuNzUgMTguNCwxMS42MyAxOC40LDEwLjI1QzE4LjQsOS4yNSAxNy44MSw4LjQgMTYuOTcsOEMxNy44MSw3LjYgMTguNCw2Ljc0IDE4LjQsNS43NUMxOC40LDQuMzcgMTcuMjgsMy4yNSAxNS45LDMuMjVDMTUuMzcsMy4yNSAxNC44OCwzLjQxIDE0LjUsMy42OUMxNC41LDMuNjMgMTQuNSwzLjU2IDE0LjUsMy41QTIuNSwyLjUgMCAwLDAgMTIsMUEyLjUsMi41IDAgMCwwIDkuNSwzLjVDOS41LDMuNTYgOS41LDMuNjMgOS41LDMuNjlDOS4xMiwzLjQxIDguNjMsMy4yNSA4LjEsMy4yNUEyLjUsMi41IDAgMCwwIDUuNiw1Ljc1QzUuNiw2Ljc0IDYuMTksNy42IDcuMDMsOEM2LjE5LDguNCA1LjYsOS4yNSA1LjYsMTAuMjVNMTIsMjJBOSw5IDAgMCwwIDIxLDEzQzE2LDEzIDEyLDE3IDEyLDIyWiI+PC9wYXRoPgogICAgICA8L2c+Cjwvc3ZnPgo=",e.plantAttributes=[{label:"Moisture",value:"moisture"},{label:"Conductivity",value:"conductivity"},{label:"Temperature",value:"temperature"},{label:"Illuminance",value:"illuminance"},{label:"Humidity",value:"humidity"},{label:"Daily Light Integral",value:"dli"}]},135:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.moreInfo=e.getStubConfig=e.getConfigElement=void 0;const r=i(356),n=i(139);e.getConfigElement=()=>document.createElement("flower-card-editor"),e.getStubConfig=t=>{const e=Object.values(t.states).filter((t=>0===t.entity_id.indexOf("plant.")));return{entity:e.length>0?e[0].entity_id:"plant.my_plant",battery_sensor:"sensor.myflower_battery",show_bars:n.default_show_bars}},e.moreInfo=(t,e)=>{(0,r.fireEvent)(t,"hass-more-info",{entityId:e},{bubbles:!1,composed:!0})}},842:(t,e,i)=>{i.d(e,{BO:()=>s,mN:()=>w,Rf:()=>u,AH:()=>c,W3:()=>v,sk:()=>d,Ec:()=>y,qM:()=>n,iz:()=>l});const r=window,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}}const l=t=>new s("string"==typeof t?t:t+"",void 0,o),c=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new s(i,t,o)},u=(t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),n=r.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}))},d=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return l(e)})(t):t;var h;const m=window,p=m.trustedTypes,f=p?p.emptyScript:"",g=m.reactiveElementPolyfillSupport,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>e!==t&&(e==e||t==t),b={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},_="finalized";class w extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Ep(i,e);void 0!==r&&(this._$Ev.set(r,i),t.push(r))})),t}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||b}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=b){var r;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:v).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,n=r._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=r.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:v;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||y)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}w[_]=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:w}),(null!==(h=m.reactiveElementVersions)&&void 0!==h?h:m.reactiveElementVersions=[]).push("1.6.3")},239:(t,e,i)=>{i.r(e),i.d(e,{CSSResult:()=>r.BO,LitElement:()=>o.WF,ReactiveElement:()=>r.mN,UpdatingElement:()=>o.zd,_$LE:()=>o.Zm,_$LH:()=>n.ge,adoptStyles:()=>r.Rf,css:()=>r.AH,customElement:()=>c,decorateProperty:()=>l,defaultConverter:()=>r.W3,eventOptions:()=>p,getCompatibleStyle:()=>r.sk,html:()=>n.qy,legacyPrototypeMethod:()=>a,noChange:()=>n.c0,notEqual:()=>r.Ec,nothing:()=>n.s6,property:()=>h,query:()=>f,queryAll:()=>g,queryAssignedElements:()=>_,queryAssignedNodes:()=>w,queryAsync:()=>v,render:()=>n.XX,standardPrototypeMethod:()=>s,state:()=>m,supportsAdoptingStyleSheets:()=>r.qM,svg:()=>n.JW,unsafeCSS:()=>r.iz});var r=i(842),n=i(752),o=i(228);const a=(t,e,i)=>{Object.defineProperty(e,i,t)},s=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t}),l=({finisher:t,descriptor:e})=>(i,r)=>{var n;if(void 0===r){const r=null!==(n=i.originalKey)&&void 0!==n?n:i.key,o=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return null!=t&&(o.finisher=function(e){t(e,r)}),o}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,r,e(r)),null==t||t(n,r)}},c=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){customElements.define(t,e)}}})(t,e),u=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},d=(t,e,i)=>{e.constructor.createProperty(i,t)};function h(t){return(e,i)=>void 0!==i?d(t,e,i):u(t,e)}function m(t){return h({...t,state:!0})}function p(t){return l({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}function f(t,e){return l({descriptor:i=>{const r={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[e]&&(this[e]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}function g(t){return l({descriptor:e=>({get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}function v(t){return l({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}var y;const b=null!=(null===(y=window.HTMLSlotElement)||void 0===y?void 0:y.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function _(t){const{slot:e,selector:i}=null!=t?t:{};return l({descriptor:r=>({get(){var r;const n="slot"+(e?`[name=${e}]`:":not([name])"),o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(n),a=null!=o?b(o,t):[];return i?a.filter((t=>t.matches(i))):a},enumerable:!0,configurable:!0})})}function w(t,e,i){let r,n=t;return"object"==typeof t?(n=t.slot,r=t):r={flatten:e},i?_({slot:n,flatten:e,selector:i}):l({descriptor:t=>({get(){var t,e;const i="slot"+(n?`[name=${n}]`:":not([name])"),o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(i);return null!==(e=null==o?void 0:o.assignedNodes(r))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.")},228:(t,e,i)=>{i.d(e,{AH:()=>o.AH,BO:()=>o.BO,Ec:()=>o.Ec,JW:()=>a.JW,Rf:()=>o.Rf,W3:()=>o.W3,WF:()=>l,XX:()=>a.XX,Zm:()=>u,c0:()=>a.c0,ge:()=>a.ge,iz:()=>o.iz,mN:()=>o.mN,qM:()=>o.qM,qy:()=>a.qy,s6:()=>a.s6,sk:()=>o.sk,zd:()=>s});var r,n,o=i(842),a=i(752);const s=o.mN;class l extends o.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,a.XX)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return a.c0}}l.finalized=!0,l._$litElement$=!0,null===(r=globalThis.litElementHydrateSupport)||void 0===r||r.call(globalThis,{LitElement:l});const c=globalThis.litElementPolyfillSupport;null==c||c({LitElement:l});const u={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(n=globalThis.litElementVersions)&&void 0!==n?n:globalThis.litElementVersions=[]).push("3.3.3")},752:(t,e,i)=>{var r;i.d(e,{JW:()=>E,XX:()=>B,c0:()=>M,ge:()=>V,qy:()=>S,s6:()=>C});const n=window,o=n.trustedTypes,a=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,s="$lit$",l=`lit$${(Math.random()+"").slice(9)}$`,c="?"+l,u=`<${c}>`,d=document,h=()=>d.createComment(""),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,f=t=>p(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),g="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,b=/>/g,_=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),w=/'/g,$=/"/g,x=/^(?:script|style|textarea|title)$/i,A=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),S=A(1),E=A(2),M=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),D=new WeakMap,k=d.createTreeWalker(d,129,null,!1);function N(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(e):e}const T=(t,e)=>{const i=t.length-1,r=[];let n,o=2===e?"<svg>":"",a=v;for(let e=0;e<i;e++){const i=t[e];let c,d,h=-1,m=0;for(;m<i.length&&(a.lastIndex=m,d=a.exec(i),null!==d);)m=a.lastIndex,a===v?"!--"===d[1]?a=y:void 0!==d[1]?a=b:void 0!==d[2]?(x.test(d[2])&&(n=RegExp("</"+d[2],"g")),a=_):void 0!==d[3]&&(a=_):a===_?">"===d[0]?(a=null!=n?n:v,h=-1):void 0===d[1]?h=-2:(h=a.lastIndex-d[2].length,c=d[1],a=void 0===d[3]?_:'"'===d[3]?$:w):a===$||a===w?a=_:a===y||a===b?a=v:(a=_,n=void 0);const p=a===_&&t[e+1].startsWith("/>")?" ":"";o+=a===v?i+u:h>=0?(r.push(c),i.slice(0,h)+s+i.slice(h)+l+p):i+l+(-2===h?(r.push(void 0),e):p)}return[N(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),r]};class O{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,a=0;const u=t.length-1,d=this.parts,[m,p]=T(t,e);if(this.el=O.createElement(m,i),k.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=k.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith(s)||e.startsWith(l)){const i=p[a++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+s).split(l),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?U:"?"===e[1]?F:"@"===e[1]?z:R})}else d.push({type:6,index:n})}for(const e of t)r.removeAttribute(e)}if(x.test(r.tagName)){const t=r.textContent.split(l),e=t.length-1;if(e>0){r.textContent=o?o.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],h()),k.nextNode(),d.push({type:2,index:++n});r.append(t[e],h())}}}else if(8===r.nodeType)if(r.data===c)d.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(l,t+1));)d.push({type:7,index:n}),t+=l.length-1}n++}}static createElement(t,e){const i=d.createElement("template");return i.innerHTML=t,i}}function I(t,e,i=t,r){var n,o,a,s;if(e===M)return e;let l=void 0!==r?null===(n=i._$Co)||void 0===n?void 0:n[r]:i._$Cl;const c=m(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,r)),void 0!==r?(null!==(a=(s=i)._$Co)&&void 0!==a?a:s._$Co=[])[r]=l:i._$Cl=l),void 0!==l&&(e=I(t,l._$AS(t,e.values),l,r)),e}class L{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:r}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:d).importNode(i,!0);k.currentNode=n;let o=k.nextNode(),a=0,s=0,l=r[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new j(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new H(o,this,t)),this._$AV.push(e),l=r[++s]}a!==(null==l?void 0:l.index)&&(o=k.nextNode(),a++)}return k.currentNode=d,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class j{constructor(t,e,i,r){var n;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cp=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),m(t)?t===C||null==t||""===t?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==M&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):f(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==C&&m(this._$AH)?this._$AA.nextSibling.data=t:this.$(d.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=O.createElement(N(r.h,r.h[0]),this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new L(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new O(t)),e}T(t){p(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new j(this.k(h()),this.k(h()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class R{constructor(t,e,i,r,n){this.type=1,this._$AH=C,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const n=this.strings;let o=!1;if(void 0===n)t=I(this,t,e,0),o=!m(t)||t!==this._$AH&&t!==M,o&&(this._$AH=t);else{const r=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=I(this,r[i+a],e,a),s===M&&(s=this._$AH[a]),o||(o=!m(s)||s!==this._$AH[a]),s===C?t=C:t!==C&&(t+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}o&&!r&&this.j(t)}j(t){t===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class U extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===C?void 0:t}}const P=o?o.emptyScript:"";class F extends R{constructor(){super(...arguments),this.type=4}j(t){t&&t!==C?this.element.setAttribute(this.name,P):this.element.removeAttribute(this.name)}}class z extends R{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=I(this,t,e,0))&&void 0!==i?i:C)===M)return;const r=this._$AH,n=t===C&&r!==C||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==C&&(r===C||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class H{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const V={O:s,P:l,A:c,C:1,M:T,L,R:f,D:I,I:j,V:R,H:F,N:z,U,F:H},W=n.litHtmlPolyfillSupport;null==W||W(O,j),(null!==(r=n.litHtmlVersions)&&void 0!==r?r:n.litHtmlVersions=[]).push("2.8.0");const B=(t,e,i)=>{var r,n;const o=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let a=o._$litPart$;if(void 0===a){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=a=new j(e.insertBefore(h(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a}},534:(t,e,i)=>{i.r(e),i.d(e,{UnsafeHTMLDirective:()=>o,unsafeHTML:()=>a});var r=i(752);class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class o extends n{constructor(t){if(super(t),this.et=r.s6,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===r.s6||null==t)return this.ft=void 0,this.et=t;if(t===r.c0)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;const a=(s=o,(...t)=>({_$litDirective$:s,values:t}));var s},399:(t,e,i)=>{i.r(e),i.d(e,{CSSResult:()=>r.BO,LitElement:()=>r.WF,ReactiveElement:()=>r.mN,UpdatingElement:()=>r.zd,_$LE:()=>r.Zm,_$LH:()=>r.ge,adoptStyles:()=>r.Rf,css:()=>r.AH,defaultConverter:()=>r.W3,getCompatibleStyle:()=>r.sk,html:()=>r.qy,isServer:()=>n,noChange:()=>r.c0,notEqual:()=>r.Ec,nothing:()=>r.s6,render:()=>r.XX,supportsAdoptingStyleSheets:()=>r.qM,svg:()=>r.JW,unsafeCSS:()=>r.iz}),i(842),i(752);var r=i(228);const n=!1},330:t=>{t.exports=JSON.parse('{"name":"flower-card","version":"2024.1.1","description":"Custom flower card for https://github.com/Olen/homeassistant-plant","keywords":["home-assistant","homeassistant","lovelace","custom-cards"],"module":"flower-card.js","license":"MIT","dependencies":{"@babel/core":"^7.23.9","@babel/preset-env":"^7.23.9","@marcokreeft/ha-editor-formbuilder":"^2023.10.6","babel":"^6.23.0","babel-loader":"^9.1.3","compression-webpack-plugin":"^10.0.0","custom-card-helpers":"^1.9.0","lit":"^2.8.0","lit-element":"^3.3.3","lit-html":"^2.8.0","webpack":"^5.90.3","yarn":"^1.22.19"},"scripts":{"lint":"eslint src/**/*.ts","dev":"webpack -c webpack.config.js","build":"yarn lint && webpack -c webpack.config.js"},"devDependencies":{"@typescript-eslint/eslint-plugin":"^6.7.2","eslint":"^8.49.0","eslint-config-standard-with-typescript":"^39.0.0","eslint-plugin-import":"^2.28.1","eslint-plugin-n":"^16.1.0","eslint-plugin-promise":"^6.1.1","eslint-plugin-react":"^7.33.2","ts-loader":"^9.4.4","typescript":"^5.2.2","webpack-cli":"^5.1.4"}}')}},e={};function i(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,i),o.exports}i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i(248)})();