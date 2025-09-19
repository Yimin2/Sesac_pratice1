class Solution {
    public int solution(int[] numbers, int target) {
        return dfs(numbers, target, 0, 0);
    }

    private int dfs(int[] numbers, int target, int start, int count) {
        if (start == numbers.length) { // 시작 인덱스가 배열의 길이와 같아지면
            return count == target ? 1 : 0; // count가 target과 같으면 1 반환, 아니면 0 반환
        }
        int add = dfs(numbers, target, start + 1, count + numbers[start]); // 현재 숫자를 더하는 경우
        int subtract = dfs(numbers, target, start + 1, count - numbers[start]); // 현재 숫자를 빼는 경우
        return add + subtract; // 두 경우의 합
    }
}


[1, 3, 5]

start 0 count 0
add 0+1, 0+1 =  1,  1
sub 1 -1

add
start 1 count 1
    add 2, 4
        add 3, 9
        sub 3, -1
    sub 2, -2
        add 3, 3
        sub 3, -7
sub
start 1 count -1
    add 2, 2
        add 3, 7
        sub 3, -3
    sub 2, -4
        add 3, 1
        sub 3, -9

class Solution {
    public int solution(int[] numbers, int target) {
        return dfs(numbers, target, 0, 0)
    }
}

    private int dfs(int p)
