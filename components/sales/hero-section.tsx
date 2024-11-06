// Update imports to include next/image
import Image from "next/image";

// ... rest of the code, then update the img tag:
<div className="mt-16 rounded-xl border bg-background/60 shadow-2xl backdrop-blur-sm overflow-hidden relative aspect-video">
  <Image
    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80"
    alt="Dashboard"
    fill
    className="object-cover"
  />
</div>