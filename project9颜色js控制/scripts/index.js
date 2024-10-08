const button = document.getElementById('mybutton');
const colorbox = document.getElementById('colorbox');
let flag = true;
let num = 1;
let animationId;

button.innerText = '开始';

function startstop() {
    if (flag) {
        button.innerText = '暂停';
        startTimer();
    } else {
        button.innerText = '开始';
        stopTimer(); // 停止动画
    }
    flag = !flag;    
}

function startTimer() {
    // 从输入框获取值并清理
    const redInput = document.getElementById('redin').value.trim();
    const greenInput = document.getElementById('greenin').value.trim();
    const blueInput = document.getElementById('bluein').value.trim();

    // 转换为数字，并确保在范围内
    let red = Math.min(255, Math.max(0, Number(redInput)));
    let green = Math.min(255, Math.max(0, Number(greenInput)));
    let blue = Math.min(255, Math.max(0, Number(blueInput)));

    num = 1; // 重置 num

    function updateColor() {
        let newRed = (red * num) % 256;
        let newGreen = (green * num) % 256;
        let newBlue = (blue * num) % 256;

        colorbox.style.backgroundColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`;
        num++;
        
        animationId = requestAnimationFrame(updateColor); // 使用 requestAnimationFrame
    }

    updateColor(); // 启动颜色更新
}

function stopTimer() {
    cancelAnimationFrame(animationId); // 停止动画
}
