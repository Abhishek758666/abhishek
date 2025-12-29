import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/subjects/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/subjects/"!</div>
}
