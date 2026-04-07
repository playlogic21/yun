import { Button } from "@/components/ui/button"

const rows = [
  { variant: "default" as const,        label: "1단 · default",        desc: "주요 CTA (채움)",     text: "무료 가입하기" },
  { variant: "secondary" as const,      label: "2단 · secondary",      desc: "연한 블루 배경",       text: "학습 계속하기" },
  { variant: "soft" as const,           label: "2단 · soft",           desc: "primary / 12% 배경",  text: "전체 캘린더" },
  { variant: "outlinePrimary" as const, label: "3단 · outlinePrimary", desc: "테두리 프라이머리",    text: "프로그램 둘러보기" },
  { variant: "ghost" as const,          label: "4단 · ghost",          desc: "배경 최소",            text: "로그인" },
  { variant: "link" as const,           label: "4단 · link",           desc: "인라인",               text: "이용약관 보기" },
]

export default function ButtonHierarchy() {
  return (
    <div className="bg-[#fcfeff] border border-[#e0e8f2] flex flex-col gap-5 items-start overflow-clip pb-10 pt-9 px-10 rounded-2xl w-[720px]">
      <p className="font-semibold text-[#1f242e] text-xl leading-normal whitespace-nowrap">
        10대 교육 서비스 — 버튼 위계
      </p>
      <p className="text-[#59667a] text-xs leading-normal whitespace-nowrap">
        프라이머리: 파란색 토큰 · 코드: globals.css + components/ui/button.tsx
      </p>
      <div className="bg-[#e0e8f2] h-px w-full shrink-0" />
      {rows.map((row) => (
        <div key={row.variant} className="flex gap-6 items-start justify-center w-full">
          <div className="flex flex-col gap-1 items-start w-[220px] shrink-0">
            <p className="font-semibold text-[#1f242e] text-[13px] leading-normal whitespace-nowrap">
              {row.label}
            </p>
            <p className="text-[#59667a] text-[11px] leading-normal whitespace-nowrap">
              {row.desc}
            </p>
          </div>
          <Button variant={row.variant} size="default">
            {row.text}
          </Button>
        </div>
      ))}
    </div>
  )
}
