let btn = document.getElementById("button");
btn.addEventListener("click", async () => {  
    let downloadLink = document.createElement("a");
    downloadLink.href = "https://drive.usercontent.google.com/u/0/uc?id=1vCoAWwfoIguQHzeeyadGaWNapsln_fDv&export=download";
    downloadLink.target = "_blank";
    downloadLink.click();

    let viewLink = document.createElement("a");
    viewLink.href = "https://drive.google.com/file/d/1vCoAWwfoIguQHzeeyadGaWNapsln_fDv/view?usp=sharing";
    viewLink.target = "_blank";
    viewLink.click();
});




let resumeDownload = document.getElementById("resumeDownload");
resumeDownload.addEventListener("click", async () => {  
    let downloadLink = document.createElement("a");
    downloadLink.href = "https://drive.usercontent.google.com/u/0/uc?id=1vCoAWwfoIguQHzeeyadGaWNapsln_fDv&export=download";
    downloadLink.target = "_blank";
    downloadLink.click();

    let viewLink = document.createElement("a");
    viewLink.href = "https://drive.google.com/file/d/1vCoAWwfoIguQHzeeyadGaWNapsln_fDv/view?usp=sharing";
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
    window.open("https://sweet-gaufre-d1f424.netlify.app")
})
document.getElementById("jio_git").addEventListener("click",()=>{
    window.open("https://github.com/KishorDMane/jio-mart-clone")
})
document.getElementById("jio_deployse").addEventListener("click",()=>{
    window.open("https://strong-alfajores-c5eb1f.netlify.app")
})

document.getElementById("snapdesk_git").addEventListener("click",()=>{
    window.open("https://github.com/KishorDMane/naive-hand-1722")
})
document.getElementById("snapdesk_deployse").addEventListener("click",()=>{
    window.open("https://scintillating-selkie-f0b500.netlify.app")
})

document.getElementById("HMS_git").addEventListener("click",()=>{
    window.open("https://github.com/AFORANURAG/uneven-taste-145")
})
document.getElementById("HMS_deployed").addEventListener("click",()=>{
    window.open("https://hmsfrontend-eight.vercel.app/")
})




document.getElementById("githubprofile").addEventListener("click",()=>{
    window.open("https://github.com/KishorDMane")
})
document.getElementById("linkedinprofile").addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/kishor-mane/")
})




const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', () => {
    const checkbox = document.getElementById('click');
    checkbox.checked = false;
  });
});
