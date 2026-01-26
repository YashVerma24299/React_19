import React, { memo, useRef } from "react";

const Count = () => {
  const useReff = useRef(0);

  return (
    <>
      <div className="">
        <p>
          Nothing changed here but I have noe rendered:
          <span>{useReff.current++} times</span>
        </p>
      </div>
    </>
  );
};
// export default Count;

//Both are same
// export default React.memo(Count);
export default memo(Count);
