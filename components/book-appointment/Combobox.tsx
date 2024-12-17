"use client"

import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export type ComboboxData = {
    value: string
    label: string
}

export type PropsBookAppointmentCombobox = {
    label: string
    data: ComboboxData[] // Ensure the data is typed correctly as an array of ComboboxData
    selectedItem: ComboboxData | null
    onChange: (item: ComboboxData | null) => void // Callback to notify parent about selection change
}

export function Combobox({ label, data, selectedItem, onChange }: PropsBookAppointmentCombobox) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    // For desktop: Use Popover
    if (isDesktop) {
        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                        {selectedItem ? <>{selectedItem.label}</> : <>{label}</>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0" align="start">
                    <DataList
                        data={data}
                        setOpen={setOpen}
                        setSelectedItem={(item) => {
                            onChange(item)
                            setOpen(false)
                        }}
                    />
                </PopoverContent>
            </Popover>
        )
    }

    // For mobile: Use Drawer
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline" className="w-[150px] justify-start">
                    {selectedItem ? <>{selectedItem.label}</> : <>{label}</>}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mt-4 border-t">
                    <DataList
                        data={data}
                        setOpen={setOpen}
                        setSelectedItem={(item) => {
                            onChange(item)
                            setOpen(false)
                        }}
                    />
                </div>
            </DrawerContent>
        </Drawer>
    )
}

function DataList({
    data,
    setOpen,
    setSelectedItem,
}: {
    data: ComboboxData[]
    setOpen: (open: boolean) => void
    setSelectedItem: (item: ComboboxData | null) => void
}) {
    return (
        <Command>
            <CommandInput placeholder="Filter Data..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                    {data.map((item) => (
                        <CommandItem
                            key={item.value}
                            onSelect={() => {
                                console.log("Selected Item:", item)  // Log item here
                                setSelectedItem(item) // Pass the selected item (ComboboxData) directly
                                setOpen(false)
                            }}
                        >
                            {item.label}
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </Command>
    )
}

