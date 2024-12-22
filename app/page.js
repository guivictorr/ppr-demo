import { Suspense } from "react";
import { SlowComponent } from "./components/slow-component";

async function Content() {
  return (
    <div>
      <SlowComponent delay={1000} />
      <SlowComponent delay={2000} />
      <SlowComponent delay={5000} />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h1>This should be returned immediately</h1>
      <Suspense fallback="Loading...">
        <Content />
      </Suspense>
    </div>
  );
}
