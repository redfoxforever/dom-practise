// let item = [...document.querySelectorAll('.item')]

// let box = document.querySelector('.box')

// item.addEventListener("click", () => {
//     // console.log(`- times clicked`);
// })

// item.addEventListener("mouseover", () => {
//     console.log(" - times overed");
//     item.style.background = "blue"
//     body.style.background = "red"
//     item.style.width = "100px"
// })

// item.addEventListener("mouseout", () => {
//     console.log(" - times outed");
//     item.style.background = "black"
//     body.style.background = "#fff"
//     item.style.width = "200px"
// })

// hasAttribute - atribut bor yoqligini tekshirib beradi hasAttribute("atr name")
// setAttribute - tegga yengi atribut qoshib beradi setAttribute('src, 'qiymati: img/01.png')
// removeAttribute - atribut ochirib tashidi removeAttribute('atr name')
// getAttribute - atributti qiymatini qaytarad getAttribute('data-bg')


// if (item.hasAttribute('class')) {
//     console.log(`bor`);
// }

// let x = item.getAttribute('data-bg')

// console.log(x);

// for (let i = 0; i < item.length; i++) {
//     // console.log(item[i]);
//     item[i].addEventListener("mouseover", () => {
//         item[i].style.background = "red"
//         console.log(`${i} -is clicked`);
//     })
//     item[i].addEventListener("mouseout", () => {
//         item[i].style.background = item[i].getAttribute("data-bg")
//         // console.log(`${i} -is clicked`);
//     })
//     item[i].style.background = item[i].getAttribute("data-bg")
// }

// for (let i = 0; i < item.length; i++) {
//     item[i].style.background =  item[i].getAttribute("data-bg")
//     item[i].addEventListener('click', () => {
//         body.style.background = item[i].getAttribute("data-bg")
//     })
// }




// let input = document.querySelector('.input-text')

// let btn = document.querySelector('.btn'),
//     text = document.querySelector('.text')


// btn.addEventListener('click', function () {
//     btn.textContent = 'CLICKED'
// })

// btn.addEventListener('dblclick', function () {
//     text.textContent = 'True'
//     // btn.removeAttribute('class')
//     console.log(btn);
// })




// let form1 = document.querySelector('.form1')

// let x =  form1.getAttribute('name')

// console.log(x);




// alert('Improve your Aim for PUBG ECS6 CHAMPIONSHIP')

let btn = document.querySelector('.btn')

let randomNum1 = () => {
    return Math.floor(Math.random() * 1500) + 1
}

let randomNum2 = () => {
    return Math.floor(Math.random() * 500) + 1
}

let randomColorNum1 = () => {
    return Math.floor(Math.random() * 256) + 1
}

let randomTransparencyNum = () => {
    return Math.floor(Math.random() * 10) + 1
}

let randomDegNum = () => {
    return Math.floor(Math.random() * 361) + 1
}


btn.addEventListener('click', () => {
    btn.style.transition = ".3s"
    btn.style.cursor = 'pointer'
    btn.style.transform = `translate(${randomNum1()}px, ${randomNum2()}px)`
    btn.style.border = 'none'
    btn.style.color = 'black'
    btn.style.border = 'solid 1px black'
    btn.style.borderRadius = '500px'
    body.style.background = `linear-gradient(${randomDegNum()}deg, rgba(${randomColorNum1()}, ${randomColorNum1()}, ${randomColorNum1()}, 0.${randomTransparencyNum()}), rgba(${randomColorNum1()}, ${randomColorNum1()}, ${randomColorNum1()}, 0.${randomTransparencyNum()}))`    
    // btn.style.background = `rgb(${randomColorNum1()}, ${randomColorNum1()}, ${randomColorNum1()}`
})

btn.addEventListener('mouseover', () => {
    btn.style.transition = ".3s"
    btn.style.width = "100px"
    btn.style.height = "30px"
    btn.style.cursor = 'pointer'
    btn.style.borderRadius = '500px'
})

btn.addEventListener('mouseout', () => {
    btn.style.width = "50px"
    btn.style.height = "20px"
})


// console.dir(btn);



// location.reload() перезагрузка страницу



// let input;

// btn.addEventListener('click', function getVal() {
//     input = document.querySelector('input').value
//     console.log(input);
//     // window.alert(input)
// })



// 'asdasd'.charAt(1) - return value of string('s') 
// 'ABDDE'.concat('asd') - add to string sentence 'asd'
// '   Hello World   '.trim() - delete empty places from begin and from end



// let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// console.log(txt);

// for (let i = 0; i < txt.length; i++) {
//     console.log(txt[i]);
// }

// let textAsd = document.querySelector('.textasd')

// textAsd.textContent = new Date()