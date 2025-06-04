<template>
  <div id="simple-cv-dev-oz">
    <section id="presentation" class="container">
      <h1 class="ubuntu-regular">OZ DUVERGER</h1>
      <h2>DEVELOPER</h2>
      <div class="description">
        Web, software, hardware and video game developer more experienced in web development. In short, a human who likes to do stuff. Living in paris.
      </div>
    </section>
    <section id="contact" class="container">
      <h2>CONTACT</h2>
      <div class="buttons">
        <ClickableBox title="Linkedin" link="https://www.linkedin.com/in/oz-duverger-26116b1a0/"/>
        <ClickableBox title="Github" link="https://github.com/OzDuverger"/>
        <ClickableBox title="ozduverger@gmail.com" link="mailto:ozduverger@gmail.com"/>
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
      <h3>Fullstack Developer <span class="link">at</span> Dipli <span>{ alternation }</span></h3>
      <div class="experience">
        <div class="date-boxe">2021</div><span>></span><div class="date-boxe">2023</div>
      </div>
      <h3>Fullstack Developer <span class="link">at</span> Atexo <span>{ internship }</span></h3>
      <div class="experience">
        <div class="date-boxe">2020</div>
      </div>
    </section>
    <section id="languages" class="container">
      <h2>LANGUAGES</h2>
      <h3 @click="isWebShown = !isWebShown">Web</h3>
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
      <h3 @click="isMobileShown = !isMobileShown">Mobile</h3>
      <ul :class="isMobileShown? 'ul-visible' : 'ul-invisible'">
        <li class="percent--50"><span>Swift</span></li>
      </ul>
      <h3 @click="isBasicShown = !isBasicShown">Basic</h3>
      <ul :class="isBasicShown? 'ul-visible' : 'ul-invisible'">
        <li class="percent--95"><span>C</span></li>
        <li class="percent--80"><span>C#</span></li>
        <li class="percent--60"><span>Python</span></li>
        <li class="percent--50"><span>Assembleur</span></li>
      </ul>
      <h3 @click="isOtherShown = !isOtherShown">Other</h3>
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
      <h3>Video Game</h3>
      <div class="buttons">
        <ClickableBox title="Wolf3D" link="https://github.com/OzDuverger/c_Wolf3D"/>
        <ClickableBox title="Police app recovery" link="https://github.com/OzDuverger/Unity_App_Police" />
        <ClickableBox title="TrapFairies recovery" link="https://github.com/OzDuverger/Unity_TrapFairies" />
      </div>
    </section>
  </div>
</template>

<script setup>

let isWebShown = ref(false)
let isMobileShown = ref(false)
let isBasicShown = ref(false)
let isOtherShown = ref(false)

</script>

<style lang="scss" scoped>
@import "/assets/variables";

#simple-cv-dev-oz {

  width: 100%;

  h3 {
    z-index: 42;
  }

  .buttons {
    
    width: 100%;
    @include flex($justify: space-between);
  }

  #presentation, #contact, #languages, #activities, #projects {

    width: 100%;
    @include flex($direction: column);
  }

  #activities {

    .experience {
      
      width: 100%;
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
}
</style>