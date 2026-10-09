"use client";

import { Group, Panel, Separator } from "react-resizable-panels";

export function InsuranceWorkspace() {
  return (
    <div className="flex min-h-0 min-w-0 flex-1 overflow-hidden bg-[#fafafd] px-2 pb-2 max-md:p-0">
      <Group orientation="vertical" className="h-full w-full min-h-0 min-w-0 flex-1 overflow-hidden">
        <Panel className="min-h-0 min-w-0 overflow-hidden">
          <Group orientation="horizontal" className="h-full w-full min-h-0 min-w-0 flex-1 overflow-hidden">
            <Panel
              id="insurance-sidebar-panel"
              defaultSize="240px"
              maxSize="420px"
              className="min-h-0 min-w-0 overflow-hidden max-md:hidden!"
            >
              <aside className="h-full w-full overflow-auto overscroll-contain rounded-[6px] border border-[#e4e5e6] bg-[#fafafd]" aria-label="상담 사이드 패널" />
            </Panel>
            <Separator className="relative w-2 shrink-0 cursor-col-resize before:absolute before:inset-y-0 before:left-1/2 before:w-px before:bg-transparent before:content-[''] hover:before:bg-[#3182f6] focus-visible:before:bg-[#3182f6] active:before:bg-[#3182f6] max-md:hidden!" />
            <Panel className="min-h-0 min-w-0 overflow-hidden">
              <main className="flex h-full w-full min-w-0 flex-col overflow-hidden overscroll-contain rounded-[6px] border border-[#e4e5e6] bg-white max-md:rounded-none max-md:border-0" aria-label="상담 메인 패널">
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-6 max-md:px-4 max-md:pt-5 max-md:pb-[max(20px,env(safe-area-inset-bottom))]" />
              </main>
            </Panel>
          </Group>
        </Panel>
        <Separator className="relative h-2 shrink-0 cursor-row-resize before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-transparent before:content-[''] hover:before:bg-[#3182f6] focus-visible:before:bg-[#3182f6] active:before:bg-[#3182f6] max-md:hidden!" />
        <Panel
          id="insurance-bottom-panel"
          defaultSize="200px"
          className="min-h-0 min-w-0 overflow-hidden max-md:hidden!"
        >
          <Group orientation="horizontal" className="h-full w-full min-h-0 min-w-0 flex-1 overflow-hidden">
            <Panel defaultSize="300px" maxSize="420px" className="min-h-0 min-w-0 overflow-hidden">
              <aside className="h-full w-full overflow-auto overscroll-contain rounded-[6px] border border-[#e4e5e6] bg-[#fafafd]" aria-label="상담 하단 사이드 패널" />
            </Panel>
            <Separator className="relative w-2 shrink-0 cursor-col-resize before:absolute before:inset-y-0 before:left-1/2 before:w-px before:bg-transparent before:content-[''] hover:before:bg-[#3182f6] focus-visible:before:bg-[#3182f6] active:before:bg-[#3182f6] max-md:hidden!" />
            <Panel className="min-h-0 min-w-0 overflow-hidden">
              <section className="flex h-full w-full min-w-0 flex-col overflow-hidden overscroll-contain rounded-[6px] border border-[#e4e5e6] bg-white max-md:rounded-none max-md:border-0" aria-label="상담 하단 메인 패널" />
            </Panel>
          </Group>
        </Panel>
      </Group>
    </div>
  );
}
