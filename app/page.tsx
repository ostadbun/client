"use client"

import { CardExample } from "@/components/component-example";
import useCounterStore from "@/store/counterStore";



export default function Page() {
    const count = useCounterStore((state) => state.count);
    const increment = useCounterStore((state) => state.increment);
    const decrement = useCounterStore((state) => state.decrement);
    const reset = useCounterStore((state) => state.reset);
    const addToCount = useCounterStore((state) => state.addToCount);



    return (
        <>
            <CardExample />

            <div>
                <h1>Counter with Zustand + TypeScript</h1>
                <p>Count: {count}</p>
                <button onClick={increment}>Increase</button><br />
                <button onClick={decrement}>Decrease</button><br />
                <button onClick={reset}>Reset</button><br />
                <button onClick={() => addToCount(10)}>Add 10</button><br />
            </div>


        </>

    )
}




