import "https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/chunk-OF4NI3Y7.js"; 
import "https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/chunk-7MN7YYBO.js"; 
import "https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/chunk-L4B2V5MO.js"; 
import { A as u } from "https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/chunk-REJ3R5JH.js"; 
import { d as a } from "https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/chunk-GGDEANQW.js"; 
import "https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/chunk-K46K3RI5.js"; 
var m = async t => { 
    switch (t) { 
        case "accordion": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-SFEIJ3IO.js"); 
        case "autovideo": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-LKB6TAQ2.js"); 
        case "codehighlight": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-ZIRXSD56.js"); 
        case "combobox": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-FPDNFDSS.js"); 
        case "inject": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-NWV36CYI.js"); 
        case "copyclip": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-OD3HTTQT.js"); 
        case "displayvalues": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-GQPDGEN3.js"); 
        case "favcustom": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-WSAJIZXP.js"); 
        case "formsubmit": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-ALYGWTSM.js"); 
        case "inputactive": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-7HSAIKOV.js"); 
        case "inputcounter": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-R64UAQUH.js"); 
        case "list": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-RHJ64VZG.js"); 
        case "mirrorclick": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-2F4WLZUP.js"); 
        case "mirrorinput": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-CBYO36QN.js"); 
        case "modal": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-ZFSJ7BVY.js"); 
        case "numbercount": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-OVS7LZUA.js"); 
        case "queryparam": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-FL4ESWUT.js"); 
        case "rangeslider": return import("https://cdn.jsdelivr.net/gh/mdlambert29/hopscotch@refs/heads/main/customRangeSlider.js"); 
        case "readtime": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-2G4PQGML.js"); 
        case "removequery": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-XCEMNQU7.js"); 
        case "scrolldisable": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-6ZR7XHD5.js"); 
        case "selectcustom": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-3PX33SXR.js"); 
        case "sliderdots": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-EYAIKQWS.js"); 
        case "smartlightbox": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-CZF7F32Y.js"); 
        case "socialshare": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-5YXSQ2HV.js"); 
        case "starrating": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-V7SDQXSV.js"); 
        case "toc": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-EUZYK4O3.js"); 
        case "videohls": return import("https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/dist/src-U6RDGMBR.js"); 
        default: throw `Finsweet Attribute "${t}" is not supported.` 
    } 
}; 
var d = "fs-attributes", l = new Set(Object.values(u)), w = () => { let { FinsweetAttributes: t } = window; if (t && !Array.isArray(t)) { p(); return } let e = Array.isArray(t) ? t : [], r = [...document.querySelectorAll(`script[type="module"][src="${import.meta.url}"]`)]; window.FinsweetAttributes = { scripts: r, modules: {}, process: new Set, load: c, push(...s) { for (let [i, o] of s) this.modules[i]?.loading?.then(o) }, destroy() { for (let s in this.modules) this.modules[s]?.destroy?.() } }, p(), window.FinsweetAttributes.push(...e) }, p = () => { let t = !1; for (let e of window.FinsweetAttributes.scripts) { t ||= e.getAttribute(`${d}-auto`) === "true"; for (let r of l) e.hasAttribute(`fs-${r}`) && c(r) } t && a().then(() => { let e = new Set, r = document.querySelectorAll("*"); for (let s of r) for (let i of s.getAttributeNames()) { let n = i.match(/^fs-([^-]+)/)?.[1]; n && l.has(n) && e.add(n) } for (let s of e) c(s) }) }, c = async t => { if (window.FinsweetAttributes.process.has(t)) return; window.FinsweetAttributes.process.add(t); let e = window.FinsweetAttributes.modules[t] ||= {}; e.loading = new Promise(r => { e.resolve = s => { r(s), delete e.resolve } }); try { let { init: r, version: s } = await m(t), { result: i, destroy: o } = await r() || {}; return e.version = s, e.destroy = () => { o?.(), window.FinsweetAttributes.process.delete(t) }, e.restart = () => (e.destroy?.(), window.FinsweetAttributes.load(t)), e.resolve?.(i), i } catch (r) { console.error(r) } }; w();