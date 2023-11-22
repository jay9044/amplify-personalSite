import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const certs = [
  {
    name: 'Linux Foundation Certified System Administrator (LFCS)',
    link: { href: 'https://kodekloud.com/courses/linux-foundation-certified-system-administrator-lfcs/', label: 'https://kodekloud.com' }
  },
  {
    name: 'AWS Certified Developer - Associate',
    link: { href: 'https://learn.cantrill.io/p/aws-certified-developer-associate', label: 'learn.cantrill.io' }
  },
  {
    name: 'AWS Certified SysOps Administrator - Associate',
    link: { href: 'https://learn.cantrill.io/p/aws-certified-sysops-administrator-associate', label: 'learn.cantrill.io' }
  },
  {
    name: 'AWS Certified DevOps Engineer - Professional',
    link: { href: 'https://learn.cantrill.io/p/aws-certified-devops-engineer-professional', label: 'learn.cantrill.io' }
  }
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Certificates',
  description: 'Certificates details',
}

export default function Certs() {
  return (
    <SimpleLayout
      title="Certifications In Progress: In Chronological Order"
      intro=" I have come to recognize the immense value of both certifications and practical, hands-on experience. While certifications serve as concrete validations of specialized knowledge and skills, hands-on experience offers a dynamic understanding of real-world challenges and practical application."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certs.map((cert) => (
          <Card as="li" key={cert.name}>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={cert.link.href}>{cert.name}</Card.Link>
            </h2>
            <Card.Description>{cert.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{cert.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
