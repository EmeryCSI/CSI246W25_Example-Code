// page.js (Server Component)
export default async function Page({
  params,
}: {
  params: Promise<{ count: number }>;
}) {
  let { count } = await params;
  count = Number(count);
  return (
    <form action={`${count + 1}`}>
      <h2>Counter: {count}</h2>
      <button type="submit">+</button>
    </form>
  );
}
