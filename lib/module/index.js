var ie=Object.create;var x=Object.defineProperty;var ae=Object.getOwnPropertyDescriptor;var se=Object.getOwnPropertyNames;var me=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty;var ce=(r,t)=>{for(var e in t)x(r,e,{get:t[e],enumerable:!0})},_=(r,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of se(t))!ue.call(r,o)&&o!==e&&x(r,o,{get:()=>t[o],enumerable:!(n=ae(t,o))||n.enumerable});return r};var l=(r,t,e)=>(e=r!=null?ie(me(r)):{},_(t||!r||!r.__esModule?x(e,"default",{value:r,enumerable:!0}):e,r)),pe=r=>_(x({},"__esModule",{value:!0}),r);var ke={};ce(ke,{Currency:()=>F,Fraction:()=>i,Percent:()=>T,Price:()=>g,Token:()=>c,TokenAmount:()=>d,_100_PERCENT:()=>A,currencyEquals:()=>We,splitNumber:()=>G});module.exports=pe(ke);var Z=l(require("big.js")),k=l(require("bn.js"));var s=l(require("bn.js"));var N=require("lodash"),j=l(require("pino")),H=l(require("pino-pretty")),K={},le={},de=(0,H.default)({colorize:!0,levelFirst:!0,translateTime:"SYS:yyyymmdd HH:MM:ss.l"}),ge=(0,j.default)({base:null,level:"silent"},de);function p(r){let t=(0,N.get)(K,r);if(!t){let e=(0,N.get)(le,r);t=ge.child({name:r},{level:e}),(0,N.set)(K,r,t)}return t.logWithError=(...e)=>{let n=e.map(o=>typeof o=="object"?JSON.stringify(o):o).join(", ");throw new Error(n)},t}var D=p("Raydium_bignumber");var Le=new s.default(0),Y=new s.default(1),Ee=new s.default(2),Ue=new s.default(3),Re=new s.default(5),L=new s.default(10),z=new s.default(100),Me=new s.default(1e3),qe=new s.default(1e4),I=9007199254740991;function m(r){if(r instanceof s.default)return r;if(typeof r=="string"){if(r.match(/^-?[0-9]+$/))return new s.default(r);D.logWithError(`invalid BigNumberish string: ${r}`)}return typeof r=="number"?(r%1&&D.logWithError(`BigNumberish number underflow: ${r}`),(r>=I||r<=-I)&&D.logWithError(`BigNumberish number overflow: ${r}`),new s.default(String(r))):typeof r=="bigint"?new s.default(r.toString()):(D.logWithError(`invalid BigNumberish value: ${r}`),new s.default(0))}function E(r){return L.pow(m(r))}var X=l(require("toformat")),fe=X.default,w=fe;var W=l(require("big.js")),$=l(require("decimal.js-light"));var O=p("module/fraction"),U=w(W.default),y=w($.default),he={[0]:y.ROUND_DOWN,[1]:y.ROUND_HALF_UP,[2]:y.ROUND_UP},Ne={[0]:W.default.roundDown,[1]:W.default.roundHalfUp,[2]:W.default.roundUp},i=class{constructor(t,e=Y){this.numerator=m(t),this.denominator=m(e)}get quotient(){return this.numerator.div(this.denominator)}invert(){return new i(this.denominator,this.numerator)}add(t){let e=t instanceof i?t:new i(m(t));return this.denominator.eq(e.denominator)?new i(this.numerator.add(e.numerator),this.denominator):new i(this.numerator.mul(e.denominator).add(e.numerator.mul(this.denominator)),this.denominator.mul(e.denominator))}sub(t){let e=t instanceof i?t:new i(m(t));return this.denominator.eq(e.denominator)?new i(this.numerator.sub(e.numerator),this.denominator):new i(this.numerator.mul(e.denominator).sub(e.numerator.mul(this.denominator)),this.denominator.mul(e.denominator))}mul(t){let e=t instanceof i?t:new i(m(t));return new i(this.numerator.mul(e.numerator),this.denominator.mul(e.denominator))}div(t){let e=t instanceof i?t:new i(m(t));return new i(this.numerator.mul(e.denominator),this.denominator.mul(e.numerator))}toSignificant(t,e={groupSeparator:""},n=1){Number.isInteger(t)||O.logWithError(`${t} is not an integer.`),t<=0&&O.logWithError(`${t} is not positive.`),y.set({precision:t+1,rounding:he[n]});let o=new y(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(t);return o.toFormat(o.decimalPlaces(),e)}toFixed(t,e={groupSeparator:""},n=1){return Number.isInteger(t)||O.logWithError(`${t} is not an integer.`),t<0&&O.logWithError(`${t} is negative.`),U.DP=t,U.RM=Ne[n]||1,new U(this.numerator.toString()).div(this.denominator.toString()).toFormat(t,e)}isZero(){return this.numerator.isZero()}};var we=p("Raydium_amount"),J=w(Z.default);function G(r,t){let e="0",n="0";if(r.includes(".")){let o=r.split(".");o.length===2?([e,n]=o,n=n.padEnd(t,"0")):we.logWithError(`invalid number string, num: ${r}`)}else e=r;return[e,n.slice(0,t)||n]}var d=class extends i{constructor(e,n,o=!0,b){let h=new k.default(0),C=L.pow(new k.default(e.decimals));if(o)h=m(n);else{let S=new k.default(0),v=new k.default(0);if(typeof n=="string"||typeof n=="number"||typeof n=="bigint"){let[ne,oe]=G(n.toString(),e.decimals);S=m(ne),v=m(oe)}S=S.mul(C),h=S.add(v)}super(h,C);this.logger=p(b||"Amount"),this.token=e}get raw(){return this.numerator}isZero(){return this.raw.isZero()}gt(e){return this.token.equals(e.token)||this.logger.logWithError("gt token not equals"),this.raw.gt(e.raw)}lt(e){return this.token.equals(e.token)||this.logger.logWithError("lt token not equals"),this.raw.lt(e.raw)}add(e){return this.token.equals(e.token)||this.logger.logWithError("add token not equals"),new d(this.token,this.raw.add(e.raw))}subtract(e){return this.token.equals(e.token)||this.logger.logWithError("sub token not equals"),new d(this.token,this.raw.sub(e.raw))}toSignificant(e=this.token.decimals,n,o=0){return super.toSignificant(e,n,o)}toFixed(e=this.token.decimals,n,o=0){return e>this.token.decimals&&this.logger.logWithError("decimals overflow"),super.toFixed(e,n,o)}toExact(e={groupSeparator:""}){return J.DP=this.token.decimals,new J(this.numerator.toString()).div(this.denominator.toString()).toFormat(e)}};var V=require("@solana/web3.js"),Q={symbol:"SOL",name:"Solana",decimals:9},f={symbol:"WSOL",name:"Wrapped SOL",mint:"So11111111111111111111111111111111111111112",decimals:9,extensions:{coingeckoId:"solana"}},Qe={isQuantumSOL:!0,isLp:!1,official:!0,mint:new V.PublicKey(f.mint),decimals:9,symbol:"SOL",id:"sol",name:"solana",icon:"https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png",extensions:{coingeckoId:"solana"}};var P=require("@solana/web3.js");var te=require("@solana/spl-token"),a=require("@solana/web3.js");function R({pubkey:r,isSigner:t=!1,isWritable:e=!0}){return{pubkey:r,isWritable:e,isSigner:t}}var rt=[R({pubkey:te.TOKEN_PROGRAM_ID,isWritable:!1}),R({pubkey:a.SystemProgram.programId,isWritable:!1}),R({pubkey:a.SYSVAR_RENT_PUBKEY,isWritable:!1})];function re({publicKey:r,transformSol:t}){if(r instanceof a.PublicKey)return t&&r.equals(B)?ee:r;if(t&&r===B.toBase58())return ee;if(typeof r=="string")try{return new a.PublicKey(r)}catch{throw new Error("invalid public key")}throw new Error("invalid public key")}var nt=new a.PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),ot=new a.PublicKey("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS"),it=new a.PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"),at=new a.PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),st=new a.PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),mt=new a.PublicKey("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"),ut=new a.PublicKey("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj"),ct=new a.PublicKey("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX"),pt=new a.PublicKey("NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa"),lt=new a.PublicKey("ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo"),dt=new a.PublicKey("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs"),ee=new a.PublicKey("So11111111111111111111111111111111111111112"),B=a.PublicKey.default;var M=class{constructor({mint:t,decimals:e,symbol:n="UNKNOWN",name:o="UNKNOWN",skipMint:b=!1}){if(t===B.toBase58()||t instanceof P.PublicKey&&B.equals(t)){this.decimals=f.decimals,this.symbol=f.symbol,this.name=f.name,this.mint=new P.PublicKey(f.mint);return}this.decimals=e,this.symbol=n,this.name=o,this.mint=b?P.PublicKey.default:re({publicKey:t})}equals(t){return this===t?!0:this.mint.equals(t.mint)}},c=M;c.WSOL=new M(f);var q=class{constructor({decimals:t,symbol:e="UNKNOWN",name:n="UNKNOWN"}){this.decimals=t,this.symbol=e,this.name=n}equals(t){return this===t}},F=q;F.SOL=new q(Q);function We(r,t){return r instanceof c&&t instanceof c?r.equals(t):r instanceof c||t instanceof c?!1:r===t}var A=new i(z),T=class extends i{toSignificant(t=5,e,n){return this.mul(A).toSignificant(t,e,n)}toFixed(t=2,e,n){return this.mul(A).toFixed(t,e,n)}};var ye=p("Raydium_price"),g=class extends i{constructor(e){let{baseToken:n,quoteToken:o,numerator:b,denominator:h}=e;super(b,h);this.baseToken=n,this.quoteToken=o,this.scalar=new i(E(n.decimals),E(o.decimals))}get raw(){return new i(this.numerator,this.denominator)}get adjusted(){return super.mul(this.scalar)}invert(){return new g({baseToken:this.quoteToken,quoteToken:this.baseToken,denominator:this.numerator,numerator:this.denominator})}mul(e){this.quoteToken!==e.baseToken&&ye.logWithError("mul token not equals");let n=super.mul(e);return new g({baseToken:this.baseToken,quoteToken:e.quoteToken,denominator:n.denominator,numerator:n.numerator})}toSignificant(e=this.quoteToken.decimals,n,o){return this.adjusted.toSignificant(e,n,o)}toFixed(e=this.quoteToken.decimals,n,o){return this.adjusted.toFixed(e,n,o)}};0&&(module.exports={Currency,Fraction,Percent,Price,Token,TokenAmount,_100_PERCENT,currencyEquals,splitNumber});
//# sourceMappingURL=index.js.map