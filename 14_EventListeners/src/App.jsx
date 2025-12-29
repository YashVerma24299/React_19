import React, { useEffect } from "react";

// TEMPLATE
// useEffect(() => {
//   const handler = () => {
//     console.log("Event triggered");
//   };
//   window.addEventListener("event-name", handler);
//   return () => {
//     window.removeEventListener("event-name", handler);
//   };
// }, []);

const App = () => {
  //2.
  // useEffect(() => {
  //   const navType = performance.getEntriesByType("navigation")[0].type;

  //   if (navType === "reload") {
  //     console.log("Page Reloaded");
  //   } else {
  //     console.log("First Load");
  //   }
  // }, []);

  // 3.
  // useEffect(() => {
  //   const handleBeforeUnload = (e) => {
  //     e.preventDefault();
  //     e.returnValue = "";
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);
  //   return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  // }, []);

  // 4.
  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log("Scroll Y:", window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  //5.
  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     console.log("Key:", e.key);
  //   };

  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => window.removeEventListener("keydown", handleKeyDown);
  // }, []);

  //6.
  // useEffect(() => {
  //   const handleResize = () => {
  //     console.log("Width:", window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // 7.
  // useEffect(() => {
  //   const handleVisibility = () => {
  //     console.log(document.visibilityState);
  //   };

  //   document.addEventListener("visibilitychange", handleVisibility);
  //   return () =>
  //     document.removeEventListener("visibilitychange", handleVisibility);
  // }, []);

  // 7. Try one by one
  // useEffect(() => {
  //   const focus = () => console.log("Window Focused");
  //   const blur = () => console.log("Window Blurred");

  //   window.addEventListener("focus", focus);
  //   window.addEventListener("blur", blur);

  //   return () => {
  //     window.removeEventListener("focus", focus);
  //     window.removeEventListener("blur", blur);
  //   };
  // }, []);

  return (
    <>
      <h1>Window EventListeners</h1>
      <div
        onMouseEnter={() => console.log("Mouse Enter")}
        onMouseLeave={() => console.log("Mouse Leave")}
        style={{ background: "pink" }}
      >
        1. Hover Me
      </div>
      <br></br>

      <div>2. Page Refresh</div>
      <br />

      <span>
        3. <input placeholder="Type something first and reload" />
      </span>
      <br />
      <br />

      <div style={{ height: "200vh", background: "pink" }}>4. </div>
      <br />

      <span>
        5. <input placeholder="Type something here" />
      </span>
      <br />

      <p>6. Change Screen Width</p>

      <span>
        7. Change Tabs ~ Used the "visibilitychange" event to pause video and
        stop API calls when the user switches tabs, and resume them when the
        user comes back.   ~   Focus & Blur
      </span>
    </>
  );
};

export default App;
