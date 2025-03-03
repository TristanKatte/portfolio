<script>
  import { onMount } from 'svelte';
  
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


<main>
  <section class="timeline-section">
    <div class="timeline-items">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2016</div>
        <div class="timeline-content">
          <h3>DTP at the Grafisch Lyceum Utrecht</h3>
          <p>Developed a strong foundation in design principles and software skills, particularly with Adobe Creative Cloud. </p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2018</div>
        <div class="timeline-content">
          <h3>Continuation as Webdesigner at the Grafisch Lyceum Utrecht</h3>
          <p>Graduated with a specialization in web development, focusing on user experience and responsive design. </p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2022</div>
        <div class="timeline-content">
          <h3>Communication & Multimedia Design</h3>
          <p>Explored various multimedia concepts, enhancing my understanding of digital storytelling and interactive design.</p>
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
  .timeline-section{
	background-color: transparent;
	min-height: 100vh;
	padding: 100px 15px;
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
}
.timeline-content p{
    color: #c8c8c8;
	font-size: 16px;
	font-weight: 300;
	line-height: 22px;
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
