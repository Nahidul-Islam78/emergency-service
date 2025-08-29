//click card heart icon event listener
const heartsIcon = document.getElementsByClassName('heart-icon');
for (const icon of heartsIcon) {
  icon.addEventListener('click', function () {
    icon.classList.add('text-red-500');
    const heart = document.getElementById('heart');
    const numberHeart = parseInt(heart.innerText);
    const totalHeart = numberHeart + 1;
    heart.innerText = totalHeart;
  })
}


//click call button event listener
const callBtn = document.getElementsByClassName('call-btn');
for (const call of callBtn) {
  call.addEventListener('click', function () {
    const title = call.parentElement.children.item(1).innerText;
    const number = call.parentElement.children.item(4).innerText;
    const coin = document.getElementById('coin');
    const numberCoin = parseInt(coin.innerText);
    if (numberCoin >= 20) {
      const message = `calling ${title} ${number}...`;
      alert(message);
      const totalCoin = numberCoin - 20;
      coin.innerText = totalCoin;
      //added information in history section
      const time = new Date();
      const timeString = time.toLocaleTimeString();
      const historyContainer = document.getElementById('history-container');
      const addInfo = document.createElement('div');
      addInfo.innerHTML = `
      <div>
                <p class="font-[inter] font-semibold text-[18px]">${title}</p>
                <p class="font-[hind madurai] text-[#5c5c5c] font-[hind madurai]">${number}</p>
      </div>
      <div>
        <p>${timeString}</p>
      </div>
      `;
      addInfo.classList.add(
        'flex',
        'justify-between',
        'mb-2',
        'bg-[#fafafa]',
        'p-3',
        'rounded-sm'
      );
      historyContainer.appendChild(addInfo);

    } else {
      alert('Sorry!call is not possible....');
    }
  })
}


//click clear button event listener
document.getElementById('clear-btn').addEventListener('click', function () {
  document.getElementById('history-container').innerHTML = "";
})

//click copy button event listener
const copyBtn = document.getElementsByClassName('copy-btn');
for (const btn of copyBtn) {
  btn.addEventListener('click', function () {
    const number = btn.parentElement.children.item(4).innerText;
    navigator.clipboard.writeText(number);
    alert(`copy number:${number}`);
    const copy = document.getElementById('copy-count');
    numberCopy = parseInt(copy.innerText);
    const total = numberCopy + 1;
    copy.innerText = total;
  })
}