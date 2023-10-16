gsap.to(processLine,{
    scrollTrigger: {
      trigger: processInfo,
      scrub: true,
      start: "top top",
      end: "bottom bottom-=200",
      onUpdate: self => {
        if(self.progress-current>0){
        for(let i=0; i<processInfoItem.length; i++){
          if(i!==processInfoItem.length-1){
            let transY = 0; 
            if(parseInt(processLine.style.strokeDashoffset)<=lineProcess[i] && parseInt(processLine.style.strokeDashoffset)>lineProcess[i+1]){
              for(let j=0; j<=i-1; j++){
                transY = transY + processInfoItem[j].offsetHeight;
              }
              processInfoReality.style.transform = `translateY(-${transY}px)`;
              for(let k=0; k<i; k++){
                gsap.to(pathNum[k],{
                  width: "4vw",
                  height: "4vw",
                  background: "linear-gradient(270.21deg, #0E9ADC 0.16%, #4BC1FA 99.82%)",
                  color: "#FFFFFF",
                });
                gsap.to(processInfoItem[k], {
                  opacity: 1,
                });
                gsap.to(pathNumAb[k], {
                    width: "130%",
                    height: "130%",
                    animationName: "processWave",
                    animationDuration: "1s",
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                });
                gsap.to(pathTitle[k], {
                  color: "#0086C7",
                });
              }
            }
          }
          else{
            let transY = 0; 
            if(parseInt(processLine.style.strokeDashoffset)<=lineProcess[i]){
              for(let j=0; j<=i-1; j++){
                   if(j!==i-1){
                    transY = transY + processInfoItem[j].offsetHeight;
                }
                else{
                  transY = transY + processInfoItem[j+1].offsetHeight - (window.innerHeight - processInfoItem[j].offsetHeight);
                }
                
              }
              processInfoReality.style.transform = `translateY(-${transY}px)`;
              gsap.to(pathNum[i],{
                width: "4vw",
                height: "4vw",
                background: "linear-gradient(270.21deg, #0E9ADC 0.16%, #4BC1FA 99.82%)",
                color: "#FFFFFF",
              });
              gsap.to(processInfoItem[i], {
                opacity: 1,
              });
              gsap.to(pathNumAb[i], {
                width: "130%",
                height: "130%",
                animationName: "processWave",
                animationDuration: "1s",
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
              });
              gsap.to(pathTitle[i], {
                color: "#0086C7",
              });
              for(let k=0; k<i; k++){
                gsap.to(pathNum[k],{
                  width: "4vw",
                  height: "4vw",
                  background: "linear-gradient(270.21deg, #0E9ADC 0.16%, #4BC1FA 99.82%)",
                  color: "#FFFFFF",
                });
                gsap.to(processInfoItem[k], {
                  opacity: 1,
                });
                gsap.to(pathNumAb[k], {
                  width: "130%",
                  height: "130%",
                  animationName: "processWave",
                  animationDuration: "1s",
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                });
                gsap.to(pathTitle[k], {
                  color: "#0086C7",
                });
              }
            }
          }
      }
    }
      else{
        for(let i=0; i<processInfoItem.length; i++){
          if(i!==0){
            let transY = 0; 
            if(parseInt(processLine.style.strokeDashoffset)<=lineProcess[i-1] && parseInt(processLine.style.strokeDashoffset)>lineProcess[i]){
              for(let j=0; j<=i-2; j++){
                transY = transY + processInfoItem[j].offsetHeight;
              }
              processInfoReality.style.transform = `translateY(-${transY}px)`;
              gsap.to(pathNum[i], {
                width: "4.5vw",
                height: "4.5vw",
                background: "#FFFFFF",
                color: "#00699B",
              });
              gsap.to(processInfoItem[i], {
                opacity: 0.4,
              });
              gsap.to(pathNumAb[i], {
                width: "100%",
                height: "100%",
                animation: "none",
              });
              gsap.to(pathTitle[i], {
                color: "#213D55",
              });
            }
          }
          else{
            let transY = 0; 
            if(parseInt(processLine.style.strokeDashoffset)>lineProcess[i]){
              for(let j=0; j<=i-2; j++){
                transY = transY + processInfoItem[j].offsetHeight;
              }
              processInfoReality.style.transform = `translateY(-${transY}px)`;
              gsap.to(pathNum[i], {
                width: "4.5vw",
                height: "4.5vw",
                background: "#FFFFFF",
                color: "#00699B",
              });
              gsap.to(processInfoItem[i], {
                opacity: 0.4,
              });
              gsap.to(pathNumAb[i], {
                width: "100%",
                height: "100%",
                animation: "none",
              });
              gsap.to(pathTitle[i], {
                color: "#213D55",
              });
            }
        }
      }
      }
      current=self.progress;
    }
    },
    strokeDashoffset: "0",
  });
window.addEventListener("resize", () => {
  ScrollTrigger.refresh(true);
})