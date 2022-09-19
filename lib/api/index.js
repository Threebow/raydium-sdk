var re=Object.create;var k=Object.defineProperty;var ne=Object.getOwnPropertyDescriptor;var ie=Object.getOwnPropertyNames;var oe=Object.getPrototypeOf,se=Object.prototype.hasOwnProperty;var ae=(t,e)=>{for(var r in e)k(t,r,{get:e[r],enumerable:!0})},M=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ie(e))!se.call(t,i)&&i!==r&&k(t,i,{get:()=>e[i],enumerable:!(n=ne(e,i))||n.enumerable});return t};var m=(t,e,r)=>(r=t!=null?re(oe(t)):{},M(e||!t||!t.__esModule?k(r,"default",{value:t,enumerable:!0}):r,t)),ue=t=>M(k({},"__esModule",{value:!0}),t);var Se={};ae(Se,{Api:()=>O,endlessRetry:()=>Ne});module.exports=ue(Se);var te=m(require("axios"));var y=require("lodash"),q=m(require("pino")),K=m(require("pino-pretty")),C={},ce={},me=(0,K.default)({colorize:!0,levelFirst:!0,translateTime:"SYS:yyyymmdd HH:MM:ss.l"}),le=(0,q.default)({base:null,level:"silent"},me);function c(t){let e=(0,y.get)(C,t);if(!e){let r=(0,y.get)(ce,t);e=le.child({name:t},{level:r}),(0,y.set)(C,t,e)}return e.logWithError=(...r)=>{let n=r.map(i=>typeof i=="object"?JSON.stringify(i):i).join(", ");throw new Error(n)},e}var Te=require("@solana/web3.js"),Pe=m(require("bn.js"));var Y=m(require("big.js")),we=m(require("bn.js"));var u=m(require("bn.js"));var N=c("Raydium_bignumber");var ge=new u.default(0),_=new u.default(1),Le=new u.default(2),Ee=new u.default(3),Fe=new u.default(5),fe=new u.default(10),v=new u.default(100),Oe=new u.default(1e3),Me=new u.default(1e4),U=9007199254740991;function p(t){if(t instanceof u.default)return t;if(typeof t=="string"){if(t.match(/^-?[0-9]+$/))return new u.default(t);N.logWithError(`invalid BigNumberish string: ${t}`)}return typeof t=="number"?(t%1&&N.logWithError(`BigNumberish number underflow: ${t}`),(t>=U||t<=-U)&&N.logWithError(`BigNumberish number overflow: ${t}`),new u.default(String(t))):typeof t=="bigint"?new u.default(t.toString()):(N.logWithError(`invalid BigNumberish value: ${t}`),new u.default(0))}var H=m(require("toformat")),be=H.default,x=be;var w=m(require("big.js")),J=m(require("decimal.js-light"));var S=c("module/fraction"),R=x(w.default),T=x(J.default),ye={[0]:T.ROUND_DOWN,[1]:T.ROUND_HALF_UP,[2]:T.ROUND_UP},xe={[0]:w.default.roundDown,[1]:w.default.roundHalfUp,[2]:w.default.roundUp},o=class{constructor(e,r=_){this.numerator=p(e),this.denominator=p(r)}get quotient(){return this.numerator.div(this.denominator)}invert(){return new o(this.denominator,this.numerator)}add(e){let r=e instanceof o?e:new o(p(e));return this.denominator.eq(r.denominator)?new o(this.numerator.add(r.numerator),this.denominator):new o(this.numerator.mul(r.denominator).add(r.numerator.mul(this.denominator)),this.denominator.mul(r.denominator))}sub(e){let r=e instanceof o?e:new o(p(e));return this.denominator.eq(r.denominator)?new o(this.numerator.sub(r.numerator),this.denominator):new o(this.numerator.mul(r.denominator).sub(r.numerator.mul(this.denominator)),this.denominator.mul(r.denominator))}mul(e){let r=e instanceof o?e:new o(p(e));return new o(this.numerator.mul(r.numerator),this.denominator.mul(r.denominator))}div(e){let r=e instanceof o?e:new o(p(e));return new o(this.numerator.mul(r.denominator),this.denominator.mul(r.numerator))}toSignificant(e,r={groupSeparator:""},n=1){Number.isInteger(e)||S.logWithError(`${e} is not an integer.`),e<=0&&S.logWithError(`${e} is not positive.`),T.set({precision:e+1,rounding:ye[n]});let i=new T(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(e);return i.toFormat(i.decimalPlaces(),r)}toFixed(e,r={groupSeparator:""},n=1){return Number.isInteger(e)||S.logWithError(`${e} is not an integer.`),e<0&&S.logWithError(`${e} is negative.`),R.DP=e,R.RM=xe[n]||1,new R(this.numerator.toString()).div(this.denominator.toString()).toFormat(e,r)}isZero(){return this.numerator.isZero()}};var Ge=c("Raydium_amount"),Ze=x(Y.default);var z=require("@solana/web3.js"),Q={symbol:"SOL",name:"Solana",decimals:9},d={symbol:"WSOL",name:"Wrapped SOL",mint:"So11111111111111111111111111111111111111112",decimals:9,extensions:{coingeckoId:"solana"}},tt={isQuantumSOL:!0,isLp:!1,official:!0,mint:new z.PublicKey(d.mint),decimals:9,symbol:"SOL",id:"sol",name:"solana",icon:"https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png",extensions:{coingeckoId:"solana"}};var B=require("@solana/web3.js");var G=require("@solana/spl-token"),a=require("@solana/web3.js");function I({pubkey:t,isSigner:e=!1,isWritable:r=!0}){return{pubkey:t,isWritable:r,isSigner:e}}var it=[I({pubkey:G.TOKEN_PROGRAM_ID,isWritable:!1}),I({pubkey:a.SystemProgram.programId,isWritable:!1}),I({pubkey:a.SYSVAR_RENT_PUBKEY,isWritable:!1})];function Z({publicKey:t,transformSol:e}){if(t instanceof a.PublicKey)return e&&t.equals(P)?X:t;if(e&&t===P.toBase58())return X;if(typeof t=="string")try{return new a.PublicKey(t)}catch{throw new Error("invalid public key")}throw new Error("invalid public key")}var ot=new a.PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),st=new a.PublicKey("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS"),at=new a.PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"),ut=new a.PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),ct=new a.PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),mt=new a.PublicKey("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"),lt=new a.PublicKey("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj"),pt=new a.PublicKey("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX"),dt=new a.PublicKey("NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa"),gt=new a.PublicKey("ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo"),ft=new a.PublicKey("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs"),X=new a.PublicKey("So11111111111111111111111111111111111111112"),P=a.PublicKey.default;var L=class{constructor({mint:e,decimals:r,symbol:n="UNKNOWN",name:i="UNKNOWN",skipMint:l=!1}){if(e===P.toBase58()||e instanceof B.PublicKey&&P.equals(e)){this.decimals=d.decimals,this.symbol=d.symbol,this.name=d.name,this.mint=new B.PublicKey(d.mint);return}this.decimals=r,this.symbol=n,this.name=i,this.mint=l?B.PublicKey.default:Z({publicKey:e})}equals(e){return this===e?!0:this.mint.equals(e.mint)}},g=L;g.WSOL=new L(d);var F=class{constructor({decimals:e,symbol:r="UNKNOWN",name:n="UNKNOWN"}){this.decimals=e,this.symbol=r,this.name=n}equals(e){return this===e}},E=F;E.SOL=new F(Q);var Wt=new o(v);var Ot=c("Raydium_price");async function ee(t){new Promise(e=>setTimeout(e,t))}var W=require("@solana/web3.js");var tr=c("Raydium_txTool");var ke=require("@solana/web3.js");var lr=c("Raydium_accountInfo_util");var f=c("Raydium_Api");async function Ne(t,e,r=1e3){let n;for(;n==null;)try{f.debug(`Request ${t} through endlessRetry`),n=await e()}catch(i){f.error(`Request ${t} failed, retry after ${r} ms`,i),await ee(r)}return n}var O=class{constructor({cluster:e,timeout:r}){this.cluster=e,this.api=te.default.create({baseURL:"https://api.raydium.io/v2",timeout:r}),this.api.interceptors.request.use(n=>{let{method:i,baseURL:l,url:b}=n;return f.debug(`${i==null?void 0:i.toUpperCase()} ${l}${b}`),n},n=>(f.error("Request failed"),Promise.reject(n))),this.api.interceptors.response.use(n=>{let{config:i,data:l,status:b}=n,{method:h,baseURL:A,url:D}=i;return f.debug(`${h==null?void 0:h.toUpperCase()} ${A}${D}  ${b}`),l},n=>{let{config:i,response:l={}}=n,{status:b}=l,{method:h,baseURL:A,url:D}=i;return f.error(`${h.toUpperCase()} ${A}${D} ${b||n.message}`),Promise.reject(n)})}async getTokens(){return this.api.get("/sdk/token/raydium.mainnet.json")}async getLiquidityPools(){return this.api.get(`/sdk/liquidity/${this.cluster}.json`)}async getPairsInfo(){return this.api.get("https://api.raydium.io/v2/main/pairs")}async getFarmPools(){return this.api.get(`/sdk/farm-v2/${this.cluster}.json`)}async getCoingeckoPrice(e){return this.api.get(`https://api.coingecko.com/api/v3/simple/price?ids=${e.join(",")}&vs_currencies=usd`)}async getRaydiumTokenPrice(){return this.api.get("https://api.raydium.io/v2/main/price")}async getBlockSlotCountForSecond(e){if(!e)return 2;let n=(await this.api.post(e,{id:"getRecentPerformanceSamples",jsonrpc:"2.0",method:"getRecentPerformanceSamples",params:[4]})).result.map(i=>i.numSlots);return n.reduce((i,l)=>i+l,0)/n.length/60}};0&&(module.exports={Api,endlessRetry});
//# sourceMappingURL=index.js.map