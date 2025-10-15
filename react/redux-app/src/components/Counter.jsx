import { useSelector } from "react-redux";

export default function Counter() {
    const count = useSelector((state) => state.counter.count);


    return (
        <div>
            <div>전역 상태 Count: {count}</div>
        </div>
    );
}
