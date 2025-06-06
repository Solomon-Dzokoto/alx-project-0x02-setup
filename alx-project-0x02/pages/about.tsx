import Header from '@/components/layout/Header';
import Button from '@/components/common/Button'; // Import Button

export default function AboutPage() {
  return (
    <>
      <Header />
      <div style={{ padding: '20px' }}>
        <h1>About Page</h1>
        <p>This page demonstrates the reusable Button component.</p>

        <div style={{ marginTop: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Button size="small" shape="rounded-sm">Small SM</Button>
          <Button size="medium" shape="rounded-md">Medium MD</Button>
          <Button size="large" shape="rounded-full">Large Full</Button>
        </div>
        <div style={{ marginTop: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Button size="small" shape="rounded-full" onClick={() => alert('Small Full Clicked!')}>Small Full</Button>
          <Button className="bg-green-500 hover:bg-green-700">Medium Default (Green)</Button>
          <Button size="large" shape="rounded-sm" disabled>Large SM (Disabled)</Button>
        </div>
      </div>
    </>
  );
}
