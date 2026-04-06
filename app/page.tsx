import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  MessageCircle,
  Palette,
  Sparkles,
  Users,
} from "lucide-react";

import JoinForm from "@/components/join-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const nav = [
  { href: "#about", label: "소개" },
  { href: "#programs", label: "프로그램" },
  { href: "#community", label: "커뮤니티" },
  { href: "#events", label: "이벤트" },
];

const features = [
  {
    icon: Palette,
    title: "크리틱 & 피드백",
    description:
      "포트폴리오 리뷰와 디자인 토론으로 시야를 넓히고, 동료의 시선으로 작업을 다듬어 보세요.",
  },
  {
    icon: MessageCircle,
    title: "실시간 네트워킹",
    description:
      "직군·툴·경력대별 채널에서 질문하고, 레퍼런스와 채용 정보를 빠르게 나눌 수 있어요.",
  },
  {
    icon: Sparkles,
    title: "워크숍 & 세션",
    description:
      "시니어 디자이너와 브랜드 스튜디오가 진행하는 라이브 세션과 오프라인 밋업이 열려요.",
  },
];

const stats = [
  { value: "12k+", label: "활성 멤버" },
  { value: "480+", label: "월간 게시글" },
  { value: "36", label: "협력 스튜디오" },
];

const events = [
  {
    date: "4월 12일",
    title: "UI 모션 디테일 클리닉",
    meta: "온라인 · 90분",
  },
  {
    date: "4월 19일",
    title: "제품 디자이너 커리어 밋업",
    meta: "서울 · 저녁",
  },
  {
    date: "5월 3일",
    title: "디자인 시스템 구축 스프린트",
    meta: "온라인 · 주말",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.92_0.08_280/0.35),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.35_0.12_280/0.35),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
          <Link
            href="/"
            className="font-heading text-base font-semibold tracking-tight sm:text-lg"
          >
            Frame<span className="text-violet-600 dark:text-violet-400">.</span>
            공동체
          </Link>
          <nav
            className="hidden items-center gap-6 text-sm text-muted-foreground md:flex"
            aria-label="주요 메뉴"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
              <Link href="#join">로그인</Link>
            </Button>
            <Button size="sm" className="shadow-sm" asChild>
              <Link href="#join">무료 가입</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section
          className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
              지금 커뮤니티 오픈 베타 중
            </p>
            <h1
              id="hero-heading"
              className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              디자이너가 모여
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-fuchsia-400">
                성장하는 곳
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              UX/UI, 브랜드, 프로덕트 디자이너를 위한 커뮤니티입니다. 피드백,
              채용, 스터디까지 한곳에서 이어가 보세요.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" className="h-11 min-w-[180px] px-6 shadow-md" asChild>
                <Link href="#join">
                  커뮤니티 참여하기
                  <ArrowRight
                    className="size-4 transition-transform group-hover/button:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-11 min-w-[180px]" asChild>
                <Link href="#programs">프로그램 둘러보기</Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="border-y border-border/80 bg-muted/30 py-16 sm:py-20"
          aria-labelledby="about-heading"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-3 sm:gap-8 sm:px-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center sm:text-left"
              >
                <p className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="programs"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
          aria-labelledby="programs-heading"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="programs-heading"
              className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              왜 Frame 공동체인가요?
            </h2>
            <p className="mt-4 text-muted-foreground">
              혼자 고민하던 디자인 결정을, 같은 언어를 쓰는 동료와 나눌 수
              있습니다.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <Card
                key={f.title}
                className="border-border/80 bg-card/80 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-violet-600/10 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
                    <f.icon className="size-5" aria-hidden />
                  </div>
                  <CardTitle>{f.title}</CardTitle>
                  <CardDescription className="text-pretty leading-relaxed">
                    {f.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="community"
          className="border-t border-border/80 bg-muted/20 py-20 sm:py-28"
          aria-labelledby="community-heading"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="max-w-xl">
              <div className="mb-3 inline-flex items-center gap-2 text-violet-700 dark:text-violet-400">
                <Users className="size-5" aria-hidden />
                <span className="text-sm font-medium">함께 만드는 문화</span>
              </div>
              <h2
                id="community-heading"
                className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                코드 오브 컨덕트와 큐레이션으로
                <br className="hidden sm:block" />
                안전한 토론 환경을 유지해요
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                신고·중재 프로세스와 디자인 윤리 가이드를 바탕으로, 초보자도
                편하게 질문할 수 있는 공간을 지향합니다.
              </p>
            </div>
            <Card className="max-w-md border-border/80 bg-card shadow-md">
              <CardContent className="pt-6">
                <blockquote className="text-base leading-relaxed text-foreground">
                  “혼자 피그마만 보다가 여기서 처음으로 시니어에게 리뷰를
                  받았어요. 포트폴리오 방향이 한 번에 잡혔습니다.”
                </blockquote>
                <p className="mt-4 text-sm text-muted-foreground">
                  — 제품 디자이너, 김민지
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="events"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
          aria-labelledby="events-heading"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="events-heading"
                className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                다가오는 일정
              </h2>
              <p className="mt-2 text-muted-foreground">
                온·오프라인 세션을 통해 최신 트렌드와 실무 노하우를 만나요.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="#join">
                <Calendar className="size-4" aria-hidden />
                전체 캘린더
              </Link>
            </Button>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {events.map((ev) => (
              <li key={ev.title}>
                <Card className="h-full border-border/80 transition-colors hover:border-violet-500/30 hover:bg-muted/30">
                  <CardHeader>
                    <p className="text-xs font-medium uppercase tracking-wider text-violet-600 dark:text-violet-400">
                      {ev.date}
                    </p>
                    <CardTitle className="text-lg">{ev.title}</CardTitle>
                    <CardDescription>{ev.meta}</CardDescription>
                  </CardHeader>
                </Card>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="join"
          className="border-t border-border/80 bg-gradient-to-b from-violet-600/10 to-transparent py-20 dark:from-violet-500/10 sm:py-28"
          aria-labelledby="join-heading"
        >
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h2
              id="join-heading"
              className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              지금 바로 합류하세요
            </h2>
            <p className="mt-4 text-muted-foreground">
              이메일만 남기면 초대 링크와 온보딩 가이드를 보내 드려요. 스팸은
              보내지 않습니다.
            </p>
            <JoinForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Frame 공동체. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">
              이용약관
            </Link>
            <Link href="#" className="hover:text-foreground">
              개인정보처리방침
            </Link>
            <Link href="#" className="hover:text-foreground">
              문의
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
