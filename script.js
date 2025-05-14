document.querySelectorAll('a').forEach(link => {
    iframe = document.getElementById("iframe");
    link.addEventListener('click', function(event) {
      event.preventDefault();

      switch (this.id) {
        case 'dre':
          iframe.src = 'https://servopa.cloud.looker.com/dashboards/33';
          break;
        case 'balanco':
          iframe.src = 'https://servopa.cloud.looker.com/dashboards/32';
          break;
        case 'caixa':
          iframe.src = 'https://servopa.cloud.looker.com/dashboards/34';
          break;
        case 'ngc':
          iframe.src = 'https://servopa.cloud.looker.com/dashboards/35';
          break;
        case 'indicadores':
          iframe.src = 'https://servopa.cloud.looker.com/dashboards/38';
          break;
        default:
          console.log('Link não encontrado');
      }
    });
  });