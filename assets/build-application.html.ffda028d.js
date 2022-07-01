import{_ as r}from"./image-20210721120500021.07bc9548.js";import{_ as c,r as i,o as l,c as d,a as e,b as o,w as h,e as s,d as t}from"./app.7fc00ea9.js";const p={},u=s('<h1 id="buidl-applications-on-bit" tabindex="-1"><a class="header-anchor" href="#buidl-applications-on-bit" aria-hidden="true">#</a> Buidl applications on .bit</h1><img src="'+r+'" alt=".bit Records" style="zoom:50%;"><p>There are several ideas for developing applications based on .bit.</p><ol><li>Treat a .bit account as a practical NFT asset and develop a trading/auction/rental marketplace for .bit</li><li>Consider .bit account as a public key-value database that can only be modified by the user, where any type of records can be stored. Developers can buidl applications based on this.</li></ol><h2 id="application-example-bit-cc-decentralized-personal-homepage" tabindex="-1"><a class="header-anchor" href="#application-example-bit-cc-decentralized-personal-homepage" aria-hidden="true">#</a> Application example: bit.cc - decentralized personal homepage</h2>',5),b={href:"https://jeffx.bit.cc",target:"_blank",rel:"noopener noreferrer"},_=t("bit.cc"),f=t(" is a typical .bit application that treats .bit accounts as public key-value data. bit.cc can be seen as a decentralized version of LinkTree, a decentralized personal home. Unlike other personal homepage products, the information displayed on bit.cc's homepage is stored decentrally. Only .bit account owners who can modify it, and bit.cc cannot delete your profile."),m=s("<p>If Alice owns alice.bit and adds her own links to various social networks in the resolution record, bit.cc will display these links in an extremely beautiful way, accessible to other users via alice.bit.cc. The performance of bit.cc is completely controlled by Alice through the setting of the resolution record. For example.</p><ol><li>Alice can decide whether to display your decentralized profile in light mode or dark mode by setting the value of the resolution record <code>custom_key.bitcc_theme</code> to <code>light</code> or <code>dark</code>.</li><li>Alice can set the value of the resolution record <code>custom_key.bitcc_redirect</code> to a link to Alice&#39;s personal website. This way, when someone visits alice.bit.cc, the page will automatically redirect to alice&#39;s personal website.</li></ol><p>These features are possible because bit.cc is responding based on Alice&#39;s resolution records. In the future, bit.cc will be able to present all of Alice&#39;s NFTs based on Alice&#39;s resolution records. alice.bit.cc will be a truly decentralized personal home page for Alice.</p>",3),g={href:"https://github.com/dotbitHQ/bit.cc",target:"_blank",rel:"noopener noreferrer"},k=t("bit.cc docs"),y=e("h2",{id:"preparation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#preparation","aria-hidden":"true"},"#"),t(" Preparation")],-1),v=e("p",null,"The preparation work required to develop different types of applications varies.",-1),w=e("p",null,"If a .bit account is a practical NFT asset, develop a trading/auction/rental marketplace for .bit. You need to understand.",-1),x=t("the basics of Nervos CKB, its data structure, and transaction structure ("),T={href:"https://nervos.org",target:"_blank",rel:"noopener noreferrer"},A=t("Learn Nervos CKB"),z=t(")"),N=t("The basics of .bit, its data structure and transaction structure ("),B={href:"https://github.com/dotbitHQ/das-contracts",target:"_blank",rel:"noopener noreferrer"},L=t("Learn .bit"),C=t(")"),I=t("To develop applications based on the records of .bit accounts, you do not need to know the technical details of Nervos CKB and .bit. Just learn how to use "),F={href:"https://github.com/dotbitHQ/das-account-indexer",target:"_blank",rel:"noopener noreferrer"},H=t("das-account-indexer"),Q=t(" or "),V={href:"https://github.com/dotbitHQ/das-sdk-js",target:"_blank",rel:"noopener noreferrer"},j=t("das-sdk-js"),D=t(" to get the record for an account, or to query whether an address holds a .bit account. As well as understanding the "),E=t("namespace specification"),K=t(" of .bit's records."),R=e("h2",{id:"desired-bit-applications",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#desired-bit-applications","aria-hidden":"true"},"#"),t(" Desired .bit applications")],-1),U=e("p",null,"We believe that the following interesting applications should emerge based on .bit.",-1),q=e("ol",null,[e("li",null,"Sending end-to-end encrypted messages using .bit accounts"),e("li",null,"Using .bit accounts to aggregate reputations across multiple chains"),e("li",null,"Using .bit accounts to log into centralized services."),e("li",null,"Decentralized personal pages/social networks based on .bit accounts")],-1);function S(J,O){const a=i("ExternalLinkIcon"),n=i("RouterLink");return l(),d("div",null,[u,e("p",null,[e("a",b,[_,o(a)]),f]),m,e("p",null,[e("a",g,[k,o(a)])]),y,v,w,e("ol",null,[e("li",null,[x,e("a",T,[A,o(a)]),z]),e("li",null,[N,e("a",B,[L,o(a)]),C])]),e("p",null,[I,e("a",F,[H,o(a)]),Q,e("a",V,[j,o(a)]),D,o(n,{to:"/developers/records-key-namespace.html"},{default:h(()=>[E]),_:1}),K]),R,U,q])}var Y=c(p,[["render",S],["__file","build-application.html.vue"]]);export{Y as default};
