// 예외처리

// try ~ catch ~ finally

try {
    console.log('try 블록 시작');
    // 의도적으로 에러 발생
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error('0으로 나눌 수 없습니다.');
    }
    console.log('결과:', result);
    console.log('try 블록 끝');
} catch (error) {
    console.error('에러 발생:', error.message);

} finally {
    console.log('finally 블록 실행');
}
