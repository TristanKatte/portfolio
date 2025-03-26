<script>
  import Skills from '../components/Skills.svelte';
  import { onMount } from 'svelte';

  onMount(async () => {
    const { default: gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray('.timeline-item, .timeline-section ').forEach((item, index) => {

      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2
      });
    });
  });
</script>

<svelte:head>
  <title>About me</title>
</svelte:head>


<main>
  <article class="timeline-section">
    <section>
      <figure>
        <enhanced:img class="pic img" alt="Foto van mij" src="$lib/assets/profielfoto-zw.jpg" />
      </figure>
    
    </section>
    <section class="journey">
      <h1>About me</h1>
      <p>Hello! I'm Tristan, I'm 26 years old and a Frontend development student with a passion for creating visually stunning, accessible, progressively enhanced and user-friendly web experiences.</p>
      
      <p>I've always been drawn to technology, and after exploring different creative fields
        I found my passion in coding. I started with Html and CSS in a study back in 2016 and from 2018 to 2022,
        I dived into learning Webdesign.
      </p>
      
      <p>
        I specialize in accessibility, progressive enhancement and responsive design with experience in React, Vue.js, Nodejs Nextjs and Sveltekit. 
        I'm also familiar with version control (Git), npm package managers (npm, pnpm, yarn), and building responsive designs that work on all screen sizes.
      </p>
      
      <p>
        I believe in writing clean, maintainable code and focusing on delivering a seamless user experience. 
        I'm passionate about staying up-to-date with the latest web technologies and always looking for ways to improve the sites I build.
      </p>
      
      <p>
        As I continue growing as a developer, I’m excited to take on more complex projects and learn new technologies. 
        My goal is to help create web applications that make a positive impact and are accessible to everyone.
      </p>
      
      <p>
        Outside of coding, you’ll find me in the gym, playing video games, experimenting with graphic design, or exploring the latest tech trends.
      </p>
      <a class="button" href="/curriculum_vitae-1.pdf" aria-label="My Resume" target="_blank">My Resume</a>
  </section>

  </article>

  <section class="timeline-section">
    <h2>My education</h2>
    <div class="timeline-items">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2016 - 2018</div>
        <div class="timeline-content">
          <h3>DTP at the Grafisch Lyceum Utrecht</h3>
          <p>Developed a strong foundation in design principles and software skills, particularly with Adobe Creative Cloud. Here, the interest of coding began with a subject in my study. </p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2018 - 2022</div>
        <div class="timeline-content">
          <h3>Continuation as Webdesigner at the Grafisch Lyceum Utrecht</h3>
          <p>Graduated with a specialization in web design, focusing on user experience and responsive design.</p>
           
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2022</div>
        <div class="timeline-content">
          <h3>Communication & Multimedia Design</h3>
          <p>A study I briefly attended where I explored various multimedia concepts, enhancing my understanding of digital storytelling and interactive design.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2023</div>
        <div class="timeline-content">
          <h3>Gap year</h3>
          <p>2023 was mostly a gap year for me, because the study of Communication & Multimedia design wasn't a study fit for me. I used this time to work, travel
            and started my current study as a Frontend developer.
          </p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">september 2023- present day</div>
        <div class="timeline-content">
          <h3>Frontend Design & Development</h3>
          <p>Currently enrolled in advanced studies focusing on frontend development, honing my skills in modern frameworks and design systems. </p>
        </div>
      </div>
    </div>
  </section>

  <section class="timeline-section">
    <h2>My experience</h2>
    <div class="timeline-items">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">february 2025 - present</div>
        <div class="timeline-content">
          <h3>1st internship Frontend design & Development at the VRU</h3>
          <p>The 2nd internship from my last study, where i applied my knowledge in webdesign, Wordpress and the Adobe Creative Cloud.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">august 2021 - january 2022</div>
        <div class="timeline-content">
          <h3>2nd internship Webdesign at ArtDcom</h3>
          <p>The 2nd internship from my last study, where i applied my knowledge in webdesign, Wordpress and the Adobe Creative Cloud.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">february 2021 - june 2021</div>
        <div class="timeline-content">
          <h3>1st internship Webdesign at Centix</h3>
          <p>During my 1st internship, I helped develop the new website for Centix in Elementor and Wordpress.</p>
           
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2018 - present</div>
        <div class="timeline-content">
          <h3>Cleaner & warehouse worker</h3>
          <p>Since 2018, I work every summer at a fresh produce wholesalery, where I assist with the cleaning and where i stack crates of food for delivery across the Netherlands.</p>
        </div>
      </div>
    </div>
  </section>


  <section class="timeline-section">
    <Skills />
  </section>

</main>

<style>

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: "Azonix";
    color: var(--heading-color);
    margin-bottom: 1em;
  }

  .button {
    position: relative;
    padding: 15px 45px;
    width: 50%;
    background: transparent;
    border-radius: 0 50px 0 50px;
    border: 2px solid #00c2cb;
    outline: 2px solid #00c2cb;
    outline-offset: -2px;
    font-size: .95rem;
    font-family: 'Orbitron Variable', sans-serif;
    color: #00c2cb;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: outline-offset 200ms ease;
    }

  .button:hover {
    color: #e0ffff;
    background-color: var(--heading-color);
    outline-offset: 4px;
    }
  
  .button:active{
    transform: scale(0.95);
    }

    figure {
    border-radius: 20px;
    width: 100%;
    margin: auto;
  }

  .timeline-section{
	  background-color: transparent;
	  min-height: 100vh;
	  padding: 100px 15px;
    z-index: 0;
}

  .timeline-items{
	  max-width: 1000px;
	  margin:auto;
	  display: flex;
	  flex-wrap: wrap;
	  position: relative;
}

.timeline-items::before{
	  content: '';
	  position: absolute;
	  width: 2px;
	  height: 100%;
	  background-color: #2f363e;
	  left: calc(50% - 1px);
}

.timeline-item{
	  margin-bottom: 40px;
	  width: 100%;
	  position: relative;
}

.timeline-item:last-child{
	  margin-bottom: 0;
}

.timeline-item:nth-child(odd){
    padding-right: calc(50% + 30px);
	  text-align: right;
}

.timeline-item:nth-child(even){
    padding-left: calc(50% + 30px);
}

.timeline-dot{
	  height: 16px;
	  width: 16px;
	  background-color: var(--btn-color);
	  position: absolute;
	  left: calc(50% - 8px);
	  border-radius: 50%;
	  top:10px;
}

.timeline-date{
	font-size: 18px;
	color: var(--txt-color);
	margin:6px 0 15px;
  font-family: "Azonix";
}

.timeline-content{
  background-color: #2f363e;
	padding: 30px;
	border-radius: 5px;
}

.timeline-content h3{
  font-size: 20px;
	color: #ffffff;
	margin:0 0 10px;
	text-transform: capitalize;
	font-weight: 500;
  font-family: "Azonix";
}
.timeline-content p{
  color: #c8c8c8;
	font-size: 16px;
	font-weight: 300;
	line-height: 22px;
  font-family: 'Orbitron Variable', sans-serif;
  letter-spacing: 3px;
}

article {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 90px 90px;
    font-family: 'alata', sans-serif;
    letter-spacing: 2px;
}

.journey {
    max-width: 650px;
    margin-right: 50px;
    font-family: 'alata', sans-serif;
    word-wrap: break-word;
    line-height: 1.6;
    letter-spacing: .1em;

}

.img {
  scale: 1;
  border-radius: 12px;
  border: 16px solid var(--heading-color);
  border-style: ridge;
}

.pic {
height: auto;
width: 450px;
border-radius: 18px;
margin-right: 3.5em;
}

.journey h1 {
  color: var(--heading-color);
  font-family: "Azonix";
  letter-spacing: .2em;
}

.journey p {
  color: var(--txt-color);
  margin-bottom: 1.8em;

}

@media(max-width:30em){
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
  }

  article {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 90px 90px;
    font-family: 'alata', sans-serif;
  }

  section {
    margin-bottom: 1.5em;
  }

  .timeline-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .journey {
    margin-bottom: 30px;
    margin-right: 0;
    text-align: left;
  }

  .journey p {
    font-family: 'alata', sans-serif;
  }

  .journey h1 {
    font-size: 24px;
  }

  .pic {
    height: auto;
    width: 100%;
    max-width: 300px;
    border-radius: 18px;
    margin-right: 0;
  }

  .button {
    position: relative;
    width: 100%;
    padding: 15px 30px;
    margin: auto;
    background: transparent;
    border-radius: 0 50px 0 50px;
    border: 2px solid var(--btn-color);
    outline: 2px solid var(--btn-color);
    outline-offset: -2px;
    font-size: 1rem;
    font-family: 'Orbitron Variable', sans-serif;
    color: #00c2cb;
    font-weight: 300;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: outline-offset 200ms ease;
  }

  .button:hover {
    color: #e0ffff;
    background-color: var(--heading-color);
    outline-offset: 4px;
  }

  .button:active{
    transform: scale(0.95);
  }
}

@media(max-width: 48em){

  h2 {
    display: flex;
    justify-content: flex-start;
  }

  .timeline-section:nth-child(1) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .journey {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .pic {
    scale: .80;
    
  }

	.timeline-items::before{
		left: 7px;
	}
	.timeline-item:nth-child(odd){
		padding-right: 0;
		text-align: left;
	}
	.timeline-item:nth-child(odd),
	.timeline-item:nth-child(even){
		padding-left: 37px;
	}
	.timeline-dot{
		left:0;
	}

  .pic {
    margin-right: 3.5em;
  }
}

@media (max-width: 64em) {

  .timeline-section:nth-child(1) {
    display: flex;
    flex-direction: row;
    max-width: 100%;
  }

  .pic {
    scale: .85;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin-top: -550px;
  }

  .journey {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .pic {
    scale: .80;
  }

  .button {
    position: relative;
    padding: 15px 45px;
    width: 100%;
    background: transparent;
    border-radius: 0 50px 0 50px;
    border: 2px solid #00c2cb;
    outline: 2px solid #00c2cb;
    outline-offset: -2px;
    font-size: .95rem;
    font-family: 'Orbitron Variable', sans-serif;
    color: #00c2cb;
    font-weight: 500;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: outline-offset 200ms ease;
    }

}
 
</style>
