(function($){
  $(function(){

    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const goals = params.get("goals");
    const jobs = params.get("jobs");
    const spending = params.get("spending");
    $('.card-title').text(name);
    $('.spending').text(spending);
    $('.jobs').text(jobs);
    $('.goals').text(goals);
    console.log(document.title);

    // Share on mobile device
    function createShareButton() {
      const btn = document.getElementById('download-button');
      const shareUrl = document.getElementById('shareUrl');
      const title = document.title;
      const text = "Check out the "+name+"'s progress!";
      const url = window.location.href;
      shareUrl.value = url;
      btn.innerText = "share" in navigator ? "Share this link" : "Copy link";

      btn.onclick = () => {
        event.preventDefault();
        if (navigator.share !== undefined) {
          navigator
            .share({
              title,
              text,
              url
            })
            .then(() => console.log("Shared!"))
            .catch(err => console.error(err));
        } else {
          shareUrl.style.display = 'block';
          shareUrl.select();
          shareUrl.setSelectionRange(0, 99999);
          document.execCommand("copy");
          console.log(shareUrl);
          btn.innerHTML = "Link copied!";
        }
      };

      return btn;
    }
    function celebrateButton() {
      event.preventDefault();
      const celebrate = document.getElementById('celebrate-button');
      const confetti = document.getElementById('confettis');
      const fireworks = document.getElementById('fireworks');
      celebrate.onclick = () => {
        confetti.style.display = 'block';
        fireworks.style.display = 'block';
      }
    }
    createShareButton();
    celebrateButton();

  }); // end of document ready
})(jQuery); // end of jQuery name space
