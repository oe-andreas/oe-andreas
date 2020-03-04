function spil() {
  ok = true
  total = 0
  while(ok == true) {
    kast1 = Math.floor(6*Math.random()) + 1
    kast2 = Math.floor(6*Math.random()) + 1

    if(kast1 == 1) {
      terning1.src = 'ener.gif'
    }
    else if(kast1 == 2) {
      terning1.src = 'toer.gif'
    }
    else if(kast1 == 3) {
      terning1.src = 'treer.gif'
    }
    else if(kast1 == 4) {
      terning1.src = 'firer.gif'
    }
    else if(kast1 == 5) {
      terning1.src = 'femmer.gif'
    }
    else if(kast1 == 6) {
      terning1.src = 'sekser.gif'
    }

    if(kast2 == 1) {
      terning2.src = 'ener.gif'
    }
    else if(kast2 == 2) {
      terning2.src = 'toer.gif'
    }
    else if(kast2 == 3) {
      terning2.src = 'treer.gif'
    }
    else if(kast2 == 4) {
      terning2.src = 'firer.gif'
    }
    else if(kast2 == 5) {
      terning2.src = 'femmer.gif'
    }
    else if(kast2 == 6) {
      terning2.src = 'sekser.gif'
    }

    if(kast1 == kast2) {
      gevinst = 100
    }
    else {
      gevinst = -1
    }

    total = gevinst + total


    ok = confirm('Din gevinst er '+total+' kr.\n Fortsæt?')
  }
}
