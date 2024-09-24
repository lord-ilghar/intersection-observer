/**
 * @param {Object} options
 *  @param {Number} [options.percentOnView =1]
 *  @param {Number} [options.smScreenSizePx]
 *  @param {Number} [options.mdScreenSizePx]
 *  @param {Number} [options.bgScreenSizePx]
 */
function loadAnimation(options = {}) {
  const elements = document.querySelectorAll("* [load]");
  const elementsAnimations = [];
  const observer = new IntersectionObserver(
    (ent) => {
      console.log(ent);
    },
    {
      threshold: options.percentOnView,
    }
  );
  for (let i = 0; i < elements.length; i++) {
    const loadAttr = elements[i].getAttribute("load");
    let loadAttrSplit = [loadAttr];
    if (loadAttr.trim().includes(" ")) {
      loadAttrSplit = loadAttr.split(" ");
    }
    const animationsKeyWords = [];
    for (let i = 0; i < loadAttrSplit.length; i++) {
      const temp = loadAttrSplit[i].split(":");

      animationsKeyWords.push(temp[0]);
      animationsKeyWords.push(temp[1]);
    }

    console.log(animationsKeyWords);
    for (let j = 0; j < animationsKeyWords.length; j++) {
      const item = animationsKeyWords[j];
      const animationOption = {
        target: elements[i],
      };
      switch (item) {
        case "bg":
          animationOption.screen = "bg";
          animationOption.animation = animationsKeyWords[j + 1];
          elementsAnimations.push(animationOption);
          break;
        case "sm":
          animationOption.screen = "sm";
          animationOption.animation = animationsKeyWords[j + 1];
          elementsAnimations.push(animationOption);
          break;
        case "md":
          animationOption.screen = "md";
          animationOption.animation = animationsKeyWords[j + 1];
          elementsAnimations.push(animationOption);
          break;
      }
    }
    console.log(elementsAnimations);

    observer.observe(elements[i]);
  }
}
loadAnimation();
