var kawaiiBot = function (msg, count, delay) {
    if (count <= 0) {
        return
    }
    if (!delay || delay < 1000) {
        delay = 1000
    }
    console.log('发送 \'' + msg + "\' , 剩余 " + count + " 次")
    var chatInput = document.getElementsByClassName('chat-input')[0]
    chatInput.value = msg
    var chatInputChangeEvent = new InputEvent('input')
    chatInput.dispatchEvent(chatInputChangeEvent)
    var sendBtn = document.getElementsByClassName('bl-button live-skin-highlight-button-bg bl-button--primary bl-button--small')[0]
    setTimeout(function () {
        sendBtn.click()
        count--
        setTimeout(function () {
            kawaiiBot(msg, count, delay)
        }, delay)
    }, 1000)
}
