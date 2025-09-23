const randomPromise =  new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10);
        if (randomNumber > 5) {
            resolve(randomNumber);
        } else {
            reject(new Error('5보다 같거나 커야합니다. ' + randomNumber));
        }
    }, 1000);
});

// 콜백함수는 매개변수 하나를 받는다
randomPromise
    .then((result) => {
        console.log('성공:', result);
    })
    .catch((error) => {
        console.error('실패:', error.message);
    });

//  promise 자료형 기반 네트워크 통신 함수
fetch("http://example.com")
    .then((response) => {
        console.log(response)
        return response.text()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })


async function func() {
    try {
        const result = await randomPromise;
        console.log('성공:', result);
    } catch (error) {
        console.error('실패:', error.message);
    }
}

func()