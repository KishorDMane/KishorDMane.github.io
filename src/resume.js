let btn = document.getElementById("button");
btn.addEventListener("click", async () => {  
    let downloadLink = document.createElement("a");
    downloadLink.href = "https://drive.google.com/u/0/uc?id=1vCoAWwfoIguQHzeeyadGaWNapsln_fDv&export=download";
    downloadLink.target = "_blank";
    downloadLink.click();

    let viewLink = document.createElement("a");
    viewLink.href = "https://drive.google.com/file/d/1vCoAWwfoIguQHzeeyadGaWNapsln_fDv/view?usp=share_link";
    viewLink.target = "_blank";
    viewLink.click();
});




let resumeDownload = document.getElementById("resumeDownload");
resumeDownload.addEventListener("click", async () => {  
    let downloadLink = document.createElement("a");
    downloadLink.href = "https://drive.google.com/u/0/uc?id=1vCoAWwfoIguQHzeeyadGaWNapsln_fDv&export=download";
    downloadLink.target = "_blank";
    downloadLink.click();

    let viewLink = document.createElement("a");
    viewLink.href = "https://drive.google.com/file/d/1vCoAWwfoIguQHzeeyadGaWNapsln_fDv/view?usp=share_link";
    viewLink.target = "_blank";
    viewLink.click();
});

document.getElementById("OverStock_git").addEventListener("click",()=>{
    window.open("https://github.com/rohithanss/OverStock-Clone")
})
document.getElementById("OverStock_deployed").addEventListener("click",()=>{
    window.open("https://extraordinary-cheesecake-31dd2b.netlify.app")
})
document.getElementById("Lifestyle_git").addEventListener("click",()=>{
    window.open("https://github.com/Rajendra3049/Lifestylestore.com-Clone")
})

document.getElementById("Lifestyle_deployed").addEventListener("click",()=>{
    window.open("https://lifestylestore-com-clone.vercel.app")
})
document.getElementById("jio_git").addEventListener("click",()=>{
    window.open("https://github.com/KishorDMane/stitch-5509")
})
document.getElementById("jio_deployse").addEventListener("click",()=>{
    window.open("https://strong-alfajores-c5eb1f.netlify.app")
})
document.getElementById("githubprofile").addEventListener("click",()=>{
    window.open("https://github.com/KishorDMane")
})
document.getElementById("linkedinprofile").addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/kishor-mane/")
})