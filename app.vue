<template>
  <div id="simple-cv-dev-oz">
    <section id="presentation" class="container">
      <h1>OZ DUVERGER</h1>
      <h2>DEVELOPER</h2>
      <div class="description">
        Web, software, hardware and video game developer more experienced in web development. In short, a human who likes to do stuff. Living in paris.
      </div>
    </section>
    <section id="contact" class="container">
      <h2>CONTACT</h2>
      <div class="buttons">
        <ClickableBox title="Linkedin" link="https://www.linkedin.com/in/oz-duverger-26116b1a0/"/>
        <ClickableBox title="ozduverger@gmail.com" link="mailto:ozduverger@gmail.com"/>
        <ClickableBox title="Github" link="https://github.com/OzDuverger"/>
      </div>
    </section>
    <section id="activities" class="container">
      <h2>ACTIVITIES</h2>
      <h3>Freelancer</h3>
      <div class="experience">
        <div class="date-boxe">2025</div><span>></span><div class="date-boxe">Today</div>
      </div>
      <h3>Fullstack Developer <span class="link">at</span> CometSens Data</h3>
      <div class="experience">
        <div class="date-boxe">2025</div>
      </div>
      <h3>Fullstack Developer <span class="link">at</span> Escapematch</h3>
      <div class="experience">
        <div class="date-boxe">2023</div><span>></span><div class="date-boxe">2024</div>
      </div>
      <h3>Fullstack Developer <span class="link">at</span> Dipli <span class="link">{ alternation }</span></h3>
      <div class="experience">
        <div class="date-boxe">2021</div><span>></span><div class="date-boxe">2023</div>
      </div>
      <h3>Fullstack Developer <span class="link">at</span> Atexo <span class="link">{ internship }</span></h3>
      <div class="experience">
        <div class="date-boxe">2020</div>
      </div>
    </section>
    <section id="formations" class="container">
      <h2>FORMATIONS</h2>
      <h3>ThreeJs Journey <span class="link">of</span> Bruno Simon</h3>
      <div class="experience">
        <div class="date-boxe">2025</div>
      </div>
      <h3>42 Paris</h3>
      <div class="experience">
        <div class="date-boxe">2018</div><span>></span><div class="date-boxe">2023</div>
      </div>
    </section>
    <section id="languages" class="container">
      <h2>LANGUAGES</h2>
      <h3 @click="isWebShown = !isWebShown" @mouseenter="hoverWeb()" id="languages-web">Web</h3>
      <ul :class="isWebShown? 'ul-visible' : 'ul-invisible'">
        <li class="percent--95"><span>Html</span></li>
        <li class="percent--95"><span>Css</span></li>
      </ul>
      <ul :class="isWebShown? 'ul-visible' : 'ul-invisible'">
        <li class="percent--95"><span>Js</span></li>
        <li class="percent--90"><span>Nuxt</span></li>
        <li class="percent--85"><span>Vue</span></li>
        <li class="percent--75"><span>React</span></li>
        <li class="percent--75"><span>Node</span></li>
        <li class="percent--85"><span>Ts</span></li>
        <li class="percent--65"><span>Angular</span></li>
      </ul>
      <ul :class="isWebShown? 'ul-visible' : 'ul-invisible'">
        <li class="percent--90"><span>SQL</span></li>
      </ul>
      <ul :class="isWebShown? 'ul-visible' : 'ul-invisible'">
        <li class="percent--95"><span>Php</span></li>
        <li class="percent--90"><span>Symfony</span></li>
        <li class="percent--60"><span>Prado</span></li>
      </ul>
      <h3 @click="isMobileShown = !isMobileShown" @mouseenter="hoverMobile()" id="languages-mobile">Mobile</h3>
      <ul :class="isMobileShown? 'ul-visible' : 'ul-invisible'">
        <li class="percent--50"><span>Swift</span></li>
      </ul>
      <h3 @click="isBasicShown = !isBasicShown" @mouseenter="hoverBasic()" id="languages-basic">Basic</h3>
      <ul :class="isBasicShown? 'ul-visible' : 'ul-invisible'">
        <li class="percent--95"><span>C</span></li>
        <li class="percent--80"><span>C#</span></li>
        <li class="percent--60"><span>Python</span></li>
        <li class="percent--50"><span>Assembleur</span></li>
      </ul>
      <h3 @click="isOtherShown = !isOtherShown" @mouseenter="hoverOther()" id="languages-other">Other</h3>
      <ul :class="isOtherShown? 'ul-visible' : 'ul-invisible'">
          <li class="percent--70"><span>Unity</span></li>
          <li class="percent--45"><span>Unreal Engine</span></li>
          <li class="percent--50"><span>Blender</span></li>
          <li class="percent--60"><span>Arduino</span></li>
      </ul>
    </section>
    <section id="projects" class="container">
      <h2>PROJECTS</h2>
      <h3>Web</h3>
      <div class="buttons">
        <ClickableBox title="Generate Your Galaxy" link="https://generate-your-galaxy.web.app/" />
        <ClickableBox title="Dipli Website" link="https://www.dipli.com/fr" />
        <ClickableBox title="Atexo Website" link="https://www.atexo.com/" />
      </div>
      <div class="buttons">
        <ClickableBox title="Oz Rest Room" link="https://oz-duverger.netlify.app/" />
      </div>
      <h3>Video Game</h3>
      <div class="buttons">
        <ClickableBox title="Wolf3D" link="https://github.com/OzDuverger/c_Wolf3D"/>
        <ClickableBox title="Police app recovery" link="https://github.com/OzDuverger/Unity_App_Police" />
        <ClickableBox title="TrapFairies recovery" link="https://github.com/OzDuverger/Unity_TrapFairies" />
      </div>
    </section>
    <section id="contact" class="container">
      <h2>CONTACT</h2>
      <a class="link" href="/cv_oz_duverger-developpeur.pdf" download="cv_oz_duverger-developpeur.pdf">Download my CV !</a>
      <Contact />
    </section>
  </div>
</template>

<script setup>
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"

// Languages scrolldown menu
let isWebShown = ref(false)
let isMobileShown = ref(false)
let isBasicShown = ref(false)
let isOtherShown = ref(false)

onMounted(() => {
  gsap.registerPlugin(SplitText)

  animateTitle()
})

const animateTitle = () => {

  let splitTitle = SplitText.create("h1", {
    type: "chars"
  })
  const charsTitle = splitTitle.chars
  const staggerTime = 0.08;
  const totalStaggerTime = staggerTime * charsTitle.length;
  const timelineTitle = new gsap.timeline({ repeat: -1, repeatDelay: 3 })

  timelineTitle.to(charsTitle, {
    yPercent: -35,
    duration: 0.6,
    ease: "power1.inOut",
    stagger: staggerTime
  })
  .to(charsTitle, {
    yPercent: 0,
    duration: 0.6,
    ease: "power1.inOut",
    stagger: staggerTime
  }, `-=${ totalStaggerTime }`)
}

const hoverWeb = () => {

  let split = SplitText.create("#languages-web", {
    type: "chars"
  })
  const chars = split.chars
  const staggerTime = 0.08;
  const totalStaggerTime = staggerTime * chars.length;
  const timelineTitle = new gsap.timeline()

  timelineTitle.to(chars, {
    yPercent: -35,
    duration: 0.35,
    ease: "power1.inOut",
    stagger: staggerTime
  })
  .to(chars, {
    yPercent: 0,
    duration: 0.35,
    ease: "power1.inOut",
    stagger: staggerTime
  }, `-=${ totalStaggerTime }`)
}

const hoverMobile = () => {

  let split = SplitText.create("#languages-mobile", {
    type: "chars"
  })
  const chars = split.chars
  const staggerTime = 0.08;
  const totalStaggerTime = staggerTime * chars.length;
  const timelineTitle = new gsap.timeline()

  timelineTitle.to(chars, {
    yPercent: -35,
    duration: 0.35,
    ease: "power1.inOut",
    stagger: staggerTime
  })
  .to(chars, {
    yPercent: 0,
    duration: 0.35,
    ease: "power1.inOut",
    stagger: staggerTime
  }, `-=${ totalStaggerTime }`)
}

const hoverBasic = () => {

  let split = SplitText.create("#languages-basic", {
    type: "chars"
  })
  const chars = split.chars
  const staggerTime = 0.08;
  const totalStaggerTime = staggerTime * chars.length;
  const timelineTitle = new gsap.timeline()

  timelineTitle.to(chars, {
    yPercent: -35,
    duration: 0.35,
    ease: "power1.inOut",
    stagger: staggerTime
  })
  .to(chars, {
    yPercent: 0,
    duration: 0.35,
    ease: "power1.inOut",
    stagger: staggerTime
  }, `-=${ totalStaggerTime }`)
}

const hoverOther = () => {

  let split = SplitText.create("#languages-other", {
    type: "chars"
  })
  const chars = split.chars
  const staggerTime = 0.08;
  const totalStaggerTime = staggerTime * chars.length;
  const timelineTitle = new gsap.timeline()

  timelineTitle.to(chars, {
    yPercent: -35,
    duration: 0.35,
    ease: "power1.inOut",
    stagger: staggerTime
  })
  .to(chars, {
    yPercent: 0,
    duration: 0.35,
    ease: "power1.inOut",
    stagger: staggerTime
  }, `-=${ totalStaggerTime }`)
}

</script>

<style lang="scss" scoped>
@import "/assets/variables";

#simple-cv-dev-oz {

  width: 100%;

  h2 {
    margin: 2rem auto;
    padding: 0;
    font-size: 2rem;
  }

  h3 {
    z-index: 42;
    margin: 1rem auto;
    padding: 0;
    font-size: 1.5rem;
  }

  .buttons {
    
    width: 100%;
    margin: 1rem auto;
    @include flex($justify: space-between);
  }

  #presentation, #contact, #activities, #formations, #languages, #projects, #contact {

    width: 100%;
    margin: 3rem auto;
    @include flex($direction: column);
  }

  #presentation {

    h1 {
      font-size: 5rem;
      margin: 0;
      padding: 0;
    }

    .description {
      text-align: center;
      margin: auto 7rem;
    }
  }

  #languages {

    h3 {
      cursor: pointer;
    }
    
    ul {
      width: 100%;
      position: relative;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 3rem;
      grid-row-gap: 0.5rem;

      .percent {

          @for $i from 1 through 100 {
              
              @include percent(#{$i})
          }
      }
    }

    .ul-invisible {
      max-height: 0;
      margin: 0;
      opacity: 0;
      transition: all 1.25s ease-out;
    }

    .ul-visible {
      max-height: 215px;
      margin: auto;
      opacity: 1;
      transition: all 1.25s ease-out;
    }
  }

  #activities, #formations {

    .experience {
      
      width: 100%;
      margin-bottom: 1.5rem;
      @include flex();

      .date-boxe {

        background-color: $white;
        border-radius: 5px;
        font-weight: 600;
        color: $orange;
        padding: 5px;
        margin: 5px;
      }

      span {

        font-weight: 600;
        font-size: 1.5rem;
      }
    }
    
    .link {

      color: rgba($orange, .7);
    }
  }
}

@media screen and (max-width: 450px) {
  #simple-cv-dev-oz {
    .buttons {
    
      @include flex($direction: column, $justify: space-between);
    }
  }
}
</style>