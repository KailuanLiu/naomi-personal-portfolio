import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-64 overflow-hidden rounded-3xl">
      <Image
        src="/ocean-banner.jpg"
        alt="ocean banner"
        fill
        className="object-cover"
      />
    </div>
  );
}