<main>
    <article>
    <h2>My Journey to becoming a Frontend developer</h2>
</article>
    <article class="stop">
        <div class="text">
          <header>
            <h2>Magnetic drum</h2>
            <time>1932</time> - Gustav Taushek
          </header>
          <p>A rotating cylinder coated with a magnetic material, used for storing data.</p>
          <img src="https://assets.codepen.io/159218/drum-memory.jpg" alt="" />
        </div>
      </article>
      <article class="stop">
        <div class="text">
          <header>
            <h2>Magnetic tape</h2>
            <time>1951</time> - Fritz Pfleumer
          </header>
          <p>A long strip of plastic coated with a magnetic material, used for storing data.</p>
          <img src="https://assets.codepen.io/159218/magnetic-tape.jpg" alt="" />
        </div>
      </article>
      <article class="stop">
        <div class="text">
          <header>
            <h2>Hard disk drive</h2>
            <time>1956</time> - IBM
          </header>
          <p>A stack of rotating platters coated with a magnetic material.</p>
          <img src="https://assets.codepen.io/159218/hard-disk-drive.jpg" alt="" />
        </div>
      </article>
      <article class="stop">
        <div class="text">
          <header>
            <h2>Floppy disk</h2>
            <time>1967</time> - Alan Shugart
          </header>
          <p>A small, flexible disk coated with a magnetic material, used for storing data.</p>
          <img src="https://assets.codepen.io/159218/floppy-disk.jpg" alt="" />
        </div>
      </article>
      <article class="stop">
        <div class="text">
          <header>
            <h2>Compact cassette</h2>
            <time>1971</time> - Philips
          </header>
          <p>A small, magnetic tape cassette used for storing data.</p>
          <img src="https://assets.codepen.io/159218/compact-cassette.jpg" alt="" />
        </div>
      </article>
      <article class="stop">
        <div class="text">
          <header>
            <h2>Zip drive</h2>
            <time>1980</time> - Iomega
          </header>
          <p>A removable disk drive with a capacity of up to 100 MB.</p>
          <img src="https://assets.codepen.io/159218/zip-drive.jpg" alt="" />
        </div>
      </article>
      <article class="stop">
        <div class="text">
          <header>
            <h2>CD-ROM</h2>
            <time>1984</time> - James Russell
          </header>
          <p>A compact disc that can store up to 700 MB of data.</p>
          <img src="https://assets.codepen.io/159218/cd-rom.png" alt="" />
        </div>
      </article>
      <article class="stop">
        <div class="text">
          <header>
            <h2>DVD-ROM</h2>
            <time>1994</time> - Kenji Kashiwaya
          </header>
          <p>A digital versatile disc that can store up to 4.7 GB of data.</p>
          <img src="https://assets.codepen.io/159218/dvd-rom.png" alt="" />
        </div>
      </article>
      <article class="stop">
        <div class="text">
          <header>
            <h2>Blu-ray Disc</h2>
            <time>1995</time> - Sony and Philips
          </header>
          <p>A high-definition optical disc that can store up to 25 GB of data.</p>
          <img src="https://assets.codepen.io/159218/blu-ray.png" alt="" />
        </div>
      </article>
      <article class="stop">
        <div class="text">
          <header>
            <h2>Solid-state drive</h2>
            <time>2000</time> - SanDisk
          </header>
          <p>A type of storage device that uses flash memory to store data.</p>
          <img src="https://assets.codepen.io/159218/ssd.jpg" alt="" />
        </div>
      </article>
      <article class="stop">
        <div class="text">
          <header>
            <h2>USB flash drive</h2>
            <time>2003</time> - IBM
          </header>
          <p> A small, portable storage device that uses flash memory to store data.</p>
          <img src="https://assets.codepen.io/159218/usb-flash-drive.jpg" alt="" />
        </div>
      </article>
      <article class="stop">
        <div class="text">
          <header>
            <h2>Cloud storage</h2>
            <time>2007</time> - Amazon Web Services
          </header>
          <p>A service that allows users to store data on remote servers.</p>
          <img src="https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODk2MDA3NDJ8&ixlib=rb-4.0.3&q=85" alt="" />
        </div>
      </article>
       
</main>
<style>
@property --clip-vertical {
  syntax: "<percentage>";
  initial-value: 95%;
  inherits: false;
}

@property --clip-horizontal {
  syntax: "<percentage>";
  initial-value: 100%;
  inherits: false;
}

@property --intro-radial {
  syntax: "<percentage>";
  initial-value: 0%;
  inherits: false;
}

main {
  --timeline-width: 100%;

  position: relative;
  padding-block: 300px;
  max-width: 100%;
  margin-inline: auto;
  &::before {
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 100%;
    margin-left: -3px;
    border-right: 6px dashed oklch(20% 0.5 313);
    content: "";
  }

  background-image: var(--gradient-23);
  background-size: 100%, 500px;
  background-attachment: fixed;
  background-color: #000;
  background-blend-mode: difference;

  animation: moveGradient linear both;
  animation-timeline: view(block);
  animation-range: contain 0% cover 100%;
}

.stop {
  --clip-horizontal: 100%;
  --clip-vertical: 93%;

  position: relative;
  min-height: 70vh;
  padding-top: 15vh;
  width: calc(var(--timeline-width) / 2);
  padding-inline: 50px;
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: oklch(80% 0.23 68);
    border: 6px solid oklch(20% 0.5 313);
    content: "";
    translate: 50% 0;
    transform-origin: center;
    animation: popIn linear both;
    animation-timeline: view(block);
    animation-range: cover 5% contain 22%;
  }
  &::after {
    position: absolute;
    top: 20px;
    right: 40px;
    width: 80%;
    height: calc(15vh - 20px);
    border-width: 3px 0 0 3px;
    border-style: dashed;
    border-color: oklch(20% 0.5 313);
    clip-path: inset(0 0 var(--clip-vertical) var(--clip-horizontal));
    transform-origin: center;
    animation: showLine linear both;
    animation-timeline: view(block);
    animation-range: cover 10% contain 40%;
    content: "";
  }

  &:nth-child(even) {
    justify-content: flex-end;
    text-align: end;
    margin-left: calc(var(--timeline-width) / 2);
    &::before {
      right: auto;
      left: 0;
      translate: -50% 0;
    }
    &::after {
      right: auto;
      left: 40px;
      border-width: 3px 3px 0 0;
      clip-path: inset(0 var(--clip-horizontal) var(--clip-vertical) 0);
    }
  }
}

.text {
  animation: slideIn linear both;
  animation-timeline: view(block);
  animation-range: cover 0% contain 12%;
}

/* keyframes */
@keyframes popIn {
  0% {
    scale: 0;
  }
  60% {
    scale: 1.2;
  }
}

@keyframes moveGradient {
  to {
    --intro-radial: 100%;
  }
}

@keyframes showLine {
  0% {
    --clip-horizontal: 100%;
    --clip-vertical: 95%;
  }
  60% {
    --clip-horizontal: 0%;
    --clip-vertical: 95%;
  }
  100% {
    --clip-horizontal: 0%;
    --clip-vertical: 0%;
  }
}

@keyframes slideIn {
  0% {
    opacity: 0;
    translate: 0 50%;
  }
  100% {
    opacity: 1;
    translate: 0 3%;
  }
}

/* Default styles */

*,
*::before,
*::after {
  box-sizing: border-box;
}

h2 {
  font-family: "Azonix";
  font-weight: 500;
  margin: 0;
  color: var(--heading-color);
}

header {
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
}

p {
  margin-block: 1.2rem 0;
}

.text {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  color: #fff;
  padding: 1.1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border: 1px solid oklch(38% 0.5 313);
  border-radius: 0.6rem;
}


img {
  width: 200px;
  margin-block-start: 1.05rem;
  border: 1px solid #eee;
  background: white;
}

/* Some mobile improvements I did after the demo was finished :) I know this could be done a bit more optimised if i'd done it right away */
@media screen and (width <= 600px) {
  main::before {
    left: 30px;
    margin-left: 0;
  }
  .stop,
  .stop:nth-child(even) {
    justify-content: flex-end;
    text-align: end;
    margin-bottom: 30px;
    margin-left: 33px;
    width: calc(var(--timeline-width) - 33px);
    padding-inline: 30px 8px;
    &::before {
      right: auto;
      left: 0;
      translate: -50% 0;
    }
    &::after {
      right: auto;
      left: 40px;
      border-width: 3px 3px 0 0;
      clip-path: inset(0 var(--clip-horizontal) var(--clip-vertical) 0);
    }
    .text {
      text-align: left;
    }
  }
}

</style>