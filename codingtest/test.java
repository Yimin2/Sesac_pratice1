class Solution {
    public int solution(int[] numbers, int target) {

        return dfs(numbers, target, 0, 0);
    }

    private int dfs(int[] numbers, int target, int start, int count) {
        if (start == numbers.length) {
            return target == count ? 1 : 0;
        }

        int add = dfs(numbers, target, start + 1, count + numbers[start]);
        int substract = dfs(numbers, target, start + 1, count - numbers[start]);
        return  add + substract;
    }
}