document.querySelectorAll('a').forEach(link => {
    iframe = document.getElementById("iframe");
    link.addEventListener('click', function(event) {
      event.preventDefault();

      switch (this.id) {
        case 'sales':
            console.log("a")
          iframe.src = 'https://clusterdesign.cloud.looker.com/embed/dashboards/93';
          break;
        case 'logistic':
          iframe.src = 'https://clusterdesign.cloud.looker.com/embed/dashboards/92?';
          break;
        case 'user':
          iframe.src = 'https://clusterdesign.cloud.looker.com/embed/dashboards/94?';
          break;
        default:
          console.log('Link não encontrado');
      }
    });
  });