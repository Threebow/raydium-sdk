var m=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var w=Object.prototype.hasOwnProperty;var K=(t,e)=>{for(var o in e)m(t,o,{get:e[o],enumerable:!0})},O=(t,e,o,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of g(e))!w.call(t,r)&&r!==o&&m(t,r,{get:()=>e[r],enumerable:!(a=P(e,r))||a.enumerable});return t};var W=t=>O(m({},"__esModule",{value:!0}),t);var h={};K(h,{Currency:()=>u,currencyEquals:()=>L});module.exports=W(h);var S=require("@solana/web3.js"),d={symbol:"SOL",name:"Solana",decimals:9},s={symbol:"WSOL",name:"Wrapped SOL",mint:"So11111111111111111111111111111111111111112",decimals:9,extensions:{coingeckoId:"solana"}},U={isQuantumSOL:!0,isLp:!1,official:!0,mint:new S.PublicKey(s.mint),decimals:9,symbol:"SOL",id:"sol",name:"solana",icon:"https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png",extensions:{coingeckoId:"solana"}};var l=require("@solana/web3.js");var x=require("@solana/spl-token"),n=require("@solana/web3.js");function b({pubkey:t,isSigner:e=!1,isWritable:o=!0}){return{pubkey:t,isWritable:o,isSigner:e}}var Y=[b({pubkey:x.TOKEN_PROGRAM_ID,isWritable:!1}),b({pubkey:n.SystemProgram.programId,isWritable:!1}),b({pubkey:n.SYSVAR_RENT_PUBKEY,isWritable:!1})];function M({publicKey:t,transformSol:e}){if(t instanceof n.PublicKey)return e&&t.equals(c)?k:t;if(e&&t===c.toBase58())return k;if(typeof t=="string")try{return new n.PublicKey(t)}catch{throw new Error("invalid public key")}throw new Error("invalid public key")}var C=new n.PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),R=new n.PublicKey("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS"),q=new n.PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"),v=new n.PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),D=new n.PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),X=new n.PublicKey("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"),j=new n.PublicKey("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj"),z=new n.PublicKey("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX"),H=new n.PublicKey("NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa"),I=new n.PublicKey("ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo"),B=new n.PublicKey("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs"),k=new n.PublicKey("So11111111111111111111111111111111111111112"),c=n.PublicKey.default;var y=class{constructor({mint:e,decimals:o,symbol:a="UNKNOWN",name:r="UNKNOWN",skipMint:N=!1}){if(e===c.toBase58()||e instanceof l.PublicKey&&c.equals(e)){this.decimals=s.decimals,this.symbol=s.symbol,this.name=s.name,this.mint=new l.PublicKey(s.mint);return}this.decimals=o,this.symbol=a,this.name=r,this.mint=N?l.PublicKey.default:M({publicKey:e})}equals(e){return this===e?!0:this.mint.equals(e.mint)}},i=y;i.WSOL=new y(s);var f=class{constructor({decimals:e,symbol:o="UNKNOWN",name:a="UNKNOWN"}){this.decimals=e,this.symbol=o,this.name=a}equals(e){return this===e}},u=f;u.SOL=new f(d);function L(t,e){return t instanceof i&&e instanceof i?t.equals(e):t instanceof i||e instanceof i?!1:t===e}0&&(module.exports={Currency,currencyEquals});
//# sourceMappingURL=currency.js.map