let addExpenses = document.querySelector(".calc--expenses__add")
let addExpensesStack = document.querySelector(".calc--expenses__stack")

addExpenses.addEventListener('click', addExpensesClick);

function addExpensesClick() {
    let newChild = document.createElement("div");
    newChild.className = "calc--expenses__stack--chill";
    newChild.innerHTML =
        `
      <form class="chill--elem">
      <input class="chill--elem__btn--delete" type="button" value="x">
      <input class="chill--elem__name" type="text" placeholder="Enter name">
      <div class="chill--elem__sum--value"></div>
      <div class="chill--elem__circle">
          <div class="chill--elem__circle--value"></div>
      </div>
      <input class="chill--elem__push--sum" type="number" name="leveld" min="0" placeholder="Enter the amount" max="5000000">
      <input class="chill--elem__btn--push" type="button" value="push">
      </form>
    `

    addExpensesStack.appendChild(newChild);
    bindEventListeners(newChild)


}
// добавляет новый елемент и привязывает к нему функции


function bindEventListeners(expensesChild) {


    let btnDeleteChillElem = expensesChild.querySelector(".chill--elem__btn--delete");
    let btnPushChillElem = expensesChild.querySelector(".chill--elem__btn--push");

    btnDeleteChillElem.addEventListener('click', function(e) {
        expensesChild.remove();
    });


    btnPushChillElem.addEventListener('click', function(e) {
        setCircleSize(expensesChild);
    });
}

// удаляет и вызывает функцию на подбор круга для элемента  


bindEventListeners(document.querySelector(".calc--expenses__stack--chill"))


function setCircleSize(expensesChild) {
    let sumValueChillElem = expensesChild.querySelector(".chill--elem__sum--value");
    let pushValueChillElem = expensesChild.querySelector(".chill--elem__push--sum");
    let circleChillElem = expensesChild.querySelector(".chill--elem__circle--value");

    if (pushValueChillElem.value < 1000) {
        circleChillElem.style.height = '10px';
        circleChillElem.style.width = '10px';
    } else if (pushValueChillElem.value < 3000) {
        circleChillElem.style.height = '15px';
        circleChillElem.style.width = '15px';
    } else if (pushValueChillElem.value < 6000) {
        circleChillElem.style.height = '20px';
        circleChillElem.style.width = '20px';
    } else if (pushValueChillElem.value < 9000) {
        circleChillElem.style.height = '30px';
        circleChillElem.style.width = '30px';
    } else if (pushValueChillElem.value < 12000) {
        circleChillElem.style.height = '40px';
        circleChillElem.style.width = '40px';
    } else if (pushValueChillElem.value < 15000) {
        circleChillElem.style.height = '50px';
        circleChillElem.style.width = '50px';
    } else if (pushValueChillElem.value < 20000) {
        circleChillElem.style.height = '60px';
        circleChillElem.style.width = '60px';
    } else if (pushValueChillElem.value < 25000) {
        circleChillElem.style.height = '70px';
        circleChillElem.style.width = '70px';
    } else if (pushValueChillElem.value < 30000) {
        circleChillElem.style.height = '80px';
        circleChillElem.style.width = '80px';
    } else if (pushValueChillElem.value < 35000) {
        circleChillElem.style.height = '90px';
        circleChillElem.style.width = '90px';
    } else if (pushValueChillElem.value < 40000) {
        circleChillElem.style.height = '100px';
        circleChillElem.style.width = '100px';
    } else if (pushValueChillElem.value < 45000) {
        circleChillElem.style.height = '110px';
        circleChillElem.style.width = '1100px';
    } else if (pushValueChillElem.value < 50000) {
        circleChillElem.style.height = '120px';
        circleChillElem.style.width = '120px';
    } else if (pushValueChillElem.value < 60000) {
        circleChillElem.style.height = '130px';
        circleChillElem.style.width = '130px';
    } else if (pushValueChillElem.value > 70000) {
        circleChillElem.style.height = '150px';
        circleChillElem.style.width = '150px';
    }
    sumValueChillElem.innerHTML = `${pushValueChillElem.value}`
    pushValueChillElem.value = ''

}
// подбирает размер круга исходя из велечины расходов



let saveTotalExpenses = document.querySelector('.calc--expenses__save')

saveTotalExpenses.addEventListener('click', btnSaveValue);

function btnSaveValue() {
    let innerTotalExpenses = document.querySelector('.calc--expenses__total')
    let innerChillValue = document.querySelectorAll('.chill--elem__sum--value')
    totalSumValue = 0

    innerChillValue.forEach(function(item, index, innerChillValue) {
        let chillValue = innerChillValue[index].innerHTML
        let numberValue = Number(chillValue)
        totalSumValue = Number(totalSumValue + numberValue)
    })

    if (month.innerHTML == 'Month' || year.innerHTML == 'Year') {
        innerTotalExpenses.innerHTML = 'Please enter month and year'
        innerTotalExpenses.style.color = 'red'


    } else {
        innerTotalExpenses.innerHTML = `Total expenses ${totalSumValue} rubles for ${month.innerHTML} ${year.innerHTML}`
        innerTotalExpenses.style.color = 'black'
    }
    addElem()
        // get();


}
// выводит сумму всех расходов


let calcMonth = document.querySelector('.calc--month')
let mescalcMonth = document.querySelector('.calc--month__hidden')
let month = document.querySelector('#month')

month.addEventListener('click', clickCalcMonth);

function clickCalcMonth(event) {
    if (mescalcMonth.classList.contains('calc--month__hidden--active')) {
        mescalcMonth.classList.remove('calc--month__hidden--active');
    } else if (mescalcMonth.classList.contains('calc--month__hidden')) {
        mescalcMonth.classList.add('calc--month__hidden--active');

    }
}
month
// список выбора месяца



let chillCalcMonth = document.querySelectorAll(".calc--month__hidden--active__chill").forEach(chillCalcMonth =>
    chillCalcMonth.addEventListener('click', clickChillCalcMonth)
);

function clickChillCalcMonth(event) {
    month.innerHTML = event.currentTarget.innerHTML
    mescalcMonth.classList.remove('calc--month__hidden--active');
}


// выбор месяца




let calcYear = document.querySelector('.calc--year')
let mescalcYear = document.querySelector('.calc--year__hidden')
let year = document.querySelector('#year')

year.addEventListener('click', clickCalcYear);

function clickCalcYear(event) {

    if (mescalcYear.classList.contains('calc--year__hidden--active')) {
        mescalcYear.classList.remove('calc--year__hidden--active');
    } else if (mescalcYear.classList.contains('calc--year__hidden')) {
        mescalcYear.classList.add('calc--year__hidden--active');
    }

}

// список выбора года


let chillCalcYear = document.querySelectorAll(".calc--year__hidden--active__chill").forEach(chillCalcYear =>
    chillCalcYear.addEventListener('click', clickChillCalcYear)
);

function clickChillCalcYear(event) {
    year.innerHTML = event.currentTarget.innerHTML
    mescalcYear.classList.remove('calc--year__hidden--active');
}

// выбор года






document.addEventListener('click', clickTargetMonth);

function clickTargetMonth(event) {


    if (event.target === calcMonth || calcMonth.contains(event.target)) {
        return;
    }
    mescalcMonth.classList.remove('calc--month__hidden--active');
}


// закрывает выбор месяца при нажатии не на блок



document.addEventListener('click', clcikTargetYear);

function clcikTargetYear(event) {

    if (event.target === calcYear || calcYear.contains(event.target)) {
        return;
    }
    mescalcYear.classList.remove('calc--year__hidden--active');
}



// закрывает выбор года при нажатии не на блок



function addElem(toAdd, callBack) {
    // let xhr = new XMLHttpRequest(); // new HttpRequest instance 
    // xhr.open("PUT", 'http://localhost:3000/item');
    // xhr.setRequestHeader("Content-Type", "application/json");
    // document.querySelector('.' + WRAPPER_ITEMS_CLASS).classList.add(LOADING_CLASS);
    // addNewElementToWrapper(toAdd);
    // xhr.send(JSON.stringify({
    //   title: toAdd
    // }))
    // xhr.onload = function () {
    //   if (xhr.status != 200) {
    //     alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    //   } else {
    //     let response = JSON.parse(xhr.response);
    //     callBack(response)
    //   }
    // };
    let promise = fetch('http://localhost:1234/', { method: 'POST' })

    promise.then(function(x) {
        x.json().then(x => {
            let response = JSON.parse(toAdd);
            callBack(response)


        })
    })


}


// function get(callBack) {
//     let promise = fetch('http://localhost:1234/', { method: 'GET' })

//     promise.then(function(x) {
//         x.json().then(x => {
//             callBack(x);
//         })
//     })
// }

// function _add() {
//     let title = document.querySelector('.calc--expenses__stack--chill').value;
//     add(title, onSuccessAdd);
//   }



// созранение данных в локал
// откорретировать CSS
//











// fetch('http://localhost:1234', { method: 'POST', })
// promise.then(function(e) {}).then(function(response) {
//     if (!response.ok) {
//         return promise.reject(new Error(
//             'Recponse failed: ' + response.status
//         ))
//     }
//     return response.json()
// }).then(function(addExpensesStack) {

// })



// function btnSaveValue() {
//     add(baddExpensesStack);
// }