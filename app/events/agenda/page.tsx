"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock3,
  Flame,
  Footprints,
  MapPin,
  MoonStar,
  Shield,
  Sparkles,
  SunMedium,
  TimerReset,
  Users,
} from "lucide-react"

const RETREAT_TIME_ZONE = "Africa/Johannesburg"

type ScheduleItem = {
  start: string
  end: string
  title: string
  description?: string
  highlights?: string[]
}

type RetreatDay = {
  key: string
  label: string
  date: string
  theme: string
  accent: string
  icon: typeof Sparkles
  schedule: ScheduleItem[]
}

const retreatFlow = [
  "morning exercise",
  "devotion",
  "team activities",
  "games",
  "character-building sessions",
  "bonfire conversations",
  "Gentlemen's Club feature",
  "night devotion",
  "rest",
]

const retreatDays: RetreatDay[] = [
  {
    key: "2026-03-29",
    label: "Day 1",
    date: "Sunday, 29 March 2026",
    theme: "Welcome, Brotherhood and Belonging",
    accent: "from-secondary/30 via-secondary/10 to-transparent",
    icon: Sparkles,
    schedule: [
      {
        start: "12:00",
        end: "13:00",
        title: "Arrival and registration",
        highlights: ["check-in", "room allocation", "settling in", "welcome refreshments"],
      },
      { start: "13:00", end: "14:00", title: "Lunch" },
      { start: "14:00", end: "14:30", title: "Official welcome and opening prayer" },
      {
        start: "14:30",
        end: "15:30",
        title: "Introductions",
        highlights: ["meet the leaders", "meet the boys", "retreat overview", "house rules and expectations"],
      },
      {
        start: "15:30",
        end: "16:15",
        title: "Ice breakers",
        highlights: ["fun name games", "movement activities", "getting to know each other"],
      },
      {
        start: "16:15",
        end: "17:15",
        title: "Team formation",
        highlights: ["divide into teams", "choose team names", "assign team chants / identity", "team bonding"],
      },
      {
        start: "17:15",
        end: "18:30",
        title: "Cooking activity",
        highlights: ["simple group cooking challenge", "teamwork and responsibility focus"],
      },
      { start: "18:30", end: "19:15", title: "Dinner" },
      {
        start: "19:15",
        end: "20:15",
        title: "Night devotion",
        description: "Theme: Who am I becoming?",
      },
      {
        start: "20:15",
        end: "21:00",
        title: "Reflection and quiet time",
        highlights: ["journal moment", "team sharing"],
      },
      { start: "21:00", end: "21:30", title: "Prepare for bed" },
      { start: "21:30", end: "23:59", title: "Sleep" },
    ],
  },
  {
    key: "2026-03-30",
    label: "Day 2",
    date: "Monday, 30 March 2026",
    theme: "Discipline, Character and Teamwork",
    accent: "from-primary/25 via-secondary/10 to-transparent",
    icon: Footprints,
    schedule: [
      { start: "06:30", end: "07:00", title: "Wake up" },
      {
        start: "07:00",
        end: "07:30",
        title: "Morning exercise",
        highlights: ["stretching", "light fitness", "team warm-up challenge"],
      },
      {
        start: "07:30",
        end: "08:00",
        title: "Morning devotion",
        description: "Theme: Strong boys build strong habits",
      },
      { start: "08:00", end: "09:00", title: "Breakfast and freshen up" },
      {
        start: "09:00",
        end: "10:30",
        title: "Session 1: Identity and Discipline",
        highlights: ["who I am", "habits that build a strong life", "wise choices"],
      },
      { start: "10:30", end: "11:00", title: "Snack break" },
      {
        start: "11:00",
        end: "12:30",
        title: "Activities and team challenge",
        highlights: ["obstacle challenge", "relay games", "problem-solving activity"],
      },
      { start: "12:30", end: "13:30", title: "Lunch" },
      {
        start: "13:30",
        end: "15:00",
        title: "Games block",
        highlights: ["soccer", "tug of war", "team games", "fun competitions"],
      },
      {
        start: "15:00",
        end: "16:00",
        title: "Session 2: Character Matters",
        description: "Focus on respect, responsibility, self-control, courage, and integrity.",
      },
      { start: "16:00", end: "16:30", title: "Break / refreshments" },
      {
        start: "16:30",
        end: "18:00",
        title: "Creative team activity",
        highlights: ["poster making", "team shield / badge design", "character challenge board"],
      },
      { start: "18:00", end: "19:00", title: "Dinner" },
      {
        start: "19:00",
        end: "20:00",
        title: "Bonfire conversation",
        description: "Theme: What makes a real gentleman?",
        highlights: ["honesty", "courage", "responsibility", "respect"],
      },
      {
        start: "20:00",
        end: "20:30",
        title: "Night devotion",
        description: "Theme: Guard your heart and your choices",
      },
      { start: "20:30", end: "21:00", title: "Wind down" },
      { start: "21:30", end: "23:59", title: "Sleep" },
    ],
  },
  {
    key: "2026-03-31",
    label: "Day 3",
    date: "Tuesday, 31 March 2026",
    theme: "Leadership, Gentlemen's Club and Vision",
    accent: "from-secondary/25 via-primary/10 to-transparent",
    icon: Shield,
    schedule: [
      { start: "06:30", end: "07:00", title: "Wake up" },
      {
        start: "07:00",
        end: "07:30",
        title: "Morning exercise",
        highlights: ["fitness circuit", "team challenge"],
      },
      {
        start: "07:30",
        end: "08:00",
        title: "Morning devotion",
        description: "Theme: Lead yourself well",
      },
      { start: "08:00", end: "09:00", title: "Breakfast and freshen up" },
      {
        start: "09:00",
        end: "10:30",
        title: "Session 3: Healthy Masculinity and Confidence",
        highlights: [
          "strength the right way",
          "confidence without pride",
          "how boys become trustworthy men",
        ],
      },
      { start: "10:30", end: "11:00", title: "Snack break" },
      {
        start: "11:00",
        end: "12:30",
        title: "Gentlemen's Club feature",
        highlights: [
          "introduction to the Gentlemen's Club",
          "what it means to be a gentleman",
          "Gentlemen's Code",
          "discussion on respect, responsibility and honour",
        ],
      },
      { start: "12:30", end: "13:30", title: "Lunch" },
      {
        start: "13:30",
        end: "15:00",
        title: "Fun activities and games",
        highlights: ["Easter egg hunt / character quest", "team missions", "challenge stations"],
      },
      {
        start: "15:00",
        end: "16:00",
        title: "Session 4: Vision and Purpose",
        highlights: ["where am I going?", "future dreams", "goals and gifts", "becoming a boy of purpose"],
      },
      { start: "16:00", end: "16:30", title: "Break" },
      {
        start: "16:30",
        end: "18:00",
        title: "Gentlemen's Club activity",
        highlights: ["pledge preparation", "team reflection", "code card / badge / journal moment"],
      },
      { start: "18:00", end: "19:00", title: "Dinner" },
      {
        start: "19:00",
        end: "20:15",
        title: "Bonfire conversation",
        description: "Theme: Boys becoming men",
        highlights: ["leadership", "peer pressure", "courage", "identity"],
      },
      {
        start: "20:15",
        end: "20:45",
        title: "Night devotion",
        description: "Theme: Build your life on strong foundations",
      },
      { start: "20:45", end: "21:15", title: "Quiet reflection" },
      { start: "21:30", end: "23:59", title: "Sleep" },
    ],
  },
  {
    key: "2026-04-01",
    label: "Day 4",
    date: "Wednesday, 01 April 2026",
    theme: "Commissioning and Departure",
    accent: "from-primary/25 via-secondary/15 to-transparent",
    icon: SunMedium,
    schedule: [
      { start: "06:30", end: "07:00", title: "Wake up" },
      {
        start: "07:00",
        end: "07:30",
        title: "Morning exercise",
        highlights: ["light stretch", "final team movement activity"],
      },
      {
        start: "07:30",
        end: "08:00",
        title: "Morning devotion",
        description: "Theme: Keep building well",
      },
      { start: "08:00", end: "09:00", title: "Breakfast and freshen up" },
      {
        start: "09:00",
        end: "10:00",
        title: "Closing session",
        highlights: ["lessons learned", "team reflections", "what I am taking home", "gratitude circle"],
      },
      {
        start: "10:00",
        end: "11:00",
        title: "Gentlemen's Club closing / affirmation moment",
        highlights: ["commitment to character", "gentleman's pledge", "encouragement and blessing"],
      },
      { start: "11:00", end: "11:30", title: "Packing and departure preparation" },
      { start: "11:30", end: "12:00", title: "Closing prayer and departure" },
    ],
  },
]

function timeToMinutes(value: string) {
  const [hours, minutes] = value.split(":").map(Number)
  return hours * 60 + minutes
}

function getZonedDateParts(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: RETREAT_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  const parts = formatter.formatToParts(date)
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "00"

  return {
    key: `${get("year")}-${get("month")}-${get("day")}`,
    hours: Number(get("hour")),
    minutes: Number(get("minute")),
  }
}

function getLiveAgendaState(date: Date) {
  const zoned = getZonedDateParts(date)
  const today = retreatDays.find((day) => day.key === zoned.key)
  const currentMinutes = zoned.hours * 60 + zoned.minutes

  if (!today) {
    const firstDay = retreatDays[0]
    const lastDay = retreatDays[retreatDays.length - 1]

    return {
      selectedDayKey: zoned.key < firstDay.key ? firstDay.key : lastDay.key,
      today: null,
      currentItemIndex: -1,
      nextItemIndex: -1,
      phase: zoned.key < firstDay.key ? "upcoming" : "complete",
    } as const
  }

  let currentItemIndex = -1
  let nextItemIndex = -1

  today.schedule.forEach((item, index) => {
    const start = timeToMinutes(item.start)
    const end = timeToMinutes(item.end)

    if (currentMinutes >= start && currentMinutes < end) {
      currentItemIndex = index
    }

    if (nextItemIndex === -1 && currentMinutes < start) {
      nextItemIndex = index
    }
  })

  return {
    selectedDayKey: today.key,
    today,
    currentItemIndex,
    nextItemIndex,
    phase: currentItemIndex >= 0 ? "live" : nextItemIndex >= 0 ? "today" : "ended",
  } as const
}

function getItemTone(title: string) {
  const lowerTitle = title.toLowerCase()

  if (lowerTitle.includes("bonfire")) return Flame
  if (lowerTitle.includes("devotion")) return MoonStar
  if (lowerTitle.includes("exercise") || lowerTitle.includes("wake up")) return Footprints
  if (lowerTitle.includes("team") || lowerTitle.includes("session")) return Users
  return Clock3
}

export default function AgendaPage() {
  const [now, setNow] = useState<Date | null>(null)
  const [selectedDayKey, setSelectedDayKey] = useState(retreatDays[0].key)
  const [followLiveDay, setFollowLiveDay] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)

    const sync = () => {
      const current = new Date()
      setNow(current)
      const liveState = getLiveAgendaState(current)
      setSelectedDayKey((existing) => (followLiveDay ? liveState.selectedDayKey : existing))
    }

    sync()
    const interval = window.setInterval(sync, 60_000)

    return () => window.clearInterval(interval)
  }, [followLiveDay])

  const liveState = useMemo(() => getLiveAgendaState(now ?? new Date()), [now])
  const selectedDay = retreatDays.find((day) => day.key === selectedDayKey) ?? retreatDays[0]
  const SelectedDayIcon = selectedDay.icon
  const liveItem = liveState.today && liveState.currentItemIndex >= 0 ? liveState.today.schedule[liveState.currentItemIndex] : null
  const nextItem = liveState.today && liveState.nextItemIndex >= 0 ? liveState.today.schedule[liveState.nextItemIndex] : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <Navigation />

      <section className="relative overflow-hidden px-4 pb-10 pt-22 sm:px-6 sm:pb-12 sm:pt-24">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_hsl(var(--secondary)/0.18),_transparent_60%)]" />
        <div className="max-w-6xl mx-auto relative">
          <Link
            href="/events"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>

          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 sm:space-y-6">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full glass-subtle px-4 py-2">
                <TimerReset className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">Live retreat agenda</span>
              </div>

              <div>
                <h1 className="font-serif text-3xl leading-tight sm:text-4xl md:text-6xl font-bold text-foreground mb-4 crystal-text">
                  Built Different Boys Retreat Agenda
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  A playful, structured flow for a boys retreat built around brotherhood, character, movement, and
                  reflection.
                </p>
              </div>

              <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
                <div className="glass rounded-3xl p-4 sm:p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="h-5 w-5 text-secondary" />
                    <p className="text-sm font-medium text-muted-foreground">Dates</p>
                  </div>
                  <p className="font-semibold text-foreground">29 March - 01 April 2026</p>
                </div>
                <div className="glass rounded-3xl p-4 sm:p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                  </div>
                  <p className="font-semibold text-foreground">Thornville</p>
                </div>
                <div className="glass rounded-3xl p-4 sm:p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock3 className="h-5 w-5 text-secondary" />
                    <p className="text-sm font-medium text-muted-foreground">Arrival / Departure</p>
                  </div>
                  <p className="font-semibold text-foreground">12:00 in, 12:00 out</p>
                </div>
              </div>
            </div>

            <Card className="glass-strong border-primary/20 overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-primary" />
              <CardContent className="p-5 sm:p-6 space-y-5">
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Right now</p>
                  <span className="rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary">
                    {liveState.phase === "live"
                      ? "Live now"
                      : liveState.phase === "today"
                        ? "Starts later today"
                        : liveState.phase === "upcoming"
                          ? "Upcoming"
                          : liveState.phase === "complete"
                            ? "Retreat complete"
                            : "Day ended"}
                  </span>
                </div>

                {liveItem ? (
                  <div className="space-y-3">
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-foreground">{liveItem.title}</p>
                    <p className="text-secondary font-medium">
                      {liveItem.start} - {liveItem.end} SAST
                    </p>
                    {liveItem.description && <p className="text-muted-foreground">{liveItem.description}</p>}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="font-serif text-3xl font-bold text-foreground">
                      {liveState.phase === "upcoming"
                        ? "Retreat starts soon"
                        : liveState.phase === "complete"
                          ? "Retreat wrapped up"
                          : "Today is between sessions"}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {liveState.phase === "upcoming"
                        ? "The tracker will automatically switch to the live item once the retreat begins."
                        : liveState.phase === "complete"
                          ? "This page keeps the full programme available for recap and planning."
                          : "The next scheduled block is ready below."}
                    </p>
                  </div>
                )}

                <div className="rounded-3xl bg-background/60 border border-border/60 p-4">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Next up</p>
                  <p className="font-semibold text-foreground">
                    {nextItem ? `${nextItem.start} - ${nextItem.title}` : "No more items scheduled for today"}
                  </p>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap">
                  {retreatFlow.map((item) => (
                    <span
                      key={item}
                      className="shrink-0 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="glass-subtle rounded-[2rem] p-3">
            <div className="mb-3 flex items-center justify-between gap-3 px-1 sm:hidden">
              <p className="text-sm font-medium text-foreground">Pick a day</p>
              {!followLiveDay && (
                <button
                  type="button"
                  onClick={() => {
                    setFollowLiveDay(true)
                    setSelectedDayKey(liveState.selectedDayKey)
                  }}
                  className="text-xs font-semibold text-primary"
                >
                  Follow today
                </button>
              )}
            </div>
            <div className="flex gap-3 overflow-x-auto pb-1 md:grid md:grid-cols-4 md:overflow-visible">
              {retreatDays.map((day) => {
                const DayIcon = day.icon
                const isSelected = selectedDay.key === day.key
                const isLiveDay = liveState.today?.key === day.key

                return (
                  <button
                    key={day.key}
                    type="button"
                    onClick={() => {
                      setFollowLiveDay(false)
                      setSelectedDayKey(day.key)
                    }}
                    className={`min-w-[16rem] md:min-w-0 rounded-[1.5rem] border px-4 py-4 text-left transition-all ${
                      isSelected
                        ? "border-primary/40 bg-background shadow-lg"
                        : "border-transparent bg-background/55 hover:bg-background/80"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary/15">
                          <DayIcon className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{day.label}</p>
                          <p className="text-xs text-muted-foreground">{day.date}</p>
                        </div>
                      </div>
                      {isLiveDay && (
                        <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary">
                          Today
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-foreground font-medium">{day.theme}</p>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <Card className="glass-strong h-fit overflow-hidden">
              <div className={`h-28 bg-gradient-to-br ${selectedDay.accent}`} />
              <CardContent className="p-5 sm:p-6 -mt-10 relative">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-[1.5rem] border border-background bg-background shadow-lg mb-4">
                  <SelectedDayIcon className="h-8 w-8 text-secondary" />
                </div>
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-2">{selectedDay.label}</p>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">{selectedDay.theme}</h2>
                <p className="text-muted-foreground mb-5">{selectedDay.date}</p>

                <div className="space-y-3">
                  <div className="rounded-3xl bg-background/60 border border-border/60 p-4">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Day rhythm</p>
                    <p className="font-semibold text-foreground">
                      {selectedDay.schedule[0].start} - {selectedDay.schedule[selectedDay.schedule.length - 1].end}
                    </p>
                  </div>
                  <div className="rounded-3xl bg-background/60 border border-border/60 p-4">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Featured focus</p>
                    <p className="font-semibold text-foreground">{selectedDay.theme}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {selectedDay.schedule.map((item, index) => {
                const ItemIcon = getItemTone(item.title)
                const isLiveItem = liveState.today?.key === selectedDay.key && liveState.currentItemIndex === index
                const isNextItem = liveState.today?.key === selectedDay.key && liveState.nextItemIndex === index

                return (
                  <Card
                    key={`${selectedDay.key}-${item.start}-${item.title}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      isLiveItem
                        ? "glass-strong border-primary/40 shadow-xl ring-1 ring-primary/30"
                        : isNextItem
                          ? "glass border-secondary/30"
                          : "glass"
                    }`}
                  >
                    <CardContent className="p-4 sm:p-5 md:p-6">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="order-1 rounded-2xl bg-background/70 px-4 py-3 text-sm font-medium text-foreground md:order-2 md:min-w-28 md:text-center">
                          {item.start}
                        </div>
                        <div className="flex gap-3 sm:gap-4">
                          <div
                            className={`flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl ${
                              isLiveItem ? "bg-primary text-primary-foreground" : "bg-secondary/15 text-secondary"
                            }`}
                          >
                            <ItemIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <p className="font-serif text-xl sm:text-2xl font-bold text-foreground">{item.title}</p>
                              {isLiveItem && (
                                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                                  Happening now
                                </span>
                              )}
                              {isNextItem && !isLiveItem && (
                                <span className="rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary">
                                  Up next
                                </span>
                              )}
                            </div>
                            <p className="text-secondary font-medium mb-3">
                              {item.start} - {item.end}
                            </p>
                            {item.description && <p className="text-muted-foreground mb-3">{item.description}</p>}
                            {item.highlights && (
                              <div className="flex flex-wrap gap-2">
                                {item.highlights.map((highlight) => (
                                  <span
                                    key={highlight}
                                    className="rounded-full bg-background/75 px-3 py-1 text-sm text-foreground border border-border/60"
                                  >
                                    {highlight}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between glass-subtle rounded-[2rem] p-5 sm:p-6">
            <div>
              <p className="font-serif text-2xl font-bold text-foreground mb-2">Need the main event details too?</p>
              <p className="text-muted-foreground">
                Return to the event page for overview details, pricing, and contact information.
              </p>
            </div>
            <Link href="/events">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground glass-button">
                Back to Event Details
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
