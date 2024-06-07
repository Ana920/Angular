//service worker utiliza self en lugar de this, caso particular

//cachear los recursos que quiero que estén online
self.addEventListener("install", ()=>{
    console.log("SW Install..")}); 

self.addEventListener("activate", ()=>{
    console.log("SW Activate..")}); 

//interceptar las llamadas http que llegan al servidor
self.addEventListener("fetch", ()=>{
    console.log("SW Fetch..")}); 