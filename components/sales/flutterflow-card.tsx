// Update the img tag to use next/image
// ... previous imports
import Image from "next/image";

// ... rest of the code, then update the img tag:
<div className="relative h-full">
  <Image
    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1024&q=80"
    alt="App Development"
    className="rounded-xl object-cover"
    fill
  />
  // ... rest of the component