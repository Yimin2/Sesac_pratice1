package com.ll.codingtest;

import java.util.*;

public class BFSExample {
    static Map<Integer, List<Integer>> graph = new HashMap<>();
    static Set<Integer> visited = new HashSet<>();

    public static void bfs(int start) {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(start);
        visited.add(start);

        while (!queue.isEmpty()) {
            int node = queue.poll();
            System.out.print(node + " "); // 방문 순서 출력

            for (int next : graph.get(node)) {
                if (!visited.contains(next)) {
                    queue.add(next);
                    visited.add(next);
                }
            }
        }
    }

    public static void main(String[] args) {
        // 그래프 초기화
        graph.put(1, Arrays.asList(2, 4));
        graph.put(2, Arrays.asList(1, 3, 5));
        graph.put(3, Arrays.asList(2));
        graph.put(4, Arrays.asList(1, 5));
        graph.put(5, Arrays.asList(2, 4));

        // BFS 실행
        bfs(1); // 출력: 1 2 4 3 5
    }
}