webpackJsonp([0x67ef26645b2a,60335399758886],{122:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Medicare Cost Estimator"}}},layoutContext:{}}},260:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i=a(3),s=l(i),r=a(271),c=l(r),d=a(122),n=l(d);t.default=function(e){return s.default.createElement(c.default,u({},e,n.default))},e.exports=t.default},255:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return c.default.createElement("a",{className:"ds-c-skip-nav",href:e.href},e.children)}Object.defineProperty(t,"__esModule",{value:!0}),t.SkipNav=u;var i=a(4),s=l(i),r=a(3),c=l(r);u.defaultProps={children:"Skip to main content"},u.propTypes={children:s.default.node.isRequired,href:s.default.string.isRequired},t.default=u},266:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=a(1426),i=l(u),s=a(58),r=l(s),c=a(3),d=l(c),n=[{label:"About Medicare",url:"https://www.medicare.gov/about-us/about-medicare.html"},{label:"Glossary",url:"https://www.medicare.gov/glossary/a.html"},{label:"Accessibility/Nondiscrimination",url:"https://www.medicare.gov/about-us/nondiscrimination/accessibility-nondiscrimination.html"},{label:"Privacy policy",url:"http://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/Privacy-Policy.html"},{label:"Linking policy",url:"https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/index.html"},{label:"Using this site",url:"https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/Help.html"},{label:"Plain writing",url:"https://www.medicare.gov/about-us/plain-writing/plain-writing.html"}],o=function(){return d.default.createElement("footer",{className:"ds-u-margin-top--7 ds-u-padding-y--3"},d.default.createElement("div",{className:"ds-l-container ds-u-padding-y--2"},d.default.createElement("div",{className:"ds-l-row ds-u-margin-bottom--2"},d.default.createElement("a",{className:"ds-l-col ds-l-col--auto",href:"https://github.com/navahq/mce-prototype"},d.default.createElement("img",{className:"ds-u-margin-right--1",src:i.default,alt:"GitHub logo",width:"16",height:"16"}),"View prototype on GitHub"),d.default.createElement(r.default,{to:"/procedures",className:"ds-l-col ds-l-col--auto"},"Browse all procedures")),d.default.createElement("ul",{className:"ds-l-form-row ds-c-list ds-c-list--bare ds-u-font-size--small"},n.map(function(e,t){return d.default.createElement("li",{key:t,className:"ds-l-col ds-l-col--auto"},d.default.createElement("a",{className:"ds-u-color--muted",href:e.url},e.label))}))))};t.default=o,e.exports=t.default},267:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=a(58),i=l(u),s=a(4),r=l(s),c=a(3),d=l(c),n=function(e){var t=e.isHome,a=e.title;return d.default.createElement("header",{className:"ds-base--inverse"},d.default.createElement("div",{className:"ds-l-container ds-u-padding-y--2"},d.default.createElement("div",{className:"ds-l-row"},d.default.createElement("h1",{className:"ds-h4 ds-u-margin--0 ds-l-col ds-l-col--6"},d.default.createElement(i.default,{className:"ds-u-color--white ds-u-text-decoration--none",to:"/"},a)),!t&&d.default.createElement("div",{className:"ds-l-col ds-l-col--6 ds-u-text-align--right"},d.default.createElement(i.default,{className:"ds-u-color--white",to:"/"},"Back to search")))))};n.propTypes={isHome:r.default.bool.isRequired,title:r.default.string.isRequired},t.default=n,e.exports=t.default},1426:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMyIgaGVpZ2h0PSIzMyIgdmlld0JveD0iMCAwIDMzIDMzIj4KICA8cGF0aCBmaWxsPSIjMTYxNTE0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi42MDguNDU1QzcuNjE0LjQ1NS4zMiA3Ljc0OC4zMiAxNi43NDVjMCA3LjE5NyA0LjY2NyAxMy4zMDIgMTEuMTQgMTUuNDU2LjgxNS4xNSAxLjExMi0uMzUzIDEuMTEyLS43ODUgMC0uMzg2LS4wMTQtMS40MTEtLjAyMi0yLjc3LTQuNTMxLjk4NC01LjQ4Ny0yLjE4NC01LjQ4Ny0yLjE4NC0uNzQxLTEuODgyLTEuODA5LTIuMzgzLTEuODA5LTIuMzgzLTEuNDc5LTEuMDEuMTEyLS45OS4xMTItLjk5IDEuNjM1LjExNSAyLjQ5NSAxLjY3OSAyLjQ5NSAxLjY3OSAxLjQ1MyAyLjQ4OSAzLjgxMyAxLjc3IDQuNzQxIDEuMzUzLjE0OC0xLjA1Mi41NjktMS43NyAxLjAzNC0yLjE3Ny0zLjYxNy0uNDExLTcuNDItMS44MDktNy40Mi04LjA1MSAwLTEuNzc4LjYzNS0zLjIzMyAxLjY3Ny00LjM3MS0uMTY4LS40MTItLjcyNy0yLjA2OS4xNi00LjMxMSAwIDAgMS4zNjctLjQzOCA0LjQ3OSAxLjY3IDEuMjk5LS4zNjIgMi42OTMtLjU0MiA0LjA3OC0uNTQ5IDEuMzg0LjAwNyAyLjc3Ny4xODcgNC4wNzguNTQ5IDMuMTEtMi4xMDggNC40NzUtMS42NyA0LjQ3NS0xLjY3Ljg4OSAyLjI0Mi4zMyAzLjg5OS4xNjMgNC4zMTFDMjYuMzcgMTIuNjYgMjcgMTQuMTE1IDI3IDE1Ljg5M2MwIDYuMjU4LTMuODA5IDcuNjM1LTcuNDM3IDguMDM4LjU4NC41MDMgMS4xMDUgMS40OTcgMS4xMDUgMy4wMTcgMCAyLjE3Ny0uMDIgMy45MzQtLjAyIDQuNDY4IDAgLjQzNi4yOTQuOTQzIDEuMTIuNzg0IDYuNDY4LTIuMTU5IDExLjEzMS04LjI2IDExLjEzMS0xNS40NTUgMC04Ljk5Ny03LjI5NC0xNi4yOS0xNi4yOTEtMTYuMjkiLz4KPC9zdmc+Cg=="},271:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0,a(1401);var u=a(266),i=l(u),s=a(267),r=l(s),c=a(4),d=l(c),n=a(3),o=l(n),M=a(255),m=l(M),f=a(58),N=function(e){var t=e.children,a=e.data,l=e.location,u=l.pathname===(0,f.withPrefix)("/")||"/"===l.pathname;return o.default.createElement("div",{className:"ds-base"},o.default.createElement(m.default,{href:"#main"}),o.default.createElement(r.default,{title:a.site.siteMetadata.title,isHome:u}),o.default.createElement("main",{id:"main"},t()),o.default.createElement(i.default,null))};N.propTypes={children:d.default.func,data:d.default.object,location:d.default.object},t.default=N;t.query="** extracted graphql fragment **"},1401:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-36d6c4b6d161ee873145.js.map