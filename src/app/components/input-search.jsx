'use client'

import { Input } from "@nextui-org/react"
import { IconSearch } from "@tabler/icons-react"

export default function InputSearch() {
  return (
    <Input
        label="Search Steam ID or Vanity Name"
        isClearable
        autoFocus
        radius="lg"
        name="steamID64"
        variant="bordered"
        classNames={{
          label: "text-white/90",
          input: [
            "bg-transparent",
            "text-white/90",
            "placeholder:placeholder:text-white/60",
          ],
        }}
        placeholder="765611983xxxxxxxx"
        startContent={
          <IconSearch className="flex-shrink-0 pointer-events-none text-white/90 text-slate-400" />
        }
      />
  )
}
