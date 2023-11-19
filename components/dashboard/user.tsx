import Image from "next/image"

export default function User() {
  return (
    <div className="mb-5 flex items-center gap-5">
      <Image
        src={"/noavatar.png"}
        alt=""
        width={50}
        height={50}
        className="rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="font-[500]">John Joe</span>
        <span className="text-accent-foreground text-xs">Administrator</span>
      </div>
    </div>
  )
}
