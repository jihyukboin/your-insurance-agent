import { InsuranceWorkspace } from "./_components/insurance-workspace";

export default function InsuranceHomePage() {
  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden bg-white md:min-h-[592px]">
      <header className="flex min-h-[50px] w-full shrink-0 items-center bg-white px-4" aria-label="상담 헤더">
        <h1 className="m-0 text-lg leading-[1.4] font-bold text-[#1a1f29]">AI 보험 가입 도우미</h1>
      </header>
      <InsuranceWorkspace />
    </div>
  );
}
