if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const t=e=>s(e,r),c={module:{uri:r},exports:n,require:t};i[r]=Promise.all(d.map((e=>c[e]||t(e)))).then((e=>(a(...e),n)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app-state/actions/index.html",revision:"9b72157176d0f7202434a482fb216b1d"},{url:"app-state/clearing/index.html",revision:"7a9a1602dfb2e867cac5df31293e62f1"},{url:"app-state/create-app-state/index.html",revision:"dfbf97f503f9cd9fb28ba393020a4e92"},{url:"app-state/example/index.html",revision:"839ead62096a5262996924f2be1eaab1"},{url:"app-state/get-app-state/index.html",revision:"304ec64edb043104b3f5bde528d0eb2f"},{url:"app-state/index.html",revision:"8efc21e51223dc6a03d78f5695239763"},{url:"app-state/multiple/index.html",revision:"64a87197e7c42e5d8ff2c1537ada1b79"},{url:"app-state/persistence/index.html",revision:"74d0ea914a24af4c5d83c266326701a7"},{url:"app-state/singleton/index.html",revision:"61fed502571bf1d5440394ec8bad6223"},{url:"app-state/state/index.html",revision:"d24495db54e5df235bbb8e5834775797"},{url:"app-state/subscribe/index.html",revision:"049cbd7ae93845d3e23b8038c73a10be"},{url:"app-state/usage/index.html",revision:"723403cbb7e47fe7dbe2291c3cadfa18"},{url:"app-state/web-workers/index.html",revision:"ec4625d80f1b9ea247bf5ee813094491"},{url:"apple-touch-icon.png",revision:"db8fb6bb5a7d20034100ba1931c71869"},{url:"assets/img/android-chrome-192x192.png",revision:"5fa932c70edfb28a70264dce1a842fa9"},{url:"assets/img/android-chrome-384x384.png",revision:"1bf9a5b559dc7ec4db478d99844f9e6a"},{url:"assets/img/angle_up.svg",revision:"374066f276653a657f519a665abc08a4"},{url:"assets/img/apple-touch-icon.png",revision:"db8fb6bb5a7d20034100ba1931c71869"},{url:"assets/img/checkmark.svg",revision:"c21feaddd1021e077125a5ab772f22cf"},{url:"assets/img/favicon-16x16.png",revision:"d044aff1f55cb0938155d501ae63dbe2"},{url:"assets/img/favicon-32x32.png",revision:"407645a6bcf8698917f0daed1aa4a678"},{url:"assets/img/favicon.ico",revision:"634ec555cd23e3496499c186bd774974"},{url:"assets/img/ficus-components-logo-white.svg",revision:"f0f5737b09e51536cd402c7e49959276"},{url:"assets/img/ficus-components-logo.svg",revision:"2801e2b4261c954b32d4e447ed282282"},{url:"assets/img/ficus-logo-white.svg",revision:"9c645bb95deaf0547f70af606fdc1a1d"},{url:"assets/img/ficus-logo.svg",revision:"3f4ee9a3cc8a0285fab04596049d0d7f"},{url:"assets/img/ficus-router-logo-white.svg",revision:"514405a9a2911340a2e40444d440ed5b"},{url:"assets/img/ficus-router-logo.svg",revision:"3930b75ea5c76983e7d74dccc83e3741"},{url:"assets/img/ficus-script-logo-white.svg",revision:"fa25d469f4a72bf369b6653834fe0b61"},{url:"assets/img/ficus-script-logo.svg",revision:"cdf8372e36321adbf4fd785958ad45fb"},{url:"assets/img/ficus-styles-logo-white.svg",revision:"046449261d69f8bc016ba759728ad141"},{url:"assets/img/ficus-styles-logo.svg",revision:"566ea7d1cc115f5941c1d43ec8054240"},{url:"assets/img/fsm/asleep-awake.svg",revision:"a233a2ef2bbfad6f526604e9b26e6f86"},{url:"assets/img/fsm/basic-login.svg",revision:"c40ae41686d58b4599cb2bb7e486f8b6"},{url:"assets/img/fsm/final-state.svg",revision:"63512456077d50ecb09b7ace345890cb"},{url:"assets/img/fsm/initial-state.svg",revision:"bdbe27a524ed48829e60eb185c2c6990"},{url:"assets/img/fsm/transitions-events.svg",revision:"af54e0b5760db2e6ea9535bcd8d7f007"},{url:"assets/img/github.svg",revision:"51f8705fe94c3db82e360b032ddb8278"},{url:"assets/img/icon-192x192.png",revision:"f0253382b205261b04a4c53f5814d3f2"},{url:"assets/img/icon-512x512.png",revision:"72b4804f9936b26f85aa633636832a35"},{url:"assets/img/logo.png",revision:"d1af81e7e9f5ade1f1c10784926b13dc"},{url:"assets/img/logo.svg",revision:"e5232ea1022c4c208c829002570e13b3"},{url:"assets/img/search.svg",revision:"f81c9affdfa3021c67219855299db6bb"},{url:"assets/js/main.mjs",revision:"3be95ff2c058ae6db14b14fd9d40b624"},{url:"assets/js/search.mjs",revision:"db28bcfbb529994b16c682fead47f2d4"},{url:"browser-support/index.html",revision:"c3389f6fa85ee8d71d87f04ac238703f"},{url:"components/computed-getters/index.html",revision:"5496d87c80c8b9f996154e4e43b6e98f"},{url:"components/create-component/index.html",revision:"797ae8a798116527549303b773e0452d"},{url:"components/create-custom-element/index.html",revision:"f4efcf09d48f1661ee7a664e718bdbf9"},{url:"components/emitting-events/index.html",revision:"2e2dbdea19f5339f19aadd2bde7bbf4d"},{url:"components/example/index.html",revision:"d0741e6b810875251345ab90a5633ae5"},{url:"components/index.html",revision:"9a93ac48fa0c9e231ada2f3f81bf03d0"},{url:"components/lifecycle-hooks/index.html",revision:"282ff23ac46d163c2afa881e7e65decb"},{url:"components/methods/index.html",revision:"8119d7361b0112a0814ac94b4b09a850"},{url:"components/props/index.html",revision:"7703013041fff9dfb98bbf6a5d716326"},{url:"components/rendering/index.html",revision:"b0db7214286f24741718cde2538f31d0"},{url:"components/root-definition/index.html",revision:"bc5c0ae63561520b3c7ef232e9384cc0"},{url:"components/slots/index.html",revision:"8480642a0c2b3d064e36756d34de5664"},{url:"components/state/index.html",revision:"7cb221d829cd5af2d368536464067973"},{url:"event-bus/create-event-bus/index.html",revision:"73bed720fa0f50952490331e1ab81549"},{url:"event-bus/example/index.html",revision:"74bdbe8b6c50e3a9251361101c1784de"},{url:"event-bus/get-event-bus/index.html",revision:"197cbfc0a08ad02a2112aede19a34c67"},{url:"event-bus/index.html",revision:"98d5405b673ce10399367c3c11ffec35"},{url:"event-bus/publish/index.html",revision:"37ff1b02affe69a887d74f739f3c917f"},{url:"event-bus/subscribe/index.html",revision:"44a4916b26685989c57526512a38460a"},{url:"event-bus/subscribers/index.html",revision:"fa532a74e6bff8e98507f18e442c36f2"},{url:"event-bus/usage/index.html",revision:"5d436855fc20ad6b9c95626aba135910"},{url:"extending-components/extension-builder/index.html",revision:"e2dfa1555cec45b8d0ecfd05b24a4b55"},{url:"extending-components/index.html",revision:"0d39873ed71d1716504366a71d016220"},{url:"extending-components/with-breakpoint-render/index.html",revision:"9937417debfb17522bc97cb0e59750ec"},{url:"extending-components/with-event-bus/index.html",revision:"ad68f69fbbe38d378bb95617140fdda3"},{url:"extending-components/with-i18n-reactive/index.html",revision:"e2e5fa672d13cae4fc122e7a91884d8e"},{url:"extending-components/with-i18n/index.html",revision:"d6a04e27a7ceda4c6d2d85ba27f30dee"},{url:"extending-components/with-lazy-render/index.html",revision:"18e8510ecc9d668f8aad7f6600747c25"},{url:"extending-components/with-local-state/index.html",revision:"3208d7aa3602bf4bf077bf49d264b224"},{url:"extending-components/with-state-transactions/index.html",revision:"82fe4af358fb2acd7ea972a4d2d0d2ad"},{url:"extending-components/with-store/index.html",revision:"7f415f543c672961c3beabfb2ff052c7"},{url:"extending-components/with-styles/index.html",revision:"2d0dc8266765e72e2971561c866dbaec"},{url:"extending-components/with-worker-store/index.html",revision:"e91fdc6e815c0360b14bbcfffdd96533"},{url:"favicon.ico",revision:"634ec555cd23e3496499c186bd774974"},{url:"features/index.html",revision:"d5db4f2e031c61ab86fda6d215c99f93"},{url:"getting-started/create-ficus-app/index.html",revision:"d6233c080275c8f1ef937e2356817ca0"},{url:"getting-started/editor/index.html",revision:"cf9979b3946a3bc9d01106dec44dcfcb"},{url:"getting-started/examples/index.html",revision:"893d4e1ad84748b23cba4d4c6aa2820c"},{url:"getting-started/index.html",revision:"79080413085dc2d8db93585118d7213c"},{url:"getting-started/installation/index.html",revision:"a3000a5b4842dc7177319c61b4b0e508"},{url:"going-build-less/index.html",revision:"620b0a8e17d7cf34953e09836b3919ab"},{url:"i18n/create-i18n/index.html",revision:"6ccfc99bb628033406a15d2a9e99bab9"},{url:"i18n/example/index.html",revision:"e5fdfb0573ee5e0dffd0a50cb7c3918a"},{url:"i18n/get-i18n/index.html",revision:"69b4934b90a9e740dc7f6ca9a03c73c4"},{url:"i18n/index.html",revision:"1a14a985723c7e743d447754acaf517a"},{url:"i18n/usage/index.html",revision:"6d7fce47acd58d2a4201c698e0f61447"},{url:"index.html",revision:"452e4ca44a3bd69ad7284a752fe9e4be"},{url:"legacy-browsers/index.html",revision:"31ce25ce23c71b3380d0dd69c30c642a"},{url:"modules/consuming/index.html",revision:"bad02e5ad008281f39d2d0ff0c3ff6bc"},{url:"modules/creating/index.html",revision:"b0bd0510ad684c311a8d2fddf1e27511"},{url:"modules/index.html",revision:"cbe1a12e5290028b16f2cd3a3a1406e3"},{url:"renderers/css/index.html",revision:"b0251fd87037c6ed0b625deefc225cb1"},{url:"renderers/htm-preact/index.html",revision:"8fa1d4a5e1a1f643519c9151fbf66ddc"},{url:"renderers/htm/index.html",revision:"bb0cd51cbca6aa35cf610363ab6f34fe"},{url:"renderers/index.html",revision:"69b6046df80879df8b208a77389b5988"},{url:"renderers/lit-html/index.html",revision:"28242bef20551cd60bc0899d54d5a323"},{url:"renderers/uhtml/index.html",revision:"52a0cc79ba191eee4e056128dea670ed"},{url:"router/add-matcher-to-route/index.html",revision:"4381471d64389e1b917f57fb21bcf587"},{url:"router/async-routes/index.html",revision:"e2cd0ee9151dae7a72347209b7a2a222"},{url:"router/context/index.html",revision:"9f1f18af7523817b826ae4e38ae852ee"},{url:"router/create-router/index.html",revision:"4ea9d4b61f9740c01a68764885d61bd2"},{url:"router/example/index.html",revision:"79832485fab3cd8f0afb92be5c0ccf6d"},{url:"router/get-router/index.html",revision:"8c075824e4b87040a07ccd72446ea8ed"},{url:"router/getting-started/index.html",revision:"fb44fc64679fea60d484612ec35f0aca"},{url:"router/guards/index.html",revision:"84b4aa453f7a4af2d8a48703e5d4123b"},{url:"router/index.html",revision:"ecbdcc754c9a54bd9788c2e7ea4b64fe"},{url:"router/installation/index.html",revision:"8c068a696b7092c7d4f5bbd608266c1a"},{url:"router/lazy-load-views/index.html",revision:"2be00fb10dd29e0d7f4aa632718cc56b"},{url:"router/location/index.html",revision:"187e940215cde96e0e0b8fcee7025d15"},{url:"router/modes/index.html",revision:"7d76344be916bd785dcfc87f34fffbc4"},{url:"router/navigation/index.html",revision:"7dbd235b588595d497bdaa1e0cf25fc9"},{url:"router/options/index.html",revision:"84525744265aea7fc7e42af8f68cb0de"},{url:"router/outlets/index.html",revision:"3c24741fbe196a12190aef1f3f7d52bc"},{url:"router/redirects/index.html",revision:"fd3b8e63eb3a43de8e89382acca0f5f5"},{url:"router/routes/index.html",revision:"e1480292c31211865700eda40e460916"},{url:"router/server-side-routing/index.html",revision:"89b97444e2fcbd8757e04aa42f76e809"},{url:"router/starting-programmatically/index.html",revision:"dd2a3cf18b51d0fe72a9cf4bd0018e3d"},{url:"router/url-parameters/index.html",revision:"b41f29c46042794c19950bc6447de37b"},{url:"script-loader/features/index.html",revision:"45edfa0005aac97b644f3cf82aeef156"},{url:"script-loader/getting-started/index.html",revision:"747562a57394f200f82340047aad9abb"},{url:"script-loader/index.html",revision:"f1c3d6ebda7ef1bbf638d969cf3979d8"},{url:"script-loader/installation/index.html",revision:"ed4e782680a7b7f8f858d59eff22c4c7"},{url:"search/index.html",revision:"ee12310a561bcbae2205e8b0192aa746"},{url:"state-machines/add-xstate-service/index.html",revision:"fe95379b1cc9b5e8c0ae757debc24287"},{url:"state-machines/assign/index.html",revision:"7bb74a9756e4d1ea264b6bf993bdba44"},{url:"state-machines/create-machine/index.html",revision:"f65d4c971ac6d00cafdaa3c184180bdc"},{url:"state-machines/create-xstate-service/index.html",revision:"d08c0101fda37be0016ade8b6f94845f"},{url:"state-machines/defining-state-machines/index.html",revision:"9ca8d7839d91200ddc7650f5c799eb92"},{url:"state-machines/get-xstate-service/index.html",revision:"ad294bae0fda52b47fc9a25b9ee26e98"},{url:"state-machines/index.html",revision:"3801767d4f565540b49c3fef744762b6"},{url:"state-machines/interpret/index.html",revision:"2f954ead4005d7f55707e15d60623242"},{url:"state-machines/with-xstate-service/index.html",revision:"bbea44f5f621a0acffee7477d47d78cd"},{url:"state-machines/wrap-xstate-service/index.html",revision:"aede1d887fb0caec998cb1cef7808afa"},{url:"stores/index.html",revision:"b0d48c76b747127453aff7c381cbdc5e"},{url:"testing/index.html",revision:"168de978c35e690f9f337ebd8302dd3f"}],{})}));
//# sourceMappingURL=sw.js.map
