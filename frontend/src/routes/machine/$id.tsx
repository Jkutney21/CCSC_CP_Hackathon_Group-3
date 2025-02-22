import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/machine/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  return <div>Hello "/machine/{id}"!</div>
}
