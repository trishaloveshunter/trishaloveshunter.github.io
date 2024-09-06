const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yayy I love youu 🥰 ";
  
  // Embed Tenor GIF using innerHTML
  gif.innerHTML = `
    <div class="tenor-gif-embed" data-postid="14863710471758531526" data-share-method="host" data-aspect-ratio="1.06667" data-width="100%">
      <a href="https://tenor.com/view/hug-gif-14863710471758531526">Hug Sticker</a> from <a href="https://tenor.com/search/hug-stickers">Hug Stickers</a>
    </div>
    <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
  `;
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
