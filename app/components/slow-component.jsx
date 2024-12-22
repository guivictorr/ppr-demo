export async function SlowComponent({ delay }) {
  await new Promise((resolve) =>
    setTimeout(() => resolve(null), delay ?? 1000),
  );
  return <p>Slow component</p>;
}
