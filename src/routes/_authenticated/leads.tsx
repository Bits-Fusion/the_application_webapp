import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/leads')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/leads"!</div>
}
