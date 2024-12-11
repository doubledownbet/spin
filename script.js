const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
const fullName = document.getElementById("full-name");
const yellowIndicator = document.getElementById("yellow-indicator");


const walletBalanceEl = document.getElementById("wallet-balance");
const withdrawBtn = document.getElementById("withdraw-btn");
const withdrawOptions = document.getElementById("withdraw-options");
const confirmWithdrawBtn = document.getElementById("confirm-withdraw");
const spinPageBtn = document.getElementById("spinPage");
const errorMessage = document.getElementById("error-message");
const userForm = document.getElementById("user-form");
const nameInput = document.getElementById("name");
const pageOne = document.getElementById("page1");
const pageTwo = document.getElementById("page2");
const pageThree = document.getElementById("page3");
const winnerName = document.getElementById("winner-name");


const moreSpinLink = document.getElementById("more-spin");

const maxSpins = 2; // Set maximum spins

let walletBalance = parseInt(localStorage.getItem("walletBalance")) || 0;
let spinCount = parseInt(localStorage.getItem("spinCount")) || 0;
let userName = localStorage.getItem("userName") || "";




if (userName) {
    fullName.innerHTML = `${userName}`;
    winnerName.innerHTML = `${userName}`;
    spinBtn.disabled = false;
    pageOne.style.display = "none";
    pageTwo.style.display = "block";
    pageThree.style.display = "none";
} 



userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    userName = nameInput.value;
    localStorage.setItem("userName", userName);
    fullName.innerHTML = `${userName}`;
    winnerName.innerHTML = `${userName}`;
    spinBtn.disabled = false;

    pageOne.style.display = "none";
    pageTwo.style.display = "block";
    pageThree.style.display = "none";
});


spinPageBtn.addEventListener("click", () => {
    pageOne.style.display = "none";
    pageTwo.style.display = "none";
    pageThree.style.display = "block";

});








localStorage.setItem("walletBalance", walletBalance);
walletBalanceEl.textContent = `$${walletBalance}`;





// Withdraw button logic
withdrawBtn.addEventListener("click", () => {
    withdrawOptions.style.display = "block";

    
});

// Confirm Withdraw button logic
confirmWithdrawBtn.addEventListener("click", () => {

    withdrawOptions.style.display = "none";
    errorMessage.style.display = "block";
    withdrawBtn.style.display = "none";

    localStorage.setItem("walletBalance", walletBalance);
    walletBalanceEl.textContent = `$${walletBalance}`;
    walletBalanceEl.innerHTML = `<p>Pending withdrawal of $${walletBalance}.</p>`;
});




// Object that stores values of minimum and maximum angle for a value
const rotationValues = [
    { minDegree: 0, maxDegree: 40, value: 2000 },
    { minDegree: 41, maxDegree: 80, value: 10000 },
    { minDegree: 81, maxDegree: 120, value: 0 },
    { minDegree: 121, maxDegree: 160, value: 20000 },
    { minDegree: 161, maxDegree: 200, value: 50000 },
    { minDegree: 201, maxDegree: 240, value: 0 },
    { minDegree: 241, maxDegree: 280, value: 25000 },
    { minDegree: 281, maxDegree: 320, value: 0 },
    { minDegree: 321, maxDegree: 360, value: 5000 },
];

// Size of each piece
const data = [16, 16, 16, 16, 16, 16, 16, 16, 16];

// Background color for each piece
var pieColors = [
    "#FF0000", "#0000FF", "#008000", "#A020F0",
    "#FF0000", "#0000FF", "#008000", "#A020F0", "#0000FF",
];

// Create chart
let myChart = new Chart(wheel, {
    plugins: [ChartDataLabels],
    type: "pie",
    data: {
        labels: ['$10,000', '$2,000', '$5,000', '$0', '$25,000', '$0', '$50,000', '$20,000', '$0'],
        datasets: [
            {
                backgroundColor: pieColors,
                data: data,
            },
        ],
        
    },
    options: {
        responsive: true,
        animation: { duration: 0 },
        plugins: {
            tooltip: false,
            legend: { display: false },
            datalabels: {
                color: "#ffffff",
                formatter: (_, context) => context.chart.data.labels[context.dataIndex],
                font: { size: 13 },
            },
        },
    },
});

// Update wallet
const valueGenerator = (angleValue) => {

    for (let i of rotationValues) {
        if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
            walletBalance += i.value;
            walletBalanceEl.textContent = `$${walletBalance}`;
            finalValue.innerHTML = `<p>You won: $${i.value}</p>`;

            

            spinBtn.disabled = false;
            localStorage.setItem("walletBalance", walletBalance);
            break;


        }
    }
};


// Spinner count
let count = 0;
let resultValue = 101;

// Start spinning
spinBtn.addEventListener("click", () => {
      // Check if spin count has exceeded the limit
      localStorage.setItem("spinCount", spinCount);


      


      if (spinCount >= maxSpins) {
        finalValue.innerHTML = `<p style="color: #ffff; font-size: 12px;">Free spins are over.  Buy more spins following the instruction.  <a href="https://coinatmradar.com/" target="_blank"> If you don't have a Bitcoin Wallet click here to use the Bitcoin machine around you </a></p>
       

        <div id="bottom-sheet">
        <div class="bottom-sheet-content" style="text-align: center'">

        <button style="
                                        padding: 3px 5px;
    border-radius: 12px;
    border: 1px solid;
    background-color: darkred;
    color: #ffff;
    font-size: 14px;
    margin-bottom: 10px;
                                        ">
                                            $70 for 5 spins 
                                        </button>

                                        <button style="
                                        padding: 3px 5px;
    border-radius: 12px;
    border: 1px solid;
    background-color: darkred;
    color: #ffff;
    font-size: 14px;
    margin-bottom: 10px;
                                        ">
                                            $150 for 12 spins 
                                        </button>

                                        <button style="
                                        padding: 3px 5px;
    border-radius: 12px;
    border: 1px solid;
    background-color: darkred;
    color: #ffff;
    font-size: 14px;
    margin-bottom: 10px;
                                        ">
                                            $300 for 30 spins 
                                        </button>

                                    <p style="padding: 0;
                                    font-size: 14px;">
                                        Pay with
                                    </p>
                                    <div class="bitcoin-btn" style="
                                    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 36px;
                                    ">
                                        <button style="
                                        padding: 3px 5px;
    border-radius: 12px;
    border: 1px solid;
    background-color: royalblue;
    color: #ffff;
    font-size: 14px;
                                        ">
                                            Bitcoin
                                        </button>
                                    </div>

            <img src="bitcoin-wallet.png" alt="Cute Cat" class="bottom-sheet-img" />

            <div class="copy-address" style="margin-left: 10px">
            <p class="address-head" style=" margin: 0 auto; padding-left: 8px; text-align: left; max-width: 250px; font-size: small; text-align: center;">
               WALLET ADDRESS
           </p>
            <div class="copy-link" style="--height: 36px; margin-bottom: 70px; display: flex; margin: 0 auto; max-width: 250px;">
                <input type="text" class="copy-link-input" style="
                padding: 0 8px;
                font-size: 14px;
                border: none;
                border-right: none;
                outline: none;
                width: 100%;" 
                value="bc1qqsq94r63x8dzvjpu8d7hpe4t2cqum5pnm0vchn" readonly>
                
                
                <button type="button" style="
                flex-shrink: 0;
                display: flex;
                align-items: center;
  
                cursor: pointer;" class="copy-link-button">
                  <span class="material-icons" style="font-size: 9px">
                  Copy
                  </span>
                </button>
              </div>
            </div>

            <p class="bottom-sheet-description" style="font-size: 14px;">
            <ul class="btcStep" style="color: #ffff; font-size: 12px; text-align: left;">
            <li>Scan or copy the Bitcoin (BTC) address above</li>
            <li>Send the exact amount you see above using your Bitcoin wallet</li>
            <li>After payment is sent, input your name and phone number where your model will contact you</li>
            <li>Click "Payment Sent!"</li>
            <li>In 2 minutes your model will be texting you</li>
        </ul>
            </p>
        </div>`;
        wheel.style.display = "none";
        yellowIndicator.style.display = "none";
        spinBtn.style.display = "none";
        spinBtn.disabled = true; // Disable the spin button

        document.querySelectorAll(".copy-link").forEach((copyLinkContainer) => {
            const inputField = copyLinkContainer.querySelector(".copy-link-input");
            const copyButton = copyLinkContainer.querySelector(".copy-link-button");
           
          
            inputField.addEventListener("focus", () => inputField.select());
          
            copyButton.addEventListener("click", () => {
              const text = inputField.value;
          
              inputField.select();
              navigator.clipboard.writeText(text);
          
              inputField.value = "Copied!";
              setTimeout(() => (inputField.value = text), 2000);
            });
          });
          
        return;
        
    }




    
    spinBtn.disabled = true;
    finalValue.innerHTML = `<p>Good Luck!</p>`;
    spinCount += 1;
    let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
    

    

    let rotationInterval = window.setInterval(() => {
        myChart.options.rotation = myChart.options.rotation + resultValue;
        myChart.update();

        if (myChart.options.rotation >= 360) {
            count += 1;

            resultValue -= 5;
            myChart.options.rotation = 0;
        } else if (count > 15 && myChart.options.rotation == randomDegree) {
            valueGenerator(randomDegree);
            clearInterval(rotationInterval);
            count = 0;
            resultValue = 101;
        }
    }, 10);
});


for(i=0; i<100; i++) {
    // Random rotation
    var randomRotation = Math.floor(Math.random() * 360);
      // Random Scale
    var randomScale = Math.random() * 1;
    // Random width & height between 0 and viewport
    var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
    var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));
    
    // Random animation-delay
    var randomAnimationDelay = Math.floor(Math.random() * 15);
    console.log(randomAnimationDelay);
  
    // Random colors
    var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Create confetti piece
    var confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.top=randomHeight + 'px';
    confetti.style.right=randomWidth + 'px';
    confetti.style.backgroundColor=randomColor;
    // confetti.style.transform='scale(' + randomScale + ')';
    confetti.style.obacity=randomScale;
    confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
    confetti.style.animationDelay=randomAnimationDelay + 's';
    document.getElementById("confetti-wrapper").appendChild(confetti);
  }

  



