let result = document.getElementById("result")
let btn = document.getElementById("btn")
let loader = document.getElementById('loader')
let prize_img = document.getElementById('prize_img')

prize_img.src = "https://www.evolveithub.com/assets/frontend/image/logo/logo2.png"

let prizes = ["PEN", "OPTICAL MOUSE", "PEN DRIVE", "BLUETOOTH SPEAKER", "EARPHONE", "30% DISCOUNT ON ANY COURSES ", "40% DISCOUNT ON ANY COURSES", "50% DISCOUNT ON ANY COURSES"]
let prizes_img = [
    "https://th.bing.com/th/id/OIP.-H2lqHQmzdMVrKTc_U8V3QHaHa?rs=1&pid=ImgDetMain",
    "https://www.quietpc.com/images/products/logitech-b100-large.jpg",
    "https://fatafatsewa.com/storage/media/5624/8e4240e44c58621b3a6ceb76ced206de.jpg",
    "https://raipurshop.com/wp-content/uploads/2020/07/Black-colour-mini-bluetooth-speaker-with-aux-wire-and-cable.jpg",
    "https://m.media-amazon.com/images/I/51uFGVKumiL.jpg",

    "https://t4.ftcdn.net/jpg/00/63/83/29/360_F_63832918_nDVjGKEE3lIYjdthjyJUqiyzNh8TVnp8.jpg",
    "https://t4.ftcdn.net/jpg/00/63/83/29/360_F_63832914_tDLjc2ctMzBlx4umB4CZrvEfVXk0BRfv.jpg",
    "https://t4.ftcdn.net/jpg/00/63/83/29/360_F_63832907_SA64nRfoIU8qaPKDkcYT7Ax2T0eVFJDY.jpg"
]

let won = localStorage.getItem('evolve-result') ?
    JSON.parse(localStorage.getItem('evolve-result')) : []

let prize
let loading = false

function generatePrizes() {
    for (i = 1; i <= 99; i++) {
        let new_item = document.createElement('button')
        if (i < 10) {
            new_item.innerHTML = prizes[0]
        }
        else if (i < 59) {
            new_item.innerHTML = prizes[1]
        }
        else if (i < 61) {
            new_item.innerHTML = prizes[2]
        }
        else if (i < 63) {
            new_item.innerHTML = prizes[3]
        }
        else if (i < 73) {
            new_item.innerHTML = prizes[4]
        }
        else if (i < 83) {
            new_item.innerHTML = prizes[5]
        }
        else if (i < 93) {
            new_item.innerHTML = prizes[6]
        }
        else {
            new_item.innerHTML = prizes[7]
        }


        if (isNewResult(i)) {
            new_item.style.backgroundColor = "green"
        }
        else {
            new_item.style.backgroundColor = "red"
        }
        result.appendChild(new_item)
    }
}

function roll() {
    loading = true

    if (loading) {
        btn.style.display = "none"
    }
    prize_img.classList.add('hidden')
    result.innerHTML = ""
    showResult()
    setTimeout(() => {
        let result = Math.floor(Math.random() * 100)
        if (isNewResult(result)) {
            if (result < 10) {
                prize = '🎊CONGRATULATIONS!🎊 <BR>YOU HAVE WON <BR>' + prizes[0]
                prize_img.src = prizes_img[0]
            }
            else if (result < 59) {
                prize = '🎊CONGRATULATIONS!🎊 <BR>YOU HAVE WON <BR>' + prizes[1]
                prize_img.src = prizes_img[1]
            }
            else if (result < 61) {
                prize = '🎊CONGRATULATIONS!🎊 <BR>YOU HAVE WON <BR>' + prizes[2]
                prize_img.src = prizes_img[2]
            }
            else if (result < 63) {
                prize = '🎊CONGRATULATIONS!🎊 <BR>YOU HAVE WON <BR>' + prizes[3]
                prize_img.src = prizes_img[3]
            }
            else if (result < 73) {
                prize = '🎊CONGRATULATIONS!🎊 <BR>YOU HAVE WON <BR>' + prizes[4]
                prize_img.src = prizes_img[4]
            }
            else if (result < 83) {
                prize = '🎊CONGRATULATIONS!🎊 <BR>YOU HAVE SECURED <BR>' + prizes[5]
                prize_img.src = prizes_img[5]
            }
            else if (result < 93) {
                prize = '🎊CONGRATULATIONS!🎊 <BR>YOU HAVE SECURED <BR>' + prizes[6]
                prize_img.src = prizes_img[6]
            }
            else {
                prize = '🎊CONGRATULATIONS!🎊 <BR>YOU HAVE SECURED <BR>' + prizes[7]
                prize_img.src = prizes_img[7]
            }
            won.push({ result, prize })
            localStorage.setItem('evolve-result', JSON.stringify(won))
            loading = false

            if (!loading) {
                btn.style.display = "inline-block"
            }
            showResult()
        }
        else {
            console.log("rolling again")
            roll()
        }

    }, [3000])

}

function showResult() {
    if (loading) {

        loader.classList.remove('hidden')
        prize_img.src = "https://www.evolveithub.com/assets/frontend/image/logo/logo2.png"
    }
    else {
        loader.classList.add('hidden')
        result.classList.remove('hidden')
        prize_img.classList.remove('hidden')
        result.innerHTML = prize
    }
}

function isNewResult(result) {
    let results = won.map(i => i.result)
    console.log(result)
    if (results.find(i => i === result)) {
        return false
    }
    else {
        return true
    }
}

btn.addEventListener('click', roll)

