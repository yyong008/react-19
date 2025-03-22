import { RefObject, useRef } from "react";

export default function RefAsProps() {
  const ref = useRef<any>(null);
  return (
    <div>
      <InnerComp ref={ref} />
    </div>
  );
}

function InnerComp(props: { ref: RefObject<any> }) {
  return <div ref={props.ref}></div>;
}
