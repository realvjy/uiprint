(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{211:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var r=a(0),i=a.n(r),n=a(78),l=a(216),s=a(208),o=a(209);var d=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,d=a.next;return i.a.createElement(s.a,{location:this.props.location,title:t},i.a.createElement(o.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",null,e.frontmatter.title),i.a.createElement("p",{style:{display:"block"}},e.frontmatter.date),i.a.createElement("p",null,e.frontmatter.author,e.frontmatter.category),i.a.createElement("img",{src:e.frontmatter.image.childImageSharp.fluid.src})),i.a.createElement("section",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",null),i.a.createElement("footer",null,i.a.createElement(l.a,null))),i.a.createElement("nav",null,i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,r&&i.a.createElement(n.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i.a.createElement("li",null,d&&i.a.createElement(n.a,{to:d.fields.slug,rel:"next"},d.frontmatter.title," →")))))},r}(i.a.Component);t.default=d;var c="860732881"},215:function(e,t,a){"use strict";a(15),a(16),a(9),a(101),a(142),a(218);var r=a(19);t.__esModule=!0,t.default=void 0;var i,n=r(a(77)),l=r(a(76)),s=r(a(143)),o=r(a(144)),d=r(a(0)),c=r(a(45)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),m=function(e){var t=u(e),a=f(t);return p[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+l+s+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(k,(0,o.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},k=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,L=e.loading,x=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,o.default)({opacity:N?1:0,transition:R?"opacity "+b+"ms":"none"},s),V="boolean"==typeof h?"lightgray":h,C={transitionDelay:b+"ms"},M=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&C,{},s,{},f),T={title:t,alt:this.state.isVisible?"":a,style:M,className:p};if(m){var P=m,j=P[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),V&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&C)}),j.base64&&d.default.createElement(z,{src:j.base64,spreadProps:T,imageVariants:P,generateSources:w}),j.tracedSVG&&d.default.createElement(z,{src:j.tracedSVG,spreadProps:T,imageVariants:P,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(P),d.default.createElement(k,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:L},j,{imageVariants:P}))}}))}if(g){var _=g,W=_[0],q=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete q.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},V&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:V,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},R&&C)}),W.base64&&d.default.createElement(z,{src:W.base64,spreadProps:T,imageVariants:_,generateSources:w}),W.tracedSVG&&d.default.createElement(z,{src:W.tracedSVG,spreadProps:T,imageVariants:_,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(_),d.default.createElement(k,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:L},W,{imageVariants:_}))}}))}return null},t}(d.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});N.propTypes={resolutions:R,sizes:O,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var V=N;t.default=V},216:function(e,t,a){"use strict";var r=a(217),i=a(0),n=a.n(i);a(215);t.a=function(){var e=r.data.allMarkdownRemark.edges;return n.a.createElement("div",{className:"featured-wrapper container"},e.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return n.a.createElement("article",{key:t.fields.slug,className:"featured-mock"},n.a.createElement("div",{className:"mockup-thumb-wrap"},n.a.createElement("div",{className:"thumb"},n.a.createElement("img",{src:t.frontmatter.image.childImageSharp.fluid.src}))),n.a.createElement("div",{className:"mockup-detail-wrap"},n.a.createElement("div",{className:"mockup-detail"},n.a.createElement("h2",null,a),n.a.createElement("p",null,t.frontmatter.description),n.a.createElement("div",{className:"dwn-links"},n.a.createElement("button",{className:"download_button"},"Download"),n.a.createElement("ul",{dangerouslySetInnerHTML:{__html:t.excerpt},className:"dwn-list"})))))})),n.a.createElement("div",{className:"explore-all"},n.a.createElement("h2",null,"More than 10+ printable wireframes and sketchpads"),n.a.createElement("a",{href:"/all-printable",className:"btn btn-line"},"Explore all")))}},217:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"UIPRINT"}},"allMarkdownRemark":{"edges":[{"node":{"excerpt":"<li><a href=\\"./uiprint-iphone-2up-extended@A4.pdf\\">A4 Size</a></li>\\n<li><a href=\\"./uiprint-iphone-2up-extended@Letter.pdf\\">Letter Size</a></li>","html":"<li><a href=\\"./uiprint-iphone-2up-extended@A4.pdf\\">A4 Size</a></li>\\n<li><a href=\\"./uiprint-iphone-2up-extended@Letter.pdf\\">Letter Size</a></li>","fields":{"slug":"/uiprint-iphone-3up/"},"frontmatter":{"date":"January 21, 2019","title":"2xUP Mobile Phone","description":"2x mobile","author":"vijay verma","category":["News","Events"],"image":{"childImageSharp":{"fluid":{"src":"/static/eea4409950ce6cbd8287227220cfb970/3fa08/thumbnail-2x-mobile.png"}}}}}},{"node":{"excerpt":"<li><a href=\\"/e0f067895c9c7e8169f994e1ffeec462/uiprint-iphone-2up-extended@A4.pdf\\">A4 Size</a></li>\\n<li><a href=\\"/d15c03b80cc4c2cd7e6f06d0494acb5e/uiprint-iphone-2up-extended@Letter.pdf\\">Letter Size</a></li>","html":"<li><a href=\\"/e0f067895c9c7e8169f994e1ffeec462/uiprint-iphone-2up-extended@A4.pdf\\">A4 Size</a></li>\\n<li><a href=\\"/d15c03b80cc4c2cd7e6f06d0494acb5e/uiprint-iphone-2up-extended@Letter.pdf\\">Letter Size</a></li>","fields":{"slug":"/uiprint-iphone-2up-extended/"},"frontmatter":{"date":"January 21, 2019","title":"2x Mobile Phone Extended","description":"2x mobile","author":"vijay verma","category":["News","Events"],"image":{"childImageSharp":{"fluid":{"src":"/static/eea4409950ce6cbd8287227220cfb970/3fa08/thumbnail-2x-mobile.png"}}}}}}]}}}')},218:function(e,t,a){"use strict";a(219)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},219:function(e,t,a){var r=a(1),i=a(8),n=a(36),l=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-62e4114c8c06d8136ef1.js.map