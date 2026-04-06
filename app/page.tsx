import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  GraduationCap,
  MessageCircle,
  Users,
  Video,
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
  { href: "#about", label: "서비스" },
  { href: "#programs", label: "이런 점이 좋아요" },
  { href: "#community", label: "커뮤니티" },
  { href: "#events", label: "일정" },
];

const features = [
  {
    icon: BookOpen,
    title: "과정·커리큘럼 한눈에",
    description:
      "우리 교육 서비스의 목표, 난이도, 학습 로드맵을 커뮤니티에서 미리 살펴보고, 수강 전 궁금한 점을 질문해 보세요.",
  },
  {
    icon: MessageCircle,
    title: "질문·토론·멘토링",
    description:
      "강사·운영진·수강생이 함께하는 Q&A와 스터디 모임으로 혼자 막히는 부분을 빠르게 풀어 갈 수 있어요.",
  },
  {
    icon: Video,
    title: "라이브 & 보충 자료",
    description:
      "정기 라이브 안내와 복습 자료, 과제 팁을 공유해 학습 리듬을 유지하고 동기를 이어 가요.",
  },
];

const stats = [
  { value: "8.4k+", label: "커뮤니티 멤버" },
  { value: "120+", label: "개설·연계 과정" },
  { value: "94%", label: "추천 의향 (내부 설문)" },
];

const events = [
  {
    date: "4월 10일",
    title: "2026 봄학기 오리엔테이션",
    meta: "온라인 · 60분",
  },
  {
    date: "4월 17일",
    title: "강사 라이브 Q&A — 커리큘럼 편",
    meta: "온라인 · 저녁",
  },
  {
    date: "4월 26일",
    title: "수강생 네트워킹 데이",
    meta: "서울 · 오후",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.92_0.1_252/0.4),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.35_0.12_252/0.45),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading text-base font-semibold tracking-tight sm:text-lg"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/12 text-primary">
              <GraduationCap className="size-4" aria-hidden />
            </span>
            학습허브
            <span className="text-muted-foreground font-normal">커뮤니티</span>
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
              교육 서비스 공식 커뮤니티
            </p>
            <h1
              id="hero-heading"
              className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              배움을 소개하고
              <br />
              <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent dark:from-sky-400 dark:to-cyan-300">
                함께 이어 가는 곳
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              학습허브는 우리 교육 과정을 알리고, 수강을 고민하는 분과 수강생이
              한데 모여 질문·후기·스터디를 나누는 공간입니다.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" className="h-11 min-w-[180px] px-6" asChild>
                <Link href="#join">
                  커뮤니티 둘러보기
                  <ArrowRight
                    className="size-4 transition-transform group-hover/button:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </Button>
              <Button
                variant="outlinePrimary"
                size="lg"
                className="h-11 min-w-[180px]"
                asChild
              >
                <Link href="#programs">서비스 소개 보기</Link>
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
              교육 서비스를 커뮤니티에서 만나면
            </h2>
            <p className="mt-4 text-muted-foreground">
              홍보만 하는 곳이 아니라, 실제 수강 경험과 학습 지원이 이어지는
              구조를 지향합니다.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <Card
                key={f.title}
                className="border-border/80 bg-card/80 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary">
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
              <div className="mb-3 inline-flex items-center gap-2 text-primary">
                <Users className="size-5" aria-hidden />
                <span className="text-sm font-medium">학습 중심 커뮤니티</span>
              </div>
              <h2
                id="community-heading"
                className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                예비 수강생부터 수료생까지
                <br className="hidden sm:block" />
                단계별로 연결돼요
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                수강 전 상담 질문, 진행 중 과제 토론, 수료 후 포트폴리오·취업
                정보까지 한 흐름으로 이어지도록 운영 가이드와 운영진 답변을
                제공합니다.
              </p>
            </div>
            <Card className="max-w-md border-border/80 bg-card shadow-md">
              <CardContent className="pt-6">
                <blockquote className="text-base leading-relaxed text-foreground">
                  “커뮤니티에서 커리큘럼 설명을 먼저 읽고 질문했더니, 수강
                  결정이 훨씬 수월했어요. 진행 중에도 같은 기수 분들과 스터디가
                  큰 힘이 됐습니다.”
                </blockquote>
                <p className="mt-4 text-sm text-muted-foreground">
                  — 프론트엔드 과정 수료생, 이준호
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
                교육 일정 & 모임
              </h2>
              <p className="mt-2 text-muted-foreground">
                오리엔테이션·라이브 Q&A·오프라인 모임으로 학습을 시작하고
                이어 가요.
              </p>
            </div>
            <Button variant="soft" asChild>
              <Link href="#join">
                <Calendar className="size-4" aria-hidden />
                일정 알림 받기
              </Link>
            </Button>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {events.map((ev) => (
              <li key={ev.title}>
                <Card className="h-full border-border/80 transition-colors hover:border-primary/35 hover:bg-muted/30">
                  <CardHeader>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
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
          className="border-t border-border/80 bg-gradient-to-b from-primary/12 to-transparent py-20 dark:from-primary/20 sm:py-28"
          aria-labelledby="join-heading"
        >
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h2
              id="join-heading"
              className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              교육 소식과 커뮤니티에 참여해 보세요
            </h2>
            <p className="mt-4 text-muted-foreground">
              이메일을 남기시면 과정 안내·일정·온보딩 가이드를 보내 드려요.
              원하지 않으시면 언제든 수신을 거부할 수 있습니다.
            </p>
            <JoinForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} 학습허브 커뮤니티. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">
              이용약관
            </Link>
            <Link href="#" className="hover:text-foreground">
              개인정보처리방침
            </Link>
            <Link href="#" className="hover:text-foreground">
              교육 문의
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
