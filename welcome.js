let welcomMsg = document.querySelector('.wel-msg');
let welcomMsgText = document.querySelector('h1');
let welcomPara = document.querySelector('p');

if (welcomMsgText && welcomPara) {
    let welcomMsgTextArr = welcomMsgText.textContent.split('');
    let welcomParaTextArr = welcomPara.textContent.split('');

    welcomMsgText.textContent = '';
    welcomPara.textContent = '';

    let delay = 100;

    welcomMsgTextArr.forEach((letter, i) => {
        setTimeout(() => {
            welcomMsgText.textContent += letter;

            if (i === welcomMsgTextArr.length - 1) { 
                welcomParaTextArr.forEach((letter, j) => {
                    setTimeout(() => {
                        welcomPara.textContent += letter;

                        if (j === welcomParaTextArr.length - 1) { 
                            setTimeout(() => {
                                window.location.href = "app.html"; 
                            }, 1500); 
                        }
                    }, delay * j);
                });
            }
        }, delay * i);
    });
}
