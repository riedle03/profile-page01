import { ArrowUpRight, Mail, Phone } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useActiveSection } from '@/hooks/use-active-section'
import { awards, books, careers, courses, profile } from '@/data/profile'
import { cn } from '@/lib/utils'

const sections = [
  { id: 'books', label: '출간 도서' },
  { id: 'courses', label: '원격연수' },
  { id: 'career', label: '경력' },
  { id: 'awards', label: '수상' },
]

const sectionIds = sections.map((s) => s.id)

const stats = [
  { label: '출간 도서', value: books.length, unit: '권' },
  { label: '원격연수', value: courses.length, unit: '과정' },
  { label: '수상', value: awards.length, unit: '건' },
  { label: '교단', value: new Date().getFullYear() - 2012, unit: '년차' },
]

function SectionHeading({ id, title, meta }: { id: string; title: string; meta: string }) {
  return (
    <div className="mb-7">
      <div className="flex items-baseline justify-between gap-4">
        <h2 id={`${id}-heading`} className="text-[15px] font-semibold tracking-tight">
          {title}
        </h2>
        <span className="tabular text-xs text-muted-foreground">{meta}</span>
      </div>
      <Separator className="mt-3 bg-border/70" />
    </div>
  )
}

export default function App() {
  const active = useActiveSection(sectionIds)
  const newBooks = books.filter((b) => b.isNew)
  const otherBooks = books.filter((b) => !b.isNew)
  const topAwards = awards.slice(0, 5)
  const moreAwards = awards.slice(5)

  return (
    <div className="min-h-svh bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,296px)_minmax(0,1fr)] lg:gap-24">
          {/* 좌측 고정 레일 */}
          <aside className="lg:sticky lg:top-16 lg:self-start">
            <Avatar className="h-[88px] w-[88px] rounded-2xl ring-1 ring-border">
              <AvatarImage src={profile.photo} alt={`${profile.name} 프로필 사진`} />
              <AvatarFallback className="rounded-2xl text-base font-medium">이대형</AvatarFallback>
            </Avatar>

            <p className="mt-7 text-[13px] font-medium text-muted-foreground">{profile.role}</p>
            <h1 className="mt-1.5 text-[2.75rem] font-semibold leading-none tracking-[-0.045em]">
              {profile.name}
            </h1>
            <p className="mt-5 text-pretty text-[13.5px] leading-6 text-muted-foreground">
              {profile.intro}
            </p>

            <div className="mt-6 flex flex-col gap-2">
              <Button variant="outline" size="sm" className="tabular justify-start" asChild>
                <a href={`tel:${profile.contact.phone}`}>
                  <Phone />
                  {profile.contact.phone}
                </a>
              </Button>
              <Button variant="outline" size="sm" className="justify-start" asChild>
                <a href={`mailto:${profile.contact.email}`}>
                  <Mail />
                  {profile.contact.email}
                </a>
              </Button>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-border">
              {stats.map((s) => (
                <div key={s.label} className="bg-background px-3.5 py-3">
                  <dt className="text-[11px] text-muted-foreground">{s.label}</dt>
                  <dd className="tabular mt-0.5 text-[26px] font-semibold leading-tight tracking-[-0.03em]">
                    {s.value}
                    <span className="ml-1 text-[13px] font-normal text-muted-foreground">
                      {s.unit}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            {/* 섹션 길잡이 */}
            <nav aria-label="섹션 이동" className="mt-8 hidden lg:block">
              <ul className="space-y-px">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      aria-current={active === s.id ? 'true' : undefined}
                      className={cn(
                        'flex items-center gap-3 rounded-md py-1.5 text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                        active === s.id
                          ? 'font-medium text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          'h-px transition-all',
                          active === s.id ? 'w-7 bg-primary' : 'w-3.5 bg-border'
                        )}
                      />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 flex flex-wrap gap-1.5">
              {profile.keywords.slice(0, 8).map((k) => (
                <Badge
                  key={k}
                  variant="outline"
                  className="rounded-full border-border/80 px-2.5 py-0.5 text-[11.5px] font-normal text-muted-foreground"
                >
                  {k}
                </Badge>
              ))}
            </div>
          </aside>

          {/* 우측 콘텐츠 */}
          <main className="space-y-20">
            {/* 출간 도서 */}
            <section id="books" aria-labelledby="books-heading" className="scroll-mt-16">
              <SectionHeading id="books" title="출간 도서" meta={`${books.length}권`} />

              <ul className="grid gap-4 md:grid-cols-2">
                {newBooks.map((book) => (
                  <li key={book.title}>
                    <Card className="flex h-full flex-col bg-muted/40 p-5">
                      <div className="flex gap-5">
                        <img
                          src={book.cover}
                          alt={`${book.title} 표지`}
                          className="aspect-[3/4] w-[92px] shrink-0 rounded-md object-cover shadow-sm ring-1 ring-black/5"
                        />
                        <div className="flex min-w-0 flex-col">
                          <Badge className="mb-2.5 w-fit rounded-full px-2.5 text-[11.5px]">
                            신간 · {book.year}
                          </Badge>
                          <h3 className="text-pretty text-[17px] font-semibold leading-snug tracking-tight">
                            {book.title}
                          </h3>
                          <p className="mt-2 text-[13px] text-muted-foreground">
                            {book.publisher} · {book.role}
                          </p>
                        </div>
                      </div>
                      {book.blurb && (
                        <p className="mt-4 text-pretty text-[13.5px] leading-6 text-muted-foreground">
                          {book.blurb}
                        </p>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 w-fit bg-background"
                        asChild
                      >
                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                          {book.store ?? '서점에서 보기'}
                          <ArrowUpRight />
                        </a>
                      </Button>
                    </Card>
                  </li>
                ))}
              </ul>

              <ul className="mt-7 grid grid-cols-3 gap-5 sm:gap-7">
                {otherBooks.map((book) => (
                  <li key={book.title}>
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                    >
                      <img
                        src={book.cover}
                        alt={`${book.title} 표지`}
                        loading="lazy"
                        className="aspect-[3/4] w-[86px] rounded-md object-cover shadow-sm ring-1 ring-black/5 transition-shadow group-hover:shadow-md"
                      />
                      <h3 className="mt-3 text-pretty text-[13px] font-medium leading-snug underline-offset-4 group-hover:underline">
                        {book.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">{book.publisher}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* 원격연수 */}
            <section id="courses" aria-labelledby="courses-heading" className="scroll-mt-16">
              <SectionHeading id="courses" title="원격연수" meta={`${courses.length}과정`} />
              <ul className="-mt-1 divide-y">
                {courses.map((course) => (
                  <li key={course.title}>
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex gap-5 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <img
                        src={course.thumb}
                        alt=""
                        loading="lazy"
                        className="hidden h-[70px] w-[118px] shrink-0 rounded-md object-cover ring-1 ring-border grayscale transition-[filter] duration-300 group-hover:grayscale-0 sm:block"
                      />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-muted-foreground">
                          <span className="font-medium text-foreground">{course.platform}</span>
                          <span aria-hidden className="h-3 w-px bg-border" />
                          <span>{course.hours}</span>
                          {course.isNew && (
                            <Badge className="rounded-full px-2 py-0 text-[10.5px] font-medium">
                              신규
                            </Badge>
                          )}
                        </div>
                        <h3 className="mt-1.5 text-pretty text-[15px] font-semibold leading-snug tracking-tight underline-offset-4 group-hover:underline">
                          {course.title}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 text-pretty text-[13px] leading-6 text-muted-foreground">
                          {course.description}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* 경력 */}
            <section id="career" aria-labelledby="career-heading" className="scroll-mt-16">
              <SectionHeading id="career" title="경력" meta={`${careers.length}건`} />
              <dl className="-mt-1 divide-y">
                {careers.map((c) => (
                  <div
                    key={c.title}
                    className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 py-3.5"
                  >
                    <dt className="text-[14.5px] font-medium">{c.title}</dt>
                    {c.detail && (
                      <dd className="text-[13px] text-muted-foreground">{c.detail}</dd>
                    )}
                  </div>
                ))}
              </dl>
            </section>

            {/* 수상 */}
            <section id="awards" aria-labelledby="awards-heading" className="scroll-mt-16">
              <SectionHeading id="awards" title="수상" meta={`${awards.length}건`} />
              <ul className="-mt-1 divide-y">
                {topAwards.map((a) => (
                  <li
                    key={a.title}
                    className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 py-3.5"
                  >
                    <span className="text-pretty text-[14.5px] font-medium leading-snug">
                      {a.title}
                    </span>
                    <span className="text-[13px] text-muted-foreground">{a.institution}</span>
                  </li>
                ))}
              </ul>
              <Accordion type="single" collapsible>
                <AccordionItem value="more" className="border-t-0">
                  <AccordionTrigger className="text-[13px] text-muted-foreground">
                    나머지 {moreAwards.length}건 보기
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="divide-y border-t">
                      {moreAwards.map((a) => (
                        <li
                          key={a.title}
                          className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 py-3.5"
                        >
                          <span className="text-pretty text-[14.5px] font-medium leading-snug">
                            {a.title}
                          </span>
                          <span className="text-[13px] text-muted-foreground">{a.institution}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <footer className="pt-2 text-[13px] text-muted-foreground">
              {profile.since} · {new Date().getFullYear()}
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
