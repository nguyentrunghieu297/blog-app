export default function Page() {
  return (
    <div className='min-h-screen bg-background'>
      <main className='container mx-auto px-4 py-8'>
        <div className='text-center space-y-4'>
          <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            Welcome to MySite
          </h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            This is a demo page showcasing the new modern navbar design with responsive layout and
            beautiful styling.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
            <div className='p-6 rounded-lg border bg-card'>
              <h3 className='text-lg font-semibold mb-2'>Responsive Design</h3>
              <p className='text-muted-foreground'>
                Mobile-first approach with hamburger menu on smaller screens.
              </p>
            </div>
            <div className='p-6 rounded-lg border bg-card'>
              <h3 className='text-lg font-semibold mb-2'>Modern Styling</h3>
              <p className='text-muted-foreground'>
                Beautiful gradients, hover effects, and smooth transitions.
              </p>
            </div>
            <div className='p-6 rounded-lg border bg-card'>
              <h3 className='text-lg font-semibold mb-2'>shadcn/ui Components</h3>
              <p className='text-muted-foreground'>
                Built with high-quality, accessible UI components.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
