"use client"

import * as React from "react"
import { Moon, Sun, Monitor, Palette } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  const themeOptions = [
    {
      value: "light",
      label: "Light",
      icon: Sun,
      description: "Bright and clean",
    },
    {
      value: "dark",
      label: "Dark",
      icon: Moon,
      description: "Easy on the eyes",
    },
    {
      value: "system",
      label: "System",
      icon: Monitor,
      description: "Follows your device",
    },
  ]

  const getCurrentIcon = () => {
    switch (theme) {
      case "light":
        return Sun
      case "dark":
        return Moon
      case "system":
        return Monitor
      default:
        return Sun
    }
  }

  const CurrentIcon = getCurrentIcon()

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="group relative overflow-hidden backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-2xl px-4 py-2 h-auto min-w-[100px] transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from--500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon container with morphing animation */}
          <div className="relative flex items-center gap-2 z-10">
            <div className="relative w-5 h-5 flex items-center justify-center">
              {/* Light mode icon */}
              <Sun
                className={`absolute transition-all duration-700 ease-in-out ${
                  theme === "light" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-180 opacity-0"
                }`}
              />

              {/* Dark mode icon */}
              <Moon
                className={`absolute transition-all duration-700 ease-in-out ${
                  theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-180 opacity-0"
                }`}
              />

              {/* System mode icon */}
              <Monitor
                className={`absolute transition-all duration-700 ease-in-out ${
                  theme === "system" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
                }`}
              />
            </div>

            {/* Text with gradient */}
            <span className="hidden md:inline text-sm font-medium bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-500">
              Theme
            </span>

            {/* Dropdown indicator */}
            <div
              className={`w-2 h-2 border-r-2 border-b-2 border-white/60 transform transition-transform duration-300 ${
                isOpen ? "-rotate-45 translate-y-0.5" : "rotate-45 -translate-y-0.5"
              }`}
            />
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-blue-500/10 transition-all duration-500 blur-xl" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 mt-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl shadow-black/20 overflow-hidden"
        sideOffset={8}
      >
        {/* Header */}
        <div className="px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-white/80" />
            <span className="text-sm font-semibold text-white/90">Choose Theme</span>
          </div>
        </div>

        {/* Theme Options */}
        <div className="p-2">
          {themeOptions.map((option, index) => {
            const Icon = option.icon
            const isSelected = theme === option.value

            return (
              <DropdownMenuItem
                key={option.value}
                onClick={() => setTheme(option.value)}
                className={`group relative overflow-hidden rounded-xl p-3 cursor-pointer transition-all duration-300 hover:bg-white/10 focus:bg-white/10 ${
                  isSelected ? "bg-white/15 shadow-lg" : ""
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Selection indicator */}
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-400 rounded-r-full" />
                )}

                {/* Content */}
                <div className="flex items-center gap-3 relative z-10">
                  <div
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isSelected
                        ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 shadow-lg"
                        : "bg-white/5 group-hover:bg-white/10"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 transition-all duration-300 ${
                        isSelected
                          ? "text-white scale-110"
                          : "text-white/70 group-hover:text-white group-hover:scale-105"
                      }`}
                    />
                  </div>

                  <div className="flex-1">
                    <div
                      className={`font-medium transition-colors duration-300 ${
                        isSelected ? "text-white" : "text-white/80 group-hover:text-white"
                      }`}
                    >
                      {option.label}
                    </div>
                    <div className="text-xs text-white/50 group-hover:text-white/70 transition-colors duration-300">
                      {option.description}
                    </div>
                  </div>

                  {/* Check mark for selected */}
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 animate-pulse" />
                  )}
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
              </DropdownMenuItem>
            )
          })}
        </div>

        <DropdownMenuSeparator className="bg-white/10" />

        {/* Footer */}
        <div className="px-4 py-2">
          <div className="text-xs text-white/50 text-center">Theme preference saved automatically</div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
