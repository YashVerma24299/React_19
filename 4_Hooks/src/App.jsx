import Parent from "./components/callParentComponentFunctionFromChildComponent/Parent"
import ContextAPI from "./components/ContextApi/ContextAPI"
import CstmHook from "./components/CustomHook/CstmHook"
import ParentForwardRef from "./components/ForwardRef/ParentForwardRef"
import { ReactMemo } from "./components/React.Memo/ReactMemo"
import UncontrolledComponents from "./components/UncontrolledComponents/UncontrolledComponents"
import UseActionState from "./components/UseActionState/UseActionState"
import { UseCallBack } from "./components/useCallBack/UseCallBack"
import UseFormStatus from "./components/UseFormStatus/UseFormStatus"
import UseId from "./components/UseId/UseId"
import { UseMemo } from "./components/useMemo/UseMemo"
import UseReducer from "./components/useReducer/useReducer"
import UseReff from "./components/UseRef/UseReff"
import UseTransitionHook from "./components/UseTransitionHook/UseTransitionHook"

function App() {
  return (
    <>
      {/* <UseReff/> */}
      {/* <UncontrolledComponents/> */}
      {/* <Parent/> */}
      {/* <ParentForwardRef/> */}
      {/* <UseFormStatus/> */}
      {/* <UseTransitionHook/> */}
      {/* <UseActionState/> */}
      {/* <UseId/> */}
      {/* <ContextAPI/> */}
      {/* <CstmHook/> */}
      {/* <UseReducer/> */}
      {/* <ReactMemo/> */}
      {/* <UseMemo/> */}
      <UseCallBack/>
    </>
  )
}

export default App
