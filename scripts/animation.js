.water {
  background: url('assets/backgrounds/water_anim.png') repeat-x;
  background-size: 400% 100%; /* For 4 frames */
  animation: waterMove 4s steps(4) infinite;
}

@keyframes waterMove {
  from { background-position: 0 0; }
  to { background-position: -400% 0; }
}
