<script>
  export let profileImage = "/images/profielfoto-zw.avif";
</script>

<div class="profile-image-corners">
  <span class="corner corner-tr"></span>
  <span class="corner corner-bl"></span>
  <div class="profile-image-outer">
    <div class="profile-image-wrap">
      <img src={profileImage} alt="Tristan" class="profile-image" />
      <div class="profile-fade"></div>
      <div class="profile-hud">
        <span class="hud-status">
          <span class="hud-dot"></span>STATUS: ONLINE
        </span>
        <span class="hud-clearance">CLEARANCE: LVL 3</span>
        <span class="hud-id">ID: TRS-001 // FDND</span>
      </div>
    </div>
  </div>
</div>

<style>
  .profile-image-corners {
    position: relative;
    width: 325px;
    height: 485px;
    flex-shrink: 0;
  }

  .profile-image-corners::before {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    width: 20px;
    height: 20px;
    border-top: 2px solid #00fff1;
    border-left: 2px solid #00fff1;
    box-shadow: -2px -2px 8px rgba(0, 255, 241, 0.4);
    z-index: 10;
  }

  .profile-image-corners::after {
    content: "";
    position: absolute;
    bottom: -6px;
    right: -6px;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid #00fff1;
    border-right: 2px solid #00fff1;
    box-shadow: 2px 2px 8px rgba(0, 255, 241, 0.4);
    z-index: 10;
  }

  .corner-tr {
    position: absolute;
    top: -6px;
    right: -6px;
    width: 20px;
    height: 20px;
    border-top: 2px solid #0984e3;
    border-right: 2px solid #0984e3;
    box-shadow: 2px -2px 8px rgba(9, 132, 227, 0.4);
    z-index: 10;
  }

  .corner-bl {
    position: absolute;
    bottom: -6px;
    left: -6px;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid #0984e3;
    border-left: 2px solid #0984e3;
    box-shadow: -2px 2px 8px rgba(9, 132, 227, 0.4);
    z-index: 10;
  }

  .profile-image-outer {
    width: 325px;
    height: 485px;
    position: relative;
    animation: holo-shift 6s ease-in-out infinite;
  }

  .profile-image-wrap {
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: 1;
    border-radius: 0.5rem;
  }

  .profile-image-wrap::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 255, 241, 0.08) 0%,
      rgba(9, 132, 227, 0.12) 25%,
      rgba(255, 0, 170, 0.06) 50%,
      rgba(0, 255, 241, 0.1) 75%,
      rgba(9, 132, 227, 0.08) 100%
    );
    background-size: 300% 300%;
    animation: holo-gloss 4s ease-in-out infinite;
    z-index: 2;
    pointer-events: none;
    mix-blend-mode: screen;
  }

  .profile-image-wrap::after {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 3px,
      rgba(0, 204, 201, 0.03) 3px,
      rgba(0, 204, 201, 0.03) 4px
    );
    z-index: 3;
    pointer-events: none;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .profile-fade {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(12, 16, 22, 0.6) 50%,
      rgba(12, 16, 22, 0.95) 100%
    );
    z-index: 4;
    pointer-events: none;
  }

  .profile-hud {
    position: absolute;
    bottom: 1.25rem;
    left: 1rem;
    right: 1rem;
    z-index: 5;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .hud-status,
  .hud-clearance,
  .hud-id {
    font-family: "Azonix", monospace;
    font-size: 0.7rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: block;
  }

  .hud-status {
    color: #00fff1;
    text-shadow: 0 0 8px rgba(0, 255, 241, 0.6);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .hud-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00fff1;
    box-shadow: 0 0 6px #00fff1;
    animation: dot-blink 1.5s ease-in-out infinite;
    flex-shrink: 0;
  }

  .hud-clearance {
    color: #0984e3;
    text-shadow: 0 0 8px rgba(9, 132, 227, 0.5);
  }

  .hud-id {
    color: rgba(245, 245, 240, 0.5);
    font-size: 0.65rem;
  }

  @keyframes dot-blink {
    0%, 100% { opacity: 1;   }
    50%       { opacity: 0.2; }
  }

  @keyframes holo-gloss {
    0%   { background-position: 0% 50%;   }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%;   }
  }

  @keyframes holo-shift {
    0%, 100% { filter: drop-shadow(0 0 12px rgba(0, 206, 201, 0.5)); }
    33%       { filter: drop-shadow(0 0 16px rgba(9, 132, 227, 0.6)); }
    66%       { filter: drop-shadow(0 0 14px rgba(255, 0, 170, 0.4)); }
  }

  @media (max-width: 22.5rem) {
    .profile-image-corners,
    .profile-image-outer {
      width: 100%;
      height: 260px;
    }
  }
</style>