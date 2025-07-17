function Page2() {
    // Extracting query parameters from URL
    const params = new URLSearchParams(window.location.search);
    const fromLocation = params.get('fromLocation');
    const toLocation = params.get('toLocation');
    const date = params.get('date');
  
    return (
      <div>
        <h2>Page 2</h2>
        <p>From Location: {fromLocation}</p>
        <p>To Location: {toLocation}</p>
        <p>Date: {date}</p>
      </div>
    );
  }

  export default Page2;