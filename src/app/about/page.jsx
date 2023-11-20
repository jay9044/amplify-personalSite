import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Jamal Westfield. I live in London, where I dabble in the cloud.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          I’m Jamal Westfield. I live in London, where I dabble in the cloud
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            Following my graduation, I embarked on my professional career as a Junior Service Desk Analyst, delving into the operational intricacies of IT companies. This role not only strengthened my technical acumen but also honed my soft skills, laying the groundwork for effective cross-team collaborations.
            </p>
            <p>
            It was during my interactions with developers in this role that I realized my passion lay in coding. Eager to delve deeper into this field, I enrolled in a rigorous three-month intensive boot camp, where I delved into the creation of full-stack applications, leveraging tools such as React and Redux.
            </p>
            <p>
            The subsequent chapter in my journey led me to secure a pivotal position as a Frontend Developer within a fintech company, a role that exposed me to the profound complexities of coding and computing. Eager to broaden my expertise, I ventured into other programming languages, embracing Python and delving into the intricacies of backend architecture.            
            </p>
            <p>
            This pursuit of knowledge paved the way for my role as a Software Support Engineering professional, where I spearheaded the integration of APIs and extended technical support for mission-critical applications. Continually striving to enhance my grasp of the tech landscape, I ventured into the world of Linux and the art of DevOps, shadowing and collaborating closely with DevOps teams.            
            </p>
            <p>
            This progressive immersion ultimately culminated in my current role as an Associate DevOps Engineer within the same organization, where I leverage my multifaceted experiences to drive operational excellence and contribute to the seamless integration of cutting-edge technologies.            
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/jay9044" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/jamal-westfield-kirton-403285175/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:jamalwestfield@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              jamalwestfield@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
