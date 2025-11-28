import { useEffect, useState } from "react";
export default function CounterDownTimer({count,setCount,children}) {
  // const [count, setCount] = useState({
  //   second: second,
  //   minute: minute,
  //   hour: hour,
  //   day: day

  // });


  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        let { second, minute, hour, day } = prev
        if (second > 0) {
          return { ...prev, second: second - 1 }

        }
        second = 59
        if (minute > 0) {
          return { ...prev, second: second, minute: minute - 1 }

        }
        minute = 59
        if (hour > 0) {
          return { ...prev, second: second, minute: minute, hour: hour - 1 }
        }
        hour = 23
        if (day > 0)
          return { second: second, minute: minute, hour: hour, day: day - 1 }
        day = 0
        return { second: second, minute: minute, hour: hour, day: day }



      })

    }, 1000)
    return () => clearInterval(timer)

  }, []);
 

  return (
   <>{children}</>
  );
}


