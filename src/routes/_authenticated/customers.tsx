import CustomersIndex from '@/components/customers'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/customers')({
  component: CustomersIndex,
})


