<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  let text = 'Hello World!';
  let splitTextInstance;
  
  onMount(async () => {
    const { default: gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {

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

  <article class="about-me">
    <h1>About Me</h1>
    <p>Hello! I'm [Your Name], a [Your Profession/Student/Enthusiast] with a passion for [Your Interests].</p>
    <p>I'm excited to share my story with you, and I hope you'll find something that resonates with you.</p>
    <section>
      <h2>My Background</h2>
      <p>[ Briefly describe your background, education, and relevant experience ]</p>
    </section>
    <section>
      <h2>My Interests</h2>
      <p>[ Describe your hobbies, interests, or passions outside of work/school ]</p>
    </section>
    <section>
      <h2>Get in Touch</h2>
      <p>If you'd like to connect, you can find me on [Your Social Media Platforms] or email me at [Your Email Address].</p>
    </section>
  </article>

  <article class="timeline-section">
    <!-- <section class="journey">
      <h2>About my journey</h2>
      <p>I am a frontend developer That likes to create cool, accessible and stunning web experiences for clients and their users.</p>
      
      <p>I've always been drawn to technology, and after exploring different creative fields
        I found my passion in coding. I started with Html and CSS in a study back in 2016 and from 2018 to 2022,
        I dived into learning Wordpress.
      </p>
      <p>
        I specialize in HTML, CSS, and JavaScript, with experience in React, Vue.js, Nextjs and Sveltekit. 
        I'm also familiar with version control (Git) and building responsive designs that work on all screen sizes.
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
        Outside of coding, you’ll find me hiking in the mountains, experimenting with graphic design, or exploring the latest tech trends.
      </p>
      <a class="button" href="/about" aria-label="More about me">My Resume</a>
      
  </section> -->
  </article>
  
  <section class="timeline-section">
    <div class="timeline-items">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2016</div>
        <div class="timeline-content">
          <h3>DTP at the Grafisch Lyceum Utrecht</h3>
          <p>Developed a strong foundation in design principles and software skills, particularly with Adobe Creative Cloud. Here, the interest of coding began with a subject in my study. </p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2018</div>
        <div class="timeline-content">
          <h3>Continuation as Webdesigner at the Grafisch Lyceum Utrecht</h3>
          <p>Graduated with a specialization in web design, focusing on user experience and responsive design. </p>
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
          <h3>Current study</h3>
          <p>Currently enrolled in advanced studies focusing on frontend development, honing my skills in modern frameworks and design systems. </p>
        </div>
      </div>
    </div>
  </section>

</main>

<style>

  .about-me {
    background-color: transparent;
	  min-height: 100vh;
	  padding: 100px 15px;
    z-index: 0;
    display: flex;
    flex-wrap: wrap;
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

.journey h2 {
  color: var(--heading-color);
  font-family: "Azonix";
  letter-spacing: .2em;
}

.journey p {
  color: var(--txt-color);
  margin-bottom: .8em;
}

/* responsive */
@media(max-width: 767px){
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
}
  /* main {
    width: 100%;
    height: 100%;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    width: 100%;
    height: 100%;
    padding: 90px 90px;
    font-family: 'Orbitron Variable', sans-serif;
  }

  @media (max-width: 480px) {
    article {
        padding: 20px; 
    }
  }


  h2 {
    color: var(--heading-color);
    font-weight: 400;
    margin-bottom: 10px;
    font-family: "Azonix";
  }

  .timeline {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align items to the left 
    position: relative;
    max-width: 800px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 40px 0;
  }

  .timeline-item {
    display: flex;
    align-items: center; 
    width: 100%; 
    padding: 20px 40px;
    box-sizing: border-box;
  }

  .timeline-item:nth-child(odd) {
    flex-direction: row-reverse; 
  }

  .timeline-marker {
    width: 15px; 
    height: 15px; 
  }

  @media (max-width: 768px) {
    .timeline {
      flex-direction: column; 
    }

    .timeline-item {
      width: 100%; 
    }

    .timeline-marker {
      width: 10px; 
      height: 10px; 
    }
  }


  .timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 4px;
    height: 100%;
    background: var(--heading-color);
    transform: translateX(-50%);
  }

  .timeline-item {
    position: relative;
    width: 50%;
    padding: 20px 40px;
    box-sizing: border-box;
  }

  .timeline-item:nth-child(odd) {
    left: 0;
    text-align: right;
  }

  .timeline-item:nth-child(even) {
    left: 50%;
  }

  .timeline-marker {
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: var(--heading-color);
    border-radius: 50%;
    transform: translateY(-50%);
  }

  .timeline-item:nth-child(odd) .timeline-marker {
    right: -10px;
  }

  .timeline-item:nth-child(even) .timeline-marker {
    left: -10px;
  }

  .timeline-content {
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 8px;
    backdrop-filter: blur(10px);
  }

  .timeline-content h3 {
    color: var(--heading-color);
    margin-bottom: 10px;
    font-family: "Azonix";
  }

  .timeline-content p {
    color: var(--txt-color);
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 0.5px;
  }

  @media (max-width: 480px) {
    

    .timeline {
      flex-direction: column;
     
    }
    
    .timeline-item {
      width: 100%;
      padding: 10px;
      text-align: center;
    }

    .timeline-item:nth-child(odd),
    .timeline-item:nth-child(even) {
      left: 0;
    }

    .timeline-marker {
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .timeline-content h3 {
      font-size: 1.2em;
    }

    .timeline-content p {
      font-size: 0.9em;
      line-height: 1.4;
    }
  } */
</style>
